import GiftModel from "../../../Models/Gift-model";
import "./GiftCard.css";

interface GiftCardProps {
    gift:GiftModel
	
}

function GiftCard(props: GiftCardProps): JSX.Element {
    console.log("-----------------")
    console.log(props)
    return (
        <div className="GiftCard">

            <div className="container">
                <h2>Name: {props.gift.name}</h2>
                <span>Description:{props.gift.description}</span>
                <br />
                <p>Price: {props.gift.price}</p>
                <p>Discount: {props.gift.discount}</p>
                <span> Target Audience Name: {props.gift.targetAudienceName}</span>
            </div>
			
        </div>
    );
}

export default GiftCard;
