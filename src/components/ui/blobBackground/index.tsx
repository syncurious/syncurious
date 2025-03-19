'use client'
import React, { useRef } from "react";
import Blob from "../blob";

function BackgroundBlob() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute h-full w-full left-0">
      <Blob 
        ref={blob1Ref}
        position={{ bottom: "-10%", left: "-10%" }}
      />
      <Blob 
        ref={blob2Ref}
        position={{ top: "10%", right: "-5%" }}
        className="opacity-70"
      />
    </div>
  );
}

export default BackgroundBlob;
