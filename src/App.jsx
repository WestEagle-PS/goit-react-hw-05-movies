import { BrowserRouter } from 'react-router-dom';
import UserRoutes from 'UserRoutes';

import Navbar from 'modules/NavBar/NavBar';

import './shared/styles/styles.scss';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Navbar />
      <UserRoutes />
    </BrowserRouter>
  );
};
