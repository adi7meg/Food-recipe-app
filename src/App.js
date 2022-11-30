import Category from "./Components/Category";
import Page from "./Pages/Page";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Category />
        <Page />
      </BrowserRouter>
    </div>
  );
}

export default App;
