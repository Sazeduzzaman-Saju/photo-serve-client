import { RouterProvider } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import router from './Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div className='max-w-full'>
      <AuthProvider>
        <PhotoProvider />
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </AuthProvider>
    </div>
  );
}

export default App;
