import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom';

 class CreateAbhipray extends Component {

    state={
        title:"",
        content:""

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
        this.props.createProject(this.state);
        this.props.history.push('/');
    }
    render() {
        const {auth}=this.props;
        if(!auth.uid)return<Redirect to='/signin'/>
        return (
            <div className="container">
               <form onSubmit={this.handleSubmit} className="transparant">
                   <h5 className="grey-text text-darken-3">Likhee</h5>
                   <div className="input-field">
                       <label htmlFor="title">Title</label>
                       <input type="text" id="title" onChange={this.handleChange}></input>

                   </div>
                   <div className="input-field">
                       <label htmlFor="Abhipray">Abhipray</label>
                       <textarea name="" id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange}></textarea>

                   </div>
                   <div className="input-field">
                       <button className="btn gray darken-3  z-depth-4">Create</button>
                   </div>

               </form>
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    console.log(state);
    return{
        
        auth:state.firebase.auth
    }
}
 const mapDispatchToProps = (dispatch)=>{
     return {
         createProject:(project)=>dispatch(createProject(project))
     }

 }
 


export default connect(mapStateToProps,mapDispatchToProps)(CreateAbhipray);



// print("HI MY NAME IS ABHIJEET JAISWAL")
// for(i in Range(1,100))
//     print(i)

// print(" \n")
// print("sanjana kuttti")

