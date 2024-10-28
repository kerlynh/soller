import { ContentBox } from "@/app/components/ContentBox";
import { SectionText } from "@/app/components/SectionText";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PowerfulFeatures() {
  return (
    <motion.section
      className="w-full h-auto lg:pt-[50px] lg:pb-[80px] lg:pl-[80px] py-12 pl-4 flex lg:flex-row flex-col lg:items-start items-center lg:space-x-[168px] lg:space-y-0 space-x-0 space-y-[64px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="lg:w-[63%] w-full h-full flex flex-col items-start justify-center pr-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div
          className="lg:text-left text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <SectionText
            caption="System features"
            main="Powerful features"
            text="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis semper id sit ornare maecenas lectus sed."
          />
        </motion.div>

        <motion.div
          className="w-full h-auto flex mt-[128px] space-x-[48px] lg:text-left text-center pr-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <ContentBox
            title="Erat sit"
            text="Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis."
          />
          <ContentBox
            title="Ullamcorper arcu"
            text="Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum."
          />
        </motion.div>

        <motion.div
          className="w-full h-auto flex mt-[128px] space-x-[48px] lg:text-left text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <ContentBox
            title="Et pellentesque"
            text="Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate."
          />
          <ContentBox
            title="Amet egestas"
            text="Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis."
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="lg:w-[50%] w-full h-full flex items-center lg:justify-end justify-center lg:pr-[40px] pr-4 bg-[url('/images/CirclePowerfulFeatures.svg')] bg-right bg-no-repeat bg-contain relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Image
          src="/images/PowerfulFeatures.webp"
          alt=""
          width={620}
          height={1000}
          loading="lazy"
        />
      </motion.div>
    </motion.section>
  );
}
