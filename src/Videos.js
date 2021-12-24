import sieddjukebox from "./assets/images/thumnails/sieddjukebox.jpeg"; 
import sieddohA from "./assets/images/thumnails/sieddohA.jpeg"; 
import sieddneedyou from "./assets/images/thumnails/sieddiny.jpeg"; 
import rzattention from "./assets/images/thumnails/rzattention.jpeg"; 
import mercyofa from "./assets/images/thumnails/mercyofA.jpeg"; 
import khaledjukebox from "./assets/images/thumnails/khaledjukebox.jpeg"; 
import illant from "./assets/images/thumnails/illahant.jpeg"; 
import logopng from "./assets/images/logop.png"; 
import music from "./assets/images/musicnotes.png"; 
import reminder from "./assets/images/reminder.png"; 
import lyrics from "./assets/images/lyrics.png"; 
import star from "./assets/images/star.png"; 
import './assets/css/Videos.css'; 


const videos = [
    {
        title: "Siedd - Best Nasheeds Jukebox",
        photo: sieddjukebox,
        logo: logopng, 
        date: "Apr. 14, 2020", 
        type: music, 
        link: "https://www.youtube.com/watch?v=21Rnbktx6zM", 
        id: 1
    }, 
    {
        title: "Rhamzan - Attention (Lyric Video)", 
        photo: rzattention,
        logo: logopng, 
        date: "Aug. 25, 2017", 
        type: lyrics, 
        link: "https://www.youtube.com/watch?v=q-J-R153wcc", 
        id: 2
    }, 
    {
        title: "Khaled Siddiq - Nasheeds Jukebox",
        photo: khaledjukebox,
        logo: logopng, 
        date: "Apr. 21, 2020", 
        type: music, 
        link: "https://www.youtube.com/watch?v=hAHLcS1Z934", 
        id: 3
    }, 
    {
        title: "Siedd - Oh Allah (Lyric Video)",
        photo: sieddohA,
        logo: logopng, 
        date: "Mar. 23, 2020", 
        type: lyrics, 
        link: "https://www.youtube.com/watch?v=kDm2qZhAShk", 
        id: 4
    }, 
    {
        title: "Siedd - I Need You (Lyric Video)",
        photo: sieddneedyou,
        logo: logopng, 
        date: "Mar. 23, 2020", 
        type: lyrics, 
        link: "https://www.youtube.com/watch?v=kDm2qZhAShk", 
        id: 5
    }, 
    {
        title: "Mercy of Allah - Beautiful Reminder",
        photo: mercyofa,
        logo: logopng, 
        date: "Sep. 13, 2020", 
        type: reminder, 
        link: "https://www.youtube.com/watch?v=b0WvkVmVndc", 
        id: 6
    }, 
    {
        title: "La Illaha IllAllah - Vocals Only Naat",
        photo: illant,
        logo: logopng, 
        date: "Aug. 26, 2017", 
        type: star, 
        link: "https://www.youtube.com/watch?v=b9kQj9nx2ko", 
        id: 8
    }
]

const Videos = () => {
    return (  
        <div className="videobox">
            <div className="videoheading">
                <h1>Popular Videos</h1>
            </div>

            <div className="videocontainer">
                {videos.map((video) => (
                    <a href={video.link} className="videolink" target="_blank" rel="noreferrer">
                    <div className="videopreview" key = {video.id}>
                        <div className="topvideo">
                            <img className= "videoimage" src={video.photo} alt="Thumnail" /> 
                        </div>
                         <div className="videoinfo">
                            <div className="videoinfoleft">
                              <img src={video.logo} alt="" className="videologo"/>
                            </div>
                            <div className="videoinforight">
                                <p className="videotitle"> {video.title} </p>
                                <div className="rightbottom">
                                    <p className="videodate">{video.date}</p>
                                    <img src={video.type} alt="" className="videotype"/>
                                </div>
                            </div>
                            

                         </div>
                    </div>
                    </a>
                ))}



                
            </div>
            
        </div>
        

    );
}
    
export default Videos;