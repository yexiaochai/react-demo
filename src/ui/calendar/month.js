import React from 'react';
import dateUtils from '../../common/utils'
import CalendarDay from './day'

export default class CalendarMonth extends React.Component {

    //获取首次空格
    _renderBeginDayOfMouth(beforeDays) {
        let html = [];
        for (let i = 0; i < beforeDays; i++) {
            html.push(<li key={i} className="cm-item--disabled"></li>);
        }
        return html;
    }

    //和_renderBeginDayOfMouth类似可以重构掉
    _renderDays(year, month, days) {
        let html = [];
        for(let i = 1; i <= days; i++) {
            html.push(    
                <CalendarDay ondayclick={this.props.ondayclick}  selectdate={this.props.selectdate}  key={i} year={year} month={month} day={i} />
            )
        }
        return html;
    }

    render() {
        let year = this.props.year;
        let month = this.props.month;
        
        let name = new Date(year, parseInt(month) - 1, 1);
        name = name.getFullYear() + '-' + (name.getMonth() + 1);

        let displayInfo = dateUtils.getDisplayInfo(new Date(year, parseInt(month) - 1), 1);
console.log(displayInfo)
        return (
            <ul className="cm-calendar-bd ">
                <h3 className="cm-month calendar-cm-month js_month">{name}</h3>
                
                <ul className="cm-day-list">
                    { this._renderBeginDayOfMouth( displayInfo.beginWeek) }
                    { this._renderDays(year, month, displayInfo.days) }
                </ul>
            </ul>
        )
    }
}