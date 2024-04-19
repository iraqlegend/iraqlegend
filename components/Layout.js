import localfont from "next/font/local";
import { useEffect, useRef } from "react";
import music from "../public/music.mp3";

const amiri = localfont({
  src: [
    {
      path: "../public/font/font.ttf",
      weight: "700",
    },
  ],
  variable: "--font-amiri",
});

import Nav from "../components/Nav";
import Header from "../components/Header";

const Layout = ({ children }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.01; // ضبط مستوى الصوت إلى 5%
      audio.play(); // بدء تشغيل الصوت تلقائيا
    }
  }, []); // يتم تشغيل هذا الكود مرة واحدة عندما يتم تحميل الصفحة
  return (
    <div
      className={`page bg-background-500  text-white ${amiri.variable} font-amiri relative`}
    >
      <Nav />
      <Header />
      {children}
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Layout;
