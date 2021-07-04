import React from 'react'
import classes from './PageHeader.module.css'

const PageHeader = (props) => {
    return (
        <div>
            <div className={classes.container}>
               <hr/>
               <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default PageHeader
