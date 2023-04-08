import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className='bg-blue-100'>
      <div
      //  style={{ backgroundColor: "#A9A9A9" }}
       className='max-w-[1440px] mx-auto bg-blue-100'>
        <RouterProvider router={router} />
      </div>

    </div>



  );
}

export default App;
