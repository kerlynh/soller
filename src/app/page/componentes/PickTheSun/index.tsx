import { SectionText } from "@/app/components/SectionText";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PickTheSun() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      className="w-full h-auto flex items-center flex-col relative px-4 lg:px-0 pb-[80px]"
    >
      <motion.div
        className="lg:py-[80px] pt-[48px] flex flex-col items-center justify-center lg:w-[900px] text-center relative z-[2]"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <SectionText
          caption="No more waste"
          main="Pick the Sun"
          text=" Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
        />
      </motion.div>
      <div className="w-full lg:h-[800px] h-full lg:bg-cover bg-contain bg-center bg-no-repeat bg-[url('/images/Circles.svg')] absolute z-[1] top-[10%]"></div>
      <motion.div
        className="relative z-[2]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <picture>
          <source
            media="(max-width: 768px)"
            className="min-w-[375px] max-w-[375px]"
            srcSet="/images/Desktop.webp"
          />
          <Image
            src="/images/DesktopBig.webp"
            width={1520}
            height={854}
            alt=""
          />
        </picture>
      </motion.div>
    </section>
  );
}
