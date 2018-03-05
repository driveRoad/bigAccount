import React from 'react';
import '../CSS/information5.css';
import { width } from 'window-size';

class InformationContent5 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="Box">
                <div className="title" style={{marginTop:0}}>风控团队介绍</div>
                <div className="text">公司风控团队有来自银行、支付宝、paypal等金融行业的风险管理专家，拥有长期的互联网风控经验，采用大数据技术和机器学习算法实现自动化的风险控制。</div>
                <div className="title"style={{marginTop:"30px"}}>风控流程</div>
                <img  src={require('../images/information/fkliucheng.png')} alt="风控流程" style={{margin:'50px auto',display:'block',width:'70%'}}/>
                <div className="title">欺诈风险防范</div>
                <div className="text">公司基于大数据技术和机器学习算法，从设备指纹、社交关系、地理空间等诸多维度，对不同订单之间的关联度进行统计分析，对高风险类群进行有效识别和拦截。</div>
                <img  src={require('../images/information/fxfangfan.png')} alt="欺诈风险防范" style={{margin:'50px auto',display:'block',width:'70%'}}/>
                <div className="title">货后管理</div>
                <img  src={require('../images/information/hhguanli.png')} alt="货后管理" style={{margin:'50px auto',display:'block',width:'70%'}}/>
                <div className="title">风控优势</div>
                <div className="text">目前通过与第三方数据公司的合作和自有技术的支持，已有“千”数量级的风险变量供风险决策使用；同时运用先进的算法与机器学习的技术手段制定有效的评分模型，并实时追踪模型效果，同时做到及时修正；我们也有先进的反欺诈手段，如多维度关系图谱、文本分析、自然语言处理、设备指纹、SDK等防范方式与手段；同时业务上线运行时，我们有实时流控机制，进一步防范团体欺诈风险。</div>
            </div>
        )
    }
}

export  default InformationContent5;