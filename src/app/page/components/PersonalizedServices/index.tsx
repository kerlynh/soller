import { ContentBox } from "@/app/components/ContentBox";
import { SectionText } from "@/app/components/SectionText";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PersonalizedServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full h-auto lg:pt-[50px] lg:pb-[80px] py-12 flex lg:flex-row flex-col items-center lg:space-x-[71px] lg:space-y-0 space-y-[64px] space-x-0 lg:pr-[80px] pr-4"
    >
      <motion.div
        className="w-auto h-full py-[40px] pl-4 bg-[url('/images/CirclePerServices.svg')] bg-left bg-no-repeat bg-contain relative order-2 lg:order-1"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Image
          src="/images/PersonalizedServices.webp"
          alt=""
          width={620}
          height={1000}
          loading="lazy"
        />
      </motion.div>
      <motion.div
        className="lg:w-[65%] w-full h-full flex flex-col items-start justify-center order-1 lg:order-2 pl-4"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="lg:text-left text-center">
          <SectionText
            caption="Services"
            main="Personalized services"
            text="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
          />
        </div>
        <div className="w-full h-auto flex mt-[128px] space-x-[48px] lg:text-left text-center">
          <ContentBox
            title="Et mauris"
            text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
          />
          <ContentBox
            title="Eget sit"
            text="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."
          />
        </div>
        <div className="w-full h-auto flex mt-[128px] space-x-[48px] lg:text-left text-center">
          <ContentBox
            title="Imperdiet pellentesque"
            text="Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla."
          />
          <ContentBox
            title="Non libero"
            text="Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."
          />
        </div>
      </motion.div>
    </section>
  );
}
