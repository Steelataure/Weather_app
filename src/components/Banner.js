import '../styles/Banner.css'
import logo from '../assets/navbar.png'

function Banner(){
    const title  = "Méteo"
    return (
    <div className="MyBanner">
         <img src={logo} alt='appli méteo' className='weather-logo' />
    </div>
)}

export default Banner