export const createProject=(project)=>{
    // return {
        // type:"ADD_PROJECT",
        // project: project
    // }


    return (dispatch,getState,{getFirebase,getFirestore})=>{
       const firestore=getFirestore();
       const profile=getState().firebase.profile;
       const authId=getState().firebase.auth.uid;
       firestore.collection('abhipray').add({
           ...project,
           authfn:profile.fname,
           authln:profile.lname,
           authid:authId,
           createdAt:new Date()
       }).then(()=>{
        dispatch({type: 'CREATE_PROJECT',project:project});
       }).catch((err)=>{
        dispatch({type: 'CREATE_PROJECT_ERROR',err});
       })
        
        
    }
}