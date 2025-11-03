import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface FeedbackModalProps {
  show: boolean;
  onClose: () => void;
  initialRating: number;
  feedback: string;
  setFeedback: (value: string) => void;
}

 const FeedbackModal = ({ 
  show, 
  onClose, 
  initialRating, 
  feedback, 
  setFeedback 
}: FeedbackModalProps) => {
  const [rating, setRating] = useState(initialRating);

  if (!show) return null;

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4 text-center">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="inline-block align-bottom bg-[#1d1d1d] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full border border-gray-700">
          <div className="bg-[#1d1d1d] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 className="text-lg leading-6 font-medium text-white mb-3 md:mb-4">Rate Your Experience</h3>
            <div className="star-rating flex justify-center mb-4 md:mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <button 
                  key={star}
                  onClick={() => setRating(star)}
                  className="text-xl md:text-2xl mx-1 focus:outline-none"
                >
                  <FontAwesomeIcon 
                    icon={star <= rating ? faStar : faStarHalfAlt} 
                    className={star <= rating ? "text-yellow-400" : "text-gray-400"}
                  />
                </button>
              ))}
            </div>
            <div>
              <label htmlFor="feedback-text" className="block text-sm font-medium text-gray-300">Additional Feedback</label>
              <textarea 
                id="feedback-text" 
                name="feedback-text" 
                rows={3} 
                className="mt-1 block w-full bg-[#1d1d1d] border-gray-600 text-white rounded-md focus:ring-purple-500 focus:border-purple-500 p-2 text-sm"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="bg-[#1d1d1d] px-4 py-3 sm:px-6 flex flex-col-reverse sm:flex-row-reverse gap-2">
            <button 
              type="button" 
              className="w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-500 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              onClick={onClose}
            >
              Submit Feedback
            </button>
            <button 
              type="button" 
              className="w-full sm:w-auto inline-flex justify-center rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-[#1d1d1d] text-sm font-medium text-white hover:bg-[#1d1d1d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;