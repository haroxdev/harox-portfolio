import mysql from 'mysql';

const dbConfig = {
  host: "auth-db973.hstgr.io",
  user: "u598286115_haroxtop",
  password: "*OK/sc6V]",
  database: "u598286115_haroxtop"
};

const connection = mysql.createConnection(dbConfig);

export default class myVisits {
    constructor() {
        this.query = "SELECT MAX(id) FROM visit_count";
    }

    getVisits() {
        return new Promise((resolve, reject) => {
            connection.query(this.query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
}