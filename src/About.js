import './assets/css/About.css'; 
import trees from './assets/images/trees.png'


const About = () => {

    const header = "Welcome to \"Nasheedify\" YouTube Channel"; 
    const desc = "This is a Motivational YouTube page featuring the best Nasheeds, Quran recitations and mini-lectures. The primary focus of this channel is to provide motivational lectures and reminders. Please note, if there are any type of concerns regarding copyright, let us know and we will immediately remove the content."; 
    const ending = "Don't forget to subscribe. "; 
    return ( 
        <div className="aboutbox">
            <div className="aboutheading">
                <h1>About</h1> 
            </div>

                <div className="aboutinfo">
                    <div className="aboutimage"> 
                        <img src={trees} alt="" className="aboutimagefr"/>
                    </div>

                    <div className="aboutdesc">
                        <h1 className="abouttitle">
                            {header}
                        </h1>
                    <p className="aboutdescription">
                        {desc}
                    </p>
                    <h3 className="aboutfinal">
                        {ending}
                    </h3>

                    </div>
                </div>

        </div>
     );
}
 
export default About;