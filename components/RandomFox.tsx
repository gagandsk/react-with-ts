const randomNumber = () => Math.floor(Math.random() * 122) + 1;

export function RandomFox() {
  const image = `https://randomfox.ca/images/${randomNumber()}.jpg`;

  return (
    <img
      width="320"
      height="auto"
      src={image}
      className="mx-auto rounded-md bg-gray-300"
    />
  );
}