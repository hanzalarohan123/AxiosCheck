import axios from 'axios'
import React, { Component } from 'react'
//wow

class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: [],
      errorx:' '
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(reslt => { this.setState({ post: reslt.data }) }).catch(error => { this.setState({errorx:"error occured"}) })
  }
  render() {
    const { post,errorx } = this.state
    return (
      <div>

        <div>
        {
        post.length ?
        post.map(pos => <div key={pos.id} > {pos.title} </div>):null
        }
        </div>
        <div>
        {
          errorx ?  <div>{errorx}</div>:null
        }
        </div>
      
      </div>


    )
  }
}

export default PostList