class SingletonService {
  constructor() {
    if (!SingletonService.instance) {
      SingletonService.instance = this;
      this._data = null;
      this._groupData = null;
      this._fetchData();
      this._groupBy(this._data, "id");
    }
    return SingletonService.instance;
  }

  _fetchData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("done");
        this._data = data;
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error.message}`);
        this._data = null;
      });
  }

  getData() {
    return this._data;
  }

  _groupBy(array, key) {
    return array.reduce((result, obj) => {
      const keyValue = obj[key];

      if (!result[keyValue]) {
        result[keyValue] = [];
      }

      result[keyValue].push(obj);

      this._groupData = result;
    }, {});
  }
  getGroupData() {
    return this._groupData;
  }
}

const singletonInstance = new SingletonService();
