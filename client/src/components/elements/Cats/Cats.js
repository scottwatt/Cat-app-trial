import {
  MdFavoriteBorder,
  MdSearch,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { Link } from "react-router-dom";
import {
  Container,
  Circle,
  Image,
  Icons,
  Icon,
  Title,
  Price,
  CardBody,
  CardInfo,
} from "./Cats.styles";

const Cats = ({ cat }) => {
  return (
    <>
      <Container>
        <CardBody>
          <Circle />
          <Image src={cat.img} />
          <Icons>
            <Icon>
              <MdOutlineShoppingCart />
            </Icon>
            <Icon>
              <Link to={`/cat/${cat._id}`}>
                <MdSearch
                  style={{
                    display: "grid",
                    placeContent: "center",
                    color: "black",
                  }}
                />
              </Link>
            </Icon>
            <Icon>
              <MdFavoriteBorder />
            </Icon>
          </Icons>
        </CardBody>
        <CardInfo>
          <Title>{cat.title}</Title>
          <Price>${cat.price}</Price>
        </CardInfo>
      </Container>
    </>
  );
};

export default Cats;
