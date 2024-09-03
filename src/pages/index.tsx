import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from '@/components/VideoCard';
import { VideoGrid } from "@/components/VideoGrid";
import { Appbar } from "@/components/Appbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Appbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full overflow-x-auto">
          <div className="sm:h-[calc(99vh-60px)] overflow-auto">
            <div className="w-full justify-center mx-auto overflow-auto h-[calc(100vh-120px)] overflow-y-auto relative">
              <VideoGrid/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
