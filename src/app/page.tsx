'use client'
import {GeminiEffect} from "@/components/GeminiEffect";
import LandingBg from "@/components/LandingBg";
import Output from "@/components/Output";
import UrlInput from "@/components/UrlInput";
import { useState } from "react";

export default function Home() {
  const [reelData, setReelData] = useState(null)

  return (
    <main className="">
      <LandingBg />
      <UrlInput setReelData={setReelData}/>
      {reelData ?
      <Output reelData={reelData}/>
      :
      <GeminiEffect />}
    </main>
  );
}
