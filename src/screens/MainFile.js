import React, { useEffect, useState } from "react";
import AppLayout from "../components/applayout/AppLayout";
import ShowCase from "../components/ShowCase";
import DiscountBannerSection from "../components/DiscountBannerSection";
import AboutUsSection from "../components/AboutUsSection";
import AirportTransportSection from "../components/AirportTransportSection";
import CruisePortTransportSection from "../components/CruisePortTransportSection";
import StationTransportSection from "../components/StationTransportSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Loader from "../components/Loader";
import InfoBar from "../components/InfoBar";

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
            <ShowCase />
            <DiscountBannerSection />
            <AboutUsSection />
            <AirportTransportSection />
            <CruisePortTransportSection />
            <StationTransportSection />
            <TestimonialsSection />
          </AppLayout>
        </>
      )}
    </>
  );
};

export default MainFile;
