import Category from "./Components/Category";
import Page from "./Pages/Page";
import { BrowserRouter } from "react-router-dom";
import Search from "./Components/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Search />
        <Category />
        <Page />
      </BrowserRouter>
    </div>
  );
}

export default App;
