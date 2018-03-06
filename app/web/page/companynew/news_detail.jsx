import React, {Component} from 'react';
import Header from 'component/header/header.jsx';
import Footer from 'component/footer/footer.jsx';
import Banner from 'component/common/banner/banner.jsx';
import BannerImage from '../../asset/images/banner/newBanner.png';
import './news_detail.css'

//import NewsContent_01 from './news_details/newscontent_01'

// class NewsDetailPage extends Component {
//   render() {
//     let index = this.props.index;
//     return (
//       <div className="newsBody">
//         <div className="divider"/>
//         {newsDetailArr[0]}
//         <div className="divider"/>
//       </div>
//     );
//   }
//
// }
//

var hotList = [
  {
    title: '大账户两周年庆...',
    url: '/companynew/news_detail_00001.html'
  },

  {
    title: '投资闲话：狮子吃羚羊...',
    url: '/companynew/news_detail_00004.html'
  },

  {
    title: '大账户首届投资人线下...',
    url: '/companynew/news_detail_00005.html'
  },

  {
    title: '国家科技部及浙江省科技...',
    url: '/companynew/news_detail_00006.html'
  },

  {
    title: '大账户APP正式上线...',
    url: '/companynew/news_detail_00010.html'
  }
];


class NewsNav extends Component {
  render() {
    return (
      <div className="news-nav">
        <a className="nav-item" href={this.props.indexUrl}>首页</a>
        <span className="nav-item">{' > '}</span>
        <a className="nav-item" href={this.props.newsListUrl}>公司新闻</a>
        <span className="nav-item">{' > '}</span>
        <span className="nav-item">{this.props.newsTitle}</span>
      </div>
    )
  }
}

class PreNewsCom extends Component {
  render() {
    let news = this.props.news;
    return (
      <div className="pre-news-com">
        <div className="pre-img-section">
          <img className="pre-img" src={require('../../asset/images/news/list_ico_pre_l.png')} alt="pre-img"/>
        </div>
        <div className="pre-title-section">
          <p className="pre-page">上一篇</p>
          <a className="title-link" href={news.url}>{news.title}</a>
        </div>
      </div>
    )
  }
}

class NextNewsCom extends Component {
  render() {
    let news = this.props.news;
    return (
      <div className="next-news-com">
        <div className="next-title-section">
          <p className="next-page">下一篇</p>
          <a className="title-link" href={news.url}>{news.title}</a>
        </div>
        <div className="next-img-section">
          <img className="next-img" src={require('../../asset/images/news/list_ico_next_r.png')} alt="next-img"/>
        </div>
      </div>
    )
  }
}


class HotCom extends Component {
  render() {
    return (
      <div className="hot-com">
        <img className="hot-img" src={require('../../asset/images/news/list_ico_hot.png')} alt="hot-img"/>
        <p className="hot-header">热门动态</p>
        <div className="divider"/>
        {
          hotList.map((item, index) => {
            return (
              <div className="hot-item">
                <img className="hot-tri-img" src={require('../../asset/images/news/list_ico_triangle.png')}
                     alt={item.title}/>
                <a className="hot-title" href={item.url}>{item.title}</a>
              </div>
            );
          })
        }
      </div>
    );
  }
}

class NewsDetailPage extends Component {

  getNews(pageName) {
    const con = require('./news_details/' + pageName).default;
    return React.createElement(con);
  }

  constructor(props) {
    super(props);
    this.options = {
      bannerImage: BannerImage,
      bannerText: '最新动态',
      height: 200
    }
  }

  render() {
    let news = this.props.news;
    let preNews = this.props.preNews;
    let nextNews = this.props.nextNews;

    return (
      <div>
        <Header menuactive={this.props.menuActive}></Header>
        <Banner options={this.options}/>
        <div className="news-main">
          <div className="news-detail-section">
            <NewsNav indexUrl={this.props.indexUrl} newsListUrl={this.props.newsListUrl} newsTitle={news.title}/>
            <h1 className="news-title">{news.title}</h1>
            <p className="news-date">{news.date}</p>
            <div className="divider"/>
            <div className="news-detail">
            {
              this.getNews(this.props.pageName)
            }
            </div>
            <div className="divider"/>
            {
              nextNews !== null ? <NextNewsCom news={nextNews}/> : <PreNewsCom news={preNews}/>
            }
          </div>
          <HotCom/>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default NewsDetailPage;
