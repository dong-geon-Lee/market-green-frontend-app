import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductForm from "./admin/ProductForm/ProductForm";
import Admin from "./admin/Admin/Admin";
import ProductEdit from "./admin/ProductEdit/ProductEdit";
import {
  Carts,
  Home,
  Login,
  NotFound,
  OrderScreen,
  Payment,
  PaymentResult,
  PlaceOrder,
  Product,
  Profile,
  ProfileEdit,
  Register,
  Shipping,
} from "./pages";
import Header from "./components/Header/Header";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
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
        <Route path="/paymentResult" element={<PaymentResult />} />
        <Route
          path="/placeorder"
          element={<ProtectedRoute element={<PlaceOrder />} />}
        />
        <Route
          path="/order/:id"
          element={<ProtectedRoute element={<OrderScreen />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />

        <Route
          path="/profileEdit"
          element={<ProtectedRoute element={<ProfileEdit />} />}
        />
        <Route
          path="/admin"
          element={<ProtectedRoute element={<Admin />} isAdmin={admin} />}
        />
        <Route
          path="/productForm"
          element={<ProtectedRoute element={<ProductForm />} isAdmin={admin} />}
        />
        <Route
          path="/productEdit"
          element={<ProtectedRoute element={<ProductEdit />} isAdmin={admin} />}
        />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
