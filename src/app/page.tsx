'use client';
import { useState } from "react";
import { MouseEventHandler } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { LazyImage } from "../../components/RandomFox";
import { random } from "lodash";

const myRandom = () => random(1, 123);

//generate simple unique id
const generateId = () => Math.random().toString(36).substr(2,9)

const Home: NextPage = () => {
  const [images, setImages] = useState<Array<IFoxImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    const newImageItem: IFoxImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${myRandom()}.jpg`
    }
    setImages([ ...images, newImageItem ])
    //window.plausible("add_fox");
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10 px-4">
      <h1 className="text-white text-3xl font-bold mb-6">Random Fox Generator</h1>
      <p className="text-gray-400 text-lg mb-4 text-center max-w-lg">
        Click the button below to generate a random fox image. Each fox is unique and adorable! 🦊
      </p>
      <button
        className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
        onClick={addNewFox}
      >
        Generate Image
      </button>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {images.map(({ id, url }) => (
          <div className="bg-gray-800 rounded-xl shadow-md" key={id}>
            <LazyImage
              src={url}
              title="Random Fox"
              width={320}
              height="auto"
              className="rounded-lg bg-gray-300 cursor-pointer h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              onClick={() => console.log("hey")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
