import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { MdRemoveCircleOutline, MdAddCircleOutline } from "react-icons/md";
import { userRequest } from "../../../requestMethod";
import {
  Container,
  Title,
  ButtonContainer,
  Button,
  ShoppingInfo,
  ShoppingInfoItem,
  Wrapper,
  CartInfo,
  CartInfoContainer,
  CartDetails,
  Divider,
  Image,
  CatDetails,
  CatInfo,
  Name,
  NumberId,
  ColorWrapper,
  Color,
  PriceDetails,
  CounterBtn,
  MinusBtn,
  Counter,
  AddBtn,
  Price,
  CartSummary,
  OrderTitle,
  CostDetails,
  SubTotalCost,
  SubTotal,
  SubTotalPrice,
  ShippingCost,
  Shipping,
  ShippingPrice,
  ShippingDiscount,
  Discount,
  DiscountPrice,
  TotalCost,
  Total,
  TotalPrice,
  CheckoutBtn,
} from "./CartContainer.styles";

const KEY = process.env.REACT_APP_STRIPE_KEY;

const CartContainer = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const [count, setCount] = useState(1);
  const quantity = cart.quantity;

  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate("/thankyou", { state: { data: res.data } });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate, cart.total]);

  const handleClickMinus = () => {
    setCount(count - 1);
  };
  const handleClickAdd = () => {
    setCount(count + 1);
  };

  let shippingCost = 5.99;
  let discount = 5.99;

  return (
    <>
      <Container>
        <Title>Your Adoption Cart</Title>
        <ButtonContainer>
          <Button>Continue Adopting</Button>
          <ShoppingInfo>
            <ShoppingInfoItem>Adoption Bag({quantity})</ShoppingInfoItem>
            <ShoppingInfoItem>Your Wishlist(0)</ShoppingInfoItem>
          </ShoppingInfo>
          <Button>Checkout</Button>
        </ButtonContainer>
        <Wrapper>
          <CartInfo>
            <CartInfoContainer>
              {cart.cats.map((cat) => (
                <CartDetails key={cat._id}>
                  <Image src={cat.img} />
                  <CatDetails>
                    <CatInfo>
                      <Name>
                        <b>Cat: </b>
                        {cat.title}
                      </Name>
                      <NumberId>
                        <b>ID: </b>
                        {cat._id}
                      </NumberId>
                      <ColorWrapper>
                        <b>Color: </b>
                        <Color color={cat.color} />
                      </ColorWrapper>
                    </CatInfo>
                    <PriceDetails>
                      <CounterBtn>
                        <MinusBtn onClick={handleClickMinus}>
                          <MdRemoveCircleOutline />
                        </MinusBtn>
                        <Counter>{cat.count}</Counter>
                        <AddBtn onClick={handleClickAdd}>
                          <MdAddCircleOutline />
                        </AddBtn>
                      </CounterBtn>
                      <Price>${cat.price * cat.count}</Price>
                    </PriceDetails>
                  </CatDetails>
                </CartDetails>
              ))}
              <Divider />
            </CartInfoContainer>
          </CartInfo>
          <CartSummary>
            <OrderTitle>Adoption Summary</OrderTitle>
            <Divider />
            <CostDetails>
              <SubTotalCost>
                <SubTotal>Subtotal</SubTotal>
                <SubTotalPrice>${cart.total}</SubTotalPrice>
              </SubTotalCost>
              <ShippingCost>
                <Shipping>Estimated Shipping</Shipping>
                <ShippingPrice>${shippingCost}</ShippingPrice>
              </ShippingCost>
              <ShippingDiscount>
                <Discount>Discount</Discount>
                <DiscountPrice>- ${discount}</DiscountPrice>
              </ShippingDiscount>
              <Divider />
              <TotalCost>
                <Total>Total</Total>
                <TotalPrice>
                  ${cart.total - (shippingCost - discount)}
                </TotalPrice>
              </TotalCost>
              <StripeCheckout
                name="Cat Adoption"
                image="https://i.ibb.co/JtVLMft/adoption-logo.png"
                billingAddress
                shippingAddress
                description={`Your adoption fee is $${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <CheckoutBtn>Checkout Now</CheckoutBtn>
              </StripeCheckout>
            </CostDetails>
          </CartSummary>
        </Wrapper>
      </Container>
    </>
  );
};

export default CartContainer;
