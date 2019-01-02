import React from 'react';
export default class Header extends React.Component {

    _renderRight() {
        let html = [];
        let arr = this.props.right;
        if(!arr) return;

        for(let i = 0, len = arr.length; i < len; i++) {
            let item = arr[i];
            html.push(   
                <span onClick={item.callback.bind(item.view, this)} key={i} className={item.value ? 'cm-header-btn fr' : 'cm-header-icon fr'} >
                    {item.value ? item.value : <i className={'icon-' + item.tagname}></i>}
                </span>
            )
        }
        return html;
    }

    onClick() {
        if(this.props.backaction) {
            this.props.backaction();
        }
    }

    render() {
        return (
            <div className="cm-header">
                {this._renderRight()}
                <span className=" cm-header-icon fl  js_back" onClick={this.onClick.bind(this)} >
                    <i className="icon-back"></i>
                </span>
                <h1 className="cm-page-title js_title">
                    {this.props.title}
                </h1>
            </div>
        )
    }
}