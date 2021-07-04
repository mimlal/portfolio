import React from 'react'
import {FaYoutube,FaInstagram,FaGithub,FaLinkedin} from 'react-icons/fa'
import classes from './Contact.module.css'

const handleUrl =(url)=>{
    return()=>window.open(url,"_blank")
}

export const Contact = () => {
    return (
        <div className={classes.contact} id="contact">
          <div className={classes.contactIcons}>
            <FaYoutube color='white' size='60px' style={{padding:'1%'}} 
              onclick={handleUrl('https://youtube.com')}
            />
            <FaInstagram color='white' size='60px' style={{padding:'1%'}} 
              onclick={handleUrl('https://youtube.com')}
            />
            <FaGithub color='white' size='60px' style={{padding:'1%'}} 
              onclick={handleUrl('https://youtube.com')}
            />
            <FaLinkedin color='white' size='60px' style={{padding:'1%'}} 
              onclick={handleUrl('https://youtube.com')}
            />
            </div>
        </div>
    )
}

