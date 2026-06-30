import { useNavigate } from "react-router-dom";
import restaurantFood from "../assets/restauranfood.jpg"
import greekSalad from "../assets/greek salad.jpg"
import bruchetta from "../assets/bruchetta.svg"
import lemonDessert from "../assets/lemon dessert.jpg"
import "./Home.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";


function Home() {
    const navigate = useNavigate();
    const handleClick = (link)=>{
        navigate(link);
    };
  return (
    <>
    <Navbar/>
    <main>
        <section className='about-section' id="about">
        <div className="about-container">
            <article className="about-article">
                <h1>Little Lemon</h1>
                <p> We are a familt owned Mediterranean restaurant focused on traditional recipes served with a modern twist</p>
                <button onClick={()=>handleClick("/booking")}>Reserve A Table</button>
            </article>
            <img src={restaurantFood} alt="restaurant-food"/>
            </div>
        </section>
        <section className="menu-showcase">
            <div className="card-title">
                    <h1>Todays Specials..</h1>
                    <button onClick={()=>handleClick("booking")}>Open Menu</button>
            </div>
            <section className="card-container">
            <Card
                image = {greekSalad}
                title = "Greek Salad"
                price = "$12.99"
                description = "The famous Greek Salad of crispy Lettus, Peppers, Olives and Cheese."
            />
            <Card
                image = {bruchetta}
                title = "Bruchetta"
                price = "$5.99"
                description = "The famous Bruchetta made of grilled bread, smeared with garlic and seasoned with salt and olives."
            />
            <Card
                image = {lemonDessert}
                title = "Lemon Dessert"
                price = "$5.00"
                description = "The famous Lemon Dessert, straight out of grandma's recipe book . Made with Fresh Lemons."
            />
            </section>
        </section>
    </main>
    <Footer/>
    </>
  );
}

export default Home;
