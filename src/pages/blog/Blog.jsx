import { Bounce } from '../../spring/Bounce';
import { BlogCard } from '../../ui/BlogCard/BlogCard';
import Navigation from '../../ui/Navigation/Navigation';
import { Footer } from '../../ui/footer/Footer';
import Typewriter from 'typewriter-effect';
import img1 from '../../images/CodeV2.png';
import { useNavigate } from 'react-router-dom';
import { BounceFromSide } from '../../spring/BounceFromSide';

export const Blog = () => {
  const navigate = useNavigate();
  const blog1Click = () => {
    navigate('/blog/how-to-succeed-in-internship');
  };
  return (
    <div className="mx-auto max-w-screen-lg md:ml-10 md:mr-10">
      <Navigation />
      <Bounce>
        <div className="pl-10 mt-40 text-6xl font-black w-7/12 tracking-wide">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('My Writing...')
                .pauseFor(200)
                .deleteAll()
                .typeString('My Blog')
                .start();
            }}
          />
        </div>
      </Bounce>
      <BounceFromSide delay={1000}>
        <div className="grid grid-cols-2 pl-10 pt-10">
          <BlogCard
            onC
            title={'How to Succeed in Software Engineer Internship'}
            description={
              'I give tips to some new software engineer interns on some helpful tips so they can be the best they can be'
            }
            img={img1}
            tagOne={'Software Engineer'}
            tagTwo={'Engineering'}
            tagThree={'Tech'}
            onClick={blog1Click}
          />
        </div>
      </BounceFromSide>

      <Footer />
    </div>
  );
};
