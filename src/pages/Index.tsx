
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
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Approach />
        {/* <Locations /> */}
        
        <Portfolio />
        {/* <JoinUs /> */}
          {/* <Team />
          <News /> */}
          <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
