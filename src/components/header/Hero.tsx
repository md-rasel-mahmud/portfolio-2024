"use client";
import Image from "next/image";
import React, { useState } from "react";
import Intro from "./Intro";

const Hero = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  return (
    <>
      <div className="avatar">
        <div className="rounded ring ring-neutral ring-offset-base-200 ring-offset-2">
          {loading && <div className="skeleton w-full h-full"></div>}
          <Image
            alt="Profile Image"
            src="https://lh3.googleusercontent.com/a/ACg8ocIUHeqLEdxzwIWFbTih_R-KvGsYeKfVGxaRpQx_wQWfmF8=s512-c"
            width={0}
            height={0}
            sizes="(max-width: 768px) 85vw, 20vw"
            layout="responsive"
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>

      <Intro />
    </>
  );
};

export default Hero;
