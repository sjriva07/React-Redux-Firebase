import React from 'react';
import moment from 'moment';

const Notification =(props)=>{
    const {notifications}=props;
    console.log('dig ding');
    console.log(props);
    
   
    return(
        <div className="section">
           <div className="card z-depth-4">
             <div className="card-content">
                <span className="card-title">
                Notifications

                </span>
                <ul className="notifications">
                  {
                      notifications && notifications.map(ekNoti=>{
                        console.log({ekNoti});
                          return(
                            
                              <li key={ekNoti.id}>
                              <span className="pink-text">{ekNoti.user}  </span>
                              <span>{ekNoti.content}</span>
                              <div className="grey-text note-date">
                              {moment(ekNoti.time.toDate()).fromNow()}

                              </div>

                              </li>
                          )
                      })
                  }

                </ul>

             </div>

           </div>
           
        </div>
    );
}

export default Notification;