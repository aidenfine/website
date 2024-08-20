import { Layout } from '../../../layout/Layout';
import hdContractingImg from '../../../images/dashboard-hd.png';
import customerTable from '../../../images/customerTable.png';
import { Bounce } from '../../../spring/Bounce';
import { Footer } from '../../../ui/footer/Footer';
import { subTitle, text, title } from '../config';
import { GoBackHome } from '../../../ui/back-home/GoBackHome';

export const HdContractingPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto md:ml-10 md:mr-10">
      <Layout />
      <Bounce delay={300}>
        <div>
          <div className="mt-24 shadow-lg">
            <img src={hdContractingImg} alt="dashboard" />
          </div>
          <div className="mt-2 text-center">
            <h2 className="text-xl font-semibold">Technologies Used</h2>
            <p className="text-gray-500 text-m">React JS | SQL | Git</p>
          </div>
        </div>

        <div className={title}>Datamind</div>
        <h2 className={subTitle}>Intro</h2>
        <p className={text}>
          This dashboard was custom made for a local business that specializes in contracting, they
          were tired of using many different websites for the tools they needed. So I offered to
          build them a full stack application for their needs. This site was built from scratch
          using Node.Js as backend MongoDB as a database and React Js for the frontend. This project
          took me three to four months working as the only developer while also in school and
          working my software engineer internship.
        </p>
        <h2 className={subTitle}>The Big Focus</h2>
        <p className={text}>
          Getting the features the business owner wants while also keeping the website secure was my
          biggest concern. I wanted the owner to have all the features he needed and while I did run
          into many issues when trying to get these features deployed I ended up using my problem
          solving skills to solve any issues I ran into. I made sure security was the main focus on
          this application since it would be holding user's personal data. That is why in the
          database I keep the bare minimum amount of data that is needed. This includes data like
          name, email, address, and notes. I wanted this site to not keep any payment information
          for users. The application is not able to be accessed by anyone until the owner accepts
          them using the built in manage employee feature. So far this has worked well with no data
          leak or unauthorized access.
        </p>

        <div>
          <div className="mt-24 shadow-lg">
            <img src={customerTable} alt="Customer Table" />
          </div>
          <div className="mt-2 text-center">
            <h2 className="text-xl font-semibold">Customer Table with Mock Data</h2>
          </div>
        </div>

        <h2 className={subTitle}>What did I learn?</h2>
        <p className={text}>
          This is something I always ask myself after every project is "What did I really learn from
          this?". That is the whole reason I picked this project up in the first place is to learn
          new things. So some of the things I learned is making a full stack application is a lot
          more tedious than I originally anticipated. I found myself a lot thinking I am done with
          this but there was another 5 small tiny features that needed to be added. I also learned
          how to think like a user because while I built the application and could check the network
          logs if something worked. A normal user is not going to be doing that. I had to build many
          small helper icons, tooltips, and snackbar's just to confirm to the user that something
          worked. Learning how to write API's was another thing I feel I learned the most in this
          project, I wrote a bunch of API's for this project from scratch and this was something I
          had not really done too many times before. I loved working on this project I learned so
          much and would do it again.
        </p>
      </Bounce>
      <GoBackHome />
      <Footer />
    </div>
  );
};
