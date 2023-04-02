import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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

        {/* <Route
          path="/placeorder"
          element={user ? <PlaceOrder  /> : <Navigate replace to="/" />}
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
        /> */}
      </Routes>
    </Router>
  );
};

export default App;
