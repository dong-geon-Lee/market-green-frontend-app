import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
import ProfileEdit from "./pages/ProfileEdit";
import ProductForm from "./admin/pages/ProductForm";
import Admin from "./admin/pages/Admin";
import Product from "./pages/Product";
import ProductEdit from "./admin/pages/ProductEdit";
import Carts from "./pages/Carts";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import OrderScreen from "./pages/OrderScreen";
import PaymentResult from "./pages/PaymentResult";
import NotFound from "./pages/NotFound";

const App = () => {
  const user = useSelector((state) => state.user.user?.accessToken);
  const admin = useSelector((state) => state.user.user?.isAdmin);

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart/:id" element={<Carts />}></Route>
        <Route path="/cart" element={<Carts></Carts>}></Route>
        <Route path="/shipping" element={<Shipping></Shipping>}></Route>
        <Route path="/payment" element={<Payment></Payment>}></Route>
        <Route path="/notFound" element={<NotFound />}></Route>
        <Route
          path="/placeorder"
          element={user ? <PlaceOrder /> : <Navigate replace to="/" />}
        ></Route>
        <Route
          path="/order/:id"
          element={user ? <OrderScreen /> : <Navigate replace to="/" />}
        ></Route>
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate replace to="/" />}
        ></Route>
        <Route path="/paymentResult" element={<PaymentResult />}></Route>
        <Route
          path="/profileEdit"
          element={user ? <ProfileEdit /> : <Navigate replace to="/" />}
        ></Route>
        <Route
          path="/admin"
          element={admin ? <Admin /> : <Navigate replace to="/" />}
        ></Route>
        <Route
          path="/productForm"
          element={admin ? <ProductForm /> : <Navigate replace to="/" />}
        ></Route>
        <Route
          path="/productEdit"
          element={admin ? <ProductEdit /> : <Navigate replace to="/" />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
