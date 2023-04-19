import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="flex flex-row items-center space-x-5">
      <Image alt="logo" src={"/logo.png"} width={100} height={100} />
      <div>
        <p className="text-5xl">Find The Person</p>
        <p className="text-4xl font-bold">Github</p>
      </div>
    </div>
  );
}
