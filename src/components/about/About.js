import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import classes from './About.module.css'
import profile from '../../img/profile.png'
const About = () => {
    return (
        <div className={classes.AboutMe} id="about">
            <PageHeader title={'About Me'}/>
            <div className={classes.container}>
               <div className={classes.text}>
                  <h2>Hello I'm Mimlal</h2>
                   <p> I'm frontend web page designer Browse to find the images that fit your needs and click to download. Use the on-the-fly color image generation to match your brand identity.I'm frontend web page designer Browse to find the images that fit your needs and click to download. Use the on-the-fly color image generation to match your brand identity</p>
               </div>
            
            <div className={classes.photo}>
              <img className={classes.profile} src={profile} alt="profile" style={{ height: '500px',}} />
            </div>
            </div>
        </div>
    )
}

export default About

