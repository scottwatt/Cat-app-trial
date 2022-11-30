import React from "react";
import { Heading, Description } from "./AboutCompany.styles";

const AboutCompany = () => {
  return (
    <React.Fragment>
      <Heading>About Our Company</Heading>
      <Description>
        Established in 2022, CaFE (Cats For Everyone), offers quality adoptions
        of different cats to loving forever families. We are commited to keeping
        all cats safe, happy, and healthy while they wait to be placed in a
        forever home.
      </Description>
      <Description>
        There are hundreds of abused and abandoned cats daily. We are here to
        spread awareness that there are a lot of cats waiting to be loved and
        cared for by families. Here, we provide the platform for all cats to be
        seen in chance for second hope.
      </Description>
      <Description>
        Made by
        <br />
        Scott Wattenbarger
        <br />
        Dennis Mateo
        <br />
        Kaihuan Huang
        <br />
        Kristina Litunovskaia
        <br />
        Maryam Muska
        <br />
        Kevin Rivera
      </Description>
    </React.Fragment>
  );
};

export default AboutCompany;
