import React from 'react';
import {Button,Icon} from 'antd';
import '../CSS/information6.css';

class InformationContent6 extends React.Component{
    constructor(props){
        super(props)

        this.state={
            visible:'none',
            imgIndex:1,
            scroll:0,

        }
    }

    lookImg (index){
      this.setState({
          visible:"block",
          imgIndex : index,
          scroll:document.documentElement.scrollTop,
        },()=>{
          document.documentElement.scrollTop = 0;
          document.documentElement.style.overflowY = 'hidden' ;
        })
      }

     close(){
       document.documentElement.scrollTop = this.state.scroll;
       document.documentElement.style.overflowY = 'visible' ;
     }
    render(){
        return(
            <div className="Box">
                <div className="title">资质证书</div>
                <div className="imgBox">
                    <div className="imgbox" style={{marginRight:'20px'}}>
                        <div>
                        <img onClick={this.lookImg.bind(this,1)} className="img_Qualification" src={require('../images/Qualification/Qualification_dianxin.jpeg')}/>
                        </div>
                    </div>
                    <div className="imgbox">
                        <img onClick={this.lookImg.bind(this,2)} className="img_Qualification" src={require('../images/Qualification/Qualification_yinye.png')}/>
                    </div>
                </div>

                <div className="imgBox">
                    <div className="name_Qualification" style={{marginRight:'20px'}}>
                        电信经营许可证
                    </div>
                    <div className="name_Qualification" style={{marginRight:'20px'}}>
                        营业执照
                    </div>
                </div>

                 <div className="imgBox">
                    <div className="imgbox" style={{marginRight:'20px'}}>
                        <div>
                        <img onClick={this.lookImg.bind(this,3)} className="img_Qualification" src={require('../images/Qualification/Qualification_yuming.jpeg')}/>
                        </div>
                    </div>
                    <div className="imgbox" style={{border:"none"}}>
                        <img/>
                    </div>
                </div>

                <div className="imgBox">
                    <div className="name_Qualification" style={{marginRight:'20px'}}>
                        域名注册许可证
                    </div>
                    <div className="name_Qualification" style={{marginRight:'20px'}}>

                    </div>
                </div>

                <LookImg visible = {this.state.visible} imgIndex = {this.state.imgIndex} close={this.close.bind(this)}/>
            </div>
        )
    }
}

class  LookImg extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            imgIndex:this.props.imgIndex,
            visible:this.props.visible,
         }
    }

componentWillReceiveProps(nextProps){
    this.setState({
        visible:nextProps.visible,
        imgIndex:nextProps.imgIndex,
    })
}
toLeft(e){
    e.stopPropagation();
    const imgIndex = this.state.imgIndex;
    if(imgIndex==1){
        this.setState({
            imgIndex:3,
        })
    }else{
        this.setState({
            imgIndex:imgIndex-1,
        })
    }
}
toRight(e){
    e.stopPropagation();
    const imgIndex = this.state.imgIndex;
    if(imgIndex==3){
        this.setState({
            imgIndex:1,
        })
    }else{
        this.setState({
            imgIndex:imgIndex+1,
        })
    }
}
closeLook(){
    this.setState({
        visible:"none",
    },()=>{
      this.props.close();
    })
}
    render(){
        const Hei=document.body.clientHeight;
        const img_Hei =Hei-92;
        const index = this.state.imgIndex;
        const window_wid =document.body.clientWidth+17;
        const imgSrcArr=['','Qualification_dianxin.jpeg','Qualification_yinye.png','Qualification_yuming.jpeg'];
        return(
            <div style={{display:this.state.visible}}>
              <div className="bookimg" style={{width:window_wid,top:'92px',height:img_Hei}} onClick={this.closeLook.bind(this)}>
                  <img onClick={this.toLeft.bind(this)} src={require('../images/icon_left.png')} alt="icon"/>
                  <img className="img_agreement" src={require('../images/Qualification/'+imgSrcArr[index])} width="500" alt='资金存管服务协议'/>
                  <img onClick={this.toRight.bind(this)} src={require('../images/icon_right.png')} alt="icon"/>
              </div>
            </div>
        )
    }
}


export  default InformationContent6;
