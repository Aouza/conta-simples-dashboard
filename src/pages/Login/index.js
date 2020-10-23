import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { api } from "../../services/api";
import LogoImage from "../../assets/images/logo.jpg";
import { TiUser } from "react-icons/ti";
import { CgPassword } from "react-icons/cg";
import IllustrationLogin from "../../assets/images/conta-simples-illustration.svg";
import AccessForm from "../../components/AccessForm";
import Button from "../../components/AccessForm/Button";
import Input from "../../components/AccessForm/Input";

import {
  Container,
  ImageSide,
  LoginSide,
  AcessItems,
  LinkToSignUp,
  Header,
} from "./styles";
import Loading from "../../components/Loading";

const Login = () => {
  const [login, setLogin] = useState("");
  const [loading, setLoading] = useState(false);

  const { setUserLogado } = useContext(UserContext);

  const history = useHistory();

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    setUserLogado(null);

    try {
      api.get("/empresas").then((response) => {
        const companyFiltered = response.data.filter(
          (empresa) => empresa.cnpj === login
        );

        if (companyFiltered.length && response.status === 200) {
          setUserLogado(companyFiltered[0]);

          localStorage.setItem(
            "@conta-simples:userLogado",
            JSON.stringify(companyFiltered[0])
          );

          history.push("/dashboard");
        }
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Header>
        <img src={LogoImage} alt="Conta Simples" />
      </Header>
      <ImageSide>
        <img src={IllustrationLogin} alt="Conta simples" />
        <h2>Conta PJ desenvolvida para acelerar o seu negócio</h2>
        <p>
          Gerencie melhor seu negócio com uma conta PJ completa, múltiplos
          cartões corporativos e sem pagar taxas abusivas.
        </p>
      </ImageSide>
      <LoginSide>
        <AccessForm onSubmit={handleLogin}>
          <header>
            <h2>
              Bem-vindo ao Internet Banking da <span>Conta Simples</span>
            </h2>
          </header>
          <Input
            type="text"
            id="login"
            name="login"
            placeholder="Login"
            value={login}
            onChange={({ target }) => setLogin(target.value)}
            icon={<TiUser />}
          />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            icon={<CgPassword />}
          />

          <AcessItems>
            <a href="!#">Esqueceu sua senha?</a>
            <Button type="submit" value="Entrar" />
          </AcessItems>

          <LinkToSignUp>
            Não tem uma conta? <a href="!#">Abra uma Conta Simples</a>{" "}
          </LinkToSignUp>
        </AccessForm>
      </LoginSide>
    </Container>
  );
};

export default Login;
