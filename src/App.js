import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div
    style={{ backgroundColor: "#DEE5E5" }}
    >
      <div
       className='max-w-[1440px] h-full mx-auto '>
        <RouterProvider router={router} />
      </div>

    </div>



  );
}

export default App;
