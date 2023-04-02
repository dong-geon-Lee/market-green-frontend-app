import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux-toolkit/userSlice";
import {
  deleteStorage,
  deleteShipping,
  deletePaymentMethod,
} from "../../redux-toolkit/cartSlice.js";
import logo from "../../assets/logo2.png";
import * as S from "./styles";
import * as A from "../../assets/@index";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const user = useSelector((state) => state.user.user);
  const admin = useSelector((state) => state.user.user?.isAdmin);
  const token = useSelector((state) => state.user.user?.accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("shipping");
    localStorage.removeItem("cartItems");

    dispatch(reset());
    dispatch(deleteStorage());
    dispatch(deleteShipping());
    dispatch(deletePaymentMethod());
    navigate("/");
  };

  const { cartItems } = useSelector((state) => state.cart);

  const adminLink = () => {
    navigate("/admin");
  };

  const loginLink = () => {
    navigate("/login");
  };

  const registerLink = () => {
    navigate("/register");
  };

  const homeLink = () => {
    navigate("/");
  };

  const profileLink = () => {
    navigate("/profile");
  };

  const cartLink = () => {
    navigate("/cart");
  };

  return (
    <S.Container>
      <S.LogoHome onClick={() => homeLink()}>
        <S.LogoBox>
          <S.Logo src={logo} alt="logo-img" />
          <S.LogoTitle>MarketGreen</S.LogoTitle>
        </S.LogoBox>
      </S.LogoHome>
      <S.NavList>
        <S.Navbar>
          <S.LinkTag to="#">
            <A.FaBars onClick={showSidebar} />
          </S.LinkTag>
        </S.Navbar>

        <S.Nav active={sidebar}>
          <S.Side>
            <S.Toggle>
              <S.LinkTag to="#">
                <A.AiOutlineClose onClick={showSidebar} />
              </S.LinkTag>
            </S.Toggle>
            <S.Content>
              <S.Button onClick={() => homeLink()}>
                <A.BsFillHouseFill style={{ marginRight: "2rem" }} />
                Home
              </S.Button>

              <S.BtnBox>
                {user && token ? (
                  <S.AdminBox>
                    {admin && (
                      <S.Button onClick={() => adminLink()}>
                        <A.FaUserAlt style={{ marginRight: "2rem" }} />
                        Admin
                      </S.Button>
                    )}
                    <S.Button
                      onClick={() => profileLink()}
                      className="profile-svg"
                    >
                      <A.BsFillFileEarmarkPersonFill
                        style={{ marginRight: "2rem" }}
                      />
                      Profile
                    </S.Button>

                    <S.CartBox
                      className="cartLink"
                      onClick={() => cartLink()}
                      style={{ marginRight: "2rem" }}
                    >
                      <A.BsFillCartFill style={{ marginRight: "2rem" }} />
                      <S.CartText>
                        {cartItems ? cartItems?.length : 0}
                      </S.CartText>
                      <S.CartSubText>Cart</S.CartSubText>
                    </S.CartBox>
                    <S.LinkStyle to="/" onClick={() => logout()}>
                      <A.BsDoorOpenFill style={{ marginRight: "2rem" }} />
                      Logout
                    </S.LinkStyle>
                  </S.AdminBox>
                ) : (
                  <>
                    <div onClick={() => loginLink()}>
                      <S.Button>로그인</S.Button>
                    </div>
                    <div onClick={() => registerLink()}>
                      <S.Button>회원가입</S.Button>
                    </div>
                  </>
                )}
              </S.BtnBox>

              <S.NavText href="#" onClick={showSidebar}>
                <A.BsFillImageFill style={{ marginRight: "2rem" }} />
                Hero
              </S.NavText>

              <S.NavText href="#intro" onClick={showSidebar}>
                <A.FaNetworkWired style={{ marginRight: "2rem" }} />
                Introduce
              </S.NavText>

              <S.NavText href="#about" onClick={showSidebar}>
                <A.FaInfoCircle style={{ marginRight: "2rem" }} />
                About
              </S.NavText>

              <S.NavText href="#products" onClick={showSidebar}>
                <A.GrProductHunt style={{ marginRight: "2rem" }} />
                Product
              </S.NavText>

              <S.NavText href="#testimonials" onClick={showSidebar}>
                <A.HiSpeakerphone style={{ marginRight: "2rem" }} />
                Testimonials
              </S.NavText>

              <S.NavText href="#information" onClick={showSidebar}>
                <A.SiWebhint style={{ marginRight: "2rem" }} />
                Promotion
              </S.NavText>

              <S.NavText href="#gallery" onClick={showSidebar}>
                <A.FaPhotoVideo style={{ marginRight: "2rem" }} />
                Gallery
              </S.NavText>

              <S.NavText href="#footer" onClick={showSidebar}>
                <A.FaEnvira style={{ marginRight: "2rem" }} />
                Footer
              </S.NavText>
            </S.Content>
          </S.Side>
        </S.Nav>
      </S.NavList>
    </S.Container>
  );
};

export default Header;
