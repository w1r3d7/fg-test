
export default class Api {
  _baseUrl = 'http://www.filltext.com/';

  _dataType = null;

  setDataType(type) {
    this._dataType = type;
  }

  getData () {
    return fetch(this._baseUrl + this._dataType)
            .then((res) => res.json());
  }
}
