import { Layout } from '../../layout/Layout';
import { ContactForm } from '../../ui/contact-form/ContactForm';
import { Footer } from '../../ui/footer/Footer';
import Typewriter from 'typewriter-effect';

export const Contact = () => {
  const url = process.env.REACT_APP_FORM_URL;
  return (
    <div className="mx-auto max-w-screen-lg md:ml-10 md:mr-10">
      <Layout />
      <div className="pl-10 mt-20 flex items-center">
        <div className="text-6xl font-black w-7/12 tracking-wide">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Contact Me')
                .callFunction(() => {
                  typewriter
                    .pauseFor(3000)
                    .deleteAll()
                    .callFunction(() => {});
                })
                .start();
            }}
          />
        </div>
      </div>
      <ContactForm url={url} />
      <Footer />
    </div>
  );
};
