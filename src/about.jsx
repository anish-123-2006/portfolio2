import myimg from "./assets/1.png"
import "./about.css"
function About(){
 return <div className="aboutmain2 aboutmain">
       <div className="imgdiv">
        <img src={myimg}  className="img"></img>
    </div>
    <div>
    <h4>ABOUT ME</h4>
    <p>
        Hi, I'm Anish — a Computer Science student, aspiring frontend developer, and video editor who spends an unhealthy amount of time turning ideas into pixels.
<br></br>
When I'm not debugging code that worked perfectly five minutes ago, you'll find me crafting engaging videos in Premiere Pro and After Effects, building web projects with HTML, CSS, JavaScript, and React, or learning something new to level up my skills.
<br></br>
I enjoy blending creativity with technology—whether it's designing smooth user experiences, creating motion graphics, or developing interactive web applications. My goal is simple: build things that not only work but also leave a lasting impression.
<br></br>
Currently, I'm focused on sharpening my frontend development skills, exploring modern web technologies, and proving that "I'll fix it later" is not a sustainable development strategy.
    </p>
    </div>
 
    </div>


}
export default About;