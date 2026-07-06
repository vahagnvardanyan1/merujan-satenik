import Image from "next/image";

export default function FixedBackground() {
  return (
    <div className="fixed inset-0 z-0" aria-hidden>
      <Image
        src="https://cdn-cms-uploads.picsart.com/cms-uploads/a31192c8-29fb-4fdb-ab86-1aac1c8837e7.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_40%] grayscale"
      />
      <div className="absolute inset-0 bg-night/30" />
    </div>
  );
}
