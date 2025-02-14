'use client';
import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { RandomFox } from "../../components/RandomFox";

// random number from 1 to 122
const random = () => Math.floor(Math.random() * 122) + 1;

//generate simple unique id
const generateId = () => Math.random().toString(36).substr(2,9)

type ImageItem = {id: string, url: string};

const Home: NextPage = () => {
  const [images, setImages] = useState<Array<ImageItem>>([
    {id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg`},
    {id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg`},
    {id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg`},
  ]);

  return (
    <div>
      <Head>
        <title>RandomFox</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        {images.map(({id, url}) => (
          <div className="p-4" key={id}>
            <RandomFox image={url} />
          </div>
        ))}
      </>

    </div>
  );
};

export default Home;
