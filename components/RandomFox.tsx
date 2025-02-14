
type Props = { image: string };

export function RandomFox({ image }: Props) {

  return (
    <img
      width="320"
      height="auto"
      src={image}
      className="rounded"
    />
  );
}