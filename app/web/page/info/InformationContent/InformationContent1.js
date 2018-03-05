import React from 'react';
import {Button,Icon} from "antd";
import '../CSS/information1.css';


class  LookImg extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            img_index :1,
            visible:this.props.visible,
         }
    }

componentWillReceiveProps(nextProps){
    this.setState({
        visible:nextProps.visible,
    })
}
toLeft(e){
    e.stopPropagation();
    const index = this.state.img_index;
    if(index!=1){
        this.setState({
            img_index:index-1,
        })
    }else{
        this.setState({
            img_index:13,
        })
    }
}
toRight(e){
    e.stopPropagation();
    const index = this.state.img_index;
    if(index!=13){
        this.setState({
            img_index:index+1,
        })
    }else{
        this.setState({
            img_index:1,
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
        const index = this.state.img_index;
        return(
            <div style={{display:this.state.visible}}>
            <script src="../../../../../public/js/LookImg.js"/>
            <div id="bookImg" className="bookimg" style={{top:'92px'}} onClick={this.closeLook.bind(this)}>
                <img onClick={this.toLeft.bind(this)} src={require('../images/icon_left.png')} alt="icon"/>
                <img id="money_deposit_agreement" className="img_agreement" src={require('../images/agreement_img/money_deposit_agreement'+index+'.png')}  alt='资金存管服务协议'/>
                <img onClick={this.toRight.bind(this)} src={require('../images/icon_right.png')} alt="icon"/>
            </div>
            </div>
        )
    }
}

class InformationContent1 extends React.Component{
    constructor(props){
        super(props)

        this.state={
            visible:'none',
            scroll:0,
        }
    }
    lookImg(){
       this.setState({
           visible:"block",
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
            <div>
                <div className="Box" >
                    <div className="title" style={{marginBottom: '30px'}}>大账户携手重庆富民银行 让您的资金更安全</div>
                    <div className="text">自2016年网贷监管暂行办法发布后“银行存管”成为互金行业热点，而银行存管更是作为衡量网贷平台安全性的硬指标。在2017年年5月，大账户携手重庆富民银行签订资金存管服务协议。我们仅进行信息撮合，全程不触碰任何资金，银行把关，保证每一个标的都是真实的，更合规、更大限度地保障用户资金安全。</div>
                    <div>
                        <img className="mid_img" src={require('../images/information/mid.png')} alt="information_bg"/>
                        <Button onClick={this.lookImg.bind(this)} className="btn_lookImg">查看存管协议</Button>
                    </div>
                    <div>
                        <div className="title">大账户为什么要接入银行存管</div>
                        <div className="title1">1、全面符合监管要求</div>
                        <div className="text">接入银行资金存管是为了更好的保障用户账户资金安全，积极响应银监会下发的各项监管指导意见。大账户接入重庆富民银行资金存管系统，“直接存管”模式，完全符合监管要求。</div>
                        <div className="title1">2、全力守护资金安全</div>
                        <div className="text">存管的核心原理是将平台和用户资金进行隔离，用户的资金不再进入平台控制的账户，借款人和出借人之间的交易发生在双方的银行账户之间，平台无法触碰用户资金。</div>
                    </div>
                    <div>
                        <div className="title"style={{margin:'30px 0 10px'}}>大账户为什么选择富民银行</div>
                        <div className="text" style={{marginBottom:'10px'}}>1、重庆富民银行是经中国银监会批准成立的中西部第一家民营银行，由瀚华金控、宗申集团、福安药业、渝江压铸、海特环保、陶然居和博恩科技等重庆七家优秀的民营企业共同发起设立，注册资本30亿元。</div>
                        <div className="text">2、重庆富民银行致力于用革命性的创新科技和全新的金融理念，重新塑造中国普惠金融的业务模式，引导更多的社会资金、资源和智慧来扶持金融弱势群体，让金融服务的雨露甘霖惠及大众。</div>
                    </div>
                    <div>
                        <div className="title"style={{margin:'30px 0 10px'}}>重庆富民银行如何保障用户资金安全</div>
                        <div className="text">1、接入重庆富民银行存管后，平台及平台用户将在银行开立存管专用账户，由厦门银行对平台用户账户资金及平台自有运营资金进行分账监管，二者完全独立且相互隔离，平台无法接触用户账户资金。</div>
                        <div className="text" style={{margin:'10px 0'}}>2、资金的每一笔动态都要向银行发送指令，将出借人的存管专户资金划拨到出借标对应的账户上。</div>
                        <div className="text">3、重庆富民银行对交易流程进行管理，并对所有的资金流水存档记录，确保借贷双方的资金流转和债权关系清晰明确。</div>
                    </div>
                    <div>
                        <div className="title" style={{marginTop:'60px'}}>更多关于银行存管</div>
                        <div className="title1">1、接入银行存管的方式有哪些？</div>
                        <div className="blueText">
                            <img className="icon" src={require('../images/icon_card.png')} alt="icon"/>
                            <div style={{float:'left'}}>1.1银行直连</div>
                        </div>
                        <div className="text">p2p平台直接与银行开通支付结算通道，投资人不需要充值提现。借款到期时，还款直接通过银行打到投资人账户，相当于双方直接通过银行进行线上交易。</div>
                        <div className="blueText">
                            <img className="icon" src={require('../images/icon_home.png')} alt="icon"/>
                            <div style={{float:'left'}}>1.2直接存管</div>
                        </div>
                        <div className="text" style={{marginBottom:'20px'}}>目前大部分平台与银行资金存管合作最常见的模式
    相比银行直连，在形式上多了充值和提现两个步骤；在账户数量上多了平台存管账户，有些还有风险准备金账户、第三方担保账户；存管的银行会为投融资双方开设独立的个人账户后，就充值、提现等支付结算和资金流向进行监管</div>
                        <div className="text">大账户属于直接存管，重庆富民银行作为存管银行对整个投资流程进行监管，保证每次资金流水的安全。</div>
                        <div className="blueText">
                            <img className="icon" src={require('../images/icon_dun.png')} alt="icon"/>
                            <div style={{float:'left'}}>1.3银行第三方支付联合存管</div>
                        </div>
                        <div className="text" style={{marginBottom:'10px'}}>即银行和第三方支付公司合作，推出联合存管方案。要求第三方机构在存管银行开设存管账户，并根据平台发出的相关指令完成充值、投资、提现等功能，银行则负责监管资金流向。</div>
                        <div className="title1" style={{marginTop:'20px'}}>2、银行卡绑定有什么影响？</div>
                        <div className="text">上线后支持13家银行卡进行绑卡：交通银行、中国银行、中国农业银行、中国工商银行、中国建设银行、中国邮政储蓄银行、招商银行、平安银行、中信银行、广发银行、浦发银行、兴业银行、中国光大银行。</div>
                        <div className="title1" style={{marginTop:'20px'}}>3、账户资金会有什么变化？</div>
                        <div className="text">用户资金由银行专门管理，只有用户本人才能操作账户上的资金，从根本上杜绝了资金被挪用的风险。</div>
                    </div>
                </div>
                <LookImg visible = {this.state.visible} close={this.close.bind(this)}/>
            </div>
        )
    }
}

export  default InformationContent1;
