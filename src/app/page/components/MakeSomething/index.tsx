import { Button } from "@/app/components/Button";
import { Card } from "@/app/components/Card";
import { Arrow } from "@/app/components/Icons/Arrow";
import { SectionText } from "@/app/components/SectionText";
import { users } from "@/app/utils/users";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function MakeSomething() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const isMobile = window.innerWidth < 768;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === users.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + users.length) % users.length
    );
  };

  return (
    <motion.section
      ref={sectionRef}
      className="w-full h-auto bg-indigo lg:p-[80px] lg:pr-[120px] py-12 relative space-y-[80px] overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-full h-auto flex lg:flex-row flex-col lg:justify-between items-center px-4"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="lg:w-[814px] w-full h-auto lg:text-left text-center">
          <SectionText
            caption="Make something awesome"
            main="Powerful features"
            text="Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo."
            isColorChanged
          />
        </div>
        <motion.div
          className="mt-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Button color="mustard" label="Request a Quote" hasIcon />
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full h-[490px]"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div
          className={`flex transition-transform duration-500 items-center w-full h-auto lg:space-x-6 lg:absolute relative z-[1] 
            ${currentIndex === 0 && "pl-4"}`}
          style={{
            transform: isMobile
              ? `translateX(-${currentIndex * 100}%)`
              : `translateX(-${currentIndex * (100 / users.length)}%)`,
          }}
        >
          {users.map((user: any, idx: number) => (
            <Card key={idx} user={user} activeCard={idx === currentIndex} />
          ))}
        </div>
      </motion.div>
      <motion.div
        className="flex items-center lg:justify-start justify-center space-x-6 px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <button
          onClick={prevSlide}
          className="w-[48px] h-[48px] border-[2px] border-mustard rounded-full flex items-center justify-center rotate-180"
          aria-label="previous button"
        >
          <Arrow color="#FCD34D" onlyIcon />
        </button>
        <button
          onClick={nextSlide}
          className="w-[48px] h-[48px] border-[2px] border-mustard rounded-full flex items-center justify-center"
          aria-label="next button"
        >
          <Arrow color="#FCD34D" onlyIcon />
        </button>
      </motion.div>
    </motion.section>
  );
}
