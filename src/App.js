import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div
    style={{ backgroundColor: "#DEE5E5" }}
    >
      <div
       className='max-w-[1440px] mx-auto bg-blue-100'>
        <RouterProvider router={router} />
      </div>

    </div>



  );
}

export default App;
