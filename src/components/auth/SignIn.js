import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom';

 class SignIn extends Component {

    state={
        email:"",
        password:""

    }
    handleChange =(e) =>{
        // console.log(e);
        this.setState({
            [e.target.id]:e.target.value
        })
        
    }
    handleSubmit =(e) =>{
        // console.log(e);
        e.preventDefault();
        //console.log(this.state);
        this.props.signIn(this.state);
    }
    render() {
        const {authErr,auth}=this.props;
        if(auth.uid)return<Redirect to='/'/>
        return (
            <div className="container">
               <form onSubmit={this.handleSubmit} className="transparant">
                   <h5 className="grey-text text-darken-3">Sign In</h5>
                   <div className="input-field">
                       <label htmlFor="email">Email</label>
                       <input type="email" id="email" onChange={this.handleChange}></input>

                   </div>
                   <div className="input-field">
                       <label htmlFor="password">Password</label>
                       <input type="password" id="password" onChange={this.handleChange}></input>

                   </div>
                   <div className="input-field">
                       <button className="btn gray darken-3  z-depth-4">Log In</button>
                       <div className="red-text center">
                         {authErr ?<p>{authErr}</p>:null}

                       </div>
                   </div>

               </form>
                
            </div>
        )
    }
}

 const mapStateToProps = (state) => {
     return{
         authErr: state.auth.authError,
         auth:state.firebase.auth
     }
 }
const mapDispatchToProps = (dispatch) =>{
    return {
        signIn:(creds)=>dispatch(signIn(creds))
    }
}
  


export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
