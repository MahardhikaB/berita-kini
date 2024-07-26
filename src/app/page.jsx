import Image from "next/image";

import Headline from "@/components/Headline";
import BeritaPopuler from "@/components/BeritaPopuler";
import Rekomendasi from "@/components/Rekomendasi";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="bg-white">
      <div>
        <Headline />
        <div className="h-20"></div>
        <BeritaPopuler />
        <div className="h-20"></div>
        <Rekomendasi />
        <div className="h-20"></div>
        <Slider />
      </div>
    </main>
  );
}
