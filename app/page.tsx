import Image from "next/image";
import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import { navItems } from "@/Data";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import PricingPlans from "@/components/PricingPlans";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto w-full sm:px-10 px-5 overflow-x-hidden">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Grid/>
      <RecentProjects/>
      <PricingPlans/>
      <Clients/>
      <Experience/>
      <Approach/>
      <Footer/>
    </div>
   </main>
  );
}
