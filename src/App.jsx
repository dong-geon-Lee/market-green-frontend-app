import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
import ProfileEdit from "./pages/ProfileEdit";
import ProductForm from "./admin/ProductForm/ProductForm";
import Admin from "./admin/Admin/Admin";
import Product from "./pages/Product";
import ProductEdit from "./admin/ProductEdit/ProductEdit";
import Carts from "./pages/Carts/Carts";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import OrderScreen from "./pages/OrderScreen/OrderScreen";
import PaymentResult from "./pages/PaymentResult";
import NotFound from "./pages/NotFound";

const App = () => {
  const user = useSelector((state) => state.user.user?.accessToken);
  const admin = useSelector((state) => state.user.user?.isAdmin);

  return (
    <Router>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart/:id" element={<Carts />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route
          path="/placeorder"
          element={user ? <PlaceOrder /> : <Navigate replace to="/" />}
        />
        <Route
          path="/order/:id"
          element={user ? <OrderScreen /> : <Navigate replace to="/" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate replace to="/" />}
        />
        <Route path="/paymentResult" element={<PaymentResult />} />
        <Route
          path="/profileEdit"
          element={user ? <ProfileEdit /> : <Navigate replace to="/" />}
        />
        <Route
          path="/admin"
          element={admin ? <Admin /> : <Navigate replace to="/" />}
        />
        <Route
          path="/productForm"
          element={admin ? <ProductForm /> : <Navigate replace to="/" />}
        />
        <Route
          path="/productEdit"
          element={admin ? <ProductEdit /> : <Navigate replace to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
