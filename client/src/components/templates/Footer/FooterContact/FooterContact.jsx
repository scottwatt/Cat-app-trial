import { MdLocationOn, MdLocalPhone, MdMailOutline } from "react-icons/md";
import {
  Container,
  Title,
  Location,
  PhoneNumber,
  Email,
  CreditCards,
  Image,
} from "./FooterContact.styles";

const FooterContact = () => {
  return (
    <>
      <Container>
        <Title>Contact</Title>
        <Location>
          <MdLocationOn style={{ marginRight: "1rem" }} />
          821 Cat Central, Catland, CT 10019
        </Location>
        <PhoneNumber>
          <MdLocalPhone style={{ marginRight: "1rem" }} />
          +1 (555) 555-5555
        </PhoneNumber>
        <Email>
          <MdMailOutline style={{ marginRight: "1rem" }} />
          contact@contact.com
        </Email>
        <CreditCards>
          <Image src="https://i.ibb.co/M2Q4KXk/visa.png" />
          <Image src="https://i.ibb.co/2Y4sPXN/mastercard.png" />
          <Image src="https://i.ibb.co/xX0P3J3/americanexpress.png" />
          <Image src="https://i.ibb.co/xJK5vV9/paypal.png" />
        </CreditCards>
      </Container>
    </>
  );
};

export default FooterContact;
