import React from "react";
import { Cats } from "../../elements";
import { laPerm } from "../../../data";
import { Container } from "./LaPerm.styles";

const LaPerm = ({ category, filters, sort }) => {
    return (
        <React.Fragment>
            <Container>
                {laPerm.map((cat) => (
                    <Cats key={cat.id} cat={cat} />
                ))}
            </Container>
        </React.Fragment>
    );
};

export default LaPerm;
