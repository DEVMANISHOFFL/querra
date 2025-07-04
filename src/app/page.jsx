import Image from "next/image";
import { Poppins} from "next/font/google";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
    </div>
  );
}
