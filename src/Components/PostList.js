import axios from 'axios'
import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[]
      }
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(result =>this.setState={post:result.data}).catch(error =>{console.log(error)})
    }
  render() {
    return (
      <div>PostList{this.state.post}</div>
    )
  }
}

export default PostList