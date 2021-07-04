import React from 'react'
import classes from './Youtube.module.css'
import PageHeader from '../../components/PageHeader/PageHeader'

const youtubevideo =(url,thumbnail,description)=>{
    return (
        <div className={classes.VideoContainer}>
          <div className={classes.Thumbnail}>
            <img src="{thumbnail}" alt="thumbnail"/>
          </div>
          <div className={classes.Text}>
            <p>{description}</p>
          </div>
        </div>
    )
}
const Youtube=()=> {
    return (
        <div className={classes.Youtube} id='youtube'>
            <PageHeader title={"I'm also youtuber"}/>
            <div className={classes.YouTubeContent}>
              <div className={classes.Paragraph}>
                <p>
                  On my channel you find video about programming Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum 
                </p>
              </div>
              <div className={classes.Videos}>
                {youtubevideo("")}
              </div>
            </div>
        </div>
    )
}

export default Youtube
