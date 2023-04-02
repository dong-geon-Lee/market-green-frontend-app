import React from "react";
import * as S from "./styles";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <S.Container id="footer">
      <S.Hr />
      <S.Wrapper>
        <S.LogoGroup>
          <S.Title>MargetGreen</S.Title>
          <S.IconBox>
            <BsInstagram />
            <BsFacebook />
            <BsTwitter />
          </S.IconBox>
          <S.Small>
            Copyright © 2022 by MarketGreen, Inc. All rights reserved.
          </S.Small>
        </S.LogoGroup>

        <S.ContactGroup>
          <S.ContactTitle>Contact us</S.ContactTitle>
          <S.TextBox>
            <S.TextLink
              href="https://github.com/dong-geon-Lee/market-green-frontend-app"
              target="_blank"
            >
              <S.Strong>Front-end</S.Strong> <S.Br />
              https://github.com/dong-geon-Lee/market-green-frontend-app
            </S.TextLink>
            <S.TextLink
              href="https://github.com/dong-geon-Lee/Market-Green-Backend"
              target="_blank"
            >
              <S.Strong>Back-end</S.Strong> <S.Br />
              https://github.com/dong-geon-Lee/Market-Green-Backend
            </S.TextLink>
          </S.TextBox>
        </S.ContactGroup>

        <S.AccountGroup>
          <S.AccountTitle>Account</S.AccountTitle>
          <S.Text>Create account</S.Text>
          <S.Text>Sign in</S.Text>
          <S.Text>Ios app</S.Text>
          <S.Text>Android app</S.Text>
        </S.AccountGroup>

        <S.CompanyGroup>
          <S.CompanyTitle>Company</S.CompanyTitle>
          <S.Text>About Marketgreen</S.Text>
          <S.Text>For Business</S.Text>
          <S.Text>ParterShip</S.Text>
          <S.Text>Careers</S.Text>
        </S.CompanyGroup>

        <S.ResourceGroup>
          <S.ResourceTitle>Resources</S.ResourceTitle>
          <S.Text>Help center</S.Text>
          <S.Text>Privacy & terms</S.Text>
          <S.Text>Plant information</S.Text>
        </S.ResourceGroup>
      </S.Wrapper>
    </S.Container>
  );
};

export default Footer;
