const ContactForm = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full h-screen p-6 bg-white shadow-lg rounded-lg dark:bg-black ">
        <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">Want to get in touch?</h2>
        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-black"
            />
          </div>
          <textarea
            placeholder="Leave a message"
            className="w-full p-3 border border-gray-300 rounded-md h-40 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-black"
          />
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-3 rounded-md hover:bg-gray-800 transition dark:text-black"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
