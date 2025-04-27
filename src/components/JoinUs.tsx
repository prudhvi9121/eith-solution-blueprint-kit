
import { Button } from "@/components/ui/button";

const JoinUs = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Join the <span className="underline decoration-2 underline-offset-4">creator's</span> family.
        </h2>
        
        <p className="text-lg max-w-2xl mx-auto mb-8">
          We're looking for visionary clients, talented team members, and innovation partners to join our growing ecosystem of digital creators.
        </p>
        
        <Button size="lg" className="px-8">
          Get in touch with us
        </Button>
      </div>
    </section>
  );
};

export default JoinUs;
