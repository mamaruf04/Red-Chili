import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home/Home";
import Header from "../src/Pages/Shared/Header/Header";
import "./App.css";
import FoodCategory from "./Pages/Home/Food/FoodCategory/FoodCategory";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        {/* <Route path="/" element={<Home></Home>}></Route> */}
        <Route path="/" element={<Home></Home>}>
          <Route path=":foodCategory" element={<FoodCategory></FoodCategory>}>
          {/* <Route
            path=":foodCategory"
            element={<FoodCategory></FoodCategory>}
          ></Route> */}
        </Route>
        
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
