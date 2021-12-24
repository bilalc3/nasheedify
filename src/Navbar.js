import logo from "./assets/images/nasheedify-logo.JPG"; 

const Navbar = () => {
    return (  
        <nav className="Navbar">
            <a href="/">
                <div className="left-header">
                    <img src={logo} alt="logo" className="nlogo" />
                    <h1 >nasheedify</h1>
                </div>
            </a>
            <div className="links">
                <a href="/videos">Videos</a>
                {/* <a href="/about">About</a>*/}
                <a href="/contact">About & Contact</a>
            </div>
        </nav>


    );
}
 
export default Navbar;