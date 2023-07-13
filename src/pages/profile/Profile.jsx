import { RoughNotation } from 'react-rough-notation';
import { Layout } from '../../layout/Layout';
import { Bounce } from '../../spring/Bounce';
import { Footer } from '../../ui/footer/Footer';
import Typewriter from 'typewriter-effect';
import { BLUEHIGHLIGHTER, PINKISHHIGHLIGHTER, YELLOWHIGHLIGHTER } from '../../colors';
import pdf from '../../resume/AidenFineResume.pdf';
import { BounceFromSide } from '../../spring/BounceFromSide';
import Lottie from 'lottie-react';
import dev from '../../ui/animations/dev.json';

export const Profile = () => {
  const style = {
    width: 300,
    height: 300,
  };
  const handleOpenPDF = () => {
    const pdfPath = pdf;
    fetch(pdfPath)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
      })
      .catch((error) => {
        console.error('Error opening PDF ', error);
      });
  };

  return (
    <div className="mx-auto max-w-screen-lg md:ml-10 md:mr-10">
      <Layout />
      <Bounce delay={300}>
        <div className="pl-10 mt-20 flex items-center">
          <div className="text-6xl font-black w-7/12 tracking-wide">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Aiden Fine')
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

          <div className="pl-5 text-lg flex items-center">
            <Lottie style={style} animationData={dev} loop />
          </div>
        </div>
        <div className="border border-gray-300 h-px flex-grow mt-5 mb-5"></div>
        <div className="pl-10 text-lg cursor-pointer">
          <BounceFromSide delay={2200}>
            <RoughNotation
              type="underline"
              animationDelay={3000}
              animationDuration={800}
              show={true}
              iterations={3}
              strokeWidth={3}
              padding={5}
              color={PINKISHHIGHLIGHTER}
            >
              <span onClick={handleOpenPDF}>My Resume</span>
            </RoughNotation>
            <p className="cursor-default">Email: aiden03fine@gmail.com</p>
          </BounceFromSide>
        </div>
        <h1 className="pt-5 text-3xl font-bold pl-10">About me</h1>
        <div className="pl-10 pt-5 text-lg">
          <p>
            I am a 19 year old software engineer from the Raleigh, NC area.
            <RoughNotation
              type="highlight"
              animationDelay={4000}
              animationDuration={800}
              show={true}
              iterations={2}
              strokeWidth={3}
              padding={5}
              color={YELLOWHIGHLIGHTER}
            >
              <span> I started programming in unity in 2017 </span>
            </RoughNotation>
            making small games for my game design class in high school. I took a break and started
            learning Python in 2021 making small CLI projects like a banking app with a database was
            my first major project at the time. Started doing more advanced web apps after my web
            development and programming class at my college. I finished the class with a B+, and
            fell in
            <RoughNotation
              type="highlight"
              animationDelay={5000}
              animationDuration={800}
              show={true}
              iterations={1}
              strokeWidth={3}
              padding={5}
              color="pink"
            >
              <span> love </span>
            </RoughNotation>
            with the
            <RoughNotation
              type="highlight"
              animationDelay={5000}
              animationDuration={800}
              show={true}
              iterations={1}
              strokeWidth={3}
              padding={5}
              color={BLUEHIGHLIGHTER}
            >
              <span> problem solving </span>
            </RoughNotation>
            side of this work . I started really working on my skills and a year later I started
            applying to jobs. After many applications I got an internship at STREAMETRIC. I have
            loved working there, everyone there is great and was very welcoming to me. I have grown
            my skill's very much the past year's for someone that has never enjoyed school, I have
            found what I truly love learning and haven't stopped furthering my skills, learning new
            best practices, technologies and more!
          </p>
        </div>
        <h1 className="pt-5 text-3xl font-bold pl-10">Job Experience</h1>
        <div>
          <h1 className="pl-10 pt-5 text-lg">STREAMETRIC - Software Engineer Intern</h1>
          <p className="pl-16 text-md">( June 2022 - Current )</p>
          <h1 className="pl-10 pt-5 text-lg">Domino's Pizza - Manager</h1>
          <p className="pl-16 text-md">( August 2019 - June 2022 )</p>
        </div>
      </Bounce>

      <Footer />
    </div>
  );
};
