
export default class Api {
  _baseUrl = 'https://test-7d342-default-rtdb.europe-west1.firebasedatabase.app/';

  _dataType = null;

  setDataType(type) {
    this._dataType = type;
  }

  getData () {
    return fetch(this._baseUrl + this._dataType)
            .then((res) => res.json());
  }
}
