 import React, { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";

// Plant data
const books = [
  {
     "coverImage":
"https://i.ibb.co.com/WNymSfN8/the-silen-library.jpg           ",
  },
  {
     "coverImage":
"https://i.ibb.co.com/932xt2bv/achoes-of-tomorrow.webp           ",
  },
  {
     "coverImage":
"https://i.ibb.co.com/8g1v697H/the-east-wind.jpg           ",
  },
  {
     "coverImage":
"https://i.ibb.co.com/S75ThD9K/crimson-sky.jpg           ",
  },
  {
     "coverImage":
"https://i.ibb.co.com/Sw2bDRcf/quantum-code.jpg           ",
  },
  {
     "coverImage":
"https://i.ibb.co.com/xtT5hPH5/seeds.jpg           ",
  },
  {
     "coverImage":
"https://i.ibb.co.com/zVMMcnSb/beyond.jpg           ",
  },
  {
     "coverImage":
"https://i.ibb.co.com/kVGJwxQZ/whispers.jpg           ",
  },
  {
     "coverImage":
"https://i.ibb.co.com/1GDfBj7k/infinite.jpg           ",
  },
  {
     "coverImage":
"https://i.ibb.co.com/wFM0RFxG/canvas.jpg           ",
  },
  {
     "coverImage":
"https://i.ibb.co.com/20rBr6cx/moon.jpg           ",
  },
  {
     "coverImage":
"https://i.ibb.co.com/W4NsCNhN/coders.jpg          ",
  },
  
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % books.length);
  const prevSlide = () => setIndex((index - 1 + books.length) % books.length);

  return (
    <div className="relative w-9/12 mt-8 mx-auto overflow-hidden rounded-2xl shadow-lg ">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src={books[index].coverImage}
            alt="books"
            className="w-120 mx-auto h-[400px] object-cover overflow-y-auto"
          />
           
        </motion.div>
      </AnimatePresence>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-1 rounded-full text-gray-700 text-lg"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-1 rounded-full text-gray-700 text-lg"
      >
        ❯
      </button>
    </div>
  );
};

export default Banner;