import React, { useEffect, useState, useContext } from "react";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import { convertMoney } from "../../tools/convertMoney";
import { api } from "../../services/api";
import {
  VictoryPie,
  VictoryAxis,
  VictoryChart,
  VictoryBar,
  VictoryTheme,
} from "victory";
import Loading from "../../components/Loading";
import Transactions from "../../components/Transactions";
import { UserContext } from "../../context/UserContext";

import {
  Container,
  Wrapper,
  Header,
  BalanceGroup,
  Balance,
  RecentTransactions,
  GraphicGroup,
  Graphic,
} from "./styles";

const Dashboard = () => {
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [loading, setLoading] = useState(false);

  const { transactions, setTransactions } = useContext(UserContext);

  const userId = localStorage.getItem("@conta-simples:userLogado");
  const userLogado = JSON.parse(userId);
  const id = JSON.parse(userId).empresaId;

  useEffect(() => {
    setLoading(true);
    api.get("/transacoes").then((response) => {
      const reverseTransactions = response.data;
      setTransactions(reverseTransactions.reverse());

      setLoading(false);
    });
  }, [setTransactions]);

  useEffect(() => {
    const incomeFilter = transactions
      .filter((expenseItem) => expenseItem.credito === true)
      .filter((empresa) => empresa.empresaId === id)
      .reduce((acc, item) => acc + item.valor, 0);
    setIncome(incomeFilter);

    const expenseFilter = transactions
      .filter((expenseItem) => expenseItem.credito !== true)
      .filter((empresa) => empresa.empresaId === id)
      .reduce((acc, item) => acc + item.valor, 0);
    setExpense(expenseFilter);
  }, [id, transactions]);

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Wrapper>
        <Header>
          <div>
            <span>Dashboard</span>
            <h2>
              Olá, <span>{userLogado.nomeEmpresa}</span>.
            </h2>
          </div>

          <div>
            <p>
              <span>Banco:</span> {userLogado.dadosBancario?.bancoNome} /
              {userLogado.dadosBancario?.banco}
            </p>
            <p>
              <span>Agência:</span> {userLogado.dadosBancario?.agencia}
            </p>
            <p>
              <span>Conta:</span> {userLogado.dadosBancario?.conta} -
              {userLogado.dadosBancario?.digitoConta}
            </p>
          </div>
        </Header>

        <BalanceGroup>
          <Balance>
            <span>seu saldo</span>
            <h2>{userLogado?.saldo && convertMoney(userLogado.saldo)}</h2>
            <div>
              <p>
                <HiTrendingUp /> + {convertMoney(income)}
              </p>
              <p>
                <HiTrendingDown /> - {convertMoney(expense)}
              </p>
            </div>
          </Balance>

          <RecentTransactions>
            <h3>Transações recentes</h3>

            <Transactions data={transactions} />
          </RecentTransactions>
        </BalanceGroup>

        <GraphicGroup>
          <Graphic>
            {!!income && (
              <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={{ x: 50 }}
              >
                <VictoryAxis tickValues={[1, 2]} />
                <VictoryAxis
                  dependentAxis
                  tickFormat={(x) => `$${x / 1000}k`}
                />
                <VictoryBar
                  data={[
                    { x: "Entrada", y: income },
                    { x: "Saída", y: expense },
                  ]}
                  style={{ data: { fill: "#333" } }}
                  alignment="middle"
                />
              </VictoryChart>
            )}
          </Graphic>
          <Graphic>
            {!!income && (
              <VictoryPie
                colorScale={["#333", "#666"]}
                data={[
                  { x: "Entrada", y: income },
                  { x: "Saída", y: expense },
                ]}
              />
            )}
          </Graphic>
        </GraphicGroup>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
