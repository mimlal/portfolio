import React from 'react'
import classes from './Skills.module.css'
import PageHeader from '../PageHeader/PageHeader';
import CodeThinking from './../../img/codeThinking.svg'



const ListTitleStyle = {fontWeight:900 , color:'#9B1FE8' ,marginBottom:'4px'}
const backendSkills =
<ul>
 <li style={ListTitleStyle}>Backend</li>
 <li>Scala</li>
 <li>Aka </li>
 <li>MongoDb</li>
</ul>

const frontendSkills =
<ul>
 <li style={ListTitleStyle}>HTML</li>
 <li>Css</li>
 <li>Javascript </li>
 <li>ReactJs</li>
</ul>

const dataScienceSkills =
<ul>
 <li style={ListTitleStyle}>Data science tool</li>
 <li>ELK stack - apche spark</li>

</ul>
const BuildToolSkill =
<ul>
 <li style={ListTitleStyle}>Build Tools</li>
 <li>Maven - sbt</li>

</ul>

const otherSkills=
<ul>
<li style={ListTitleStyle}>other</li>
<li>Git-Docker-Jenkins-json-xml</li>
</ul>
const totalSkills= [backendSkills,frontendSkills,dataScienceSkills,BuildToolSkill,otherSkills]

const  Skills=() =>{
    return (
        <div className={classes.Skills} id="skill">
            <PageHeader title={'what about the skills'}/>
            <p>I'm a life long learner and enjoy learning new stuff\
            Below are some programming language, toolsKit, framework and libararies
            that i worked with and like \
            some of them i control better than the other
            </p>
            <div className={classes.container}>
            <img src={CodeThinking} alt="codethinking"/>
              {totalSkills.map(skills=>{
                  return (
                      <div className={classes.List}>
                        {skills}
                      </div>
                  )
              })}
            </div>
        </div>
    )
}

export default Skills;
