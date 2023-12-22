import "./App.css";

import {users} from "./data/index"
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import HomePage from "./pages/home-page";

function App() {
  return <>
  <Header/>
  <HomePage users={users}/>

  <Footer/>
  
  
       </>;
}

export default App;
