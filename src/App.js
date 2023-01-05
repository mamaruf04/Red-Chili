import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home/Home";
import Header from "../src/Pages/Shared/Header/Header";
import "./App.css";
import SocialLogin from "./Pages/Accounts/SocialLogin/SocialLogin";
import CheckOut from "./Pages/Home/CheckOut/CheckOut";
import FoodCategory from "./Pages/Home/Food/FoodCategory/FoodCategory";
import FoodDetails from "./Pages/Home/Food/FoodDetails/FoodDetails";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        {/* <Route path="/" element={<Home></Home>}></Route> */}
        <Route path="/" element={<Home></Home>}>
          <Route path="/" element={<FoodCategory></FoodCategory>}></Route>

          <Route
            path=":foodCategory"
            element={<FoodCategory></FoodCategory>}
          ></Route>

          <Route
            path=":foodCategory/foodDetails"
            element={<FoodDetails></FoodDetails>}
          >
            <Route path=":foodId" element={<FoodDetails></FoodDetails>}></Route>
          </Route>

          <Route path=":foodDetails" element={<FoodDetails></FoodDetails>}>
            <Route path=":foodId" element={<FoodDetails></FoodDetails>}></Route>
          </Route>

          <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
        </Route>

        <Route path="/login" element={<SocialLogin></SocialLogin>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
