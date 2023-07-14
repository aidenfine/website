/* eslint-disable jsx-a11y/anchor-is-valid */
import gitHubSvg from '../../svgs/gitHubsvg.svg';
import LinkedIn from '../../svgs/Linkedin.svg';

export const Footer = () => {
  return (
    <>
      <div className="border border-gray-300 h-px flex-grow mt-10 mb-5"></div>
      <footer className="flex items-center justify-center mb-5 py-4">
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/aidenfine"
            target="_blank"
            className="flex items-center"
            rel="noreferrer"
          >
            <img src={gitHubSvg} alt="img" />
            <span className="ml-2 text-xs">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aidenfine/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <img src={LinkedIn} alt="img" />
            <span className=" text-xs ml-2">Linkedin</span>
          </a>
        </div>
      </footer>
    </>
  );
};
