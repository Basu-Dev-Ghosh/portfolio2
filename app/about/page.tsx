import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "About - Basudev Ghosh | Software Developer",
  description: "Learn more about Basudev Ghosh, a pragmatic software developer specializing in Python, FastAPI, Next.js, and cloud infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Skills />
      <Experience />
      <CTA />
    </>
  );
}
