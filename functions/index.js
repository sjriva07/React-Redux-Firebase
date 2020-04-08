const functions = require('firebase-functions');
const admin=require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!......hello sanju ninjiii");
});


const createNotification=(notification)=>{
    return admin.firestore().collection('notifications')
    .add(notification)
    .then((doc)=>console.log('daallll diye Notification',doc));
}


exports.abhiprayCreated=functions.firestore
.document('abhipray/{ekAbhi}')
.onCreate((doc)=>{
    const ekAbhi=doc.data();
    const notification ={
        content: 'Added a new Abhipray',
        user:  `${ekAbhi.authfn} ${ekAbhi.authln}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)
})
