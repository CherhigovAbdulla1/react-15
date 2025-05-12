import Logo from "./Logo";
import Menu from "./Menu";  

 
function Header ({dataMenu}){
    return(
        <div className="lg:container mx-auto flex justify-between">
         <Logo/>
         <Menu dataMenu={dataMenu}/> 
        </div>
    )
}

export default Header;