import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Header, Footer } from "../../component";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Component for User Stats Card
const UserStatsCard = ({ title, value, icon, iconAlt, extraClasses = "", valueColor = "text-white" }) => (
  <div className={`flex flex-col w-[161px] items-center gap-1.5 hover:transform hover:scale-105 transition-all duration-300 ${extraClasses}`}>
    <div className="font-poppins font-medium text-white text-xs text-center tracking-[0] leading-normal">
      {title}
    </div>
    <div className="w-full h-[61px] rounded-lg overflow-hidden border-[0.5px] border-solid border-[#12f85b33] bg-gradient-to-b from-[rgba(11,19,38,0.13)] to-[rgba(41,70,140,0.33)]">
      <div className="flex flex-col w-[69px] items-start top-[13px] left-[46px] relative">
        <div className="font-poppins font-medium text-white text-[8px] tracking-[0] leading-normal">
          {iconAlt}
        </div>
        <div className="flex items-center gap-1 w-full">
          {icon && (
            <img
              className="w-[23.14px] h-[21.8px] ml-[-4.20px] animate-pulse"
              alt={iconAlt}
              src={icon}
            />
          )}
          <div className={`font-poppins font-medium ${valueColor} text-base tracking-[0] leading-normal`}>
            {value}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Component for Member Activity Card
const MemberActivityCard = ({ title, activities, extraClasses = "" }) => (
  <div className={`flex flex-col w-[161px] items-start gap-1.5 hover:transform hover:scale-105 transition-all duration-300 ${extraClasses}`}>
    <div className="font-poppins font-medium text-white text-xs text-center tracking-[0] leading-normal">
      {title}
    </div>
    <div className="w-full h-[61px] rounded-lg overflow-hidden bg-gradient-to-b from-[rgba(11,19,38,0.13)] to-[rgba(41,70,140,0.33)] relative before:content-[''] before:absolute before:inset-0 before:p-[0.5px] before:rounded-lg before:bg-gradient-to-t before:from-[rgba(242,195,107,0)] before:to-[rgba(221,143,31,0.2)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <div className="flex flex-col w-[76px] items-start gap-[7px] top-2 left-[43px] relative">
        {activities?.map((activity, index) => (
          <p key={index} className="font-poppins font-normal text-xs tracking-[0] leading-3">
            <span className="font-medium text-[#dd8f1f]">{activity.value}</span>
            <span className="font-medium text-[#dd8f1f] text-[8px]">&nbsp;</span>
            <span className="font-medium text-white text-[8px] leading-[8px]">{activity.label}</span>
          </p>
        ))}
      </div>
    </div>
  </div>
);

// Component for Rank Item
const RankItem = ({ image, name, active = false, width = "38.91px", extraClasses = "mt-[-0.78px] ml-[-0.78px] mr-[-0.78px]", labelWidth, labelMargin = "" }) => (
  <div className={`rank-item ${width}`}>
    <img
      className={`w-full h-[40.46px] ${extraClasses}`}
      alt={name}
      src={image}
    />
    <div className={`font-poppins ${labelWidth ? labelWidth : 'w-full'} ${labelMargin} ${active ? 'bg-gradient-to-t from-[rgba(242,195,107,0)] to-[rgba(221,143,31,1)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent]' : 'text-[#ffffffcc]'} font-medium text-[10px] text-center tracking-[0] leading-[11px]`}>
      {name}
    </div>
  </div>
);

// Component for Daily Reward Day Item
const DayItemCard = ({ active, left }) => (
  <>
    <img
      className="day-item absolute"
      style={{ left: `${left}px` }}
      alt="Schedule planner day"
      src={active ? '/images/schedule-planner-organizer-button-list-agenda-reminder-service-3.png' : '/images/schedule-planner-organizer-button-list-agenda-reminder-service-3-1.png'}
    />
    <div
      className={`day-item absolute ${!active ? 'rounded-lg overflow-hidden backdrop-blur-[1px] backdrop-brightness-[100%] bg-gradient-to-t from-[rgba(0,0,0,0.02)] to-[rgba(0,0,0,0.02)] bg-gradient-to-b from-[rgba(11,19,38,0.02)] to-[rgba(41,70,140,0.05)]' : ''}`}
      style={{ left: `${left}px` }}
    >
      {active && (
        <div className="absolute w-[19px] h-[19px] top-[7px] left-[7px] bg-black rounded-sm overflow-hidden">
          <div className="relative w-[18px] h-[18px] left-px">
              <div className="relative w-2.5 h-2 top-[5px] left-1 bg-[url(https://c.animaapp.com/mdnzh08iX3LaVj/img/vector.svg)] bg-[100%_100%]" />
          </div>
        </div>
      )}
    </div>
  </>
);

const HomePage = () => {
  const homeData = {
    promotionSlides: [
      { id: 1, image: '/images/image-54.png', title: "Exciting New Event!" },
      { id: 2, image: '/images/image-55.png', title: "Limited Time Offer!" },
      { id: 3, image: '/images/image-55.png', title: "Daily Rewards Boost!" }
    ],
    userStats: {
      title: "Total online users",
      value: "2,345",
      icon: '/images/rectangle-1642.svg',
      iconAlt: "users online now",
    },
    memberActivities: [
      { value: "5", label: "Spins Today" },
      { value: "3", label: "Gifts Redeemed" },
      { value: "Last login", label: ": Today" }
    ],
    rankItems: [
      { image: '/images/bronze.png', name: "Bronze", active: false, extraClasses: "mt-[-15.56px] mb-[-0.56px] ml-[-10.84px] mr-[-15.56px]" },
      { image: '/images/v2.png', name: "Silver", active: true },
      { image: '/images/gold.png', name: "Gold", active: false },
      { image: '/images/plat.png', name: "Platinum", active: false, width: "39.77px", labelWidth: "51px", labelMargin: "ml-[-5.61px] mr-[-5.61px]" },
      { image: '/images/diamond.png', name: "Diamond", active: false, labelWidth: "50px", labelMargin: "ml-[-5.55px] mr-[-5.55px]" },
      { image: '/images/royal.png', name: "Royal", active: false }
    ],
    dailyRewardDays: 7,
    activeDailyRewardDay: 0
  };

  if (!homeData) {
    return (
      <div className="bg-[#070707] w-[375px] mx-auto min-h-screen flex items-center justify-center text-white">
        No data available.
      </div>
    );
  }

  const { promotionSlides, userStats, memberActivities, rankItems, dailyRewardDays, activeDailyRewardDay } = homeData;

  return (
    <div className="bg-[#070707] w-[375px] mx-auto relative min-h-screen">
      <Header />
      <div className="main-container px-2.5 pt-6 pb-6">
        <div className="flex flex-col w-full items-center gap-[54px]">
          {/* User Stats Section */}
          <div className="flex items-center justify-between w-full">
            <UserStatsCard
              title={userStats.title}
              value={userStats.value}
              icon={userStats.icon}
              iconAlt={userStats.iconAlt}
            />
            <MemberActivityCard
              title="Member activity overview"
              activities={memberActivities}
            />
          </div>

          {/* Rank Progress Section */}
          <div className="flex flex-col w-[354.31px] items-start gap-1.5">
            <p className="w-full bg-gradient-to-b from-[#f2c36b] to-[#d99459] bg-clip-text text-transparent font-poppins font-medium text-sm tracking-[0] leading-[16.8px]">
              Your current rank is Silver
            </p>
            <div className="relative w-[354.31px] h-[72.91px]">
              <div className="relative w-[354px] h-[73px]">
                <div className="absolute w-[322px] h-1 top-[34px] left-[23px] bg-gradient-to-r from-[rgba(243,168,29,0.5)] to-[rgba(141,97,17,0.41)]" />
                <div className="absolute w-[354px] h-[73px] top-0 left-0">
                  <img
                    className="absolute w-1.5 h-2 top-0.5 left-4"
                    alt="Polygon"
                    src="/images/polygon-1.svg"
                  />
                  <div className="inline-flex items-start gap-6 absolute top-[15px] left-0">
                    {rankItems.map((item, index) => (
                      <RankItem key={index} {...item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Promotion Slider Section */}
          <div className="flex flex-col items-center gap-12 w-full">
            <div className="w-full h-[167px] rounded-[17px_0px_17px_0px] overflow-hidden bg-gradient-to-t from-[rgba(11,19,38,0.02)] to-[rgba(41,70,140,0.1)] relative">
              <div className="flex flex-col w-[251px] items-center gap-3.5 absolute top-2.5 left-[57px]">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={23}
                  slidesPerView={1}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="w-full"
                >
                  {promotionSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div className="flex flex-col items-center justify-center">
                        <img
                          className="w-[114px] h-[114px] object-cover"
                          alt={`Promotion ${slide.id}`}
                          src={slide.image}
                        />
                        <div className="font-poppins font-medium text-white text-base text-center tracking-[0] leading-[19.2px] mt-2">
                          {slide.title}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="font-poppins font-medium text-white text-base text-center tracking-[0] leading-[19.2px]">
                  Promotion & Event
                </div>
              </div>
              <button
                className="swiper-button-next inline-flex items-center gap-2.5 px-2.5 py-0.5 absolute top-[60px] left-[317px] bg-[#ececec1a] rounded-[7px] rotate-[90.33deg] shadow-[inset_-5px_-5px_15px_#00000066] hover:bg-[#ececec30] transition-colors duration-300 z-10"
              >
                <svg
                  className="w-[14.08px] h-[14.08px] rotate-[-90.33deg]"
                  fill="none"
                  height="15"
                  viewBox="0 0 15 15"
                  width="15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.61068 3.16081L9.36426 7.48926L5.66081 11.8607"
                    stroke="#F2E476"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
              <button
                className="swiper-button-prev inline-flex items-center gap-2.5 px-2.5 py-0.5 absolute top-[60px] left-[13px] bg-[#ececec1a] rounded-[7px] rotate-[-89.64deg] shadow-[inset_-5px_-5px_15px_#00000066] hover:bg-[#ececec30] transition-colors duration-300 z-10"
              >
                <svg
                  className="w-[14.09px] h-[14.09px] rotate-[89.64deg]"
                  fill="none"
                  height="15"
                  viewBox="0 0 15 15"
                  width="15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.39058 11.836L5.63669 7.51168L9.33599 3.14058"
                    stroke="#F2E476"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>

            {/* Daily Rewards Section */}
            <div className="w-full h-[83px] rounded-lg overflow-hidden bg-gradient-to-t from-[rgba(242,195,107,0)] to-[rgba(221,143,31,0.2)] relative">
              <div className="absolute w-[322px] h-6 top-2 left-[9px] flex justify-between">
                {[...Array(dailyRewardDays)].map((_, index) => (
                  <div
                    key={`day-label-${index}`}
                    className={`text-center text-xs font-medium font-poppins ${index === activeDailyRewardDay ? 'text-[#dd8f1f]' : 'text-white'}`}
                    style={{ width: '46px' }}
                  >
                    Day {index + 1}
                  </div>
                ))}
              </div>
              <div className="absolute w-[339px] h-[33px] top-8 left-3">
                <div className="absolute w-[322px] h-1 top-[17px] left-2 bg-gradient-to-r from-[rgba(243,168,29,0.5)] to-[rgba(141,97,17,0.41)]" />
                {[...Array(dailyRewardDays)].map((_, index) => (
                  <DayItemCard
                    key={index}
                    active={index === activeDailyRewardDay}
                    left={index * 51}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;