import { Header, Footer } from "@/components/layout";
import { Hero, ThreeHallows, TheProblem, TheSolution } from "@/components/home";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ThreeHallows />
        <TheProblem />
        <TheSolution />
      </main>
      <Footer />
    </>
  );
}
