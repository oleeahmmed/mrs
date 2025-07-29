import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation

export const Footer = () => {
  const location = useLocation(); // Get the current location

  return (
    <div className="fixed-footer bg-[#070707] rounded-[21px_21px_0px_0px] overflow-hidden border-t [border-top-style:solid] shadow-[0px_1px_62px_1px_#f2c36b5c] border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[21px_21px_0px_0px] before:[background:linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,0.26)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <div className="inline-flex items-center gap-3.5 relative top-3 left-1.5">
        <NavItem 
          icon="/images/image-11.png" 
          label="Home" 
          to="/" // Link to the home page
          active={location.pathname === "/"} // Set active based on current path
        />
        <NavItem 
          icon="/images/group-2.png" 
          label="Lucky Spin" 
          width="74px" 
          to="/lucky-spin" // Link to the lucky spin page
          active={location.pathname === "/lucky-spin"}
        />
        <NavItem 
          icon="/images/frame.svg" 
          label="Redeem" 
          width="55px" 
          iconSize="w-[30px] h-[30px]" 
          to="/redeem" // Link to the redeem page
          active={location.pathname === "/redeem"}
        />
        <NavItem 
          icon="/images/Tournament.svg" 
          label="Tournament" 
          width="81px" 
          iconSize="w-[38px] h-[38px]" 
          to="/tournament" // Link to the tournament page
          active={location.pathname === "/tournament"}
        />
        <NavItem 
          icon="/images/frame-1.svg" 
          label="Profile" 
          width="43px" 
          isVector={true} 
          to="/profile" // Link to the profile (history) page
          active={location.pathname === "/profile"}
        />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active = false, width = "54px", iconSize = "w-[34px] h-[34px]", isVector = false, to }) => {
  return (
    <Link 
      to={to} 
      className={`flex flex-col ${width} items-center gap-[5px] relative transition-all duration-300 hover:scale-110 ${active ? '' : 'opacity-60 hover:opacity-100'}`}
    >
      {isVector ? (
        <div className="relative w-[34px] h-[34px] overflow-hidden">
          <div className="w-7 h-[34px] bg-[url(https://c.animaapp.com/mdnzh08iX3LaVj/img/vector-1.svg)] bg-[100%_100%]" />
        </div>
      ) : (
        <img
          className={`${iconSize} relative object-cover`}
          alt={label}
          src={icon}
        />
      )}
      <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[normal]">
        {label}
      </div>
    </Link>
  );
};

