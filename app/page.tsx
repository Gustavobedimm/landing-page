import SectionIntro from "./components/section-intro";
import SectionSobre from "./components/section-sobre";
import SectionFunc from "./components/section-func";

export default function Home() {
  return (
    <main className=" flex flex-col items-center">
      
      <SectionIntro/>
      <SectionSobre/>
      <SectionFunc/>

    </main>
  );
}

