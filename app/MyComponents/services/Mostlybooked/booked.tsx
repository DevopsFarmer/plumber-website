const services = [
    { id: 1, title: "Tap Repair", price: 500, image: "/serviceImg/service/image-1.png" },
    { id: 2, title: "Flush Tank Repair", price: 900, image: "/serviceImg/service/image-2.png" },
    { id: 3, title: "Flush Tank Repair", price: 900, image: "/serviceImg/service/image-4.png" },
  ];
  
  const MostlyBooked = () => {
    return (
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Mostly Booked</h2>
        <div className="flex flex-wrap gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-28 h-28 object-cover rounded-md shadow-md"
              />
              <h3 className="text-lg font-semibold mt-2">{service.title}</h3>
              <p className="text-green-600 font-semibold">Rs. {service.price}</p>
              <button className="mt-2 bg-blue-700 text-white px-4 py-1 rounded-md flex items-center gap-1">
                Add <span>➕</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default MostlyBooked;
  