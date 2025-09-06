'use client';
import { useEffect, useState } from "react";
import { FiUploadCloud, FiThumbsUp, FiThumbsDown, FiDownload, FiStar, FiCopy, FiExternalLink } from "react-icons/fi";

type JobStatus = 'queued' | 'processing' | 'completed' | 'failed';

interface TryOnJob {
  job_id: string;
  status: JobStatus;
  output_url?: string;
  final_url?: string;
}

export default function TryOnPanel() {
  const [prompt, setPrompt] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [maskType, setMaskType] = useState("select");

  const [modelList, setModelList] = useState<{ url: string; id: string }[]>([]);
  const [garmentList, setGarmentList] = useState<{ url: string; id: string }[]>([]);
  const [selectedModelUrl, setSelectedModelUrl] = useState<string | null>(null);
  const [selectedGarmentUrl, setSelectedGarmentUrl] = useState<string | null>(null);
  const [jobs, setJobs] = useState<TryOnJob[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const [modelRes, garmentRes] = await Promise.all([
          fetch("https://api.dcverse.in/models"),
          fetch("https://api.dcverse.in/garments"),
        ]);

        const [modelData, garmentData] = await Promise.all([
          modelRes.json(),
          garmentRes.json(),
        ]);

        setModelList(
          modelData.map((url: string, index: number) => ({ url, id: `model-${index}` }))
        );
        setGarmentList(
          garmentData.map((url: string, index: number) => ({ url, id: `garment-${index}` }))
        );
      } catch (err) {
        console.error("Error loading images:", err);
      }
    };
    fetchImages();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setSelectedGarmentUrl(null);
    }
  };

  const copyUrlToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
      alert('Failed to copy URL to clipboard');
    }
  };

  const handleGenerate = async () => {
    if (!selectedModelUrl || (!selectedGarmentUrl && !uploadedFile)) {
      alert("Please select both a model and a garment");
      return;
    }

    if (maskType === "select") {
      alert("Please select a mask type");
      return;
    }

    setIsLoading(true);
console.log(process.env.NEXT_PUBLIC_API_BASE);

    try {
      const formData = new FormData();
      formData.append("model_image_url", selectedModelUrl);
      if (selectedGarmentUrl) formData.append("garment_image_url", selectedGarmentUrl);
      if (uploadedFile) formData.append("garment_file", uploadedFile);
      if (prompt) formData.append("prompt", prompt);
      formData.append("mask_type", maskType);

      const response = await fetch("https://api.dcverse.in/test-generate-tryon", {
        method: "POST",
        body: formData,
      });

      const rawText = await response.text();
      console.log("Raw backend response:", rawText);

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = JSON.parse(rawText);

      if (data.job_id) {
        const job: TryOnJob = {
          job_id: data.job_id,
          status: data.status || "queued",
          output_url: data.output_url,
          final_url: data.final_url,
        };
        setJobs((prev) => [job, ...prev]);

        if (!job.output_url && !job.final_url) {
          pollJobStatus(job.job_id);
        } else {
          setIsLoading(false);
        }
      } else if (data.output_url || data.final_url) {
        const job: TryOnJob = {
          job_id: `instant-${Date.now()}`,
          status: "completed",
          output_url: data.output_url,
          final_url: data.final_url,
        };
        setJobs((prev) => [job, ...prev]);
        setIsLoading(false);
      } else {
        throw new Error("Unexpected backend response format");
      }
    } catch (err) {
      console.error("Generation failed:", err);
      setIsLoading(false);
      alert("Generation failed. Please try again.");
    }
  };

  const pollJobStatus = async (jobId: string) => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch(`https://api.dcverse.in/status/${jobId}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const job = await response.json();
        console.log("Polling response:", job);

        if (job.status === "completed") {
          clearInterval(interval);
          setIsLoading(false);
          setJobs((prev) =>
            prev.map((j) => (j.job_id === jobId ? { 
              ...j, 
              status: job.status,
              output_url: job.output_url,
              final_url: job.final_url
            } : j))
          );
        } else if (job.status === "failed") {
          clearInterval(interval);
          setIsLoading(false);
          setJobs((prev) =>
            prev.map((j) => (j.job_id === jobId ? { ...j, status: "failed" } : j))
          );
        }
      } catch (err) {
        console.error("Status check failed:", err);
        clearInterval(interval);
        setIsLoading(false);
        setJobs((prev) =>
          prev.map((j) => (j.job_id === jobId ? { ...j, status: "failed" } : j))
        );
      }
    }, 2000);
  };

  // Helper function to get the best available image URL
  const getImageUrl = (job: TryOnJob) => {
    return job.final_url || job.output_url;
  };

  // Helper function to try different ways to display the image
  const tryDisplayImage = async (url: string) => {
    try {
      // First, try to fetch the image to check if it's accessible
      const response = await fetch(url, { mode: 'no-cors' });
      return url;
    } catch (error) {
      console.log('Direct fetch failed, trying proxy methods');
      // If direct fetch fails, we'll still return the URL but handle the error in the img tag
      return url;
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#1d1d1d]">
      <div className="flex justify-between items-center p-4 border-b border-white">
        <h1 className="font-mono text-white text-base">AI Virtual Try-On</h1>
      </div>

      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        <div className="relative w-full md:w-[20%] bg-[#1d1d1d] p-4 border-b md:border-r border-white font-mono flex flex-col overflow-y-auto">
          <p className="text-xs text-white mb-2">Virtual Model</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {modelList.map((model) => (
              <img
                key={model.id}
                src={model.url}
                alt={`Model ${model.id}`}
                className={`w-full aspect-square rounded-md cursor-pointer border-2 object-cover ${
                  selectedModelUrl === model.url ? "border-green-500" : "border-transparent"
                }`}
                onClick={() => setSelectedModelUrl(model.url)}
              />
            ))}
          </div>

          <p className="text-xs text-white mb-2">Available Garments</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {garmentList.map((garment) => (
              <img
                key={garment.id}
                src={garment.url}
                alt={`Garment ${garment.id}`}
                className={`w-full aspect-square rounded-md cursor-pointer border-2 object-cover ${
                  selectedGarmentUrl === garment.url ? "border-green-500" : "border-transparent"
                }`}
                onClick={() => {
                  setSelectedGarmentUrl(garment.url);
                  setUploadedFile(null);
                  setPreviewUrl(null);
                }}
              />
            ))}
          </div>

          <div
            className="border-2 border-dashed border-white rounded-lg py-12 w-full flex justify-center items-center cursor-pointer text-white text-xs relative overflow-hidden mb-4"
            onClick={() => document.getElementById("garment-upload")?.click()}
          >
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Uploaded Garment"
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center gap-3">
                <FiUploadCloud size={18} />
                <span>Click to Upload</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              id="garment-upload"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <div className="mb-4">
            <p className="text-xs text-white mb-2">Mask Type</p>
            <select
              value={maskType}
              onChange={(e) => setMaskType(e.target.value)}
              className="w-full bg-[#1d1d1d] border border-white text-xs rounded-sm p-2 text-white"
            >
              <option value="select">Select Mask Type</option>
              <option value="upper">Upper</option>
              <option value="bottom">Bottom</option>
              <option value="dress">Dress</option>
            </select>
          </div>

          <p className="text-xs text-white mb-2">Prompt (Optional)</p>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your scene"
            className="w-full bg-[#1d1d1d] border border-white text-xs rounded-sm p-2 text-white placeholder-gray-400 mb-4"
          />

          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className={`mt-4 w-full font-bold text-green-500 border border-white bg-white py-2 text-xs rounded ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Generating..." : "Generate"}
          </button>
        </div>

        <div className="flex-1 p-4 md:p-8 space-y-4 overflow-y-auto">
          {jobs.length === 0 ? (
            <p className="text-white text-sm text-center opacity-60 mt-32">
              Generated outfits will appear here
            </p>
          ) : (
            jobs.map((job) => {
              const imageUrl = getImageUrl(job);
              
              return (
                <div key={job.job_id} className="mb-6">
                  <p className="text-white text-sm mb-2">AI Outfit {job.job_id}</p>
                  
                  {/* URL Display Section */}
                  {job.status === "completed" && imageUrl && (
                    <div className="bg-gray-800 rounded p-3 mb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-300 mb-1">Generated Image URL:</p>
                          <p className="text-xs text-green-400 font-mono truncate pr-2">
                            {imageUrl}
                          </p>
                        </div>
                        <div className="flex gap-2 ml-2">
                          <button
                            onClick={() => copyUrlToClipboard(imageUrl)}
                            className="text-white hover:text-green-400 transition-colors"
                            title="Copy URL"
                          >
                            <FiCopy size={14} />
                          </button>
                          <a
                            href={imageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors"
                            title="Open in new tab"
                          >
                            <FiExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                      {copiedUrl === imageUrl && (
                        <p className="text-xs text-green-400 mt-1">✓ URL copied to clipboard!</p>
                      )}
                    </div>
                  )}

                  <div className="bg-white rounded p-4 relative overflow-hidden h-96">
                    <div className="absolute top-4 right-4 flex gap-4 z-10">
                      <button onClick={() => alert("👍")} className="text-black hover:text-gray-600">
                        <FiThumbsUp size={16} />
                      </button>
                      <button onClick={() => alert("👎")} className="text-black hover:text-gray-600">
                        <FiThumbsDown size={16} />
                      </button>
                      {job.status === "completed" && imageUrl && (
                        <a
                          href={imageUrl}
                          download={`outfit-${job.job_id}.jpg`}
                          className="text-black hover:text-gray-600"
                          title="Download image"
                        >
                          <FiDownload size={16} />
                        </a>
                      )}
                      <button className="text-black hover:text-gray-600">
                        <FiStar size={16} />
                      </button>
                    </div>
                    
                    {job.status === "completed" && imageUrl ? (
                      <div className="w-full h-full flex items-center justify-center relative">
                        <img
                          src={imageUrl}
                          alt={`Generated Outfit ${job.job_id}`}
                          className="max-w-full max-h-full object-contain rounded"
                          onLoad={(e) => {
                            console.log('Image loaded successfully:', imageUrl);
                            const target = e.currentTarget as HTMLImageElement;
                            const errorDiv = target.parentElement?.querySelector('.error-display') as HTMLElement;
                            if (errorDiv) errorDiv.style.display = 'none';
                          }}
                          onError={(e) => {
                            console.error('Image failed to load:', imageUrl);
                            console.error('Error details:', e);
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = 'none';
                            
                            // Try to show via iframe as fallback
                            const iframe = target.parentElement?.querySelector('.iframe-fallback') as HTMLElement;
                            const errorDiv = target.parentElement?.querySelector('.error-display') as HTMLElement;
                            
                            if (iframe && imageUrl.includes('amazonaws.com')) {
                              iframe.style.display = 'block';
                              setTimeout(() => {
                                // If iframe also fails, show error after 3 seconds
                                if (iframe.style.display === 'block') {
                                  iframe.style.display = 'none';
                                  if (errorDiv) errorDiv.style.display = 'flex';
                                }
                              }, 3000);
                            } else {
                              if (errorDiv) errorDiv.style.display = 'flex';
                            }
                          }}
                          referrerPolicy="no-referrer"
                        />
                        
                        {/* Iframe fallback for AWS images */}
                        <iframe
                          src={imageUrl}
                          className="iframe-fallback w-full h-full border-0 rounded hidden"
                          title={`Generated Outfit ${job.job_id}`}
                          sandbox="allow-same-origin"
                        />
                        
                        <div className="error-display hidden absolute inset-0 bg-white flex items-center justify-center text-gray-400">
                          <div className="text-center p-4">
                            <p className="text-red-500 mb-3 text-lg">🖼️ Image Loading Issue</p>
                            <p className="text-sm text-gray-700 mb-3 max-w-md">
                              The image couldn't be displayed directly due to security restrictions.
                            </p>
                            <div className="bg-gray-100 p-2 rounded mb-3 max-w-md overflow-hidden">
                              <p className="text-xs text-gray-600 font-mono break-all">
                                {imageUrl}
                              </p>
                            </div>
                            <div className="space-y-2">
                              <div className="space-x-2">
                                <button 
                                  onClick={() => window.open(imageUrl, '_blank')}
                                  className="px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
                                >
                                  📖 View Image
                                </button>
                                <button 
                                  onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = imageUrl;
                                    link.download = `outfit-${job.job_id}.jpg`;
                                    link.click();
                                  }}
                                  className="px-4 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors"
                                >
                                  💾 Download
                                </button>
                              </div>
                              <button 
                                onClick={() => {
                                  // Try to reload the image
                                  const img = document.querySelector(`img[alt="Generated Outfit ${job.job_id}"]`) as HTMLImageElement;
                                  if (img) {
                                    img.style.display = 'block';
                                    img.src = img.src + '?t=' + Date.now();
                                    const errorDiv = document.querySelector('.error-display') as HTMLElement;
                                    if (errorDiv) errorDiv.style.display = 'none';
                                  }
                                }}
                                className="px-3 py-1 bg-gray-500 text-white text-xs rounded hover:bg-gray-600 transition-colors"
                              >
                                🔄 Retry
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <div className="text-center">
                          {job.status === "queued" && (
                            <>
                              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400 mx-auto mb-2"></div>
                              <p>Job in queue...</p>
                            </>
                          )}
                          {job.status === "processing" && (
                            <>
                              <div className="animate-pulse rounded-full h-8 w-8 bg-blue-400 mx-auto mb-2"></div>
                              <p>Processing...</p>
                            </>
                          )}
                          {job.status === "failed" && (
                            <>
                              <div className="rounded-full h-8 w-8 bg-red-400 mx-auto mb-2"></div>
                              <p>Generation failed</p>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
