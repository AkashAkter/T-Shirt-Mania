
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/'
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <div>

      </div>
    </div>

  );
}

export default App;
