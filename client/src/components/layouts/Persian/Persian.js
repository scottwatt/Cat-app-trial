import React from "react";
import { Cats } from "../../elements";
import { persian } from "../../../data";
import { Container } from "./Persian.styles";

const PersianCat = ({ category, filters, sort }) => {
    return (
        <React.Fragment>
            <Container>
                {persian.map((cat) => (
                    <Cats key={cat.id} cat={cat} />
                ))}
            </Container>
        </React.Fragment>
    );
};

export default PersianCat;
