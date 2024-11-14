"use client";
import dynamic from "next/dynamic";

import { Header } from "./page/components/Header";
import { Principal } from "./page/components/Principal";

const PickTheSun = dynamic(() => import("./page/components/PickTheSun"), {
  ssr: false,
});
const PersonalizedServices = dynamic(
  () => import("./page/components/PersonalizedServices"),
  { ssr: false }
);
const PowerfulFeatures = dynamic(
  () => import("./page/components/PowerfulFeatures"),
  { ssr: false }
);
const AllThePower = dynamic(() => import("./page/components/AllThePower"), {
  ssr: false,
});
const MakeSomething = dynamic(() => import("./page/components/MakeSomething"), {
  ssr: false,
});
const Footer = dynamic(() => import("./page/components/Footer"), {
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
