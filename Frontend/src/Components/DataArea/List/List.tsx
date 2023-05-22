import { ChangeEvent, useEffect, useState } from "react";
import "./List.css";
import TargetAudienceModel from "../../../Models/TargetAudience-model";
import giftsService from "../../../Services/giftService";
import GiftModel from "../../../Models/Gift-model";
import GiftCard from "../GiftCard/GiftCard";

function List(): JSX.Element {

    const [targetAudience, setTargetAudience]=useState<TargetAudienceModel[]>([])
    const[gifts,setGifts]=useState<GiftModel[]>([])

    useEffect(()=>{
      giftsService.getAllTargetAudience()
      .then(targetAudience=>setTargetAudience(targetAudience))
      .catch(err=>alert(err.message))
    },[])

    async function showGifts(args: ChangeEvent<HTMLSelectElement>){
        const value=+args.target.value
       giftsService.getGiftsByTargetAudience(value)
       .then(gifts => setGifts(gifts))
       .catch(err => alert(err.message));
    }
    console.log(gifts)

    return (
        <div className="List">
			<label >Select Target Audience</label>
            <select defaultValue="" onChange={showGifts}>
                <option disabled value="">select..</option>
               
                { targetAudience&& targetAudience.map(t=>
                    <option key={t.targetAudienceId} value={t.targetAudienceId}>{t.targetAudienceName}</option>
                    )}
            </select>
            <hr />
            {gifts.map(g => <GiftCard key={g.giftId} gift={g} />)}

        </div>
    );
}

export default List;
