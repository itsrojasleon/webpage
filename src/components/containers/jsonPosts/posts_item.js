import React, { Component } from 'react'

export default class PostsItem extends Component {
  render() {
    return (
      <div className="container-api-json">
        <div className="title">{this.props.post.title}</div>
        <div className="body">{this.props.post.body}</div>
        <style jsx>{`
          .container-api-json{
            box-sizing: border-box;
            padding: 10px;
            border: 1px solid rgb(17,47,61);
            margin-bottom: 10px;
            font-family: helvetica;
          }
          .title{
            font-size: 20px;
            color: green;
            margin-bottom: 10px;
          }
          .body{
            font-size: 16px;
            color: #000;

          }
        `}</style>
      </div>
    )
  }
}
