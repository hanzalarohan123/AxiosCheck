import axios from 'axios'
import React, { Component } from 'react'


class POstFor extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userID:'',
         title:'',
         body:''
      }
    }

    changeHandler = e =>
    {
        this.setState
        (
            {
                [e.target.name]:e.target.value
            }

        )
    }
    submitHandler = e =>
    {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state).then(res =>{console.log(res)}).catch(err=>{console.log(err)})
    }
    render() {
        const{userID,body,title}=this.state
    return (
      <div>
      <form onSubmit={this.submitHandler}>
      <div>
          <input type='text' name='userID' value={this.state.userID} onChange={this.changeHandler}></input>
      </div>
      <div>
          <input type='text' name='title' value={this.state.title} onChange={this.changeHandler}></input>
      </div>
      <div>
          <input type='text' name='body' value={this.state.body} onChange={this.changeHandler}></input>
      </div>
      <button type='sbmit' > Submit</button>    
      </form>
      
      </div>
    )
  }
}

export default POstFor