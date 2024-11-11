import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './componentes/Menu';
import Home from './componentes/telas/Home';
import Robo from './componentes/telas/robo/Robo'
import Aluguel from './componentes/telas/aluguel/Aluguel';
const router = createBrowserRouter([
  {
    path: "/",
    element : <Menu/>,
    children : [
      {
        index : true,
        element : <Home/>
      },
      {
        path : "/robo",
        element : <Robo/>
      },
      {
        path : "/aluguel",
        element : <Aluguel/>
      }       
    ]
  }
])

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
