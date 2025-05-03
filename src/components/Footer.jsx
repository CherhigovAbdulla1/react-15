import Copyright from './Copyright'
import Footerlogo from './Footerlogo'
import FooterMenu from './FooterMenu'

function Footer(){
    return(
        <div className='footer'>
         <Footerlogo/>
         <FooterMenu/>
         <Copyright/>
         </div>
        
    )
}

export default Footer