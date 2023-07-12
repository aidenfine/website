import './App.css';
import Navigation from './ui/Navigation/Navigation';
import Typewriter from 'typewriter-effect';
import { RoughNotation } from 'react-rough-notation';
import {
  BLUEHIGHLIGHTER,
  BLUEV2HIGHLIGHTER,
  HIGHLIGHTONECOLOR,
  PINKISHHIGHLIGHTER,
  YELLOWHIGHLIGHTER,
} from './colors';
import { Bounce } from './spring/Bounce';

function App() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <Navigation />
      <div>
        <Bounce>
          <div className="pl-10 mt-40 text-6xl font-black">
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
                  strokeWidth={3}
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
                  strokeWidth={3}
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
                I am always looking for great opportunities so if you want to connect click
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
                  <a href="https://www.linkedin.com/in/aidenfine/" target="_blank">
                    {' '}
                    here{' '}
                  </a>
                </RoughNotation>
              </p>
            </div>
          </div>
        </Bounce>
      </div>
    </div>
  );
}

export default App;
