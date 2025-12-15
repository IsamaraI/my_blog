import About from "../components/About";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Hobbies from "../components/Hobbies";
import FadeIn from "../components/FadeIn";
import Contact from "../components/Contact";
import BlogSection from "../components/BlogSection";



export default function Home() {
  return (
    <>

      <About />

      <FadeIn>
        <AboutMe />
      </FadeIn>

      <FadeIn>
        <Skills />
      </FadeIn>

      <FadeIn>
        <Experience />
      </FadeIn>

      <FadeIn>
        <Portfolio />
      </FadeIn>

      <FadeIn>
        <BlogSection />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Hobbies />
      </FadeIn>

      <Contact />
    </>
  );
};
