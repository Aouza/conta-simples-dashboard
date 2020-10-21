export const convertMoney = (money) => {
  return money.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};
