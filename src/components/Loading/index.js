import React from "react";
import { useLoading, Grid } from "@agney/react-loading";

import { Container } from "./styles";

const Loading = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Grid />,
  });

  return (
    <Container {...containerProps}>
      {indicatorEl} <p>Carregando...</p>
    </Container>
  );
};

export default Loading;
