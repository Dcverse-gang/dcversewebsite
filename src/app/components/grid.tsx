export default function Grid() {
  return (
    <div className="relative h-[300px] w-full bg-black overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-4 gap-0 border border-neutral-700">
        {[...Array(12 * 4)].map((_, i) => (
          <div key={i} className="border border-neutral-700" />
        ))}
      </div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-[#c7f4f4] leading-tight">
          Lorem<br />
          Ipsum
        </h2>
      </div>
    </div>
  );
}
