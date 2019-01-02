import React from 'react';
import dateUtils from '../../common/utils'
import CalendarMonth from './month'


export default class Calendar extends React.Component {
    render() {
        let year = this.props.year;
        let month = this.props.month;
        let weekDayArr = ['日', '一', '二', '三', '四', '五', '六'];
        //获取当前日期数据
        let displayInfo = dateUtils.getDisplayInfo(new Date(year, month, 0));
        return (
            <ul className="cm-calendar ">
                <ul className="cm-calendar-hd">
                    {
                        weekDayArr.map((data, index) => {
                            return <li key={index} className="cm-item--disabled">{data}</li>
                        })
                    }
                </ul>
                <CalendarMonth ondayclick={this.props.ondayclick} selectdate={this.props.selectdate} year={year} month={month}/>
            </ul>
        )
    }
}