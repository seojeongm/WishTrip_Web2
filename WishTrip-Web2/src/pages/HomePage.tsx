import HeroSection from "../components/HeroSection";
import RecommendedTrips from "../components/RecommendedTrips";
import ThemeSelector from "../components/ThemeSelector";
import RecordTripCTA from "../components/RecordTripCTA";
// import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroSection />
      <RecommendedTrips />
      <ThemeSelector />
      <RecordTripCTA />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
