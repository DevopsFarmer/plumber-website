import Image from "next/image";

interface ServiceCardProps {
  title: string;
  imageSrc: string;
}

export default function ServiceCard({ title, imageSrc }: ServiceCardProps) {
  return (
    <div className="flex flex-col text-[#3E180E] items-center text-center  ">
      <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-md">
        <Image src={imageSrc} alt={title} width={128} height={128} className="object-cover" />
      </div>
      <p className="mt-2 text-sm text-[#3E180E] font-bold">{title}</p>
    </div>
  );
}
