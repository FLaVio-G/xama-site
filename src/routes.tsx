
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';

const Routes = (): JSX.Element => {
    return (
      <BrowserRouter>
        <Route path="/"  element={Home} />
      </BrowserRouter>
    );
  };
  
  export default Routes;