
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Locations from "@/components/Locations";
import JoinUs from "@/components/JoinUs";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Approach />
        <Locations />
        <JoinUs />
        <Portfolio />
        <Team />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
