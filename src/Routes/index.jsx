import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//   import Protected from "./protected"; 
//   import { isAuthenticated } from "./helpers";

import ForgotPassword from "../Containers/ForgotPassword";
import Login from "../Containers/Login";
import { NotFound } from "../Pages/NotFound";
import ChangePassword from "../Components/ChangePassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Login />} />
      <Route path="forgotpassword" element={<ForgotPassword />} />
      <Route path="Changepassword" element={ <ChangePassword /> } />
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
