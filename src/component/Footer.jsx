// This is a conceptual example for your actual Footer.jsx file.
// You will need to apply these changes to your Footer.jsx manually.
import React from "react";
import { Link } from "react-router-dom"; // <--- Import Link

export const Footer = () => { // <--- Remove onNavigate prop here
  return (
    <div className="fixed bottom-0 left-0 right-0 w-[375px] h-[83px] mx-auto z-50">
      <div className="relative h-[83px] bg-[#070707] rounded-t-[21px] overflow-hidden border-t border-solid shadow-[0px_1px_62px_1px_rgba(242,195,107,0.36)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-t-[21px] before:bg-gradient-to-t before:from-[rgba(242,195,107,0)] before:to-[rgba(221,143,31,0.26)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <div className="inline-flex items-center gap-3.5 relative top-3 left-1.5">

          {/* Example for Home button using Link */}
          <Link to="/" className="flex flex-col w-[54px] items-center gap-[5px] relative opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer group">
            <div className="h-1 w-0 bg-gradient-to-b from-[#F2C36B] to-[#DD8F1F] group-hover:w-full transition-all duration-300 rounded-b-md absolute top-[-12px]"></div>
            <img
              className="relative w-[34px] h-[34px] object-cover"
              alt="Home"
              src="/images/image-11.png"
            />
            <div className="relative self-stretch font-inter font-medium text-white text-sm text-center tracking-[0] leading-normal">
              Home
            </div>
          </Link>

          {/* Example for Lucky Spin button using Link */}
          <Link to="/lucky-spin" className="flex flex-col w-[74px] items-center gap-[5px] relative group scale-110">
            <div className="h-1 w-full bg-gradient-to-b from-[#F2C36B] to-[#DD8F1F] rounded-b-md absolute top-[-12px]"></div>
            <img
              className="relative w-9 h-9"
              alt="Lucky Spin"
              src="/images/group-2.png"
            />
            <div className="relative self-stretch font-inter font-medium text-white text-sm tracking-[0] leading-normal">
              Lucky Spin
            </div>
          </Link>

          {/* Continue this pattern for Redeem, Tournament, Profile, etc. */}
          <Link to="/redeem" className="flex flex-col w-[55px] items-center gap-2.5 relative opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer group">
            <div className="h-1 w-0 bg-gradient-to-b from-[#F2C36B] to-[#DD8F1F] group-hover:w-full transition-all duration-300 rounded-b-md absolute top-[-12px]"></div>
            <img
              className="relative w-[30px] h-[30px]"
              alt="Redeem"
              src="/images/frame.svg"
            />
            <div className="relative self-stretch font-inter font-medium text-white text-sm tracking-[0] leading-normal">
              Redeem
            </div>
          </Link>

          <Link to="/tournament" className="flex flex-col w-[81px] items-center gap-[5px] relative opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer group">
            <div className="h-1 w-0 bg-gradient-to-b from-[#F2C36B] to-[#DD8F1F] group-hover:w-full transition-all duration-300 rounded-b-md absolute top-[-12px]"></div>
            <img
              className="relative w-[38px] h-[38px]"
              alt="Tournament"
              src="/images/frame-1.svg"
            />
            <div className="relative self-stretch font-inter font-medium text-white text-sm tracking-[0] leading-normal">
              Tournament
            </div>
          </Link>

          <Link to="/profile" className="flex flex-col w-[43px] items-center gap-[5px] relative opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer group">
            <div className="h-1 w-0 bg-gradient-to-b from-[#F2C36B] to-[#DD8F1F] group-hover:w-full transition-all duration-300 rounded-b-md absolute top-[-12px]"></div>
            <div className="relative w-[34px] h-[34px] overflow-hidden">
              <div className="w-7 h-[34px] bg-[url(/images/Group.png)] bg-cover" />
            </div>
            <div className="relative self-stretch font-inter font-medium text-white text-sm tracking-[0] leading-normal">
              Profile
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};