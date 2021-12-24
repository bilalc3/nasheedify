import headphone from "./assets/images/headphone.png"; 
import youtube from "./assets/images/youtube1.png"; 
import Button from "react-bootstrap/Button"


const Home = () => {

    const utubelink = "https://www.youtube.com/channel/UC61q8WlnyuX4ma_LopLOMRg"
    return ( 
        <div className="home">
            <div className="home-container">
                <div className="heading-left">
                    <h1 className="bigwords">
                        Listen. Explore. Empower. 
                    </h1>
                    <p className="shortdesc">Watch over dozens of lectures, nasheeds, lyrical videos, jukeboxes with one click</p>
                    <a href={utubelink} target="_blank" rel="noreferrer">
                        <button href="google.com" className="subscribe">
                            <img className= "youtube" src={youtube} alt="" />
                            Join the Family
                        </button>
                    </a>
                </div>

                <div className="headphones">
                    <img className= "headphone" src={headphone} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Home;