import Home from "./components/pages/Home";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </>
  );
};

export default App;
