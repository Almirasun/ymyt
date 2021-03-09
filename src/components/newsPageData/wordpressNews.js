import React, {Component} from "react";
import axios from "axios";
import PropTypes from "prop-types";
import moment from "moment";
import "moment/locale/ru";
import "./index.css";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

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
            <TwitterShareButton url={"https://umutbulagy.org/newsPage"} title={title.rendered}>
              <button className="btn btn-circle">
                <i className="shareIcon fab fa-twitter fa-2x"> </i>
              </button>
            </TwitterShareButton>
            <FacebookShareButton
              url={"https://umutbulagy.org/newsPage"}
              quote={title.rendered}
              hashtag="umutbulagy"
            >
              <button className="btn btn-circle">
                <i className="shareIcon fab fa-facebook fa-2x"> </i>
              </button>
            </FacebookShareButton>
            <WhatsappShareButton title={title.rendered} url={"https://umutbulagy.org/newsPage"}>
              <button className="btn btn-circle">
                <i className="shareIcon fab fa-whatsapp fa-2x"> </i>
              </button>
            </WhatsappShareButton>
            <TelegramShareButton title={title.rendered} url={"https://umutbulagy.org/newsPage"}>
              <button className="btn btn-circle">
                <i className="shareIcon fab fa-telegram fa-2x"> </i>
              </button>
            </TelegramShareButton>
            <p className="publicationDate">{moment(date).format("LLLL")}</p>
            <img src={imgUrl} alt={title.rendered} />
          </div>
          <div className="col-lg-8">
            <h4>{title.rendered}</h4>
            <div>
              <p dangerouslySetInnerHTML={{__html: content.rendered}}></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WordpressNews;
