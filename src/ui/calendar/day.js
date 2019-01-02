import React from 'react';
import dateUtils from '../../common/utils'

export default class CalendarDay extends React.Component {
    onClick(e) {
        let year = this.props.year;
        let month = this.props.month;
        let day = this.props.day;

        this.props.ondayclick(year, month, day)
    }

    render() {
        let year = this.props.year;
        let month = this.props.month;
        let day = this.props.day;
        let selectdate = this.props.selectdate;

        let klass = dateUtils.isOverdue(year, parseInt(month) - 1, day) ? 'cm-item--disabled' : '';
        
        if(dateUtils.isToday(year, parseInt(month) - 1, day, selectdate))
            klass += ' active '

        return (
            <li onClick={this.onClick.bind(this)} className={klass} year={year} month={month} day={day}  >
                <div className="cm-field-wrapper ">
                    <div className="cm-field-title">{day }</div>
                </div>
            </li>
        )
    }
}