import Image from "next/image";

import BeritaPopuler from "@/components/BeritaPopuler";

export default function Home() {
  return (
    <main>
      <div className="h-screen">
        <BeritaPopuler />
      </div>
    </main>
  );
}
