import { Layout } from '../../layout/Layout';
import { ContactForm } from '../../ui/contact-form/ContactForm';
import { Footer } from '../../ui/footer/Footer';
import Typewriter from 'typewriter-effect';

export const Contact = () => {
  const url = process.env.REACT_APP_FORM_URL;
  return (
    <div className="max-w-screen-lg px-4 mx-auto">
      <Layout />
      <div className="flex items-center pl-10 mt-20">
        <div className="w-7/12 text-6xl font-black tracking-wide">
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
