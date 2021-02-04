import React, {Component} from "react";
import axios from "axios";
import PropTypes from "prop-types";
import moment from "moment";
import 'moment/locale/ru'  
import "./index.css";

export class WordpressNews extends Component {
  state = {
    imgUrl: "",
    isLoaded: false,
  };

  static propTypes = {
    news: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const {featured_media} = this.props.news;
    const getImageUrl = axios.get(
      `https://umutbulagy.000webhostapp.com/wp-json/wp/v2/media/${featured_media}`
    );

    Promise.all([getImageUrl]).then((res) => {
      console.log(res);
      this.setState({
        imgUrl: res[0].data.media_details.sizes.medium.source_url,
        isLoaded: true,
      });
    });
  }

  render() {
    const {title, excerpt, content, date} = this.props.news;
    const {imgUrl} = this.state;
    return (
      <div id="newsData" className="container">
        <div className="row">
          <div className="col-lg-4 news-img">
            <p className="publicationDate">{moment(date).format("LLLL")}</p>
            <img src={imgUrl} alt={title.rendered} />
          </div>
          <div className="col-lg-8">
            <h3>{title.rendered}</h3>
            <p dangerouslySetInnerHTML={{__html: content.rendered}}></p>
          </div>
        </div>
      </div>
    );
  }
}
export default WordpressNews;
