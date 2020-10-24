import React from "react";
import axios from "axios";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { HiCreditCard } from "react-icons/hi";

export const menuItems = [
  { title: "Transações", icon: <RiArrowLeftRightLine />, link: "/transacoes" },
  { title: "Cartões", icon: <HiCreditCard />, link: "/cartoes" },
];

export const api = axios.create({
  baseURL: "https://api-simples-dashboard.herokuapp.com/",
});
