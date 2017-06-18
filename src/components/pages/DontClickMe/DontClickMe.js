import React, { Component } from 'react'
import { Link }  from 'react-router';
import Photos from '../../containers/json_images/photos.js';
import { Helmet } from 'react-helmet';

export default class DontClickMe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        return response.json()
    })
      .then((photos) => {
        this.setState({
          photos,
          loading: false
        })
    })
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>No me des click</title>
        </Helmet>
        <Link href="/">Ir a el inicio</Link>
        <section>
          {this.state.loading && (
            <h2>Cargando imagenes...</h2>
          )}
        </section>
        <div><Photos photos={this.state.photos} /></div>
      </div>
    )
  }
}
