import React from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Title,
    List,
    LinksList,
    NavLink,
} from "./FooterLinks.styles";

const FooterLinks = () => {
    return (
        <React.Fragment>
            <Container>
                <Title>Useful Links</Title>
                <List>
                    <LinksList>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <NavLink>Home</NavLink>
                        </Link>
                    </LinksList>
                    <LinksList>Cat Info</LinksList>
                    <LinksList>Cat Accessories</LinksList>
                    <LinksList>Adoption Tracking</LinksList>
                    <LinksList>Categories</LinksList>
                    <LinksList>Cart</LinksList>
                    <LinksList>Cat Fashion</LinksList>
                    <LinksList>My Account</LinksList>
                    <LinksList>Wishlist</LinksList>
                    <LinksList>Terms & Conditions</LinksList>
                </List>
            </Container>
        </React.Fragment>
    );
};

export default FooterLinks;
