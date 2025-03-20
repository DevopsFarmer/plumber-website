interface ExperienceProps {
    title: string;
    company: string;
    duration: string;
    logo: string;
  }
  
  const ExperienceCard = ({ title, company, duration, logo }: ExperienceProps) => {
    return (
      <div className="flex items-center gap-4 bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg transition-all duration-300">
        <img src={logo} alt={company} className="w-32 h-32 rounded-md" />
        <div>
          <h3 className="text-lg font-bold dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{company}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{duration}</p>
        </div>
      </div>
    );
  };
  
  export default ExperienceCard;
  