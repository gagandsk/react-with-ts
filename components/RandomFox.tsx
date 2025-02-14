import { useRef } from "react";
type Props = { image: string };

export function RandomFox({ image }: Props) {
  const node = useRef<HTMLImageElement>(null);
  
  return (
    <img
      ref={node}
      width="320"
      height="auto"
      src={image}
      className="rounded"
    />
  );
}