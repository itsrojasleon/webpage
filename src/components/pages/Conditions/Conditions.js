import React, { Component } from 'react';
import Posts from '../../containers/jsonPosts/posts.js';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import Loading from '../../containers/loading/Loading.js';
import { Helmet }  from 'react-helmet';

export default class Conditions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json()
      })
      .then((posts) => {
        this.setState({ posts })
      })
  }

  render() {
    return (
      <div>
        <Link href="/"><a><FormattedMessage id="back-to-home" /></a></Link>
        {this.state.posts && (
        <div>
          <Helmet>
            <title>Terminos de uso</title>
          </Helmet>
          <Posts posts={this.state.posts} />
        </div>
        )}
        {!this.state.posts && (
          <Loading />
        )}
      </div>
    )
  }
}
