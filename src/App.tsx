import Home from "./components/pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import LineClone from "./components/pages/LineClone";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/line" component={LineClone} />
      </BrowserRouter>
    </>
  );
};

export default App;
