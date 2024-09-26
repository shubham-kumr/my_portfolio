import { useState } from 'react';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";

function ProfileCard() {
  const [buttonText, setButtonText] = useState('Resume');

  return (
    <div className="flex flex-col space-y-3 p-4 max-w-full">
      <span
        className="inline-block text-4xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl text-gray-300 dark:text-zinc-800"
        style={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(-8px) translateZ(0px)' }}
      >
        hi, i&apos;m{' '}
        <span className="holographic-text dark:holographic-text-dark">shubham</span> 👋
      </span>
      <span
        className="inline-block max-w-full text-base md:text-lg lg:text-xl text-gray-400 dark:text-gray-500"
        style={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(-8px) translateZ(0px)' }}
      >
        developer from india. i love building things and helping people. you can find me on the internet.<br />
        reach me @ <a href="mailto:contactme.shubhamkumar@gmail.com" className="text-gray-500 hover:text-purple-300">contactme.shubhamkumar@gmail.com</a>
      </span>
      <div className="flex items-center justify-between pt-4 space-x-3">
        <a
          href="https://github.com/shubham-kumr"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button text-gray-400 hover:bg-gray-600 dark:hover:bg-gray-300"
        >
          <FiGithub size={24} />
        </a>
        <a
          href="https://twitter.com/_whyshubham"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button text-gray-400 hover:bg-blue-500 dark:hover:bg-blue-400"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href="https://instagram.com/_shubhamkumar_"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button text-gray-400 hover:bg-pink-500 dark:hover:bg-pink-400"
        >
          <FiInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/shubham-kumr/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button text-gray-400 hover:bg-blue-600 dark:hover:bg-blue-600"
        >
          <FiLinkedin size={24} />
        </a>
        <a
          href="https://utfs.io/f/qrNhX5uLNRYD5lyYJgzUWgahfdreyB2KLPiqAoMHxC8Yulvk"
          download
          className="flex-grow min-w-[100px] text-sm px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 items-center justify-center transition-all duration-300 text-center"
          onMouseEnter={() => setButtonText('Hire Me?')}
          onMouseLeave={() => setButtonText('Resume')}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
