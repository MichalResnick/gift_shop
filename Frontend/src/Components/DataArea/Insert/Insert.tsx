import { useState, useEffect } from "react";
import TargetAudienceModel from "../../../Models/TargetAudience-model";
import giftsService from "../../../Services/giftService";
import "./Insert.css";
import { send } from "process";

function Insert(): JSX.Element {

    const [targetAudience, setTargetAudience]=useState<TargetAudienceModel[]>([])


    useEffect(()=>{
      giftsService.getAllTargetAudience()
      .then(targetAudience=>setTargetAudience(targetAudience))
      .catch(err=>alert(err.message))
    },[])

    async function send(){
        
    }

    return (
        <div className="Insert">
			
            {/* <form onSubmit={handleSubmit(send)}></form> */}
        </div>
    );
}

export default Insert;
