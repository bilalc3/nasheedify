import './assets/css/Contact.css'; 
import logopng from "./assets/images/logop.png"; 
import emailjs from 'emailjs-com'; 
import{ init } from 'emailjs-com';
import './assets/css/About.css'; 
import trees from './assets/images/trees.png'


const Contact = () => {

    init("user_27BAR7NtItJUfjcMnX1F6");
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_orx1cfr', e.target, 'user_27BAR7NtItJUfjcMnX1F6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

      const header = "Welcome to \"Nasheedify\" YouTube Channel"; 
      const desc = "This is a Motivational YouTube page featuring the best Nasheeds, Quran recitations and mini-lectures. The primary focus of this channel is to provide motivational lectures and reminders. Please note, if there are any type of concerns regarding copyright, let us know and we will immediately remove the content."; 
      const ending = "Don't forget to subscribe. "; 


    return (  
        <div className="contactbox">
            <div className="contactheading">
                <h1>About & Contact</h1> 
            </div>

            <div className="aboutinfo">
                    <div className="aboutimage"> 
                        <img src={logopng} alt="" className="logo"/>
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


            <div className="contactcontainer">
                           

                <div className="contactinfo">
                    <h1 className="contacttitle">Reach Us With One Click</h1>
                    <form> {/* onSubmit={sendEmail}  */}
                        <div className="formcontainter">
                            <div className="formname">
                                <label htmlFor="">Name</label>
                                <input type="text" name ="name"  placeholder="Your Name..." />
                            </div>

                            <div className="formemail">
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder="Your Email..."  name ="email" />
                            </div>

                            <div className="formsubject">
                                <label htmlFor="">Subject</label>
                                <input type="text" placeholder="Enter Subject..." name ="subject" />
                            </div>
                            
                            <div className="formsend">
                                <input type="submit" value ="Send Message"></input>
                            </div>
                        </div>
                        
                        
                    </form>


                </div>

                <div className="contactright">
                    <img src={trees} alt="" className="aboutimagefr" />

                </div>
            </div>

      

                


        </div>
    );
}
 
export default Contact;