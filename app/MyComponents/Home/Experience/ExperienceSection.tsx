import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "Product Designer",
    company: "Company Name",
    duration: "Jan 2022 - August 2022",
    logo: "/placeholder-logo.png", // Replace with actual image path
  },
  {
    title: "UI/UX Designer",
    company: "Another Company",
    duration: "Sep 2022 - Present",
    logo: "/placeholder-logo.png",
  },
  {
    title: "Frontend Developer",
    company: "Tech Startup",
    duration: "May 2021 - Dec 2021",
    logo: "/placeholder-logo.png",
  },
  {
    title: "Intern",
    company: "Company Name",
    duration: "July 2020 - Dec 2020",
    logo: "/placeholder-logo.png",
  },
];

const ExperienceSection = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6 dark:text-white">My Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
