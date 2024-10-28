import { Button } from "@/app/components/Button";
import { SectionText } from "@/app/components/SectionText";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AllThePower() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="w-full h-auto lg:bg-blueViolet bg-indigo lg:py-[80px] py-[48px] px-4 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="lg:flex hidden absolute top-0 right-0 z-[0]">
        <Image
          src="/images/CircleAllThePower.svg"
          width={782}
          height={780}
          alt=""
        />
      </div>
      <div className="lg:space-y-[80px] space-y-[64px] relative z-[1]">
        <div className="w-full h-auto flex lg:flex-row flex-col justify-between items-center lg:pl-[280px] lg:pr-[80px] lg:space-x-[240px] lg:space-y-0 space-y-6">
          <motion.div
            className="lg:w-[894px] h-auto lg:text-left text-center"
            variants={containerVariants}
          >
            <SectionText
              caption="Get the Sun to power your home"
              main="All the power that you need for your house is now available"
              isColorChanged
            />
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-4 lg:pr-[120px]"
            variants={containerVariants}
          >
            <Button color="mustard" label="Request a Quote" hasIcon />
            <p className="text-[18px] leading-[28.8px] font-normal text-white">
              Egestas fringilla aliquam leo
            </p>
          </motion.div>
        </div>
        <motion.div
          className="w-full h-auto flex justify-center items-center"
          variants={containerVariants}
        >
          <Image
            src="/images/AllThePower.webp"
            width={1008}
            height={555}
            alt=""
          />
        </motion.div>
      </div>
      <div className="lg:hidden flex absolute bottom-0 left-[-35%] z-[0] rotate-180">
        <Image
          src="/images/CircleAllThePower.svg"
          width={366}
          height={365}
          alt=""
        />
      </div>
    </motion.section>
  );
}
