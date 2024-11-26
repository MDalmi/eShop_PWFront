import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MenuPrivado from './componentes/MenuPrivado';
import Home from './componentes/telas/Home';
import Robo from './componentes/telas/robo/Robo'
import Aluguel from './componentes/telas/aluguel/Aluguel';
import Login from './componentes/telas/login/Login';
import MenuPublico from './componentes/MenuPublico';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPublico />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
  {
    path: "/privado",
    element: <MenuPrivado />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        index: "robos",
        element: <Robo />
      },
      {
        index: "aluguel",
        element: <Aluguel />
      }
    ]
  }

])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
