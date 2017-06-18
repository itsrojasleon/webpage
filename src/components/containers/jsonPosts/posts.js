import React, { Component } from 'react'
import PostsItem from './posts_item.js'

export default class Todos extends Component {
  render() {
    let postItem
    if(this.props.posts) {
      postItem = this.props.posts.map( (post) => {
        return (
          <PostsItem key={post.title} post={post} />
        )
      })
    }
    return (
      <div>
        <h3 className="title">Terminos de uso Webpage</h3>
        {postItem}
        <style jsx>{`
          .title{
            font-size: 30px;
            color: #424242;
            text-align: center;
            font-family: helvetica;
          }
        `}</style>
      </div>
    )
  }
}
