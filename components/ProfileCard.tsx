import { useState, useEffect } from 'react';
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

function ProfileCard() {
  const [buttonText, setButtonText] = useState('Resume');
  const [showPopup, setShowPopup] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const fadeTimer = setTimeout(() => {
        setShowPopup(false);
      }, 500); 
      return () => clearTimeout(fadeTimer);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col space-y-3 p-4 max-w-full">
      {showPopup && (
        <div
          className={`bg-blue-500 text-white text-center p-2 rounded mb-4 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        >
          For a better experience, please view on desktop.
        </div>
      )}
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
        reach me: <a href="mailto:theshubhamkumr@gmail.com" className="text-blue-500 hover:underline">theshubhamkumr@gmail.com</a>
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
          <FiTwitter size={24} />
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
          href="https://utfs.io/f/qrNhX5uLNRYDg3uOeF5FiJ73qDY9kybxocvC1p6ZdmHztB25"
          download
          className="flex-grow min-w-[100px] text-sm px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 items-center justify-center transition-all duration-300 text-center"
          onMouseEnter={() => setButtonText('Hire Me?')}
          onMouseLeave={() => setButtonText('My Resume')}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
