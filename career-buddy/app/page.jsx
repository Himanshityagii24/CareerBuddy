import ShowcaseNavbar from "@/components/showcase-navbar";
import MiddleSection from "@/components/Middlesection";
import Waytosucess from "@/components/Waytosucess";
import Services from "@/components/services";
import Founder from "@/components/Founder";

export default function Home() {
  return (
    <div>
      <ShowcaseNavbar />
      <MiddleSection />
      <Waytosucess />
      <div className="mt-16">  {/* Increased margin */}
        <Services />
      </div>
      <div className="mt-16">  {/* Increased margin */}
        <Founder />
      </div>
    </div>
  );
}
