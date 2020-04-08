import React from 'react';
import moment from 'moment';

const AbhipraySummary = ({ekAbhi}) =>
{
    return(
        <div className="card z-depth-3 AbhipraySummary ">
               <div className="card-content red-text text-darken-3">
                  <span className="book-title">{ekAbhi.title}</span>
                  <p>Posted by {ekAbhi.authfn} {ekAbhi.authln}</p>
                  <p className="gray-text">{moment(ekAbhi.createdAt.toDate()).calendar()}</p>

               </div>

             </div>
        
    );
}

export default AbhipraySummary;