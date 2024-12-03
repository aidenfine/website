import { RoughNotation } from 'react-rough-notation';
import { Layout } from '../../layout/Layout';
import { Bounce } from '../../spring/Bounce';
import { Footer } from '../../ui/footer/Footer';
import Typewriter from 'typewriter-effect';
import { BLUEHIGHLIGHTER, PINKISHHIGHLIGHTER, YELLOWHIGHLIGHTER } from '../../colors';
import pdf from '../../assets/resume/AidenFine_pdf.pdf';
import { BounceFromSide } from '../../spring/BounceFromSide';
import Lottie from 'lottie-react';
import dev from '../../ui/animations/dev.json';
import { GoBackHome } from '../../ui/back-home/GoBackHome';

export const Profile = () => {
  const isMobile = window.innerWidth <= 768;
  let show = true;
  if (isMobile) {
    show = false;
  } else {
    show = true;
  }
  const handleEmailClick = () => {
    window.open('mailto:aiden03fine@gmail.com');
  };
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
    <div className="max-w-screen-lg px-4 mx-auto">
      <Layout />
      <Bounce delay={300}>
        <div className="flex items-center pl-10 mt-20">
          <div className="w-7/12 text-6xl font-black tracking-wide">
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

          {!isMobile && (
            <div className="flex items-center pl-5 text-lg">
              <Lottie style={style} animationData={dev} loop />
            </div>
          )}
        </div>
        <div className="flex-grow h-px mt-5 mb-5 border border-gray-300"></div>
        <div className="pl-10 text-lg cursor-pointer">
          <BounceFromSide delay={2200}>
            {!isMobile && (
              <RoughNotation
                type="underline"
                animationDelay={3000}
                animationDuration={800}
                show={show}
                iterations={3}
                strokeWidth={3}
                padding={5}
                color={PINKISHHIGHLIGHTER}
              >
                <span onClick={handleOpenPDF}>My Resume</span>
              </RoughNotation>
            )}
            <p onClick={handleEmailClick}>
              Email:
              <span onClick={handleEmailClick} className="text-blue-300">
                {' '}
                aiden03fine@gmail.com
              </span>
            </p>
          </BounceFromSide>
        </div>
        <h1 className="pt-5 pl-10 text-3xl font-bold">About me</h1>
        <div className="pt-5 pl-10 text-lg">
          <p>
            I am a software engineer from the Raleigh, NC area.
            <RoughNotation
              type="highlight"
              animationDelay={4000}
              animationDuration={800}
              show={show}
              iterations={2}
              strokeWidth={3}
              padding={5}
              color={YELLOWHIGHLIGHTER}
            >
              <span> I started programming in unity in 2017 </span>
            </RoughNotation>
            making small games for my game design class in high school. Started learning Python in
            2021 making small CLI projects like a banking app with a database was my first major
            project at the time. Started doing more advanced web apps to further my knowledge. Began
            learning algorithms doing Leetcode on my free time to become a better problem solver. I
            fell in
            <RoughNotation
              type="highlight"
              animationDelay={5000}
              animationDuration={800}
              show={show}
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
              show={show}
              iterations={1}
              strokeWidth={3}
              padding={5}
              color={BLUEHIGHLIGHTER}
            >
              <span> problem solving </span>
            </RoughNotation>
            side of this work . I started really working on my skills and a year later I started
            applying to jobs. I got an internship at STREAMETRIC as a software engineer. I have
            loved working there, everyone there is great and was very welcoming to me. I have grown
            my skill's very much the past year's, I have found what I truly love learning and
            haven't stopped furthering my skills, learning new best practices, technologies and
            more!
          </p>
        </div>
        <h1 className="pt-5 pl-10 text-3xl font-bold">Job Experience</h1>
        <div>
          <h1 className="pt-5 pl-10 text-lg">STREAMETRIC - Software Engineer</h1>
          <p className="pl-16 text-md">( May 2024 - Current )</p>
        </div>
        <div>
          <h1 className="pt-5 pl-10 text-lg">STREAMETRIC - Software Engineer Intern</h1>
          <p className="pl-16 text-md">( June 2022 - May 2024 )</p>
        </div>
      </Bounce>
      <GoBackHome />
      <Footer />
    </div>
  );
};
