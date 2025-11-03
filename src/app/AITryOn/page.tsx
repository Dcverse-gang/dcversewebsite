import Sidebar from "@/app/components/Sidebar";
import TryOnPanel from "@/app/components/TryOnPanel";

export default function AITryOnPage() {
  return (
    <main className="flex h-screen  bg-black text-white overflow-hidden">
      <Sidebar />
      <TryOnPanel />
    </main>
  );
}
