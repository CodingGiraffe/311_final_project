const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        host: "35.238.193.32",
        user: "root",
        password: "",
        database: "Admin",
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;