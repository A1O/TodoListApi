import SqlDatabase from '#SqlDatabase';

class Service {
  sqlDatabase: SqlDatabase;

  constructor(sqlDatabase: SqlDatabase) {
    this.sqlDatabase = sqlDatabase;
  }
}

export default Service;
