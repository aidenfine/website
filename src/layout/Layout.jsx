import Navigation from '../ui/Navigation/Navigation';

export const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};
