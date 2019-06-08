import React, { Component } from 'react'
import axios from '../Config/axiosConfig';

import queryString from "query-string"

export default class Search extends Component {
  componentDidMount () { 
    const url = window.location.href
    const {keyword} = queryString.parseUrl(url).query
    this.getResultFromSearchEngineByKeyword(keyword)

    
  }

  getResultFromSearchEngineByKeyword(keyword) { 
    axios.post("/search", {keyword})
    .then( res => { 

    })
    .catch( err => { 

    })
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
