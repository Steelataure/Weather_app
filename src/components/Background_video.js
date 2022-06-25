import backgroundVideo from "../assets/Mountain_cuted.mp4"
import '../styles/Background_video.css'


function Background_video(){
  return (

    <video autoPlay loop muted id="video">
      <source src={backgroundVideo} type='video/mp4'/>
      </video>
  )   
}

  export default Background_video