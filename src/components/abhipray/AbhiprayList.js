import React from 'react';
import AbhipraySummary from './AbhipraySummary';
import {Link} from 'react-router-dom';



const AbhiprayList=({abhiprayKiList})=>{
    return(
        <div className="mainList section">
            {
                abhiprayKiList && abhiprayKiList.map((ekAbhi)=>
                {
                   
                    return(
                        <Link to={'abhipray/'+ekAbhi.id}><AbhipraySummary ekAbhi={ekAbhi} key={ekAbhi.id}/></Link>
                        
                    )
                })
            }



        {/* <AbhipraySummary/>
        <AbhipraySummary/>
        <AbhipraySummary/> */}

             
             
        </div>
    );
}

export default AbhiprayList;