import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Container } from "./style";
import InputPhoneNumber from "./src/components/InputPhoneNumber";
import InitTables from "./src/SQLite/InitTables";
import FirstTimeService from "./src/SQLite/FirstTimeService";

const App: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  useEffect(() => {
    new InitTables().initTables();
    new FirstTimeService().isFirstTime();
  }, []);

  return (
    <Container>
      <StatusBar style="auto" />
      <InputPhoneNumber value={phoneNumber} onChangeText={setPhoneNumber} />
    </Container>
  );
};

export default App;
