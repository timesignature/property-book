import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pricing from "./pages/Backend/Pricing";
import AppLayout from "./components/AppLayout";
import {QueryClient,QueryClientProvider} from "react-query";
import Service from "./pages/Backend/Service";
import NotFound from "./pages/404";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const clientQuery=new QueryClient()
function App() {
  return (
      <QueryClientProvider client={clientQuery}>
          <BrowserRouter>
              <Routes>
                  <Route path={'/'} element={<Home/>}/>
                  <Route path={'/login'} element={<Login/>}/>
                  <Route path={'/register'} element={<Register/>}/>
                  <Route element={<AppLayout/>}>
                      <Route path={'/pricing'} element={
                          <ProtectedRoute>
                              <Pricing/>
                          </ProtectedRoute>
                      }/>
                      <Route path={'/services'} element={
                          <ProtectedRoute>
                              <Service/>
                          </ProtectedRoute>
                      }/>
                      <Route path={'/about'} element={
                          <ProtectedRoute>
                              <Service/>
                          </ProtectedRoute>
                      }/>
                  </Route>

                  <Route path='*' element={<NotFound/>}/>
              </Routes>
          </BrowserRouter>
          <ToastContainer/>
      </QueryClientProvider>
  );
}

export default App;
