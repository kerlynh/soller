"use client";
import dynamic from "next/dynamic";
import { Principal } from "./components/Principal";

const PickTheSun = dynamic(() => import("./components/PickTheSun"), {
  ssr: false,
});
const PersonalizedServices = dynamic(
  () => import("./components/PersonalizedServices"),
  { ssr: false }
);
const PowerfulFeatures = dynamic(
  () => import("./components/PowerfulFeatures"),
  {
    ssr: false,
  }
);
const AllThePower = dynamic(() => import("./components/AllThePower"), {
  ssr: false,
});
const MakeSomething = dynamic(() => import("./components/MakeSomething"), {
  ssr: false,
});
const Footer = dynamic(() => import("./components/Footer"), {
  ssr: false,
});

export default function Content() {
  return (
    <main>
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
