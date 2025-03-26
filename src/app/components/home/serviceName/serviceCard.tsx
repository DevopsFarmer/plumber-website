import Image from "next/image";

interface ServiceCardProps {
  title: string;
  imageSrc: string;
}

export default function ServiceCard({ title, imageSrc }: ServiceCardProps) {
  return (
    <div className="flex transition-transform transform hover:scale-105 flex-col items-center justify-center text-[#3E180E] rounded-xl shadow-2xl bg-[#EDEDED] p-6 text-center w-40 h-52">
      <div className="w-24 h-24 flex items-center justify-center overflow-hidden rounded-lg">
        <Image src={imageSrc} alt={title} width={96} height={96} className="object-cover" />
      </div>
      <p className="mt-3 text-sm font-medium">{title}</p>
    </div>
  );
}
