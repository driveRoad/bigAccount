'use strict';
import React, {Component} from 'react';
import './banner.css';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.bannerImage = props.options && props.options.bannerImage;
    this.bannerText = props.options && props.options.bannerText;
    this.height = props.options && props.options.height || 300;
    this.textStyle = {
      top: (this.height * 0.5) + 'px'
    }
    this.bannerStyle = {
      height: this.height+'px'
    }
  }

  render() { 
    return <div>
      <div className="banner-top" style={this.bannerStyle}>
        <img src={this.bannerImage}/>
        <span style={this.textStyle}>{this.bannerText}</span>
      </div>
    </div>
  }
}