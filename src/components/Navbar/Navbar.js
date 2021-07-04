import React from 'react'
import classes from './Navbar.module.css';
function Navbar() {
    return (
        <div className={classes.Navbar}>
            <nav>
              <ul>
                 <li>
                   <a herf='/'>Home</a>
                 </li>
                 <li>
                 <a herf='/#about'>About</a>
               </li>
               <li>
               <a herf='/#skills'>Skills</a>
             </li>
             <li>
             <a herf='/#youtube'>Youtube</a>
           </li>
           <li>
           <a herf='/#contact'>Contact</a>
         </li>
              </ul>
            </nav>
        </div>
    )
}

export default Navbar
