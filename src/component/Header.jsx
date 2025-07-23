import React from 'react';

export const Header = () => {
  return (
    <div className="absolute w-[375px] h-[83px] top-0 left-0 bg-[#070707] rounded-b-[21px] overflow-hidden border-t border-solid shadow-[0px_1px_62px_1px_rgba(242,195,107,0.36)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-b-[21px] before:bg-gradient-to-t before:from-[rgba(242,195,107,0)] before:to-[rgba(221,143,31,0.26)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <div className="inline-flex items-center gap-11 relative top-[15px] left-[87px]">
        <img
          className="relative w-[200.76px] h-[53px] object-cover"
          alt="Logo menang"
          src="https://c.animaapp.com/mdfn2b29iC3wMU/img/logo-menang-1-2.png"
        />
      </div>
    </div>
  );
};