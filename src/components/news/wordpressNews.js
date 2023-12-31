import React, {Component} from "react";
import axios from "axios";
import PropTypes from "prop-types";
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
    const getImageUrl = axios.get(`https://umutbulagy.000webhostapp.com/wp-json/wp/v2/media/${featured_media}`);

    Promise.all([getImageUrl]).then((res) => {
      console.log(res);
      this.setState({
        imgUrl: res[0].data.media_details.sizes["shapely-grid"].source_url,
        isLoaded: true,
      });
    });
  }

  render() {
    const {title, excerpt} = this.props.news;
    const {imgUrl} = this.state;
    return (
      <div id="newsCard" className="container">
          <div className="card">
            <img className="card-img-top" src={imgUrl} alt={title.rendered} />
            <div className="card-body">
              <h6 className="card-title">{title.rendered}</h6>
              <p clasname="card-text" dangerouslySetInnerHTML={{__html: excerpt.rendered}}></p>
            </div>
          </div>
        </div>
    );
  }
}
export default WordpressNews;
