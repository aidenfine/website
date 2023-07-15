import HdContractingImg from '../../images/dashboard-hd.png';
import pendoDashboardImg from '../../images/pendoDashboard.png';
import streametricV2Dashboard from '../../images/streametricv2Dashboard.png';
import { useNavigate } from 'react-router-dom';
import { Bounce } from '../../spring/Bounce';

export const HomeSection2 = () => {
  const navigate = useNavigate();

  const project2ImgClick = () => {
    navigate('/project-hdcontracting');
  };

  const project1ImgClick = () => {
    navigate('/project-pendoDashboard');
  };
  const project3ImgClick = () => {
    navigate('/project-streametricv2');
  };

  return (
    <Bounce delay={800}>
      <div className="pt-10 pl-5 sm:px-6 md:px-6">
        <h1 className="text-3xl font-bold">My Work</h1>
        <div className="grid grid-cols-1 gap-6 pt-5 md:pt-10">
          <div className="flex flex-col items-center">
            <div className="shadow-lg">
              <img
                src={HdContractingImg}
                alt="HD Contracting Dashboard"
                className="object-cover rounded-md shadow-lg cursor-pointer"
                onClick={project2ImgClick}
              />
            </div>
            <div className="mt-2 text-center">
              <h2 className="text-xl font-semibold">HD Contracting Dashboard</h2>
              <p className="text-gray-500 text-m">
                Full Stack Application built to help a local business manage their everyday needs
              </p>
              <p className="text-xs text-gray-500 pt-1.5">Click the image above to learn more</p>
            </div>
          </div>

          <div className="flex-grow h-px mt-5 mb-5 border border-gray-300"></div>

          <div className="flex flex-col items-center">
            <div className="shadow-lg">
              <img
                src={pendoDashboardImg}
                alt="Pendo"
                className="object-cover rounded-md shadow-lg cursor-pointer"
                onClick={project1ImgClick}
              />
            </div>
            <div className="mt-2 text-center">
              <h2 className="text-xl font-semibold">Streametric V1 User Analytics</h2>
              <p className="text-gray-500 text-m">
                I setup Pendo to track user activity enabling better support for the business by
                gaining insight into user behavior to optimize their experience
              </p>
              <p className="text-xs text-gray-500 pt-1.5">Click the image above to learn more</p>
            </div>
          </div>

          <div className="flex-grow h-px mt-5 mb-5 border border-gray-300"></div>

          <div className="flex flex-col items-center">
            <div className="shadow-lg md:pr-10">
              <img
                src={streametricV2Dashboard}
                alt="Streametric"
                className="object-cover rounded-md shadow-lg cursor-pointer md:object-fill"
                onClick={project3ImgClick}
              />
            </div>
            <div className="mt-2 text-center">
              <h2 className="text-xl font-semibold">Streametric V2</h2>
              <p className="text-gray-500 text-m">
                Contributed to many features that are provided in the Streametric V2 Version
              </p>
              <p className="text-xs text-gray-500 pt-1.5">Click the image above to learn more</p>
            </div>
          </div>
        </div>
      </div>
    </Bounce>
  );
};
