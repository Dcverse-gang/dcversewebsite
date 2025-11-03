import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';

export default function AdvancedOptions({ handleGenerateClick }: { handleGenerateClick: () => void }) {
  return (
    <div className="bg-[#1d1d1d] p-4 md:p-6 rounded-xl border border-gray-700">
      <h3 className="text-lg font-bold mb-3 md:mb-4">Advanced Options</h3>
      <div className="space-y-3 md:space-y-4">
        <div>
          <label htmlFor="seed" className="block text-sm font-medium text-gray-300 mb-1">Seed</label>
          <input 
            type="number" 
            id="seed" 
            name="seed" 
            className="w-full bg-gray-700 border-gray-600 text-white rounded-md focus:ring-purple-500 focus:border-purple-500 p-2 md:p-2.5 text-sm"
          />
        </div>
        <div>
          <label htmlFor="pose" className="block text-sm font-medium text-gray-300 mb-1">Pose</label>
          <select 
            id="pose" 
            name="pose" 
            className="w-full bg-gray-700 border-gray-600 text-white rounded-md focus:ring-purple-500 focus:border-purple-500 p-2 md:p-2.5 text-sm"
          >
            <option>Keep original</option>
            <option>Standing front</option>
            <option>Standing side</option>
            <option>Sitting</option>
            <option>Walking</option>
          </select>
        </div>
      </div>
      <button 
        onClick={handleGenerateClick}
        className="mt-4 md:mt-6 w-full bg-orange-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faMagic} className="mr-2" /> Generate (50 credits)
      </button>
    </div>
  );
}