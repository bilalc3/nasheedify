import ig from "./assets/images/ig.png"; 
import twitter from "./assets/images/twitter.png"; 


const Footer = () => {

    const iglink = "https://www.instagram.com/nasheedifyyt/"; 
    const twitterlink = "https://twitter.com/nasheedifyyt"; 


    return ( 
        <div className="footer-container">
            <div className="footer-left">
                Copyright © Nasheedify
            </div>
            <div className="footer-right">
                <a href={iglink} className="iglink" target="_blank" rel="noreferrer">
                    <img src={ig} alt="" className="iconimage" />
                  </a>
                <a href={twitterlink} className="twitterlink" target="_blank" rel="noreferrer"> 
                    <img src={twitter} alt="" className="iconimage" />
                </a>
                <p className="nasheedifyname">@nasheedify</p>
            </div>
        </div>
     );
}
 
export default Footer;