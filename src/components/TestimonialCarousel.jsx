import { useState } from "react";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";

import { motion } from "framer-motion";
import "./TestimonialCarousel.css";

const testimonials = [
  {
    name: "Louisa Morris",
    text: "I've been shopping from this store for a long time now. Don't think twice. Their price & quality are the best!",
    stars: 4,
    img: img11,
    bgColor: "#ffffff",
    textColor: "#000000",
  },
  {
    name: "Jason Phillips",
    text: "These shoes are the best product I've bought in years! Affordable and comfy.",
    stars: 5,
    img: img12,
    bgColor: "#f5a623",
    textColor: "#ffffff",
  },
  {
    name: "Peter Smith",
    text: "They received me with open arms and I felt heard. Would recommend 100%",
    stars: 5,
    img: img13,
    bgColor: "#e6f7f1",
    textColor: "#0a3a2c",
  },
  {
    name: "Timothy Vermont",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stars: 3,
    img: img14,
    bgColor: "#5e2b18",
    textColor: "#ffffff",
  },
  {
    name: "Jane Doe",
    text: "...and I would highly recommend it!",
    stars: 4,
    img: img15,
    bgColor: "#ffffff",
    textColor: "#000000",
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: testimonial.bgColor, color: testimonial.textColor }}
    >
      <img src={testimonial.img} alt={testimonial.name} className="testimonial-img" />
      <div className="testimonial-text">
        <p className="quote">“{testimonial.text}”</p>
        <p className="stars">{"★".repeat(testimonial.stars)}{"☆".repeat(5 - testimonial.stars)}</p>
        <p className="author">{testimonial.name}</p>
      </div>
    </motion.div>
  );
};

export default function TestimonialCarousel() {
  return (
    <div className="testimonial-carousel">
      {testimonials.map((testimonial, i) => (
        <TestimonialCard key={i} testimonial={testimonial} />
      ))}
    </div>
  );
}
