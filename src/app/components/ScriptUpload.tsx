import React, { useCallback } from 'react';

interface ScriptUploadProps {
  scriptFile: File | null;
  scriptText: string;
  onFileUpload: (file: File) => void;
  onScriptTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ScriptUpload: React.FC<ScriptUploadProps> = ({
  scriptFile,
  scriptText,
  onFileUpload,
  onScriptTextChange,
}) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileUpload(e.target.files[0]);
    }
  };

  return (
    <div className="bg-black rounded-xl p-6 border border-white mb-6">
      <h2 className="text-xl font-bold font-mono text-matrixGreen mb-6 flex items-center">
        <i className="fas fa-scroll mr-3"></i> UPLOAD YOUR SCRIPT
      </h2>
      
      <div 
        className="border-2 border-dashed border-cyberBlue rounded-lg p-8 text-center cursor-pointer"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload')?.click()}
      >
        {scriptFile ? (
          <div className="flex flex-col items-center">
            <i className="fas fa-file-alt text-5xl text-cyberBlue mb-4"></i>
            <p className="text-lg font-bold mb-2">{scriptFile.name}</p>
            <p className="text-sm opacity-70 mb-4">
              {(scriptFile.size / 1024).toFixed(2)} KB - {scriptFile.type || 'Unknown type'}
            </p>
          </div>
        ) : (
          <>
            <i className="fas fa-file-upload text-5xl text-cyberBlue mb-4"></i>
            <p className="text-lg font-bold mb-2">Drag & Drop your script file here</p>
            <p className="text-sm opacity-70 mb-4">Supported formats: .txt, .pdf, .docx (Max 5MB)</p>
          </>
        )}
        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept=".txt,.pdf,.docx"
          onChange={handleFileInputChange}
        />
        <button className="retro-btn px-6 py-2 bg-cyberBlue text-white rounded-md font-bold hover:bg-opacity-90">
          <i className="fas fa-folder-open mr-2"></i> 
          {scriptFile ? 'Change File' : 'Browse Files'}
        </button>
      </div>
      
      <div className="mt-6">
        <label className="block text-sm font-bold mb-2">Or paste your script directly:</label>
        <textarea 
          className="w-full bg-black border border-white text-white px-4 py-3 rounded h-40 focus:outline-none focus:ring-2 focus:ring-neonPink font-mono text-sm"
          placeholder="Enter your script text here..."
          value={scriptText}
          onChange={onScriptTextChange}
        ></textarea>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button 
          className="retro-btn px-6 py-2 bg-neonPink text-white rounded-md font-bold border-b-2 border-cyberBlue hover:bg-opacity-90"
          disabled={!scriptFile && !scriptText}
        >
          <i className="fas fa-magic mr-2"></i> Generate Storyboard
        </button>
      </div>
    </div>
  );
};

export default ScriptUpload;