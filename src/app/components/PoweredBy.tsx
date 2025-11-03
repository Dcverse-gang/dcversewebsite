import pb1 from "@/app/assets/pb1.png";
import pb2 from "@/app/assets/pb2.png";
import pb3 from "@/app/assets/pb3.png";
import pb4 from "@/app/assets/pb4.png";
import Image from "next/image";

export default function PoweredBy() {
  const logos = [
    { src: pb1, alt: "Nvidia" },
    { src: pb2, alt: "Google Cloud" },
    { src: pb3, alt: "Microsoft for Startups" },
    {src: pb4, alt: "new logo"},
  ];

  return (
    <div className="mx-4 sm:mx-[10%] lg:mx-[20%] border-2 border-white bg-black bg-opacity-50 backdrop-blur-sm font-poppins text-white mt-8">
      <div className="flex items-center mb-4 sm:mb-6 mt-4 sm:mt-6">
        <hr className="flex-grow border-t border-white" />
        <p className="text-white text-center mx-2 sm:mx-4 text-sm sm:text-base md:text-xl uppercase font-poppins font-semibold tracking-widest">
          Powered By
        </p>
        <hr className="flex-grow border-t border-white" />
      </div>
      <div className="flex flex-nowrap justify-center gap-4 sm:gap-6 px-4 sm:px-8 pt-4 pb-6 overflow-x-auto">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="transition-all transform 
                       hover:translate-y-[-5px] 
                       bg-gradient-to-br from-black to-gray-900"
          >
            <Image 
              src={logo.src} 
              alt={logo.alt} 
              width={200} 
              height={200}
              className="w-[120px] sm:w-[160px] md:w-[200px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
