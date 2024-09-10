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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Login />} />
      <Route path="forgotpassword" element={<ForgotPassword />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Route>
  )
);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
