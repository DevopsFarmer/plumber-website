import React from "react";

interface Service {
  id: number;
  title: string;
  price: number;
  image: string;
}

const services: Service[] = [
  { id: 1, title: "Tap Repair", price: 15, image: "/serviceImg/service/image-1.png" },
  { id: 2, title: "Flush Tank Repair", price: 32, image: "/serviceImg/service/image-2.png" },
  { id: 3, title: "Drainage Pipes", price: 12, image: "/serviceImg/service/image-4.png" },
];

const MostlyBooked: React.FC = () => {
  return (
    <section className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-[#3E180E] mb-6">Mostly Booked  _________________________</h2>
      <div className="flex flex-wrap gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center bg-white rounded-lg shadow-lg p-4 w-72 space-x-4 hover:shadow-2xl transition transform hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-20 h-20 object-contain"
            />
            <div className="flex flex-col flex-grow">
              <h3 className="text-[#3E180E] font-semibold">{service.title}</h3>
              <p className="text-gray-500 text-sm">Starting from</p>
              <p className="text-green-600 font-bold text-lg">${service.price}</p>
            </div>
            <button className="bg-[#71392C] text-white px-3 py-1 rounded-md hover:bg-[#5A2A1E] transition">
              Add
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostlyBooked;
