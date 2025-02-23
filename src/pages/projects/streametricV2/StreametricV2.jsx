import { Layout } from '../../../layout/Layout';
import { Bounce } from '../../../spring/Bounce';
import { Footer } from '../../../ui/footer/Footer';
import { subTitle, text, title } from '../config';
import { BounceFromSide } from '../../../spring/BounceFromSide';
import streametricDashboard from '../../../images/streametricv2Dashboard.png';
import { GoBackHome } from '../../../ui/back-home/GoBackHome';
import books from '../../../images/books.webp';
import robot from '../../../images/robot.jpg';

export const StreametricV2 = () => {
  return (
    <div className="max-w-screen-lg mx-auto md:ml-10 md:mr-10">
      <Layout />
      <Bounce delay={800}>
        <div>
          <div className="mt-24 shadow-lg">
            <img src={streametricDashboard} alt="dashboard" />
          </div>
          <div className="mt-2 text-center"></div>
        </div>
        <div className={title}>Streametric V2</div>

        <h2 className={subTitle}>Themes</h2>
        <p className={text}>
          At Streametric, we frequently encountered the challenge of customers requiring specific
          colors and logos to white-label our application. Initially, our team addressed this by
          hardcoding theme configurations for special cases, but this approach was not scalable.
          <br />
          <br />
          To solve this, I led a project to migrate theme handling to a dedicated microservice. I
          designed and implemented APIs that streamlined the theme creation process, eliminating the
          need for developers to manually configure colors for each customer. These APIs allowed
          users to: Select colors for different parts of the application Upload custom logos and
          favicons Manage multiple theme variations The microservice stored color schemes in
          DynamoDB and logos in Amazon S3, ensuring efficient and scalable storage. As a result,
          this solution improved the onboarding experience for new clients, simplified theme
          implementation, and removed the need for direct developer involvement in theme setup.
        </p>

        <h2 className={subTitle}>App Wide Sorting and Searching</h2>
        <p className={text}>
          As our customer base grew, we needed a way for users to efficiently find the information
          they needed. Without search and filtering capabilities, navigating large datasets became
          time-consuming and frustrating.
          <br />
          <br />
          To address this, I implemented a custom search and filtering algorithm custom built to fit
          our data. This solution was applied in key areas where users frequently dealt with large
          amounts of information. The algorithm combined natural sorting with custom logic to handle
          specific edge cases, as standard natural sorting alone didn’t fully meet our needs.
          <br />
          <br />
          This enhancement significantly improved UI/UX, making data retrieval faster and more
          intuitive. The result was a better customer experience, reducing frustration and improving
          efficiency. Solving this problem was both challenging and rewarding, as I can’t imagine
          working with large datasets without a search solution!
        </p>
        <BounceFromSide delay={900}>
          <div className="flex justify-center">
            <img src={books} alt="how our customers felt :(" />
          </div>
        </BounceFromSide>

        <h2 className={subTitle}>Full Coverage Tests</h2>
        <p className={text}>
          As our codebase grew, so did the risks associated with releases. The team encountered
          major issues post-release due to insufficient test coverage. To ensure smoother, more
          reliable deployments, we needed to improve our testing strategy.
          <br />
          <br />
          I took the lead on this initiative by managing a team of interns, setting a goal of 90%
          test coverage for our backend unit tests. Using pytest, we divided the work, with each
          team member focusing on the microservices they were most familiar with. Initially planned
          as a month-long effort, we streamlined the process and achieved our goal in just two
          weeks.
          <br />
          <br />
          Simultaneously, I collaborated with another team to enhance frontend unit testing and E2E
          testing. We integrated E2E tests into our CI/CD pipeline, running them weekly and before
          major releases. Our frontend unit tests now catch potential issues before code is merged,
          further improving stability.
          <br />
          <br />
          Since implementing these improvements, post-release issues have been reduced to near zero,
          leading to significantly smoother deployments and an overall better development workflow.
        </p>
        <BounceFromSide delay={900}>
          <div className="flex justify-center">
            <img src={robot} alt="Pipeline working hard" />
          </div>
        </BounceFromSide>
      </Bounce>
      <GoBackHome />
      <Footer />
    </div>
  );
};
