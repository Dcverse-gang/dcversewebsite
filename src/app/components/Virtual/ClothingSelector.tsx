import { FaTshirt, FaMagic } from 'react-icons/fa';

export const ClothingSelector = () => {
  const templates = [
    { name: "Summer", icon: <FaTshirt className="text-yellow-400 text-sm" /> },
    { name: "Work", icon: <FaTshirt className="text-blue-400 text-sm" /> },
    { name: "Party", icon: <FaTshirt className="text-pink-400 text-sm" /> },
    { name: "Gym", icon: <FaTshirt className="text-green-400 text-sm" /> }
  ];

  return (
    <div className="bg-[#1d1d1d] p-3 md:p-4 rounded-xl border border-gray-700">
      <h3 className="text-md font-bold mb-2 md:mb-3">Select Clothing</h3>
      
      <div className="mb-3 md:mb-4">
        <div className="flex items-center justify-between mb-1 md:mb-2">
          <h4 className="text-xs font-medium text-gray-300">Templates</h4>
          <button className="text-xs text-purple-400 hover:text-purple-300 flex items-center">
            <FaMagic className="mr-1 text-xs" /> AI Suggest
          </button>
        </div>
        <div className="grid grid-cols-2 gap-1 md:gap-2">
          {templates.map((template, index) => (
            <button
              key={index}
              className="flex items-center space-x-1 p-1.5 md:p-2 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 transition-colors text-xs"
            >
              <span>{template.icon}</span>
              <span className="text-white truncate">{template.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2 md:space-y-3">
        {['Category', 'Style', 'Color', 'Size', 'Brand'].map((type) => (
          <div key={type}>
            <label htmlFor={`clothing-${type.toLowerCase()}`} className="block text-xs font-medium text-gray-300 mb-0.5 md:mb-1">
              {type}
            </label>
            <select 
              id={`clothing-${type.toLowerCase()}`}
              name={`clothing-${type.toLowerCase()}`}
              className="w-full bg-gray-700 border-gray-600 text-white rounded focus:ring-orange-500 focus:border-orange-500 p-1.5 md:p-1.5 text-xs md:text-sm"
            >
              {type === 'Category' && ['Top', 'Bottom', 'Dress', 'Outerwear', 'Accessories'].map(opt => (
                <option key={opt}>{opt}</option>
              ))}
              {type === 'Style' && ['Casual', 'Formal', 'Sporty', 'Vintage', 'Bohemian'].map(opt => (
                <option key={opt}>{opt}</option>
              ))}
              {type === 'Color' && ['Any', 'Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 'Patterned'].map(opt => (
                <option key={opt}>{opt}</option>
              ))}
              {type === 'Size' && ['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(opt => (
                <option key={opt}>{opt}</option>
              ))}
              {type === 'Brand' && ['Any', 'Nike', 'Adidas', 'Zara', 'H&M', 'Gucci', 'Prada'].map(opt => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothingSelector;