import { WebSQLDatabase } from "expo-sqlite";
import { DatabaseConnection } from "./DatabaseConnection";
import { DROP_TABLE_FIRST_TIME, CREATE_TABLE_FIRST_TIME } from "./SQL";
class DatabaseInit {
    db: WebSQLDatabase;

    constructor() {
        this.db = DatabaseConnection.getConnection();
    }

    initTables() {
        this.db.transaction(
            (e) => {
                e.executeSql(DROP_TABLE_FIRST_TIME, [], (e) => { });
                e.executeSql(
                    CREATE_TABLE_FIRST_TIME,
                    [],
                    (tx) => {
                    },
                    (transaction, err) => {

                        return true;
                    }
                );
            },
            (err) => { return true; }
        );

        this.db.transaction((tx) => {
            tx.executeSql(`SELECT * FROM FIRST_TIME`, [], (_, { rows }) => {
                console.log("rows", rows);
            }, (transaction, err) => { console.log(err); return true; });
        });
    }
}

export default DatabaseInit;
