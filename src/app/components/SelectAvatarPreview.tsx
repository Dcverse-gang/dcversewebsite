// import React, { useState } from 'react';
// import { Avatar } from "@/app/profile/page";

// interface SelectedAvatarPreviewProps {
//   avatar: Avatar;
// }

// const SelectedAvatarPreview: React.FC<SelectedAvatarPreviewProps> = ({ avatar }) => {
//   const [voiceStyle, setVoiceStyle] = useState('Professional');
//   const [outfit, setOutfit] = useState('Cyberpunk');

//   return (
//     <div className="panel-gradient bg-blackrounded-xl p-6 retro-border scanlines">
//       <h2 className="text-xl font-bold font-mono text-neonPink mb-6 flex items-center">
//         <i className="fas fa-star mr-3"></i> YOUR SELECTION
//       </h2>
      
//       <div className="flex flex-col md:flex-row gap-6">
//         <div className="md:w-1/3">
//           <div className="relative group">
//             <img src={avatar.imageUrl} alt={avatar.name} className="w-full h-64 object-cover rounded-lg border-2 border-neonPink" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 rounded-lg"></div>
//             <div className="absolute bottom-0 left-0 p-4">
//               <h3 className="text-2xl font-bold text-white">{avatar.name}</h3>
//               <p className="text-cyberBlue">{avatar.role}</p>
//             </div>
//             <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-matrixGreen flex items-center justify-center animate-pulse-slow">
//               <i className="fas fa-check text-white"></i>
//             </div>
//           </div>
          
//           <div className="mt-4 grid grid-cols-3 gap-2">
//             <div className="bg-panelBg rounded p-2 text-center">
//               <p className="text-xs text-cyberBlue">Voice</p>
//               <p className="font-bold text-sm">#{avatar.voice || '12'}</p>
//             </div>
//             <div className="bg-panelBg rounded p-2 text-center">
//               <p className="text-xs text-cyberBlue">Style</p>
//               <p className="font-bold text-sm">{avatar.style || 'Futuristic'}</p>
//             </div>
//             <div className="bg-panelBg rounded p-2 text-center">
//               <p className="text-xs text-cyberBlue">Language</p>
//               <p className="font-bold text-sm">{avatar.languages || 'EN, ES, JP'}</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="md:w-2/3">
//           <div className="mb-6">
//             <h3 className="text-lg font-bold mb-2 flex items-center">
//               <i className="fas fa-info-circle text-cyberBlue mr-2"></i> Avatar Details
//             </h3>
//             <p className="text-sm opacity-80">
//               {avatar.description || 'No description available.'}
//             </p>
//           </div>
          
//           <div className="mb-6">
//             <h3 className="text-lg font-bold mb-2 flex items-center">
//               <i className="fas fa-sliders-h text-cyberBlue mr-2"></i> Customization Options
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm mb-1">Voice Style</label>
//                 <select 
//                   className="w-full bg-[#1d1d1d] border border-cyberBlue text-white px-3 py-2 rounded text-sm"
//                   value={voiceStyle}
//                   onChange={(e) => setVoiceStyle(e.target.value)}
//                 >
//                   <option>Professional</option>
//                   <option>Casual</option>
//                   <option>Enthusiastic</option>
//                   <option>Authoritative</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm mb-1">Outfit</label>
//                 <select 
//                   className="w-full bg-[#1d1d1d] border border-cyberBlue text-white px-3 py-2 rounded text-sm"
//                   value={outfit}
//                   onChange={(e) => setOutfit(e.target.value)}
//                 >
//                   <option>Cyberpunk</option>
//                   <option>Business</option>
//                   <option>Casual</option>
//                   <option>Futuristic</option>
//                 </select>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex justify-between items-center">
//             <button className="retro-btn px-6 py-2 bg-darkBg text-cyberBlue rounded-md font-bold border border-cyberBlue hover:bg-cyberBlue hover:text-white transition-all">
//               <i className="fas fa-random mr-2"></i> Randomize
//             </button>
//             <button className="retro-btn px-6 py-2 bg-neonPink text-white rounded-md font-bold border-b-2 border-cyberBlue hover:bg-opacity-90 flex items-center">
//               <i className="fas fa-arrow-right mr-2"></i> Proceed to Script
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SelectedAvatarPreview;