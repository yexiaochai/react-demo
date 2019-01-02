export default class Model {
  constructor() {
    this.url = '';
    this.param = {};
    this.validates = [];
    this.type = 'GET';
  }
  pushValidates(handler) {
    if (typeof handler === 'function') {
      this.validates.push(handler);
    }
  }
  setParam(key, val) {
    if (typeof key === 'object') {
      Object.assign(this.param, key);
    } else {
      this.param[key] = val;
    }
  }
  //@override
  buildurl() {
    return this.url;
  }
  onDataSuccess() {
  }
  //执行数据请求逻辑
  execute(onComplete, onError) {
    let scope = this;
    let _success = function (data) {
      let _data = data;
      if (typeof data == 'string') _data = JSON.parse(data);

      // @description 开发者可以传入一组验证方法进行验证
      for (let i = 0, len = scope.validates.length; i < len; i++) {
        if (!scope.validates[i](data)) {
          // @description 如果一个验证不通过就返回
          if (typeof onError === 'function') {
            return onError.call(scope || this, _data, data);
          } else {
            return false;
          }
        }
      }

      // @description 对获取的数据做字段映射
      let datamodel = typeof scope.dataformat === 'function' ? scope.dataformat(_data) : _data;

      if (scope.onDataSuccess) scope.onDataSuccess.call(scope, datamodel, data);
      if (typeof onComplete === 'function') {
        onComplete.call(scope, datamodel, data);
      }
    };
    this._sendRequest(_success);
  }

  _getParamStr(s) {
    let str = '', f = false;
    
    for (let k in this.param) {
      f = true;
      str = str + k + '=' + (typeof this.param[k] === 'object' ? JSON.stringify(this.param[k]) : this.param[k])  + s;
    }
    if(f) str = str.substr(0, str.length - 1);
    return str;
  }

  //删除过期缓存
  _sendRequest(callback) {
    let url = this.buildurl();
    let param = {
      method: this.type,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      mode: 'cors',
      cache: 'no-cache'
    };
    if (this.type === 'POST') {
      param.body = JSON.stringify(this.param);
    } else {
      if (url.search(/\?/) === -1) {
        url += '?' + this._getParamStr('&')
      } else {
        url += '&' + this._getParamStr('&')
      }
    }

    fetch(url, param)
      .then(res => res.json())
      .then((data) => {
        callback && callback(data);
      })

    //小程序模块
    // wx.request({
    //   url: this.buildurl(),
    //   data: this.param,
    //   success: function success(data) {
    //     callback && callback(data);
    //   }
    // });

  }
}
