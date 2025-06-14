import "./Usercard.css"
import bird from '../assets/bird.png'
function Usercard({name,image}){
    return(
        <div className="usercard-container">
            <h3 >{name}</h3>
            <img id="img" src={image}></img>
            <p id="para">{name} image</p>
            </div>
    )
}

export default Usercard