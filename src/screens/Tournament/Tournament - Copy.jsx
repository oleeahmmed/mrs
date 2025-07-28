import React from "react";
import { Header, Footer,Frame,FrameWrapper } from "../../component";


 const   Tournament = () => {
  return (
    <div
      className="bg-[#070707] flex flex-row justify-center w-full"
      data-model-id="659:146"
    >
      <div className="bg-[#070707] w-[375px] h-[806px] relative">
        <div className="absolute w-[375px] h-[677px] top-0 left-0">
          <div className="absolute w-[60px] h-[60px] top-[123px] left-[21px] shadow-[0px_5px_10px_#bc926e40]" />

          <div className="absolute w-[375px] h-[83px] top-0 left-0 bg-[#070707] rounded-[21px_21px_0px_0px] overflow-hidden border-t [border-top-style:solid] shadow-[0px_1px_62px_1px_#f2c36b38] border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[21px_21px_0px_0px] before:[background:linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,0.26)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <div className="inline-flex items-center gap-11 relative top-[15px] left-[87px]">
              <img
                className="relative w-[200.76px] h-[53px] object-cover"
                alt="Logo menang"
                src="/images/logo-menang-1-2.png"
              />
            </div>
          </div>

          <Frame />
          <FrameWrapper />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Tournament;