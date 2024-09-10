import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Products from "./components/Products"
import About from "./components/About"
import Contact from "./components/Contact"


function App(){
    return(
        <div>
    <Navbar></Navbar>
    <Search></Search>
    <Products></Products>
    <About></About>
    <Contact></Contact>
  </div>
    )
}

export default App