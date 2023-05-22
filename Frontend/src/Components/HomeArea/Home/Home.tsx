import "./Home.css";
import image from "../../../Assets/Images/giftPic.jpg"

function Home(): JSX.Element {
    return (
        <div className="Home">
            <h2>Gift Shop Home Page</h2>
            <p>Best Gift For EvreyOne</p>
            <hr />
            <img src={image} />

        </div>
    );
}

export default Home;
