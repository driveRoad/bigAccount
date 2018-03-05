import React from 'react';
import moment from 'moment';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/line';
import '../CSS/information2.css';

class InformationContent2 extends React.Component{
  constructor(props){
    super(props)
        var  moment = require('moment');
        var Mock = require('mockjs');
        var Random = Mock.Random;

        var fun = function(){
            var objArr = [];
            for(var i=0;i<7;i++){
                objArr.push({
                    "name":Random.cword(5,9),
                    "number":Random.natural(45000,99224),
                });
            }
            return objArr
        }

        this.state={
            record1:Mock.mock(
                fun()
            ),
            record2:Mock.mock(
                fun()
            ),
        }

    }
    render(){
        return(
            <div style={{marginLeft:'42px'}}>
                <div className="titleBox">
                    <div className="tit">平台实时数据</div>
                    <div className="time">{moment().format('YYYY-MM-DD')}  （部分数据可能有延迟）</div>
                </div>
                <div className="recordBox">
                    {
                        this.state.record1.map(function(item){
                            return(
                                <div className="record" key={item.name+item.number}>
                                    <div className="money">{item.number.toLocaleString('en-US')}</div>
                                    <div className="name">{item.name}</div>
                                </div>
                            )
                        })
                    }
                </div>

                <Chart />

                <div className="titleBox" style={{marginTop:"30px"}}>
                    <div className="tit">交易数据统计</div>
                    <div className="time">数据截止至 2017-12-31</div>
                </div>

                <div className="recordBox">
                    {
                        this.state.record1.map(function(item){
                            return(
                                <div className="record" key={item.name+item.number}>
                                    <div className="money">{item.number.toLocaleString('en-US')}</div>
                                    <div className="name">{item.name}</div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}

class Chart extends React.Component{
    constructor(props){
        super(props)

        this.state={
            date:['2017-2','2017-2','2017-2','2017-2','2017-2','2017-2','2017-2','2017-2','2017-2','2017-2','2017-2'],
            data:[100, 150,220, 200, 220,240, 280,300,350,460,500],
        }
    }

    componentDidMount(){
        var echarts = require('echarts');
        var myChart = echarts.init(document.getElementById('main'));

        myChart.setOption({
            title: { text: '累计投资额' },
            tooltip: {},
            xAxis: {
                type:'category' ,
                axisTick:{
                    show:true,
                    alignWithLabel:true,
                },
                data:this.state.date
            },
            yAxis: {
                type:'value',
            },
            series: [{
                name: '累计投资额',
                type: 'line',
                data: this.state.data
            }]
        });
    }
    render(){
        return(
            <div id="main" className="ChartBox">

            </div>
        )
    }
}
export  default InformationContent2;
