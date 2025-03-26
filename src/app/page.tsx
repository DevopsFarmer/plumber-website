import FAQCard from "./components/home/FAQ/FAQCard";
import MostlyBooked from "./components/home/Mostlybooked/booked";
import ReviewSection from "./components/home/review/review";
import ServicesSection from "./components/home/serviceName/serviceSection";
import HomeHero from "./components/home/herosection/Herosection";

const ServicePage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <HomeHero />
      <ServicesSection />
      <MostlyBooked />
      <ReviewSection />
      <FAQCard />
    </div>
  );
};

export default ServicePage;
