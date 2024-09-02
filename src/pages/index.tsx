import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from '@/components/VideoCard';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard
        title={"What is Barca Cooking?"}
        thumb={"thumbnail.png"}
        profile={"profile.jpg"}
        channel={"Visca Barca"}
        views={"100M"}
        timestamp={"1 day ago"}
      ></VideoCard>
    </div>
  );
}
