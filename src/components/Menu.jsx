import { useSelector } from "react-redux"

function Menu({dataMenu}){
    const name = useSelector(state => state)


    return(
         <ul className="menu">
            <li><a href="#">{dataMenu.nav1}</a></li>
            <li><a href="#">{dataMenu.nav2}</a></li>
            <li><a href="#">{dataMenu.nav3}</a></li>
            {name}
         </ul>
    )
         
    
}

export default Menu