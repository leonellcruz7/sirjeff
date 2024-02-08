import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[152.85px] items-center bg-white flex justify-between pl-[32px] pr-[44px] fixed left-0 top-0 z-10">
      <div className="flex items-center">
        <div className="pr-[50px]">
          <div className="w-[200px] h-[74.85px] bg-[blue]"></div>
        </div>
        <p className="text-[24px] font-[600]">Home</p>
      </div>

      <div className="flex items-center gap-[48px]">
        <div className="w-[48px] h-[52.5px] bg-[yellow]"></div>
        <div className="w-[196px] h-[74.85px] bg-[green]"></div>
      </div>
    </div>
  );
};

export default Navbar;
