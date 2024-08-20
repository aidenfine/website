import { Title, subTitle, Text, Author } from '../StyleConfig';
import Navigation from '../../../ui/Navigation/Navigation';
import { Footer } from '../../../ui/footer/Footer';
import { GoBackHome } from '../../../ui/back-home/GoBackHome';
import learningCurve from '../../../images/learning-curve.jpg';
import chart from '../../../images/chart.png';

export const WrittingThree = () => {
  return (
    <div className="max-w-screen-lg mx-auto md:ml-10 md:mr-10">
      <Navigation />
      <div className="flex flex-col items-center mt-20">
        <div className="shadow-lg max-w">
          <img src={chart} alt="chart" className="object-cover shadow-lg md:object-fill max-w " />
        </div>
      </div>

      <h1 className={Title}>The Future of AI</h1>
      <p className={Author}>Aiden Fine</p>
      <div>
        <p className={Text}>
          Let me start by saying this post is very opinionated and I am just speaking on what I
          think will happen, and what I already see is happening with the AI hype.
        </p>
        <h1 className={subTitle}>The Learning Curve</h1>
        <p className={Text}>
          When you are learning something new there is a learning curved applied to the skill. For
          most skills the first weeks or months you start to learn you get very proficient in a
          quick amount of time. Eventually you will hit a time where your leaning progress seems to
          slow down quickly. This is considered the plateau of the learning curve. The new progress
          you make at learning a skill seems very slowed down.
        </p>

        <div className="flex flex-col items-center mt-20">
          <div className="shadow-lg">
            <img
              src={learningCurve}
              alt="learningCurve"
              className="object-cover shadow-lg md:object-fill"
            />
          </div>
        </div>
        <p className={Text}>I believe this is where AI is at the moment.</p>
        <h1 className={subTitle}>Generative AI</h1>
        <p className={Text}>
          I am only going to be speaking about generative AI models in this since personally I know
          the most about the progress of these. Lets speak about GPT-3 and GPT-4. I remember first
          using GPT-3 and being amazed at what this model is producing. It was very helpful for
          explaining topics quickly that I didn't have a good understanding of. Now fast forward I
          used GPT-4o which was promoted as a better model overall. The GPT-4o scored a 88.7% on the
          MMMU benchmark right under Gemini ultra. GPT-3 Davinci (175B parameters) scored a 59.5%.
          Nice so a 29.2% increase right? If this is true why does the model feel the same if not
          worse? I can't count the amount of times where GPT-4o can't understand or give me a
          remotely close solution to a problem. I feel like GPT-3 did a much better job at
          programming problems. GPT-3 could help me solve some trivial problems that I maybe needed
          a small reminder on how to solve. Now GPT-4o can generate me some code, but its not
          scalable at all or has many bugs or overall is just not useable.
        </p>
        <h1 className={subTitle}>AI won't be taking jobs</h1>
        <p className={Text}>
          Many people have expressed concerns of AI taking programming jobs. I don't think this
          would happen at least not within the next 20-25 years. LLM's are just not there yet, they
          produce code that is below jr software engineer level. When it comes to understanding a
          codebase the LLMs cant compete with a real engineer. We have understanding and context
          that they don't.
        </p>
        <h1 className={subTitle}>Will AI take over the world?</h1>
        <p className={Text}>
          Another concern of some people is that AI wont be govern and used as a weapon to take over
          the world. While I think this is a little far fetched. I believe AI could take over the
          world, but it would't be explosions and murder of humans. I believe that AI could be used
          by people of power to create content that people may not ever want to look away from.
          Think of social media, we have algorithms to show us our most relevant content, content
          that has kids and teens addicted. Now think what would happen if AI generates content for
          us. We would never want to look away. AI could control us in a way that we maybe put the
          content we are consuming over our own health needs. Could be a little scary. Not sure how
          likely any of this would be I just don't think AI will become a terminator and kill us
          all. If something where to kill us all, it would be humans. We train the AI we built the
          AI. We need to keep AI open source not closed source. Its not good seeing openAI being a
          closed source for profit company. The whole machine learning community has been open
          source and open on the research.
        </p>
        <h1 className={subTitle}>Ending statements</h1>
        <p className={Text}>
          I think AI is amazing and I think that the research and time going into it is worth it. I
          enjoy learning more about it, writing this has shown me some data I wouldn't have found
          out otherwise. I am a software engineer not a machine learning engineer. I don't create
          generative AI so if anything in this is wrong I am open to hearing about it and will make
          changes accordingly.
        </p>
      </div>
      <div>
        <GoBackHome />
        <Footer />
      </div>
    </div>
  );
};
