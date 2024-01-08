import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='3a_software' className='w-28 object-contain rounded-full' />

        <h2 className='head_text'>Smart Reader</h2>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/alexace21/Smart-Reader", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Read Smart <br className='max-md:hidden' />
        <span>with</span> <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Smart Reader, an open-source text-processing software
        that transforms lengthy articles & blogs into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
