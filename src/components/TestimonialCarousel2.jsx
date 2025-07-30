import { useState } from "react";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";


export default function TestimonialCarousel2() {
   return (
    <div className="w-full max-w-4xl mx-auto bg-green-50 rounded-xl shadow-md p-6 flex flex-row items-center gap-6">
      {/* Imagen a la izquierda */}
      <img
        src={img13}
        alt="Peter Smith"
        className="w-28 h-28 object-cover rounded-md shadow-md shrink-0"
        style={{
                width: "96px",
                height: "96px",
                maxWidth: "96px",
                maxHeight: "96px",
              }}
      />

      {/* Contenido a la derecha */}
      <div className="flex flex-col justify-between flex-1 gap-2">
        <FaQuoteLeft className="text-xl text-green-600" />
        <p className="text-sm font-light leading-snug text-gray-800">
          I had the time of my life during my visit in the podcast! They received me with open arms and I felt heard. Would recommend 100%
        </p>
        <p className="font-semibold text-green-800">Peter Smith</p>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-lg ${i < 5 ? "text-green-600" : "text-gray-300"}`}
            />
          ))}
        </div>
        <FaQuoteRight className="self-end text-xl text-green-600" />
      </div>
    </div>
  );
}