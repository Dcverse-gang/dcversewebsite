'use client';
import { faCloudUploadAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent } from 'react';

interface UploadAreaProps {
  selectedFile: File | null;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

 const UploadArea = ({ selectedFile, handleFileChange }: UploadAreaProps) => {
  return (
    <div className="bg-[#1d1d1d] p-4 md:p-6 rounded-xl border border-gray-700">
      <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Upload Your Garment</h3>
      <div className="border-2 border-dashed border-white rounded-lg p-4 md:p-8 bg-gray-700 text-center cursor-pointer hover:border-gray-400 transition duration-300">
        {selectedFile ? (
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faFileAlt} className="text-purple-500 text-2xl md:text-4xl mb-2 md:mb-3" />
            <p className="text-gray-300 text-sm md:text-base mb-1 md:mb-2 truncate w-full">{selectedFile.name}</p>
            <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
              {(selectedFile.size / 1024).toFixed(2)} KB
            </p>
          </div>
        ) : (
          <>
            <FontAwesomeIcon icon={faCloudUploadAlt} className="text-purple-500 text-2xl md:text-4xl mb-2 md:mb-3" />
            <p className="text-gray-300 text-sm md:text-base mb-1 md:mb-2">Drag & drop your photo here</p>
            <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">or</p>
          </>
        )}
        <label htmlFor="file-upload" className="bg-orange-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium hover:bg-orange-600 transition duration-300 cursor-pointer inline-block">
          {selectedFile ? 'Change File' : 'Browse Files'}
        </label>
        <input 
          id="file-upload" 
          name="file-upload" 
          type="file" 
          className="sr-only" 
          onChange={handleFileChange}
        />
      </div>
      <div className="mt-3 md:mt-4 text-xs md:text-sm text-gray-400">
        <p>For best results:</p>
        <ul className="list-disc pl-4 md:pl-5 mt-1 md:mt-2 space-y-0.5 md:space-y-1">
          <li>Use a clear, well-lit photo</li>
          <li>Wear form-fitting clothes</li>
          <li>Front-facing pose works best</li>
        </ul>
      </div>
    </div>
  );
};
export default UploadArea;