// import React from 'react';
// import { Avatar } from "@/app/profile/page";

// interface AvatarSelectionProps {
//   selectedAvatar: Avatar | null;
//   onSelectAvatar: (avatar: Avatar) => void;
// }

// const avatars: Avatar[] = [
//   {
//     id: '1',
//     name: 'Salman Khan',
//     role: 'Bollywood Superstar',
//     imageUrl: 'https://placehold.co/400x500/12122a/00f0ff?text=Salman+Khan',
//     popularity: 94,
//     rating: 4.8,
//     price: 950000,
//   },
//   {
//     id: '2',
//     name: 'Meryl Streep',
//     role: 'Drama Actress',
//     imageUrl: 'https://placehold.co/400x500/12122a/ff6ec7?text=Meryl+Streep',
//     popularity: 88,
//     rating: 4.6,
//     price: 1200000,
//   },
//   {
//     id: '3',
//     name: 'Ryan Reynolds',
//     role: 'Comedy Actor',
//     imageUrl: 'https://placehold.co/400x500/12122a/9d00ff?text=Ryan+Reynolds',
//     popularity: 91,
//     rating: 4.7,
//   },
//   {
//     id: '4',
//     name: 'Charlize Theron',
//     role: 'Action Actress',
//     imageUrl: 'https://placehold.co/400x500/12122a/00ff41?text=Charlize+Theron',
//     popularity: 96,
//     rating: 4.9,
//   },
// ];

// const AvatarSelection: React.FC<AvatarSelectionProps> = ({ selectedAvatar, onSelectAvatar }) => {
//   return (
//     <div className="panel-gradient rounded-xl p-6 retro-border scanlines">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold font-mono text-neonPink flex items-center">
//           <i className="fas fa-user-astronaut mr-3"></i> SELECT YOUR ACTOR
//         </h2>
//         <div className="relative">
//           <select className="bg-darkBg border border-cyberBlue text-white px-4 py-2 pr-8 rounded focus:outline-none focus:ring-2 focus:ring-neonPink">
//             <option>All Categories</option>
//             <option>Tech Gurus</option>
//             <option>Fashion Icons</option>
//             <option>Lifestyle Coaches</option>
//             <option>Gaming Personalities</option>
//           </select>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//             <i className="fas fa-chevron-down text-cyberBlue"></i>
//           </div>
//         </div>
//       </div>
      
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {avatars.map((avatar) => (
//           <div 
//             key={avatar.id}
//             className="avatar-card bg-panelBg rounded-lg overflow-hidden border border-cyberBlue border-opacity-30 transition-all duration-300 cursor-pointer group"
//             onClick={() => onSelectAvatar(avatar)}
//           >
//             <div className="relative">
//               <img src={avatar.imageUrl} alt={avatar.name} className="w-full h-48 object-cover" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
//               <div className="absolute bottom-0 left-0 p-3">
//                 <h3 className="font-bold text-lg group-hover:text-neonPink transition-colors">{avatar.name}</h3>
//                 <p className="text-xs text-cyberBlue">{avatar.role}</p>
//               </div>
//               {selectedAvatar?.id === avatar.id && (
//                 <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-matrixGreen flex items-center justify-center">
//                   <i className="fas fa-check text-white text-sm"></i>
//                 </div>
//               )}
//             </div>
//             <div className="p-3">
//               <div className="flex justify-between items-center text-xs mb-2">
//                 <span className="text-cyberBlue">Popularity: {avatar.popularity}%</span>
//                 <span className="text-neonPink">{avatar.rating}★</span>
//               </div>
//               <div className="h-1 w-full bg-gray-700 rounded-full mb-2">
//                 <div 
//                   className="h-1 rounded-full progress-bar" 
//                   style={{ width: `${avatar.popularity}%` }}
//                 ></div>
//               </div>
//               <div className="flex space-x-2 mt-2">
//                 <button className="retro-btn flex-1 py-2 bg-cyberBlue bg-opacity-20 text-cyberBlue rounded text-sm font-bold hover:bg-opacity-40 transition-all">
//                   SELECT ACTOR
//                 </button>
//                 {avatar.price && (
//                   <button className="retro-btn px-3 py-2 bg-neonPink bg-opacity-20 text-neonPink rounded text-sm font-bold hover:bg-opacity-40 transition-all">
//                     {avatar.price.toLocaleString()} <i className="fas fa-coins ml-1"></i>
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <div className="mt-6 flex justify-center">
//         <button className="retro-btn px-6 py-2 bg-retroPurple text-white rounded-md font-bold border-b-2 border-neonPink hover:bg-opacity-90 flex items-center">
//           <i className="fas fa-plus mr-2"></i> Load More Actors
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AvatarSelection;