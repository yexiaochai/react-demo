import React from 'react';
import './style.css';

let ListContainer = WrappedComponent => {
    return class extends React.Component {

        _render(data) {
            let html = [];
            for(let i = 0, len = data.length; i < len; i++) {
                html.push(<WrappedComponent key={i} data={data[i]} />);
            }
            return html
        }
        render() {
            let data = this.props.data;

            console.log(data);
            // debugger;

            return (
                <ul className="bus-list js_bus_list ">
                    {data.length > 0 ? this._render(data) : '暂无数据'}
                </ul>
            )
        }
    }
}

export default ListContainer;