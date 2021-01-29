import React, {Component} from "react";
import axios from "axios";
import * as ReactRedux from "react-redux";
import WordpressNews from "./wordpressNews";
import "./index.css"
export class News extends Component {
  
  state = {
    news: [],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("http://ymyt.local/wp-json/wp/v2/ymyt-news")
      .then((res) =>
        this.setState({
          news: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const {news} = this.state;
      
    return (
      <div id="news" className="container">
        <div className="row">
          <div className="col-3">
            {news.slice(0, 1).map((e) => (
              <WordpressNews key={e.id} news={e} />
            ))}
          </div>
          <div className="col-3">
            {news.slice(1, 2).map((e) => (
              <WordpressNews key={e.id} news={e} />
            ))}
          </div>
          <div className="col-3">
            {news.slice(2, 3).map((e) => (
              <WordpressNews key={e.id} news={e} />
            ))}
          </div>
          <div className="col-3 last-card">
            {news.slice(3, 4).map((e) => (
              <WordpressNews key={e.id} news={e} />
            ))}
            <a href="#">{"Все новости нашего фонда >"}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
