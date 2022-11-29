import React from "react";
import { Sphynx } from "../../../data";
import { Cats } from "../../elements";
import { Container } from "./Sphynx.styles";

const Shoes = ({ category, filters, sort }) => {
    return (
        <React.Fragment>
            <Container>
                {Sphynx.map((cat) => (
                    <Cats key={cat.id} cat={cat} />
                ))}
            </Container>
        </React.Fragment>
    );
};

export default Shoes;
