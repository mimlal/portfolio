import React from 'react'
import classes from './Home.module.css'
import code from '../../img/code.svg'
import Binaryworld from '../../img/Binaryworld.png'
const Home = () => {
    return (
        <div className={classes.Home}>
        <div className={classes.container}>
          <h1 className={classes.hello}>Hello,world</h1>
          <h1>Welcome on my website</h1>
        </div>
            <img className={classes.code} src={code}/>
           
        </div>
    )
}

export default Home

