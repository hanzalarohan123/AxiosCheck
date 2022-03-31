import axios from 'axios'
import React, { Component } from 'react'
//wow

class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: []
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(reslt => { this.setState({ post: reslt.data }) }).catch(error => { console.log(error) })
  }
  render() {
    const { post } = this.state
    return (
      <div>

        {post.length ?
        post.map(pos => <div key={pos.id} > {pos.title} </div>):null}
      
      </div>


    )
  }
}

export default PostList