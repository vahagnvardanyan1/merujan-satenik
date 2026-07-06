import BackgroundMusic from "@/components/BackgroundMusic";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import Schedule from "@/components/Schedule";
import Rsvp from "@/components/Rsvp";

export default function Home() {
  return (
    <main>
      <BackgroundMusic src="https://cdn-cms-uploads.picsart.com/cms-uploads/89bc4d42-86a5-456a-adb1-2f23a4ba0aa4.mp3" />
      <Hero />
      <section className="overflow-hidden bg-cream py-[10vh] max-[700px]:py-[8vh]">
        <Countdown />
        <Gallery />
      </section>
      <Schedule />
      <Rsvp />
    </main>
  );
}
