import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/appRoutes';

function App() {


  return (
    <div>
      <RouterProvider 
        router={router}
        future={{v7_startTransition:true}}/>
    </div>
  );
}

export default App;



