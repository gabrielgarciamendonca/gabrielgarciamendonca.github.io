import React from 'react';
import { ToastContainer } from 'react-toastify';
import Main from './screens/Main';

import './styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Main />
      <ToastContainer />
    </div>
  );
}

export default App;
