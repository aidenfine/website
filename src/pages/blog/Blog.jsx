import { Bounce } from '../../spring/Bounce';
import { BlogCard } from '../../ui/BlogCard/BlogCard';
import Navigation from '../../ui/Navigation/Navigation';
import { Footer } from '../../ui/footer/Footer';
import Typewriter from 'typewriter-effect';
import img1 from '../../images/CodeV2.png';
import tailwind2 from '../../images/tailwindCSS.jpeg';
import { useNavigate } from 'react-router-dom';
import aiImg from '../../images/ai-img.webp';
import { BounceFromSide } from '../../spring/BounceFromSide';
import cloud from '../../images/cloud_compte.webp';
export const Blog = () => {
  const navigate = useNavigate();
  const blog1Click = () => {
    navigate('/blog/how-to-succeed-in-internship');
  };

  const blog2Click = () => {
    navigate('/blog/why-I-switched-to-tailwind');
  };
  const blog3Click = () => {
    navigate('/blog/the-future-of-ai');
  };
  const blog4Click = () => {
    navigate('/blog/reducing-server-load');
  };
  return (
    <div className="max-w-screen-lg px-4 mx-auto">
      <Navigation />
      <Bounce>
        <div className="w-7/12 pl-10 mt-40 text-6xl font-black tracking-wide">
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
        <div className="justify-center px-6 lg:grid lg:grid-cols-2 lg:px-10">
          <BlogCard
            title={'Optimizing API Calls: How I Reduced Requests by 50%'}
            description={
              'In this blog I talk about how I optimized our codebase by reducing endpoint calls by 50% improving performance, cost and server load.'
            }
            tagOne={'Software Engineer'}
            tagTwo={'Optimization'}
            tagThree={'Tech'}
            img={cloud}
            onClick={blog4Click}
            onC
          />
          <BlogCard
            onC
            title={'What I think will happen with AI'}
            description={
              'Everyone is worried about AI. I am just going to share what I think on the topic'
            }
            img={aiImg}
            tagOne={'Software Engineer'}
            tagTwo={'AI'}
            tagThree={'Tech'}
            onClick={blog3Click}
          />
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
          <BlogCard
            onC
            title={'Why I am Switching to Tailwind CSS'}
            description={
              'Switching to tailwind css is the best decision I have made in my development career.'
            }
            img={tailwind2}
            tagOne={'Software Engineer'}
            tagTwo={'Style'}
            tagThree={'Tech'}
            onClick={blog2Click}
          />
        </div>
      </BounceFromSide>

      <Footer />
    </div>
  );
};
