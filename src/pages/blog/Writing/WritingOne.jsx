import { Title, subTitle, Text, Author } from '../StyleConfig';
import CodeV2 from '../../../images/CodeV2.png';
import Meeting from '../../../images/MeetingReal.png';
import ImposterSyndrome from '../../../images/Imposter-Syndrome.png';
import Navigation from '../../../ui/Navigation/Navigation';
import { Footer } from '../../../ui/footer/Footer';

export const WrittingOne = () => {
  return (
    <div className="mx-auto max-w-screen-lg md:ml-10 md:mr-10">
      <Navigation />
      <div className="flex flex-col items-center mt-20">
        <div className="shadow-lg max-w">
          <img src={CodeV2} alt="Code" className="object-cover shadow-lg md:object-fill max-w " />
        </div>
      </div>

      <h1 className={Title}>How to Succeed in Software Engineer Internship</h1>
      <p className={Author}>Aiden Fine</p>
      <div>
        <p className={Text}>
          My name is Aiden Fine and I am currently working as a software engineer intern at a small
          company with roughly 20–50 employees. I have been with this company for around a year and
          I love it one of the best people I have worked with. I am on track for a full-time offer
          in a year once I graduate, so I feel I can teach some other people how to succeed in their
          internships.
        </p>
        <h1 className={subTitle}>The First Week</h1>
        <p className={Text}>
          I still remember the first day I walked in ready to write code and make a big change in
          the company. That is not what happened, I thought I knew everything I needed for my
          internship. I was very wrong and I don't think that is something to be embarrassed about.
          Seeing the codebase was intimidating it was not what I was used to when writing my own
          code. My first task was learning about AWS (Amazon Web Services) and just reading up on
          the codebase on the documentation. So my first week I wasn't coding but reading up on the
          technologies you will be using IS VERY important I cannot stress that enough.
        </p>

        <div className="flex flex-col items-center mt-20">
          <div className="shadow-lg">
            <img src={Meeting} alt="Meeting" className="object-cover shadow-lg md:object-fill" />
          </div>
        </div>
        <h1 className={subTitle}>Meeting's</h1>
        <p className={Text}>
          Communication and meeting were new to me since this was my first real/professional job, we
          worked in scrum which involved stand-ups, sprint planning, and sprint reviews. These
          meetings while may not seem too important or boring are definitely something you need to
          pay attention to, this keeps you up to date on your team's progress, issues, etc. If you
          want to learn more about scrum click visit this.
        </p>
        <h1 className={subTitle}>The "Dumb" Questions</h1>
        <p className={Text}>
          Questions are not dumb, I understand that you do not want to look like you don't know what
          you are doing because I was in the same position. Just ask the question while you may feel
          embarrassed every one of your team members has been in your position before. The times I
          never asked the dumb question it came back and bit me later because I didn't ask. Yes
          sometimes you ask a question and the answer is right in front of you but that is nothing
          to be ashamed of.
        </p>
        <h1 className={subTitle}>Imposter Syndrome</h1>
        <p className={Text}>
          One of the biggest things that I struggled with was imposter syndrome, I felt I didn't
          deserve this opportunity or position in the job. I would be stuck on a task and everyone
          else making PRs and having to say I am still stuck on the same bug in my stand-ups. I
          found that getting help from other people definitely helped me I saw how they would solve
          a problem that I couldn’t and learn from that experience. The other point is that you
          wouldn't have gotten the job offer if you didn't deserve the opportunity. Your manager saw
          something in you and hired you for a reason. A year later I still sometimes feel I am not
          doing good enough and the imposter syndrome comes back every once and a While but I do not
          let that affect my work and I have learned to use that feeling to get my work done better.
        </p>

        <div className="flex flex-col items-center mt-20">
          <div className="shadow-lg max-w">
            <img
              src={ImposterSyndrome}
              alt="Imposter Syndrome"
              className="object-cover shadow-lg md:object-fill max-w "
            />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
