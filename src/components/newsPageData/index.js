import React, {Component} from "react";
import axios from "axios";
import * as ReactRedux from "react-redux";
import WordpressNews from "./wordpressNews";
import "./index.css";

export class NewsData extends Component {
  state = {
    news: [],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("https://umutbulagy.000webhostapp.com/wp-json/wp/v2/news")
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
    return news.map((e) => <WordpressNews key={e.id} news={e} />);
  }
}

export default NewsData;
