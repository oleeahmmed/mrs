import React from "react";
import { Header, Footer } from "../../component"; // Re-import Header and Footer

const HistoryPageSingle = () => {
  // Demo data for the history table, ready to be replaced by API data
  const historyData = [
    {
      date: "23/10/2024 \n 5:55:12 pm",
      product: "918KISS",
      type: "Bonus",
      status: "Completed",
      amount: "0.00",
      bonus: "25.00",
    },
    {
      date: "23/10/2024 \n 5:55:12 pm",
      product: "Main Wallet",
      type: "Deposit",
      status: "Completed",
      amount: "100,000.00",
      bonus: "0.00",
    },
    {
      date: "26/09/2024 \n 10:21:17 am",
      product: "Main Wallet",
      type: "Deposit",
      status: "Completed",
      amount: "650.00",
      bonus: "0.00",
    },
    {
      date: "26/09/2024 \n 10:21:17 am",
      product: "Main Wallet",
      type: "Deposit",
      status: "Completed",
      amount: "5,050.00",
      bonus: "0.00",
    },
    {
      date: "28/08/2024 \n 2:26:38 pm",
      product: "918KlSS",
      type: "Withdraw",
      status: "Completed",
      amount: "15.00",
      bonus: "0.00",
    },
    {
      date: "23/10/2024 \n 5:55:12 pm",
      product: "918KISS",
      type: "Bonus",
      status: "Completed",
      amount: "0.00",
      bonus: "25.00",
    },
    {
      date: "23/10/2024 \n 5:55:12 pm",
      product: "Main Wallet",
      type: "Deposit",
      status: "Completed",
      amount: "100,000.00",
      bonus: "0.00",
    },
    {
      date: "26/09/2024 \n 10:21:17 am",
      product: "Main Wallet",
      type: "Deposit",
      status: "Completed",
      amount: "650.00",
      bonus: "0.00",
    },
    {
      date: "26/09/2024 \n 10:21:17 am",
      product: "Main Wallet",
      type: "Deposit",
      status: "Completed",
      amount: "5,050.00",
      bonus: "0.00",
    },
    {
      date: "28/08/2024 \n 2:26:38 pm",
      product: "918KlSS",
      type: "Withdraw",
      status: "Completed",
      amount: "15.00",
      bonus: "0.00",
    },
  ];

  return (
    // The outermost div should align with the fixed-width container setup in App.jsx
    <div className="bg-[#070707] w-[375px] mx-auto relative">
      {/* Header is rendered directly within this component, matching HomePage.jsx */}
      <Header />

      {/* The main-container class from index.css handles scrolling and padding for content */}
      <div className="main-container">
        {/* Visual Header for the History page content */}
        <div className="relative w-full h-48 bg-[url('https://c.animaapp.com/mdnzh08iX3LaVj/img/rectangle-1644.svg')] bg-[100%_100%] bg-no-repeat bg-center flex flex-col items-center justify-center">
          <div className="mt-10 bg-[linear-gradient(180deg,rgba(242,195,107,1)_0%,rgba(217,148,89,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-medium text-transparent text-2xl text-center tracking-[0] leading-[normal]">
            History
          </div>
        </div>

        {/* Table Frame Component - Adjusted positioning and layout */}
        <div className="flex flex-col w-[361px] items-start gap-1 mx-auto mt-[-50px] rounded-[7px] border-r [border-right-style:solid] border-l [border-left-style:solid] border-[#ede27566] mb-5">
          {/* Table Header */}
          <div className="gap-0.5 px-1 py-1.5 self-stretch w-full rounded-[7px_7px_0px_0px] border border-solid border-[#ede275] flex items-center relative flex-[0_0_auto]">
            <div className="w-[69px] mt-[-1.00px] font-medium tracking-[0] relative [font-family:'Poppins',Helvetica] text-white text-[10px] leading-[normal]">
              Date
            </div>
            <div className="w-[67px] mt-[-1.00px] font-medium tracking-[0] relative [font-family:'Poppins',Helvetica] text-white text-[10px] leading-[normal]">
              Product
            </div>
            <div className="w-[52px] mt-[-1.00px] font-medium tracking-[0] relative [font-family:'Poppins',Helvetica] text-white text-[10px] leading-[normal]">
              Type
            </div>
            <div className="w-[60px] mt-[-1.00px] font-medium tracking-[0] relative [font-family:'Poppins',Helvetica] text-white text-[10px] leading-[normal]">
              Status
            </div>
            <div className="w-[57px] mt-[-1.00px] font-medium tracking-[0] relative [font-family:'Poppins',Helvetica] text-white text-[10px] text-center tracking-[0] leading-[normal]">
              Amount
            </div>
            <div className="w-9 mt-[-1.00px] font-medium tracking-[0] relative [font-family:'Poppins',Helvetica] text-white text-[10px] leading-[normal]">
              Bonus
            </div>
          </div>

          {/* Dynamically rendered History Items */}
          {historyData.map((item, index) => (
            <div
              key={index} // Using index as key, consider a unique ID if available from API
              className={`flex items-center gap-1 p-1 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#ede27566] ${
                index === historyData.length - 1 ? "rounded-[0px_0px_7px_7px]" : ""
              }`}
            >
              <div className="relative w-[69px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-[10px] tracking-[-0.40px] leading-[normal] whitespace-pre-line">
                {item.date}
              </div>
              <div className="relative w-[67px] [font-family:'Poppins',Helvetica] font-normal text-white text-[10px] tracking-[-0.40px] leading-[normal]">
                {item.product}
              </div>
              <div className="relative w-[52px] [font-family:'Poppins',Helvetica] font-normal text-white text-[10px] tracking-[-0.40px] leading-[normal]">
                {item.type}
              </div>
              <div className="relative w-[60px] [font-family:'Poppins',Helvetica] font-normal text-white text-[10px] tracking-[-0.40px] leading-[normal]">
                {item.status}
              </div>
              <div className="relative w-[57px] [font-family:'Poppins',Helvetica] font-normal text-white text-[10px] text-center tracking-[-0.40px] leading-[normal]">
                {item.amount}
              </div>
              <div className="w-9 relative [font-family:'Poppins',Helvetica] font-normal text-white text-[10px] tracking-[-0.40px] leading-[normal]">
                {item.bonus}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer is rendered directly within this component, matching HomePage.jsx */}
      <Footer />
    </div>
  );
};
export default HistoryPageSingle;
