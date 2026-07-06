import type { ImageLoaderProps } from "next/image";

export default function picsartImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  return `${src}?to=min&r=${width}&q=${quality ?? 88}&type=webp`;
}
