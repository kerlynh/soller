"use client";
import dynamic from "next/dynamic";

import { Header } from "./page/componentes/Header";
import { Principal } from "./page/componentes/Principal";

const PickTheSun = dynamic(() => import("./page/componentes/PickTheSun"), {
  ssr: false,
});
const PersonalizedServices = dynamic(
  () => import("./page/componentes/PersonalizedServices"),
  { ssr: false }
);
const PowerfulFeatures = dynamic(
  () => import("./page/componentes/PowerfulFeatures"),
  {
    ssr: false,
  }
);
const AllThePower = dynamic(() => import("./page/componentes/AllThePower"), {
  ssr: false,
});
const MakeSomething = dynamic(
  () => import("./page/componentes/MakeSomething"),
  {
    ssr: false,
  }
);
const Footer = dynamic(() => import("./page/componentes/Footer"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Principal />
      <PickTheSun />
      <PersonalizedServices />
      <PowerfulFeatures />
      <MakeSomething />
      <AllThePower />
      <Footer />
    </main>
  );
}
