import React, { Component } from 'react';
import Notification from './Notifiction';

import AbhiprayList from '../abhipray/AbhiprayList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
 
class Dashboard extends Component{
    
    render(){
        //console.log(this.props);
       const {abhiprayKiList,auth,notifications}=this.props;
       console.log('pyarisi sanju');
       

       if(!auth.uid)return<Redirect to='/signin'/>
        return(
            
            <div className="dash container">
            <div className="row">
               <div className="col s12 m6">
                   <AbhiprayList abhiprayKiList={abhiprayKiList}/>
               </div>
               <div className="col s12 m5 offset-m1">
               <Notification notifications={notifications}/>
                  
               </div>
 
            </div>
 
         </div>
        );

       
    }
}
const mapStateToProps = (state) =>{
    // console.log(state);
    // console.log('...................................')
    return{
        // abhiprayKiList: state.project.books
        abhiprayKiList: state.firestore.ordered.abhipray,
        auth:state.firebase.auth,
        notifications:state.firestore.ordered.notifications
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection:'abhipray',orderBy:['createdAt','desc']
        },
        {
            collection:'notifications',limit:3,orderBy:['time','desc']
        }
    ])
)( Dashboard);