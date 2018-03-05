import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import Footer from 'component/footer/footer.jsx';


import './news.css'



class NewsItem extends Component {

  render() {
    const news = this.props.news;
    return (
      <div className="news">
        <div className="left">
          <img className="thumb" src={require('../../asset/images/'+ news.thumb)} alt={news.title}/>
        </div>
        <div className="right">
          <p className="title"><a className="title-link" href={news.url}>{news.title}</a></p>
          <p className="summary">{news.summary}</p>
          <div className="dateAndDetails">
            <div className="date">{news.date}</div>
            <div className="viewDetails"><a className="detail-link" href={news.url}>查看详情</a></div>
            <img className="imgDetails" src={require('../../asset/images/news/list_ico_right.png')} alt={news.title}/>
          </div>
        </div>
        <div className="bottomLine"/>
      </div>
    );
  }
}

class NewsList extends Component {


  render() {
    let newsList = this.props.newsList;
    return (
      <div className="news-list">
        {newsList.map((news, index) => {
          return (<NewsItem news={news} key={index.toString()}/>);
        })}
      </div>
    );
  }
}

export default class NewsPage extends Component {
  componentDidMount(){
    console.log('----componentDidMount-----');
  }
  render() {
    console.log('xxxxxxxxx' + this.props.newsList);
    return <div>
      <Header menuactive={this.props.menuActive}></Header>
      <NewsList newsList={this.props.newsList}/>
      <Footer></Footer>
    </div>;
  }
}


