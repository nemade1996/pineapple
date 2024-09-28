
import './App.css';
import Header from './Components/Header';
import ReactDOM from 'react-dom/client';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Error from './Components/Error';
import Intro from './Components/Intro';
import About from './Components/About';
import SignIn from './Components/SignIn';
import ProductDetail from './Components/ProductDetail';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './Components/Cart';
import ProductFilter from './Components/ProductFilter';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Wishlist from './Components/Wishlist';

function App() {

  return (
    <Provider store = {appStore}>
      <div className="App">
        <div >
          <Header/>
          <Outlet/>
          <Footer/>
          <ToastContainer position="bottom-right" autoClose={3000}/>
        </div>
      </div>
    </Provider>
  );
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path: "/",
        element:<Intro/>
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/products",
        element:<ProductFilter/>
      },
      {
        path: "/contact",
        element:<Contact/>
      },
      {
        path: "/signin",
        element:<SignIn/>
      },
      {
        path: "/product/:productId",
        element:<ProductDetail/>
      },
      {
        path: "/cart",
        element:<Cart/>
      },
      {
        path: "/wishlist",
        element:<Wishlist/>
      },
  ],

  errorElement : <Error/>
  }, 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter}/>
)


export default App;
