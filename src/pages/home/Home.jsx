import Navigation from '../../ui/Navigation/Navigation';
import Typewriter from 'typewriter-effect';
import { RoughNotation } from 'react-rough-notation';
import Lottie from 'lottie-react';
import Circle from '../../ui/animations/circle.json';

import {
  BLUEHIGHLIGHTER,
  BLUEV2HIGHLIGHTER,
  HIGHLIGHTONECOLOR,
  PINKISHHIGHLIGHTER,
  YELLOWHIGHLIGHTER,
} from '../../colors';
import { Bounce } from '../../spring/Bounce';
import { Footer } from '../../ui/footer/Footer';
import { HomeSection2 } from './HomeSection2';
import { BounceFromSide } from '../../spring/BounceFromSide';

export const Home = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="max-w-screen-lg px-4 mx-auto">
      <Navigation />
      <div className="flex">
        <Bounce delay={400}>
          <div className="w-7/12 pl-10 mt-40 text-6xl font-black tracking-wide">
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
          <div className="flex pt-5 pl-10 pr-10">
            <div className="text-xl xl:w-7/12 lg:w-7/12 lg:text-lg xl:text-xl md:text-sm sm:text-sm sm:w-full">
              <p>
                👋 Hello, I'm Aiden Fine, a
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
                    here!{' '}
                  </a>
                </RoughNotation>
              </p>
            </div>
            {!isMobile && (
              <div className="w-64 h-64 ml-40 md:w-45 md:h-45">
                <BounceFromSide delay={1000}>
                  <Lottie animationData={Circle} />
                </BounceFromSide>
              </div>
            )}
          </div>
        </Bounce>
      </div>
      {/* THIS IS SECTION 2 OF HOME PAGE */}
      <HomeSection2 />
      <Footer />
    </div>
  );
};
