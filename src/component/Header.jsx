import React from "react";

export const Header = () => {
  return (
    <div className="fixed-header bg-[#070707] rounded-[0px_0px_21px_21px] overflow-hidden border-b [border-bottom-style:solid] shadow-[0px_1px_62px_1px_#f2c36b5c] border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[0px_0px_21px_21px] before:[background:linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,0.26)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <div className="inline-flex items-center justify-center w-full relative top-[15px]">
        <img
          className="w-[200.76px] h-[53px] object-cover hover:scale-105 transition-transform duration-300"
          alt="Logo menang"
          src="/images/logo-menang-1-2.png"
        />
      </div>
    </div>
  );
};

