import styled from "styled-components";
import { Mobile, Tablets } from "../../responsive";

export const Container = styled.div`
  max-width: 130rem;
  padding: 6rem 3.2rem 0rem 3.2rem;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6rem 0rem;

  ${Mobile({
    flexDirection: "column",
    alignItems: "center",
  })}
`;

export const LogoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1.3;

  ${Mobile({
    flex: "1",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  })}
`;

export const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  gap: 2rem;
  flex: 1;

  ${Mobile({ marginTop: "3rem", textAlign: "center" })}
`;

export const AccountGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  gap: 2rem;
  flex: 1;

  ${Mobile({
    display: "none",
  })}
`;

export const CompanyGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  gap: 2rem;
  flex: 1;

  ${Mobile({
    display: "none",
  })}
`;

export const ResourceGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  gap: 2rem;
  flex: 1;

  ${Tablets({
    display: "none",
  })}

  ${Mobile({
    display: "none",
  })}
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #7ed56f;
  line-height: 1.5;
`;

export const ContactTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: black;
  text-align: left;
  width: 100%;
`;

export const AccountTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: black;
`;

export const CompanyTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: black;
`;

export const ResourceTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: black;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 2rem;

  & svg {
    font-size: 2rem;
    fill: grey;
  }
`;

export const Small = styled.small`
  font-size: 1.2rem;
  line-height: 1.8;
  width: 75%;

  ${Mobile({
    textAlign: "center",
  })}
`;

export const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.5px;
`;

export const TextLink = styled.a`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  row-gap: 2rem;
  text-align: left;
`;

export const Br = styled.br``;

export const Hr = styled.hr``;

export const Strong = styled.strong``;
