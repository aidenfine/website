import { Title, subTitle, Text, Author } from '../StyleConfig';
import Navigation from '../../../ui/Navigation/Navigation';
import { Footer } from '../../../ui/footer/Footer';
import { GoBackHome } from '../../../ui/back-home/GoBackHome';
import optimized from '../../../images/o.jpg';
import aws_chart from '../../../images/aws_chart.png';
import garbage from '../../../images/garbage.webp';
import re_render from '../../../images/re_render.jpg';

export const ReducingServerLoadBlog = () => {
  return (
    <div className="max-w-screen-lg mx-auto md:ml-10 md:mr-10">
      <Navigation />
      <div className="flex flex-col items-center mt-20">
        <div className="shadow-lg max-w">
          <img
            src={aws_chart}
            alt="chart"
            className="object-cover shadow-lg md:object-fill max-w "
          />
        </div>
      </div>

      <h1 className={Title}>Optimizing API Calls: How I Reduced Requests by 50%</h1>
      <p className={Author}>Aiden Fine</p>
      <div>
        <p className={Text}>
          Cloud computing can be costly, so optimizing expenses is crucial. In this post, I’ll walk
          you through how I successfully reduced our server calls by 50%, sharing the methods and
          strategies I used to achieve these savings.
        </p>
        <h1 className={subTitle}>The Problem</h1>
        <p className={Text}>
          We encountered re-rendering issues on the frontend that led to excessive API calls,
          sometimes triggering requests five times more than necessary on certain pages.
          Additionally, we frequently fetched the same data multiple times across different
          components, resulting in redundant requests and unnecessary DynamoDB reads. This
          inefficiency not only impacted performance but also increased operational costs.
        </p>

        <div className="flex flex-col items-center mt-20">
          <div className="shadow-lg">
            <img
              src={optimized}
              alt="optimized"
              className="object-cover shadow-lg md:object-fill"
            />
          </div>
        </div>
        <h1 className={subTitle}>Challenges</h1>
        <p className={Text}>
          One of the biggest challenges I encountered was getting caching right—it’s incredibly
          powerful when implemented correctly but can lead to unexpected behavior when it’s not. We
          aimed to cache heavy API responses on the server side to improve performance, but we ran
          into several issues:
          <br />
          <br />
          - Cache expiration problems—In some cases, the cache would never expire, leading to
          permanently stale data.
          <br />
          <br />
          - Determining the optimal TTL (Time to Live)—We needed a balance between maximizing cache
          duration and ensuring users always saw up to date data. If a user made changes but didn't
          see them reflected immediately, they might think something was broken, which we wanted to
          avoid at all costs.
          <br />
          <br />
          We also had the issue of react re renders tracking these down could tend to be pretty
          tough since our state management was kind of a mess in some places. States from context
          providers would change unexpectedly leading to multiple endpoints being called. While
          digging into these state issues we want to at the same time clean them up so we don't have
          to run into these issues further down the line.
        </p>
        <h1 className={subTitle}>Cache, Cache, Cache!</h1>
        <p className={Text}>
          Who doesn’t love caching? It makes applications faster, more responsive, and cheaper. I
          focused heavily on frontend caching, as it was a safer and more manageable alternative to
          server-side caching, which had previously introduced issues and risks. At the time,
          frontend caching was the best option, though I’d like to move more of it to the server in
          the future to support potential headless implementations.
          <br />
          <br />
          To ensure reliability, I implemented an in-memory cache with fallback mechanisms. If the
          cache failed, we fell back to fetching fresh data if the cache was valid, we used it to
          reduce API calls. Additionally, I designed custom garbage collection intervals based on
          user data, allowing us to keep cached data available as long as possible without risking
          data loss.
        </p>

        <div className="flex flex-col items-center mt-20">
          <div className="shadow-lg">
            <img src={garbage} alt="gc" className="object-cover shadow-lg md:object-fill" />
          </div>
        </div>
        <h1 className={subTitle}>End the re-renders</h1>
        <p className={Text}>
          Several of our context providers were causing excessive re-renders, with an
          overly-optimized auth provider being the main culprit. One particular state was changing
          too frequently without needing to, which triggered unnecessary re-renders.
          <br />
          <br />
          This was a tricky issue to resolve because any mistake could lead to significant problems
          specifically, the auth state was a crucial data point for making API calls, and an
          incorrect implementation could result in unauthorized access.
          <br />
          <br />
          Once I successfully addressed the state management issue, I was able to focus on
          optimizing the specific components responsible for the re-renders, significantly improving
          performance.
          <br />
          <br />
          From there, I moved my way through the list of problematic components. useMemo proved to
          be a powerful tool when used correctly and in the right places, helping to reduce many of
          our re-renders. In other cases, optimizing the useEffect dependency array was key some
          states were being passed that changed too frequently, causing unnecessary re-renders.
        </p>
        <div className="flex flex-col items-center mt-20">
          <div className="shadow-lg">
            <img
              src={re_render}
              alt="re render"
              className="object-cover shadow-lg md:object-fill"
            />
          </div>
        </div>
        <h1 className={subTitle}>Summary</h1>
        <p className={Text}>
          Tackling this issue was a significant challenge, but I'm glad I took it on. We've seen
          improvements across the board, from faster load times and optimized reads and writes to
          DynamoDB, leading to an overall better user experience. In this post, I’ve outlined some
          of the key strategies I used to address the problem, and the solutions have been in place
          for the last six months with great results. This experience taught me a lot about state
          management, data caching, React's render tree, and best practices for these areas. In the
          end, this was a much-needed change, and the positive impact has been clear.
        </p>
      </div>
      <div>
        <GoBackHome />
        <Footer />
      </div>
    </div>
  );
};
