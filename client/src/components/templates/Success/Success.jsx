import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { userRequest } from "../../../requestMethod";
import { Container } from "./Success.styles";

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          cats: cart.cats.map((cat) => ({
            catId: cat._id,
            quantity: cat._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [data, currentUser, cart]);

  return (
    <>
      {orderId ? (
        <Container>
          Your adoption has been successfully placed. Your order number is $
          {orderId}
        </Container>
      ) : (
        <Container>Successfull. Your cat is being prepared for a new home...</Container>
      )}
    </>
  );
};

export default Success;
