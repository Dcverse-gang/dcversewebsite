import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-700 bg-black">
      <div className="flex items-center gap-2">
        <span className="font-bold">
            <Image src="/dcverse_logo.png" width={40} height={40} alt="Logo" />
        </span>
      </div>

      <div className="flex items-center gap-6">
        <Link href="/" className="font-bold">HOME</Link>
        <Link href="/pricing">PRICING</Link>
        <button className="ml-4 px-4 py-1 bg-[#333333] rounded-full text-sm ">Profile</button>
      </div>
    </nav>
  );
}
