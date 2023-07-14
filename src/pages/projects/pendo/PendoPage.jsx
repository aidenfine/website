import { Layout } from '../../../layout/Layout';
import { Bounce } from '../../../spring/Bounce';
import { Footer } from '../../../ui/footer/Footer';
import Pendo from '../../../images/pendp.jpeg';
import { subTitle, text, title } from '../config';
import Locked from '../../../images/Locked.jpg';

export const PendoPage = () => {
  return (
    <div className="mx-auto max-w-screen-lg md:ml-10 md:mr-10">
      <Layout />
      <Bounce delay={300}>
        <div>
          <div className="shadow-lg mt-24">
            <img src={Pendo} alt="dashboard" />
          </div>
          <div className="mt-2 text-center">
            <h2 className="text-xl font-semibold">Technologies Used</h2>
            <p className="text-m text-gray-500">React TS | Git | Pendo.io</p>
          </div>
        </div>

        <div className={title}>Streametric V1 User Analytics</div>
        <h2 className={subTitle}>Intro</h2>
        <p className={text}>
          For a little background on how Streametric's product is setup there is customers with
          different groups of users in that one customer. So say company 1 has 5 groups each group
          would most likely use the Streametric product differently. My first project as an intern
          was to implement this user analytic service, this would have been very helpful to my
          manager and customers. We could focus on the main features that the customers were using,
          and find a way to make the features that user's were not using better.
        </p>
        <h2 className={subTitle}>The Big Focus</h2>
        <p className={text}>
          My manager needed a way to track user's activity on the site, we tried google analytic's
          but it was not doing enough. I was tasked to find a good user tracking service that would
          also keep cost's low. Since we were a smaller company we did not want to fork over a bunch
          of money for a service like this. I first wanted to attempt and implement my own code and
          write my own custom built user tracking service. Instead we found a company called Pendo
          and scheduled a meeting and they had exactly what we needed, a reliable, low cost, and
          feature rich service.
        </p>

        <div>
          <div className="shadow-lg mt-24">
            <img src={Locked} alt="locked" />
          </div>
        </div>

        <h2 className={subTitle}>How and Why?</h2>
        <p className={text}>
          I used a jwt token to get the user data from our backend using an API to pass that data
          into the pendo dashboard. The data I would collect is very minimal just so we could
          identify the user's but not invade privacy. We only wanted to store data that was useful
          to us and not anyone else, for example we used user's name, user id, customer name, and
          role. These were important because knowing the user's role was important to give focus to
          certain features if they were being used more by only one group. We learned more about our
          customer's and what was important to them. Keeping the data secure was another reason we
          picked pendo for this because we knew they had a good reputation.
        </p>

        <h2 className={subTitle}>Conclusion</h2>
        <p className={text}>
          This was my first project as an intern and I learned a lot from it, I learned how to
          really work with a development team, how important communication was and how important
          asking questions truly is. This service was a big help to my manager and is still being
          used in Streametric V1.
        </p>
      </Bounce>
      <Footer />
    </div>
  );
};
