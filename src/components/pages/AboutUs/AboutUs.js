import React, { Component } from 'react'
import yTSearch from 'youtube-api-search'
import VideoDetail from '../../containers/videos/VideoDetail.js'
import VideoList from '../../containers/videos/VideoList.js'
import Menu from '../../containers/Menu/Menu.js';
import firebase from 'firebase';
import Footer from '../../containers/Footer/Footer.js';
import Comments from '../../containers/comments/Comments.js';
import './style.css';
import { Link } from 'react-router';
import { Helmet } from "react-helmet";
import { FormattedMessage } from 'react-intl';

const API_KEY = 'AIzaSyDxQro5hMG0srEcpuvFGVfMWL23pyARdlk';

export default class AboutUs extends Component{
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      videos: [],
      selectedVideo: null
    }

    yTSearch({key: API_KEY, term: 'super mega genial webpage ()'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       })
    })
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user
      })
    })
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>About us</title>
        </Helmet>
        <Menu user={this.state.user} />
        <p className="text-about-us">
          <FormattedMessage id="in" /> <strong><FormattedMessage id="webpage" /></strong> <FormattedMessage id="stay-us" />
        </p>
        <img className="image-about-us" src="https://a0.muscache.com/airbnb/static/jobs/new/hero/hero-life2-89ec321ebdc4088a774de4dc9d041f09.jpg" alt="acerca de nosotros" />
        <div className="container-video-youtube">
          <VideoDetail video={this.state.selectedVideo} />
        </div>
          <VideoList
            onVideoSelected={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}
          />
          {this.state.user && (
            <Comments user={this.state.user}/>
          )}
          <div className="line-founders">
            <Link className="link-to-founders" to="/founders"><FormattedMessage id="founders" /></Link>
          </div>
        <Footer />
      </div>
    )
  }
}
