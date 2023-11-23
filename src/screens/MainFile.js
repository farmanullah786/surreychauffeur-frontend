import React, { useEffect, useState } from "react";
import AppLayout from "../components/applayout/AppLayout";
import LandingPage from "../components/sections/LandingPage";
import CruisePortTransport from "../components/sections/CruisePortTransport";
import Testimonials from "../components/sections/Testimonials";
import Loader from "../components/shared/Loader";
import InfoBar from "../components/InfoBar";
import PinkBerryAbout from "../components/sections/PinkBerryAbout";
import PinkBerryAirport from "../components/sections/PinkBerryAirport";
import DiscountBannerSection from "../components/sections/DiscountBannerSection";
import StationTransport from "../components/sections/StationTransport";

const MainFile = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a 2-second loading delay
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <InfoBar />
          <AppLayout>
            <LandingPage />
            <DiscountBannerSection />
            <PinkBerryAbout />
            <PinkBerryAirport />
            <CruisePortTransport />
            <StationTransport/>
            <Testimonials />
          </AppLayout>
        </>
      )}
    </>
  );
};

export default MainFile;
