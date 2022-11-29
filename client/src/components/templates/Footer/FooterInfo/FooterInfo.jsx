import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Container, Logo, Description, Icons } from "./FooterInfo.styles";

const FooterInfo = () => {
  return (
    <>
      <Container>
        <Logo src="/images/cat_logo.webp" alt="Company Logo" />
        <Description>
          Adorable cartoon picutre of A Well Known Japanese Cat, also know as the Scottish Fold species. 
          The Scottish Fold cat is known to They sit like humans, Not to mention that the Scottish folds are never bred together, 
          Which is lead to believe that All Scottish Fold's are the only folded-ear cat in the world.
        </Description>
        <Icons>
          <FaFacebookSquare style={{ marginRight: "0.5rem" }} />
          <FaInstagramSquare style={{ marginRight: "0.5rem" }} />
          <FaTwitterSquare />
        </Icons>
      </Container>
    </>
  );
};

export default FooterInfo;
