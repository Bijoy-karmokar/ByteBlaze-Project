import React from "react";
import Button from "../Pages/Button";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-116px)]">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">Welcome to ByteBlaze</h1>
          <p className="py-6 text-lg">
            ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it
          </p>
          <div className="flex justify-center items-center gap-3 ">
          <Button label={"Read Blogs"}></Button>
          <Button label={"BookMarks"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
