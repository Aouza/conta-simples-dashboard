import React from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../services/api";
import LogoImage from "../../assets/images/logo.jpg";
import { Container, Wrapper, Navigation } from "./styles";

const Aside = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/dashboard">
          <img src={LogoImage} alt="Conta Simples" />
        </Link>
        <Navigation>
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link to={item.link}>
                {item.icon}

                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default Aside;
