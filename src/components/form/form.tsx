import React from "react";

const Form = () => {
  return (
    <form className="p-8 rounded-lg shadow-lg space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Contact Us
      </h2>

      <input
        type="text"
        placeholder="Name"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <textarea
        placeholder="Message"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      ></textarea>

      <button
        type="submit"
        className="py-3 px-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
