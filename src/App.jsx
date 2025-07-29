import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import React Router components

// Import all your screen components
import HomePage from './screens/HomePage/HomePage';
import HomePageDesign2 from './screens/HomePage/HomePageDesign2';

import { LuckySpinPage } from './screens/LuckySpinPage/LuckySpinPage';
import RedeemPage from './screens/RedeemPage/RedeemPage';
import Tournament from './screens/Tournament/Tournament';
import LeaderboardPage from './screens/LeaderboardPage/LeaderboardPage';
import HistoryPageSingle from './screens/HistoryPageSingle/HistoryPageSingle';
import BadgeAchievement from './screens/BadgeAchievement/BadgeAchievement';
import VipBronzePage from './screens/VipBronzePage/VipBronzePage';

// Import Header and Footer from your component directory
import { Header, Footer } from './component'; // Assuming Header and Footer are in the same 'component' directory

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        {/* BrowserRouter makes routing available throughout your app */}
        <BrowserRouter>
          {/*
            The Header and Footer will be rendered on ALL pages,
            as they are placed outside the <Routes> component.
            If you want them to be conditional (e.g., not on the initial modal),
            you'd need to adjust their placement or use a layout component.
          */}
          <Header />

          {/*
            Routes define which component to render based on the URL path.
            The 'element' prop takes the component to render.
          */}
          <Routes>
            {/* Define routes for each of your pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/homepage2" element={<HomePageDesign2 />} />

            <Route path="/lucky-spin" element={<LuckySpinPage />} />
            <Route path="/redeem" element={<RedeemPage />} />
            <Route path="/tournament" element={<Tournament />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/profile" element={<HistoryPageSingle />} />
            <Route path="/badge-achievement" element={<BadgeAchievement />} />
            <Route path="/vip-bronze" element={<VipBronzePage />} />
         

            {/* Fallback route for any undefined paths */}
            <Route path="*" element={
              <div className="flex flex-col items-center min-h-screen w-full font-['Inter']">
                <div className="w-full max-w-[375px] relative min-h-screen flex flex-col">
                  {/* Content for Page Not Found */}
                  <div className="px-5 py-6 space-y-8 pt-[83px] pb-[83px] flex-grow text-white text-center">
                    <h1>Page Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                  </div>
                </div>
              </div>
            } />
          </Routes>

          {/* The Footer will also be rendered on all pages */}
          <Footer />
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
