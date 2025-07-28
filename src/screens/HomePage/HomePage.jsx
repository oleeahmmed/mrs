import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Header, Footer, Frame, FrameWrapper } from "../../component";

const HomePage = () => {
  const [currentDay, setCurrentDay] = useState(1);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    // Main container for the HomePage, now including Header and Footer directly.
    // This div will simulate the full mobile screen with fixed header/footer.
    <div className="bg-[#070707] flex flex-col items-center min-h-screen w-full font-['Inter']">
      <div className="w-full max-w-[375px] relative min-h-screen flex flex-col mx-auto">
        {/* Header is rendered directly within HomePage */}
        <Header />

        {/*
          Main content area for HomePage.
          Padding is added to account for the Header (83px) and Footer (83px) heights.
          flex-grow ensures it takes up available space and allows its content to scroll.
        */}
        <div className="px-5 py-6 space-y-8 pt-[83px] pb-[83px] flex-grow overflow-y-auto">
          <motion.div
            className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.div
              className="flex flex-col w-[161px] items-center gap-1.5 relative"
              variants={slideUp}
            >
              <div className="relative self-stretch mt-[-1.00px] font-medium text-white text-xs text-center tracking-[0] leading-[normal]">
                Total online users
              </div>

              <motion.div
                className="relative self-stretch w-full h-[61px] rounded-lg overflow-hidden border-[0.5px] border-solid border-[#12f85b33] bg-[linear-gradient(180deg,rgba(11,19,38,0.13)_0%,rgba(41,70,140,0.33)_100%)] hover:shadow-[0_0_15px_rgba(18,248,91,0.4)] transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex flex-col w-[69px] items-start relative top-[13px] left-[46px]">
                  <div className="relative self-stretch mt-[-1.00px] font-medium text-white text-[8px] tracking-[0] leading-[normal]">
                    users online now
                  </div>

                  <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                    <motion.img
                      className="relative w-[23.14px] h-[21.8px] ml-[-4.20px]"
                      alt="Rectangle"
                      src="https://c.animaapp.com/mdmlq6kxeRZCly/img/rectangle-1642.svg"
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/23x21/333333/FFFFFF?text=User"; }}
                    />

                    <div className="relative w-fit mt-[-1.00px] font-medium text-white text-base tracking-[0] leading-[normal]">
                      2,345
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col w-[161px] items-start gap-1.5 relative"
              variants={slideUp}
            >
              <div className="relative self-stretch mt-[-1.00px] font-medium text-white text-xs text-center tracking-[0] leading-[normal]">
                Member activity overview
              </div>

              <motion.div
                className="relative self-stretch w-full h-[61px] rounded-lg overflow-hidden border-[none] bg-[linear-gradient(180deg,rgba(11,19,38,0.13)_0%,rgba(41,70,140,0.33)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[0.5px] before:rounded-lg before:[background:linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:shadow-[0_0_15px_rgba(221,143,31,0.4)] transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex flex-col w-[76px] items-start gap-[7px] relative top-2 left-[43px]">
                  <p className="relative w-[62px] mt-[-1.00px] font-normal text-transparent text-xs tracking-[0] leading-3">
                    <span className="font-medium text-[#dd8f1f]">5</span>

                    <span className="font-medium text-[#dd8f1f] text-[8px] leading-[0.1px]">
                      &nbsp;
                    </span>

                    <span className="font-medium text-white text-[8px] leading-[8px]">
                      Spins Today
                    </span>
                  </p>

                  <p className="relative self-stretch font-normal text-transparent text-xs tracking-[0] leading-3">
                    <span className="font-medium text-[#dd8f1f]">3</span>

                    <span className="font-medium text-[#dd8f1f] text-[8px] leading-[0.1px]">
                      &nbsp;
                    </span>

                    <span className="font-medium text-white text-[8px] leading-[8px]">
                      Gifts Redeemed
                    </span>
                  </p>

                  <p className="relative self-stretch font-normal text-transparent text-[8px] tracking-[0] leading-[8px]">
                    <span className="font-medium text-white">Last login</span>

                    <span className="font-medium text-[#dd8f1f] leading-[0.1px]">
                      {" "}
                      : Today
                    </span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-12 relative self-stretch w-full flex-[0_0_auto]"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.div
              className="relative self-stretch w-full h-[167px] rounded-[17px_0px_17px_0px] overflow-hidden bg-[linear-gradient(180deg,rgba(11,19,38,0.02)_0%,rgba(41,70,140,0.1)_100%)]"
              variants={slideUp}
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="h-full"
              >
                <SwiperSlide>
                  <div className="flex flex-col w-[251px] items-center gap-3.5 absolute top-2.5 left-[57px]">
                    <div className="flex items-center gap-[23px] relative self-stretch w-full flex-[0_0_auto]">
                      <motion.img
                        className="w-[114px] h-[114px] relative object-cover"
                        alt="Image"
                        src="https://c.animaapp.com/mdmlq6kxeRZCly/img/image-54.png"
                        whileHover={{ scale: 1.1 }}
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/114x114/333333/FFFFFF?text=Promo1"; }}
                      />

                      <motion.img
                        className="w-[114px] h-[114px] relative object-cover"
                        alt="Image"
                        src="https://c.animaapp.com/mdmlq6kxeRZCly/img/image-55.png"
                        whileHover={{ scale: 1.1 }}
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/114x114/333333/FFFFFF?text=Promo2"; }}
                      />
                    </div>

                    <div className="relative self-stretch font-medium text-white text-base text-center tracking-[0] leading-[19.2px]">
                      Promotion &amp; Event
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col w-[251px] items-center gap-3.5 absolute top-2.5 left-[57px]">
                    <div className="flex items-center gap-[23px] relative self-stretch w-full flex-[0_0_auto]">
                      <motion.img
                        className="w-[114px] h-[114px] relative object-cover"
                        alt="Image"
                        src="https://c.animaapp.com/mdmlq6kxeRZCly/img/image-55.png"
                        whileHover={{ scale: 1.1 }}
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/114x114/333333/FFFFFF?text=Offer1"; }}
                      />

                      <motion.img
                        className="w-[114px] h-[114px] relative object-cover"
                        alt="Image"
                        src="https://c.animaapp.com/mdmlq6kxeRZCly/img/image-54.png"
                        whileHover={{ scale: 1.1 }}
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/114x114/333333/FFFFFF?text=Offer2"; }}
                      />
                    </div>

                    <div className="relative self-stretch font-medium text-white text-base text-center tracking-[0] leading-[19.2px]">
                      Special Offers
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </motion.div>

            <motion.div
              className="relative self-stretch w-full h-[83px] rounded-lg overflow-hidden bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,0.2)_100%)]"
              variants={slideUp}
            >
              <div className="absolute w-[339px] h-[33px] top-8 left-3">
                <div className="absolute w-[322px] h-1 top-[17px] left-2 bg-[linear-gradient(90deg,rgba(243,168,29,0.5)_0%,rgba(141,97,17,0.41)_100%)]" />

                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <motion.div
                    key={day}
                    className={`absolute w-[33px] h-[33px] top-0 left-[${(day-1)*51}px] ${day === 1 ? "" : "rounded-lg overflow-hidden backdrop-blur-[1px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.02)_100%),linear-gradient(180deg,rgba(11,19,38,0.02)_0%,rgba(41,70,140,0.05)_100%)]"}`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    onClick={() => setCurrentDay(day)}
                  >
                    {day === 1 && (
                      <div className="absolute w-[19px] h-[19px] top-[7px] left-[7px] bg-black rounded-sm overflow-hidden">
                        <div className="relative w-[18px] h-[18px] left-px">
                          <div className="relative w-2.5 h-2 top-[5px] left-1 bg-[url(https://c.animaapp.com/mdmlq6kxeRZCly/img/vector-1.svg)] bg-[100%_100%]" />
                        </div>
                      </div>
                    )}
                    <img
                      className="absolute w-[33px] h-[33px] top-0 left-0"
                      alt={`Schedule planner day ${day}`}
                      src={`https://c.animaapp.com/mdmlq6kxeRZCly/img/schedule-planner-organizer-button-list-agenda-reminder-service-3${day > 1 ? `-${day-1}` : ""}.png`}
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/33x33/333333/FFFFFF?text=Day"; }}
                    />
                  </motion.div>
                ))}
              </div>

              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <div
                  key={day}
                  className={`absolute w-[33px] top-[17px] left-[${3 + (day-1)*51}px] font-medium ${day === currentDay ? "text-white" : "text-[#ffffffcc]"} text-[8px] text-center tracking-[0] leading-[9.6px]`}
                >
                  Day {day}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Footer is rendered directly within HomePage */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
