import { Title, subTitle, Text, Author } from '../StyleConfig';
import Navigation from '../../../ui/Navigation/Navigation';
import { Footer } from '../../../ui/footer/Footer';
import { GoBackHome } from '../../../ui/back-home/GoBackHome';
import MobilePhone from '../../../images/mobilePhome.jpg'
import TailwindCSS from '../../../images/tailwindCSS.jpeg'


export const WritingTwo = () => {
    return(
        <div className="max-w-screen-lg mx-auto md:ml-10 md:mr-10">
        <Navigation />
        <div className="flex flex-col items-center mt-20">
          <div className="shadow-lg max-w">
            <img src={TailwindCSS} alt="Code" className="object-cover shadow-lg md:object-fill max-w " />
          </div>
        </div>
  
        <h1 className={Title}>Why I Switched from MUI to Tailwind </h1>
        <p className={Author}>Aiden Fine</p>
        <div>
          <p className={Text}>
            I have been a big fan of Material UI for a while the company I worked at used it, 
            I used it on my personal projects. For this portfolio I wanted this to be a little different
            you can tell when a site has used css frameworks like bootstrap, MUI, and even tailwind. I decided to
            switch to tailwind for this portfolio and I don't think I will be going back to MUI or bootstrap.
          </p>
          <h1 className={subTitle}>First Impressions</h1>
          <p className={Text}>
            I had to read up on the tailwind docs a lot when I wanted to style my components but an extension named
            "Tailwind CSS IntelliSense" has helped so much because it gives you that natural intelliSense feeling 
            you get with programming languages. I liked the fact that I could really customize the components I built 
            It felt more creating my own style instead of usings MUI's style or bootstraps style. Building my own components 
            was easy with tailwind.
          </p>
  
          <div className="flex flex-col items-center mt-20">
            <div className="shadow-lg">
              <img src={MobilePhone} alt="Meeting" className="object-cover shadow-lg md:object-fill" />
            </div>
          </div>
          <h1 className={subTitle}>Layout</h1>
          <p className={Text}>
            Laying out my portfolio was very easy with tailwind while MUI and bootstrap has similar ways of
            laying out sites in columns or grid layout, tailwind made it very easy. I love how my site looks and wont
            be changing the layout anytime soon. I like the single column layout to really focus on what is on the screen.
          </p>
          <h1 className={subTitle}>Mobile Responsive</h1>
          <p className={Text}>
            The number one reason I will be sticking with tailwind is because of how easy it is 
            to make the site mobile responsive. I had to only write a couple more lines of code to make my whole site 
            look good on mobile. When I mainly tested this site to be viewed on a computer. I will not be switching back to 
            any other css frameworks because tailwind has the features to make css easy, my own style, and while keeping 
            mobile user's happy. The less code I have to write to make my site easy to view on any device the better.

          </p>
        </div>
        <div>
          <GoBackHome />
          <Footer />
        </div>
      </div>
    )
}