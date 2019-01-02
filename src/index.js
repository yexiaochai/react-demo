import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './ui/calendar/calendar';
import Header from './ui/header/header';
import ListContainer from './ui/list/list';
import listModel from './data/demo';



class CalendarMain extends React.Component {
    constructor(props) {
        super(props);
        let today = new Date().getTime();
        this.state = {
            month: 12,
            selectdate: today
        };
    }
    preMonth() {
        this.setState({
            month: this.state.month - 1
        });
    }
    nextMonth() {
        this.setState({
            month: this.state.month + 1
        });
    }
    ondayclick(year, month, day) {

        this.setState({
            selectdate: new Date(year, parseInt(month) - 1, day).getTime()
        })

    }
    render() {
        // today = new Date(today.getFullYear(), today.getMonth(), 1);
        let selectdate = this.state.selectdate;;
        let month = this.state.month;
        return (
            <div className="calendar-wrapper-box">
                <div className="box-hd">
                    <span className="fl icon-back js_back " onClick={this.preMonth.bind(this)}  ></span>
                    <span className="fr icon-next js_next" onClick={this.nextMonth.bind(this)} ></span>
                </div>
                <Calendar ondayclick={this.ondayclick.bind(this)} year="2018" month={month} selectdate={selectdate} />
            </div>
        )
    }
}

class HeaderMain extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '我是标题'
        };

        //这里定义，右边按钮规则
        this.state.right = [
            {
                //希望代码执行时候的作用域
                view: this,
                tagname: 'search',
                callback: function () {
                    console.log(this)
                    console.log('搜索')
                }
            },
            {
                view: this,
                tagname: 'tips',
                value: '说明',
                callback: function () {
                    alert('我是按钮')
                }
            }
        ]

    }
    onBackaction() {
        console.log('返回')
    }
    render() {
        return (
            <Header right={this.state.right} title={this.state.title} backaction={this.onBackaction.bind(this)} />
        )
    }
}

//业务列表项目，因为每个页面列表展示皆不一样，所以将这段代码外放
class ListItem extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <li className="bus-list-item ">
                <div className="bus-seat">
                    <span className=" fl">{data.train_number}</span><span className=" fr">{data.use_time + '分'} </span>
                </div>
                <div className="detail">
                    <div className="sub-list set-out">
                        <span className="bus-go-off">{data.from_time}</span> <span className="start"><span className="icon-circle s-icon1">
                        </span>{data.from_station}</span> <span className="fr price">￥{data.seats[0].seat_price}起</span>
                    </div>
                    <div className="sub-list">
                        <span className="bus-arrival-time">{data.to_time}</span> <span className="end"><span className="icon-circle s-icon2">
                        </span>{data.to_station}</span> <span className="fr ">666张</span>
                    </div>
                </div>
                <div className="bus-seats-info">
                    <span>硬座(555) </span>
                    <span>硬卧(1653) </span>
                    <span>软卧(56) </span>
                    <span>无座(334) </span>
                </div>
            </li>
        )
    }
}

class PageMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        let scope = this;
        listModel.setParam({
            a: 1,
            b: 'aa'
        });
        listModel.execute(function (data) {
            scope.setState({
                data: scope.state.data.concat(data)
            });
        })
    }
    render() {
        let List = ListContainer(ListItem);


        // today = new Date(today.getFullYear(), today.getMonth(), 1);
        return (
            <div className="page-list cm-page">
                <HeaderMain />
                <div className="calendar-bar-wrapper js_calendar_wrapper">
                </div>
                <List data={this.state.data} />
            </div>
        )
    }
}

ReactDOM.render(
    <PageMain  />, document.getElementById('root')
);
