import Navigation from '../../ui/Navigation/Navigation';
import Typewriter from 'typewriter-effect';
import { RoughNotation } from 'react-rough-notation';
import { useNavigate } from 'react-router-dom';
import {
  BLUEHIGHLIGHTER,
  BLUEV2HIGHLIGHTER,
  HIGHLIGHTONECOLOR,
  PINKISHHIGHLIGHTER,
  YELLOWHIGHLIGHTER,
} from '../../colors';
import { Bounce } from '../../spring/Bounce';
import image from '../../images/IMG_0330.png';
import HdContractingImg from '../../images/dashboard-hd.png';
import pendoDashboardImg from '../../images/pendoDashboard.png';
import streametricV2Dashboard from '../../images/streametricv2Dashboard.png';

export const Home = () => {
  const navigate = useNavigate();

  const project2ImgClick = () => {
    navigate('/project-hdcontracting');
  };

  const project1ImgClick = () => {
    navigate('/project-pendoDashboard');
  };
  return (
    <div className="mx-auto max-w-screen-lg">
      <Navigation />
      <div className="flex">
        <Bounce delay={400}>
          <div className="pl-10 mt-40 text-6xl font-black w-7/12 tracking-wide">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Welcome!')
                  .callFunction(() => {
                    typewriter
                      .pauseFor(3000)
                      .deleteAll()
                      .callFunction(() => {});
                  })
                  .start();
              }}
            />
          </div>
          <div className="flex pl-10 pt-5">
            <div className="text-xl w-7/12">
              <p>
                Hello, I'm Aiden Fine, a
                <RoughNotation
                  type="highlight"
                  multiline={true}
                  animationDelay={1700}
                  show={true}
                  padding={[0, 4]}
                  iterations={1}
                  animationDuration={300}
                  color={HIGHLIGHTONECOLOR}
                >
                  <span> software engineer </span>
                </RoughNotation>
                located in Raleigh, NC, with
                <RoughNotation
                  type="highlight"
                  multiline={true}
                  animationDelay={2800}
                  strokeWidth={2}
                  show={true}
                  padding={[0, 2]}
                  iterations={1}
                  animationDuration={300}
                  color={YELLOWHIGHLIGHTER}
                >
                  <span> two years of experience. </span>
                </RoughNotation>
                I have developed a strong foundation in various programming languages and
                frameworks. I am constantly wanting to explore and learn about new technologies.
              </p>
              <p className="mt-5">
                I have on job experience working with
                <RoughNotation
                  type="underline"
                  animationDelay={5600}
                  animationDuration={1800}
                  strokeWidth={1.5}
                  multiline={true}
                  show={true}
                  iterations={3}
                  padding={5}
                  color={BLUEHIGHLIGHTER}
                >
                  <span> React, AWS, and Python. </span>
                </RoughNotation>
                Working on
                <RoughNotation
                  type="highlight"
                  animationDelay={6000}
                  animationDuration={300}
                  show={true}
                  iterations={2}
                  padding={5}
                  color={BLUEHIGHLIGHTER}
                >
                  <span> frontend </span>
                </RoughNotation>
                and
                <RoughNotation
                  type="highlight"
                  animationDelay={6700}
                  animationDuration={300}
                  show={true}
                  iterations={2}
                  padding={5}
                  color={PINKISHHIGHLIGHTER}
                >
                  <span> backend </span>
                </RoughNotation>
                in a SCRUM environment.
              </p>
              <p className="mt-5">
                I am always looking for great opportunities, so if you want to connect, click
                <RoughNotation
                  type="underline"
                  animationDelay={9000}
                  animationDuration={300}
                  strokeWidth={3}
                  show={true}
                  iterations={2}
                  padding={5}
                  color={BLUEV2HIGHLIGHTER}
                >
                  <a href="https://www.linkedin.com/in/aidenfine/" rel="noreferrer" target="_blank">
                    {' '}
                    here{' '}
                  </a>
                </RoughNotation>
              </p>
            </div>
            <div>
              <img
                src={image}
                alt="img of me "
                className="ml-5 pl-10 object-cover h-96 rounded-sm"
              />
            </div>
          </div>
        </Bounce>
      </div>
      {/* THIS IS SECTION 2 OF HOME PAGE */}
      <Bounce delay={800}>
        <div className="pl-10 pt-5 pt-20">
          <h1 className="text-3xl font-bold">My Work</h1>
          <div className="grid grid-cols-1 gap 6 pt-10">
            <div className="flex flex-col items-center ">
              <div className="shadow-lg">
                <img
                  src={pendoDashboardImg}
                  alt="Pendo"
                  className="object-cover rounded-md shadow-lg"
                  onClick={project1ImgClick}
                />
              </div>
              <div className="mt-2 text-center">
                <h2 className="text-xl font-semibold">Streametric V1 User Analytics</h2>
                <p className="text-m text-gray-500">
                  I setup Pendo to track user activity enabling better support for the business by
                  gaining insight into user behavior to optimize their experience
                </p>
                <p className="text-xs text-gray-500 pt-1.5">Click the image above to learn more </p>
              </div>
            </div>

            <div className="border border-gray-300 h-px flex-grow mt-5 mb-5"></div>

            <div className="flex flex-col items-center ">
              <div className="shadow-lg">
                <img
                  src={HdContractingImg}
                  alt="HD Contracting Dashboard"
                  className="object-cover rounded-md shadow-lg"
                  onClick={project2ImgClick}
                />
              </div>
              <div className="mt-2 text-center">
                <h2 className="text-xl font-semibold">HD Contracting Dashboard</h2>
                <p className="text-m text-gray-500">
                  Full Stack Application built to help a local business manage their everyday needs{' '}
                </p>
                <p className="text-xs text-gray-500 pt-1.5">Click the image above to learn more </p>
              </div>
            </div>

            <div className="border border-gray-300 h-px flex-grow mt-5 mb-5"></div>

            <div className="flex flex-col items-center ">
              <div className="shadow-lg">
                <img
                  src={streametricV2Dashboard}
                  alt="Streametric"
                  className="object-cover rounded-md shadow-lg"
                  onClick={project2ImgClick}
                />
              </div>
              <div className="mt-2 text-center">
                <h2 className="text-xl font-semibold">Streamtric V2</h2>
                <p className="text-m text-gray-500">
                  {' '}
                  Contributed to many features that are provied in the Streametric V2 Version{' '}
                </p>
                <p className="text-xs text-gray-500 pt-1.5">Click the image above to learn more </p>
              </div>
            </div>
          </div>
        </div>
      </Bounce>
    </div>
  );
};
