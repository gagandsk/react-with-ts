import { RandomFox } from "../../components/RandomFox";

const randomNumber = () => Math.floor(Math.random() * 122) + 1;

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hola</h1>
      <RandomFox image={`https://randomfox.ca/images/${randomNumber()}.jpg`}/>
    </>
  );
}
