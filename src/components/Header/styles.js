import styled from "styled-components";
import { Link } from "react-router-dom";
import { Mobile } from "../../responsive";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 9rem;
  padding: 0 3.2rem;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;

  & a {
    text-decoration: none;
    color: #212529;

    ${Mobile({
      color: "#40c057",
      width: "100vw",
    })}

    & svg {
      ${Mobile({
        color: "#343a40",
        fontSize: "3.6rem",
        marginRight: "1rem",
      })}
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const LogoHome = styled.div`
  cursor: pointer;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 5.5rem;
  height: 5.5rem;
`;

export const LogoTitle = styled.p`
  font-size: 2.6rem;
  font-weight: 400;
  letter-spacing: 1.5px;
  margin-left: 1rem;
`;

export const Div = styled.div``;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
`;

export const Items = styled.li`
  display: flex;
  align-items: center;
`;

export const ItemLink = styled.a`
  line-height: 1.5;
  color: #333;
  font-size: 1.6rem;
  font-weight: 500;
  display: inline-block;
`;

export const Button = styled.button`
  width: 100%;
  background-color: transparent;
  color: black;
  font-family: inherit;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 400;
  padding: 1.4rem 1.2rem;
  border: none;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.68, 0.1, 0.75, 1.5);
  text-transform: uppercase;
  background-size: 220%;

  &:hover {
    background-image: linear-gradient(
      120deg,
      #ebfbee 20%,
      #fff 30%,
      #69db7c 50%
    );
    background-position: 100%;
    background-color: #40c057;

    ${Mobile({
      color: "#fff",
    })}

    transform: scale(1.05);
  }

  ${Mobile({
    fontSize: "2.8rem",
    letterSpacing: "2px",
    color: "#40c057",
  })}

  &:hover {
    ${Mobile({
      marginLeft: "2rem",
    })}
  }

  & svg {
    ${Mobile({
      color: "#343a40",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    })}
  }
`;

export const BtnBox = styled.div`
  width: 100%;
  height: 100%;
  display: block;

  &:last-child button {
    margin-left: 1.2rem;
  }
`;

export const CartBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  background-color: transparent;
  border-radius: 9px;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: black;

    ${Mobile({
      width: "3.2rem",
      height: "3.2rem",
    })}
  }

  &:hover {
    ${Mobile({
      marginLeft: "2rem",
    })}
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const CartText = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 1.5rem;
  position: absolute;
  top: 25%;
  left: 41%;
  transform: translate(-50%, -50%);
  background-color: beige;
  padding: 0.5rem 0.6rem;
  border-radius: 50%;

  ${Mobile({
    fontSize: "2.8rem",
    left: "43.5%",
  })}
`;

export const CartSubText = styled.p`
  color: black;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  margin-left: 0.5rem;

  ${Mobile({
    fontSize: "3rem",
    letterSpacing: "2px",
    color: "#40c057",
  })}

  &:hover {
    ${Mobile({
      color: "#fff",
    })}
  }
`;

export const Navbar = styled.div`
  height: 8rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const LinkTag = styled(Link)`
  font-size: 3rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkStyle = styled(Link)`
  width: 100%;
  color: #333;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  padding: 1.4rem 0;
  transition: all 0.25s cubic-bezier(0.68, 0.1, 0.75, 1.5);
  text-transform: uppercase;
  background-size: 220%;

  &:hover {
    background-image: linear-gradient(
      120deg,
      #ebfbee 20%,
      #fff 30%,
      #69db7c 50%
    );
    background-position: 100%;
    background-color: #40c057;
  }

  ${Mobile({
    fontSize: "3rem",
    letterSpacing: "1.5px",
  })}

  &:hover {
    ${Mobile({
      color: "#fff",
      marginLeft: "2rem",
    })}
  }
`;

export const NavText = styled.a`
  color: #333;
  font-size: 1.6rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  line-height: 1.3;
  cursor: pointer;
  padding: 1.4rem 0;
  width: 100%;
  border-radius: 9px;
  justify-content: center;
  transition: all 0.25s cubic-bezier(0.68, 0.1, 0.75, 1.5);
  text-transform: uppercase;
  background-size: 220%;

  &:hover {
    background-image: linear-gradient(
      120deg,
      #ebfbee 20%,
      #fff 30%,
      #69db7c 50%
    );
    background-position: 100%;
    background-color: #40c057;

    ${Mobile({
      color: "#fff",
      marginLeft: "2rem",
    })};
  }

  ${Mobile({
    fontSize: "2.8rem",
    letterSpacing: "1.5px",
  })}

  &:nth-of-type(3) {
    ${Mobile({
      display: "none",
    })}
  }

  &:nth-of-type(7) {
    ${Mobile({
      display: "none",
    })}
  }
`;

export const Nav = styled.nav`
  width: 25rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${(props) => (props.active ? "0%" : "-110%")};
  transition: ${(props) => (props.active ? "0.35s" : "0.85s")};
  z-index: 10;
  overflow: hidden;

  ${Mobile({
    width: "100vw",
  })}
`;

export const Side = styled.ul`
  width: 100%;
  background-color: #ebfbee;

  ${Mobile({
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  })}
`;

export const Toggle = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  margin: 2rem 0 1rem 0;
  transition: all 0.3s ease;

  & svg:hover {
    color: red;
    transform: scale(1.03) translateY(0.1rem);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AdminBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .cartLink {
    padding: 1.4rem 0rem;
    transition: all 0.25s cubic-bezier(0.68, 0.1, 0.75, 1.5);
    text-transform: uppercase;
    background-size: 220%;

    &:hover {
      background-image: linear-gradient(
        120deg,
        #ebfbee 20%,
        #fff 30%,
        #69db7c 50%
      );
      background-position: 100%;
      background-color: #40c057;

      & p {
        ${Mobile({
          color: "#fff",
        })}
      }
    }
  }

  & .profile-svg {
    & svg {
      font-size: 1.8rem;

      ${Mobile({
        fontSize: "3rem",
      })}
    }
  }
`;
