import FAQCard from "../components/MyComponents/services/FAQ/FAQCard";
import MostlyBooked from "../components/MyComponents/services/Mostlybooked/booked";
import ReviewSection from "../components/MyComponents/services/review/review";
import ServiceHero from "../components/MyComponents/services/serviceHero";
import ServicesSection from "../components/MyComponents/services/serviceName/serviceSection";

const ServicePage = () => {
  return (

    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <ServiceHero/>
            <MostlyBooked/>
            <ServicesSection/>
            <ReviewSection />
            <FAQCard/>
    </div>
  );
};

export default ServicePage;
