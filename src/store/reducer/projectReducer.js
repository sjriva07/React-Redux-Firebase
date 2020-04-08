

const initState={
    books: [
        {id: '1' ,title: 'rich dad poor dad', abhipray:'One-sentence summary of “Rich Dad Poor Dad” : The main reason why people struggle with financial problems is because they spend several years in school but learn nothing about money and investments. The result is that people learn to work at the service of money… but never learn to put money to work for them.'},
        {id: '2' ,title: 'rich dad poor dad', abhipray:'One-sentence summary of “Rich Dad Poor Dad” : The main reason why people struggle with financial problems is because they spend several years in school but learn nothing about money and investments. The result is that people learn to work at the service of money… but never learn to put money to work for them.'},
        {id: '3' ,title: 'rich dad poor dad', abhipray:'One-sentence summary of “Rich Dad Poor Dad” : The main reason why people struggle with financial problems is because they spend several years in school but learn nothing about money and investments. The result is that people learn to work at the service of money… but never learn to put money to work for them.'},
    ]
}
const projectReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':{
            console.log('CREATE_PROJECT***',action.project);
            return state;
        }
        case 'CREATE_PROJECT_ERROR':{
            console.log('CREATE_PROJECT_ERROR***',action.err);
            return state;
        }
        default:{
            return state;
        }
            
        
    }
    
}

export default projectReducer;