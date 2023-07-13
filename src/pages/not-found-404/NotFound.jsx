import Lottie from 'lottie-react';
import Error from '../../ui/animations/error.json';
import { Layout } from '../../layout/Layout';
import { Footer } from '../../ui/footer/Footer';

export const NotFound = () => {
  return (
    <div className="mx-auto max-w-screen-lg md:ml-10 md:mr-10">
      <Layout />
      <div class="flex flex-col items-center justify-center h-screen">
        <Lottie animationData={Error} />
        <div>
          <h1 className="text-2xl ">This Page Does Not Exist! </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};
