
import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import moment from 'moment';

function AbhiprayDetails(props) {
    // console.log(props);
    // const id=props.match.params.id;
    // console.log(props);
    const {ekAbhi,auth}=props;
    if(!auth.uid)return<Redirect to='/signin'/>
     if (ekAbhi){
        return (
            < div className="container section AbhipraySummary">
               <div className="card z-depth-2">
                   <div className="card-content">
                         <span className="card-title">{ekAbhi.title}</span>
                         <p>{ekAbhi.content}</p>
                   <div className="card-action blue lighten-4 grey-text">
                          <div>Posted by {ekAbhi.authfn}</div>
                          <div>{moment(ekAbhi.createdAt.toDate()).calendar()}</div>
                   </div>
     
                   </div>
     
               </div>
            </div>
     
     
         )

     }
     else{
         return(
             <div className="container center">
             <p>Loading ......</p>

             </div>
         )
     }
    
}
const mapStateToProps=(state,ownProps)=>{
    //console.log(state);
    const id=ownProps.match.params.id;
    const abhiprayKiList=state.firestore.data.abhipray;
    const ekAbhi=abhiprayKiList? abhiprayKiList[id]:null
    return{
        ekAbhi:ekAbhi,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps)
) (AbhiprayDetails)
