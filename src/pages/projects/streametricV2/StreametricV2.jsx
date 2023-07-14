import { Layout } from '../../../layout/Layout';
import { Bounce } from '../../../spring/Bounce';
import { Footer } from '../../../ui/footer/Footer';
import { subTitle, text, title } from '../config';
import AlarmMobileView from '../../../images/AlarmMobileView.png';
import MangeAlarmButton from '../../../images/MangeAlarmBtn.png';
import { BounceFromSide } from '../../../spring/BounceFromSide';
import AlarmActive from '../../../images/alarmActive.png';
import streametricDashboard from '../../../images/streametricv2Dashboard.png';

export const StreametricV2 = () => {
  return (
    <div className="mx-auto max-w-screen-lg md:ml-10 md:mr-10">
      <Layout />
      <Bounce delay={800}>
        <div>
          <div className="shadow-lg mt-24">
            <img src={streametricDashboard} alt="dashboard" />
          </div>
          <div className="mt-2 text-center">
            <h2 className="text-xl font-semibold">Technologies Used</h2>
            <p className="text-m text-gray-500">React TS | Git | AWS | Postman</p>
          </div>
        </div>
        <div className={title}>Streametric V2 Features</div>

        <h2 className={subTitle}>Alarm's</h2>
        <p className={text}>
          I did a lot of work on the Alarm's features on the V2 version I will only talk about a
          few. I create the mobile view for the main alarm page. This page is important because most
          user's will be on mobile meaning the design and implementation needs to be bug free, easy
          to read, fast and responsive. The card in this mobile view has all the important data that
          the customer will be looking for, meaning less clicks to see what they need. This mobile
          view is all that, with a user friendly UI and a simple click of a button to bring you to
          the alarm settings in case the user needs to change some settings while on mobile.
        </p>
        <BounceFromSide delay={900}>
          <div className="flex justify-center">
            <div className="flex items-center">
              <img src={AlarmMobileView} alt="mobile view" className="max-w-1/2 mr-2 h-auto" />
              <img src={MangeAlarmButton} alt="manage alarms" className="max-w-1/2 h-auto" />
            </div>
          </div>
        </BounceFromSide>

        <h2 className={subTitle}>Site Overview</h2>
        <p className={text}>
          The site overview is an important feature of our dashboard. I did small minor frontend
          changes to this overview. I added a icon based on the alarm activity. This is important
          for the end user for a quick check on the status. The icon also gives off a tooltip based
          on the priority with a message of the alarm if one.
          <div>
            <div className="flex justify-center">
              <img src={AlarmActive} alt="Active Alarm" />
            </div>
            Some other small UI changes on the site overview was rounding well digits, they would
            always have many decimal places all I did was round it to the nearest first decimal
            place for easier readability.
          </div>
        </p>

        <h2 className={subTitle}>Conclusion</h2>
        <p className={text}>
          While I didn't talk about a lot of work because it was just small things I jumped on this
          project later after everyone so I took a little longer to get caught up on everything. I
          didn't want to include anything that wasn't on staging either, since those could still be
          up for changes sometime. I am still currently working on V2 project and getting more
          deeper and intense tasks, I will start working on backend as well since I have
          familiarized myself with the frontend so far.
        </p>
      </Bounce>
      <Footer />
    </div>
  );
};
