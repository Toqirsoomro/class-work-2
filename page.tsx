import Header from "./components/Header/header";
import Footer from "./components/Header/Footer/Footer";
import Link from "next/link";
const HpmePage = () => {
return ( 
<div>
<Header Touqeer={"Hello Touqeer"} hi = "Hi" ></Header>
<h1 style={{ color : "skyblue", background : "yellow"}}>Home Page</h1>  
    <ul>
        <li style={{color: "ButtonText", background: "Red"}}>Home</li>
        <li>
        <Link href="/about" target="_blank" style={{ color: "-moz-initial", background: "Red"}}>about
        </Link></li> 
        <li>
          <Link href="/contact" style={{ color: "Background", background: "Red"}}>Contact
        </Link>
        </li>
        <li>
          <Link href="/service" style={{ color : "-moz-initial", background: "halfwhite" }}>service</Link>
        </li>
        <Footer></Footer>
      </ul>
    </div>
  );
};
export default HpmePage;