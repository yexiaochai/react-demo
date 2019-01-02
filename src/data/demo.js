import Model from './abstractmodel';
import Store from './abstractstore';

class DemoModel extends Model {
  constructor() {
    super();
    let scope = this;
    this.domain = 'https://www.easy-mock.com/mock/5c29d45956db174d47ce162a/example_copy';
    this.param = {
      head: {
        version: '1.0.1',
        ct: 'ios'
      }
    };

    //如果需要缓存,可以在此设置缓存对象
    this.cacheData = null;

    this.pushValidates(function (data) {
      return scope._baseDataValidate(data);
    });
  }

  //首轮处理返回数据，检查错误码做统一验证处理
  _baseDataValidate(data) {
    if (typeof data === 'string') data = JSON.parse(data);
    if (data.errno === 0) {
      if (data.data) data = data.data;
      return true;
    }
    return false;
  }

  dataformat(data) {
    if (typeof data === 'string') data = JSON.parse(data);
    if (data.data) data = data.data;
    if (data.data) data = data.data;
    return data;
  }

  buildurl() {
    return this.domain + this.url;
  }

  getSign() {
    return JSON.stringify(this.param);
  }
  onDataSuccess(fdata, data) {
    if (this.cacheData && this.cacheData.set)
      this.cacheData.set(fdata, this.getSign());
  }

  //如果有缓存直接读取缓存,没有才请求
  execute(onComplete, ajaxOnly) {
    let data = null;
    if (!ajaxOnly && this.cacheData && this.cacheData.get) {
      data = this.cacheData.get(this.getSign());
      if (data) {
        onComplete(data);
        return;
      }
    }
    super.execute(onComplete);
  }

}

class ListStore extends Store {
  constructor() {
    super();
    this.key = 'DEMO_LIST';
    //30分钟过期时间
    this.lifeTime = 30;
  }
}

class ListModel extends DemoModel {
  constructor() {
    super();
    this.url = '/train/list';
    this.type = 'GET';
    // this.type = 'POST';

    this.cacheData = new ListStore;
  }
  //每次数据访问成功，错误码为0时皆会执行这个回调
  onDataSuccess(fdata, data) {
    super.onDataSuccess(fdata, data);
    //开始执行自我逻辑
    let o = {
      _indate: new Date().getTime()
    };
    // for (let k in fdata) {
    //   o[k] = typeof fdata[k];
    // }
    //执行数据上报逻辑
    console.log('执行数据上报逻辑', o);
  }
}

let listModel = new ListModel()

export default listModel