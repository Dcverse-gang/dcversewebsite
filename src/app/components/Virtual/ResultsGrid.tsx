import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faStar, faDownload } from '@fortawesome/free-solid-svg-icons';

export default function ResultsGrid({ handleRatingClick }: { handleRatingClick: (stars: number) => void }) {
  return (
    <div className="bg-[#1d1d1d] p-4 md:p-6 rounded-xl border border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-0">Your Virtual Try-On Results</h2>
        <div className="text-xs md:text-sm text-gray-400">
          <span className="font-medium">Generations left today:</span> 12/20
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Sample generated image card */}
        <div className="bg-gray-700 rounded-lg overflow-hidden border border-gray-600 hover:border-gray-400 transition duration-300">
          <div className="aspect-square bg-[#1d1d1d] flex items-center justify-center">
            <span className="text-gray-400 text-sm md:text-base">Virtual Try-On Result</span>
          </div>
          <div className="p-3 md:p-4">
            <div className="flex justify-between items-center mb-2 md:mb-3">
              <span className="text-xs md:text-sm font-medium text-gray-300">Summer Floral Dress</span>
              <div className="flex space-x-1 md:space-x-2">
                <button 
                  className="text-white hover:text-yellow-500 text-sm md:text-base"
                  onClick={() => handleRatingClick(5)}
                >
                  <FontAwesomeIcon icon={faStar} />
                </button>
                <button className="text-white hover:text-purple-500 text-sm md:text-base">
                  <FontAwesomeIcon icon={faDownload} />
                </button>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              <p>Generated 5 minutes ago</p>
            </div>
          </div>
        </div>

        {/* Empty state for new generations */}
        <div className="bg-gray-700 rounded-lg flex items-center justify-center aspect-square border border-gray-600">
          <div className="text-center p-4 md:p-6">
            <FontAwesomeIcon icon={faTshirt} className="text-2xl md:text-4xl text-white mb-2 md:mb-3" />
            <p className="text-white text-sm md:text-base">Your generated outfits will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}