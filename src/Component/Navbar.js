import { NavLink   } from "react-router-dom"
import './Navbar.css'
export const Navbar=()=>{
    return(
        <nav className="odd">
            
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/details'>Salary-details</NavLink>
            <NavLink to='/logout'>Logout</NavLink>
        </nav>

    )
}   