import React from 'react';

export const Header = () => {
  return (
    // Changed from absolute to fixed position at the top of the viewport.
    // Added left-0, right-0 to span full width, and mx-auto to center it within that width.
    // z-50 ensures it stays on top of other content.
    <div className="fixed top-0 left-0 right-0 w-[375px] h-[83px] mx-auto bg-[#070707] rounded-b-[21px] overflow-hidden border-t border-solid shadow-[0px_1px_62px_1px_rgba(242,195,107,0.36)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-b-[21px] before:bg-gradient-to-t before:from-[rgba(242,195,107,0)] before:to-[rgba(221,143,31,0.26)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none z-50">
      <div className="inline-flex items-center gap-11 relative top-[15px] left-[87px]">
        <img
          className="relative w-[200.76px] h-[53px] object-cover"
          alt="Logo menang"
          src="/images/logo-menang-1-2.png"
        />
      </div>
    </div>
  );
};
