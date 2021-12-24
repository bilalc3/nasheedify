import khaled from "./assets/images/ksupdates.jpeg"; 
import siedd from "./assets/images/siedd.jpeg"; 
import nouman from "./assets/images/nak.jpeg"; 
import mufti from "./assets/images/mm.jpeg"; 

const artists = [
    {
        name: "Khaled Siddiq",
        image: khaled, 
        id: 1
    },
    {
        name: "Siedd",
        image: siedd, 
        id: 2
    },
    {
        name: "Nouman Ali Khan",
        image: nouman, 
        id: 3
    }, 
    {
        name: "Mufti Menk",
        image: mufti, 
        id: 4
    }

]


const Artist = () => {
    return (  
        <div className="artcontainer">
         <h1 className="arttitle">Popular Featured Artists and Lecturers </h1>

        <div className="names">
            {artists.map((artist) => (
                <div className="artistpreview" key = {artist.id}>
                    <img className= "artist-image" src={artist.image} alt="" />  
                    <p className="artistname">
                        {artist.name}
                    </p>
                   

                </div>
            ))}
        </div>
        </div>
    );
}
 
export default Artist;



