import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/authActions';

 class SignUp extends Component {

    state={
        email:"",
        password:"",
        fname:"",
        lname:""

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
        this.props.signUp(this.state)
    }
    render() {
        const {auth,authErr}=this.props;
        if(auth.uid)return<Redirect to='/'/>
        return (
            <div className="container">
               <form onSubmit={this.handleSubmit} className="transparant">
                   <h5 className="gray-text text-darken-3">Sign Up</h5>
                   <div className="input-field">
                       <label htmlFor="First Name">First Name</label>
                       <input type="text" id="fname" onChange={this.handleChange}></input>

                   </div>
                   <div className="input-field">
                       <label htmlFor="Last Name">Last Name</label>
                       <input type="text" id="lname" onChange={this.handleChange}></input>

                   </div>
                   <div className="input-field">
                       <label htmlFor="email">Email</label>
                       <input type="email" id="email" onChange={this.handleChange}></input>

                   </div>
                   <div className="input-field">
                       <label htmlFor="password">Password</label>
                       <input type="password" id="password" onChange={this.handleChange}></input>

                   </div>
                   <div className="input-field">
                       <button className="btn gray darken-3  z-depth-4">Sign Up</button>
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
     
        auth:state.firebase.auth,
        authErr:state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        signUp:(newUser)=>dispatch(signUp(newUser))
    }
}
  

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);

