import FixedBackground from "@/components/FixedBackground";
import MusicToggle from "@/components/MusicToggle";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Invitation from "@/components/Invitation";
import Program from "@/components/Program";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import Rsvp from "@/components/Rsvp";
import Flower from "@/components/Flower";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <FixedBackground />
      <MusicToggle src="https://cdn-cms-uploads.picsart.com/cms-uploads/89bc4d42-86a5-456a-adb1-2f23a4ba0aa4.mp3" />
      <main className="relative z-10 bg-night/85">
        <Hero />
        <Quote />
        <Invitation />
        <Program />
        <Countdown />
        <Gallery />
        <Rsvp />
        <footer className="flex justify-center pb-[10vh] pt-[2vh]">
          <Reveal>
            <Flower className="draw h-28 w-24 text-cream/60" />
          </Reveal>
        </footer>
      </main>
    </>
  );
}
