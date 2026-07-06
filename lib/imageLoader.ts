import type { ImageLoaderProps } from "next/image";

export default function picsartImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  return `${src}?to=min&r=${width}&q=${quality ?? 75}&type=webp`;
}
