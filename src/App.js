import React,{ Component } from 'react';
import './App.css'
const axios = require('axios');

const URL = 'http://newsapi.org/v2/top-headlines?' +
                                      'country=br&' +
                                      'category=health&'+
                                      'q=corona&'+
                                      'apiKey=748e2f82b67543c4b0d9a7c84a9e7db8';

export default class App extends Component{
  state = { 
    news:[]
  }
  async componentDidMount(){
    const res = await axios.get( URL )

    this.setState({ news: res.data.articles})
  }
  render(){
    return(
        <section className='container'>
          <h1>Notícias coronavírus</h1>
          <article>
            <ul className='list'>
              {
                this.state.news.map(n=>

                <li key={n.title} className='list-details'>
                   {n.title}
                   <img src={n.urlToImage} alt={n.title}/>
                   </li>
                )
              }
            </ul>
          </article>
        </section>
    )
  }
}