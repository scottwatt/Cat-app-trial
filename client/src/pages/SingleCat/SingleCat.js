import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdRemoveCircleOutline, MdAddCircleOutline } from "react-icons/md";
import { addCat } from "../../redux/cartRedux";
import { publicRequest } from "../../requestMethod";
import { Announcements, Ratings } from "../../components/elements";
import { Navbar, Footer } from "../../components/templates";
import {
  Container,
  Wrapper,
  ImageContainer,
  Circle,
  Image,
  Info,
  Title,
  Divider,
  Description,
  Price,
  Stock,
  SortContainer,
  ColorContainer,
  ColorText,
  ColorInfo,
  Color,
  SizeContainer,
  SizeText,
  Select,
  Options,
  CartInfo,
  CounterBtn,
  MinusBtn,
  Counter,
  AddBtn,
  AddToCart,
  StockTitle,
  ReviewContainer,
  TotalReviews,
} from "./SingleCat.styles";

const SingleCat = () => {
  const [count, setCount] = useState(1);
  const [cat, setCat] = useState({});
  const [color, setColor] = useState("");
  // const [isSelected, setIsSelected] = useState(false);
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getCat = async () => {
      try {
        const res = await publicRequest.get(`/cats/find/${id}`);
        setCat(res.data);
      } catch {}
    };
    getCat();
  });

  const handleClickMinus = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  const handleClickAdd = () => {
    setCount(count + 1);
  };

  const handleClickAddToCart = () => {
    dispatch(addCat({ ...cat, count, color, size }));
  };

  // const handleColor = () => {
  //   setColor();
  //   setIsSelected(!isSelected);
  // };

  return (
    <>
      <Container>
        <Announcements />
        <Navbar />
        <Wrapper>
          <ImageContainer>
            <Circle />
            <Image src={cat.img} />
          </ImageContainer>
          <Info>
            <Title>{cat.title}</Title>
            <Divider />
            <Description>{cat.description}</Description>
            <ReviewContainer>
              <Ratings rating={cat.ratings} />
              <TotalReviews>{`(${cat.reviews} Reviews)`}</TotalReviews>
            </ReviewContainer>
            <Price>${cat.price}</Price>
            <Stock>
              <StockTitle>Available: </StockTitle>
              {cat.inStock ? "In Stock" : "Out of Stock"}
            </Stock>
            <SortContainer>
              <ColorContainer>
                <ColorText>Color: </ColorText>
                <ColorInfo>
                  {cat.color?.map((c) => (
                    <Color
                      key={c}
                      color={c}
                      onClick={() => setColor(c)}
                    />
                  ))}
                </ColorInfo>
              </ColorContainer>
              <SizeContainer>
                <SizeText>Size: </SizeText>
                <Select
                  onChange={(e) => setSize(e.target.value)}
                  defaultValue="Size"
                >
                  <Options disabled value="Size">
                    Size
                  </Options>
                  {cat.size?.map((s) => (
                    <Options key={s}>{s}</Options>
                  ))}
                </Select>
              </SizeContainer>
            </SortContainer>
            <CartInfo>
              <CounterBtn>
                <MinusBtn onClick={handleClickMinus}>
                  <MdRemoveCircleOutline />
                </MinusBtn>
                <Counter>{count}</Counter>
                <AddBtn onClick={handleClickAdd}>
                  <MdAddCircleOutline />
                </AddBtn>
              </CounterBtn>
              <AddToCart onClick={handleClickAddToCart}>Add to Cart</AddToCart>
            </CartInfo>
          </Info>
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
};

export default SingleCat;
