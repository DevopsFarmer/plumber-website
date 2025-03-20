import Image from "next/image";

interface ServiceCardProps {
  title: string;
  imageSrc: string;
}

export default function ServiceCard({ title, imageSrc }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
        <Image src={imageSrc} alt={title} width={128} height={128} className="object-cover" />
      </div>
      <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">{title}</p>
    </div>
  );
}
