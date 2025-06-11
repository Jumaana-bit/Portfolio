import { useState } from "react";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Desktop from "../components/Desktop";

export default function Home() {
  const [activeView, setActiveView] = useState("desktop");

  return (
    <>
      <Head>
        <title>Portfolio File Explorer</title>
      </Head>
      <div className="flex">
        <Sidebar onSelect={setActiveView} />
        <main className="flex-1">
          {activeView === "desktop" && <Desktop />}
          {activeView === "recycle" && (
            <div className="p-10 text-white text-xl">🗑️ Recycle Bin is empty!</div>
          )}
        </main>
      </div>
    </>
  );
}
