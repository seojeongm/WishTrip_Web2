import HeroSection from "../components/HeroSection";
import RecommendedTrips from "../components/RecommendedTrips";
import ThemeSelector from "../components/ThemeSelector";
import RecordTripCTA from "../components/RecordTripCTA";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
        
      <NavBar />
      <HeroSection />
      <RecommendedTrips />
      <ThemeSelector />
      <RecordTripCTA />
      <Footer /> 
    </div>
  );
};

export default HomePage;
