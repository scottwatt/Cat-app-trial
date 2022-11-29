import React from "react";
import { maineCoon } from "../../../data";
import { Cats } from "../../elements";
import { Container } from "./MaineCoon.styles";

const MaineCoon = ({ category, filters, sort }) => {
  return (
    <React.Fragment>
      <Container>
        {maineCoon.map((cat) => (
          <Cats key={cat.id} cat={cat} />
        ))}
      </Container>
    </React.Fragment>
  );
};

export default MaineCoon;
