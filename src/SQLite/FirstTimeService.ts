import { WebSQLDatabase } from "expo-sqlite";
import { DatabaseConnection } from "./DatabaseConnection";

class FirstTimeService {
    db: WebSQLDatabase;
    constructor() {
        this.db = DatabaseConnection.getConnection();
    }

    isFirstTime(): void {
        this.db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO FIRST_TIME(YES) VALUES (FALSE)",
                [],
                (e) => {
                    console.log(e);
                },
                (transaction) => {
                    console.log(transaction);
                    return true;
                }
            );
        });
        // this.db.transaction((tx) => {
        //     tx.executeSql(`SELECT COUNT (*) FROM FIRST_TIME;`, [], (_, { rows }) => {
        //         console.log("rows", rows);
        //     }, (transaction, err) => { console.log(err); return true; });
        // });

        // this.db.transaction((tx) => {
        //     tx.executeSql(`SELECT name FROM sqlite_master WHERE type = "table"`, [], (_, { rows }) => {
        //         console.log("rows", rows);
        //     }, (transaction, err) => { console.log(err); return true; });
        // });
    }
}

export default FirstTimeService;
