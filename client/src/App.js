import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ScrollToTop } from "./components/elements";
import "./App.css";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import {
  Home,
  About,
  Cart,
  CatList,
  SingleCat,
  ThankYou,
  // Cats,
} from "./pages";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/cats/:category" element={<CatList />} />
          <Route path="/cat/:id" element={<SingleCat />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/cats" element={<Cats />} /> */}
          <Route path="/thankyou" element={<ThankYou />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" replace /> : <SignIn />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" replace /> : <SignUp />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
