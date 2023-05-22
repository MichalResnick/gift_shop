import { useState, useEffect } from "react";
import TargetAudienceModel from "../../../Models/TargetAudience-model";
import giftsService from "../../../Services/giftService";
import "./Insert.css";
import { send } from "process";
import { useForm } from "react-hook-form";
import GiftModel from "../../../Models/Gift-model";
import { useNavigate } from "react-router-dom";

function Insert(): JSX.Element {

    const [targetAudience, setTargetAudience]=useState<TargetAudienceModel[]>([])
    const {register, handleSubmit}=useForm<GiftModel>()

    const navigate=useNavigate()


    useEffect(()=>{
      giftsService.getAllTargetAudience()
      .then(targetAudience=>setTargetAudience(targetAudience))
      .catch(err=>alert(err.message))
    },[])

    async function send(gift:GiftModel){
        try {

            await giftsService.addGift(gift)
            alert("You added a gift")
            navigate("/gift-list")
            
        } catch (error:any) {
            alert(error.message)
        }
        
    }

    return (
        <div className="Insert">
			
            <form onSubmit={handleSubmit(send)}>
            <label >Select Target Audience</label>
            <select defaultValue=""  {...register("targetAudienceId")}>
                <option disabled value="">select..</option>
               
                { targetAudience&& targetAudience.map(t=>
                    <option key={t.targetAudienceId} value={t.targetAudienceId}>{t.targetAudienceName}</option>
                    )}
            </select>

            <label>Name:</label>
            <input type="text" {...register("name")} required />

            <label>Description:</label>
            <input type="text" {...register("description")} required/>

            <label>Price:</label>
            <input type="text"{...register("price")} required />

            <label>Discount:</label>
            <input type="text" {...register("discount")} required/>

            <button type="submit">Add</button>
        



            </form>
        </div>
    );
}

export default Insert;
