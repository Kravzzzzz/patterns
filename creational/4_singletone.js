class DataBase {
  constructor(data) {          
    if (DataBase.exists) {     //Например для работы только с одной БД
      return DataBase.instance;
    }

    DataBase.instance = this;
    DataBase.exists = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const mongo = new DataBase("Mondo data");
console.log(mongo.getData());

const mysql = new DataBase("MySQL data");
console.log(mysql.getData());
