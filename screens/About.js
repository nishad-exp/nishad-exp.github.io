import Navbar from "../components/Navbar.js"

const About = () =>{
    return({
        title:"About",
        element:"div",
        class:"",
        children:[Navbar([{name:"Home",route:"Home"},{name:"About",route:"About"}])]
    })
}

export default About