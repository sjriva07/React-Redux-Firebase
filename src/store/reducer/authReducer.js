
const initState={
    authError:null

}
const authReducer = (state = initState, action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':{
            console.log('log karate samay aaei hai error');
            return{
                ...state,
                authError:'Login Failed'
            }

        }  
        case 'LOGIN_SUCCESS':{
            console.log('log karate samay aaei hai Success');
            return{
                ...state,
                authError:null
            }

        }  
        case 'SIGNOUT_SUCCESS':{
            console.log('log out kar diya ..chalo nikalo bahar');
            return state;

        }  
        case 'SIGNUP_SUCCESS':{
            console.log('khata kholne k liye Dhanyawaad!');
            return{
                ...state,
                authError:null
            }

        }  
        case 'SIGNUP_ERROR':{
            console.log('Itna bhi karate nahi aaya sign up hi nahi aaya');
            return{
                ...state,
                authError:action.err.message
            }

        } 
        default:{
            return state;
        }
        
    }
}

export default authReducer;