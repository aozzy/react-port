import React, { useState } from "react";

import classes from "./modules/Experience.module.css";
import Projects from "./Projects";
import Skills from './Skills'

export default function Experience() {
  
  const data = [
    "Projects",
    "Infrastructure & IT support",
    "Skills"
    
    
  ];
  // const [listItem, setListItem] = useState("Projects");
  return (
    <section className={classes.section}>
      <div className={classes.container}>
      <div className={classes.heading}>
      
        <h3>Projects</h3>
      </div>
      <div className={classes.projects}>
        <div className={classes.card}>
          <div className={classes.images}>
            <img src="../images/blogcentral.png" alt="blog central site" />
          </div>
          <div className={classes.title}>

          <h4>title</h4>
          </div>
          <div className={classes.info}>
            buttons for github repo and live project 
          </div>
          <div className={classes.description}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil nam neque quaerat quibusdam aliquam corporis velit, ad quia amet deserunt quae voluptate natus fugiat eum nisi aspernatur placeat laudantium. Sapiente.</p>
          </div>
          <div className={classes.subtitle}>
            
          <h4>Tech used</h4>

          </div>
          <div className={classes.icon}></div>

        </div>

      </div>
      </div>

    </section>
    // <div className={classes.section}>
    //   <div className={classes.container}>
    //     <div className={classes.left}>
         
    //       <ul className={classes.list}>
    //         {data.map((item) => (
    //           <li className={classes.item} key={item} onClick={()=> setListItem(item)}>
    //             {item}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div className={classes.right}>
    //       {listItem === "Projects" ? (
    //         // <h3>Hello World</h3>
    //         <Projects />
    //         ) : listItem === "Infrastructure & IT support" ? (
    //         <Projects />
    //       ) : listItem === "Skills" ? (
    //         <Skills />
    //       ) : (
    //         <h3>Hello</h3>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
}
