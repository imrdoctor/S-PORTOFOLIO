"use client";
import MainHeadr from "@/components/Header/MainHeadr";
// import MobileHeadr from "@/components/Header/MobileHeadr";
import Hello from "@/components/Hello/Hello";
import GotoLinkden from "@/components/LinkedinFolow/LinkedinFolow";
import { useState } from "react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [show, setShow] = useState(true);
  const handleIntroEnd = () => {
    setShowIntro(false);
  };

  return (
    <>
      <>
        {showIntro ? (
          <Hello onEnd={handleIntroEnd} />
        ) : (
         null
        )}
         <>
            <GotoLinkden show={show} setShow={setShow} />
            <div
              className={show ? "sticky top-0" : "fixed top-0 left-0 right-0"}
            >
               <MainHeadr />
            </div>
            {/* <MobileHeadr /> */}
          </>
      </>
    </>
  );
}
