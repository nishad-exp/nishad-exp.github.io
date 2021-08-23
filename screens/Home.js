import Navbar from "../components/Navbar.js"
import Card from "../components/Card.js"

const Home = () => {
   return {
    title:"Home",
    element:"div",
    class:"",
    children:[Navbar([{name:"Home",route:"Home"},{name:"About",route:"About"}]),{
        element:"div",
        class:"container-fluid ",
        children:[{
            element:"div",
            class:"row h-custom",
            children:[
                Card("https://picsum.photos/1000/1000?blur=1&random=1","Category-1"),
                Card("https://picsum.photos/1000/1000?blur=1&random=2","Category-2"),
                Card("https://picsum.photos/1000/1000?blur=1&random=3","Category-3"),
                Card("https://picsum.photos/1000/1000?blur=1&random=4","Category-4"),
            ]    
        }]
    }]
   }
}

export default Home