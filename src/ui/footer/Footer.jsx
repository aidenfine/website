/* eslint-disable jsx-a11y/anchor-is-valid */
import gitHubSvg from '../../svgs/gitHubsvg.svg';
import LinkedIn from '../../svgs/Linkedin.svg';

export const Footer = () => {
  return (
    <footer class="flex items-center justify-center mt-20 mb-5 py-4">
      <div class="flex items-center space-x-4">
        <a
          href="https://github.com/aidenfine"
          target="_blank"
          class="flex items-center"
          rel="noreferrer"
        >
          <img src={gitHubSvg} alt="img" />
          <span class="ml-2 text-xs">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/aidenfine/"
          target="_blank"
          rel="noreferrer"
          class="flex items-center"
        >
          <img src={LinkedIn} alt="img" />
          <span class=" text-xs ml-2">Linkedin</span>
        </a>
      </div>
    </footer>
  );
};
