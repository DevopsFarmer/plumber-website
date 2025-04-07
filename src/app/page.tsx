import FAQCard from "../components/homeComponents/FAQ/FAQCard";
import MostlyBooked from "../components/homeComponents/Mostlybooked/booked";
import ReviewSection from "../components/homeComponents/review/review";
import ServicesSection from "../components/homeComponents/serviceName/serviceSection";
import HomeHero from "../components/homeComponents/herosection/Herosection";

const ServicePage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <HomeHero />
      <ServicesSection />
      {/* <MostlyBooked /> */}
      <ReviewSection />
      <FAQCard />
    </div>
  );
};

export default ServicePage;
