import { Avatar } from "@/app/components/Avatar";
import { Button } from "@/app/components/Button";
import Image from "next/image";
import { motion } from "framer-motion";

export function Principal() {
  return (
    <section className="relative w-full h-full flex lg:flex-row flex-col justify-between lg:space-x-2 space-x-0 lg:pl-[80px] pb-[48px] lg:pb-[59px]">
      <motion.div
        className="lg:w-1/2 w-full h-auto lg:space-y-[128px] space-y-[64px] flex flex-col relative lg:px-0 px-4 order-2 lg:order-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div
          className="lg:w-[600px] flex space-y-6 flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-[40px] leading-[44px] font-bold text-center lg:text-[72px] lg:leading-[79.2px] lg:font-extrabold">
            Get the Sun to Power Your Home
          </h1>
          <p className="lg:text-[24px] lg:leading-[38.4px] font-normal text-[18px] leading-[28.8px] text-center">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque.
          </p>
          <Button color="indigo" label="Request a Quote" hasIcon />
        </motion.div>
        <div className="lg:w-[600px] lg:space-y-[18px] space-y-4">
          <motion.p
            className="lg:text-[18px] lg:leading-[28.8px] font-normal text-[16px] leading-[22.4px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque faucibus.”
          </motion.p>
          <Avatar
            img="/images/person1.webp"
            name="Rwanda Melflor"
            text="erowaste.com"
          />
        </div>
      </motion.div>
      <div className="relative sm:top-[-112px] top-[-56px] right-0 z-[0] lg:w-1/2 w-full md:h-[655px] h-[333px] order-1 lg:order-2">
        <picture>
          <source
            media="(max-width: 768px)"
            className="min-w-[375px] max-w-[375px]"
            srcSet="/images/principalMob.webp"
          />
          <Image
            src="/images/principal.webp"
            alt="men working"
            width={673}
            height={694}
            priority
            className="w-full md:max-w-[673px] max-w-[375px] min-w-[375px] h-auto absolute right-0"
          />
        </picture>
      </div>
    </section>
  );
}
