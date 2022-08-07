import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Container } from "./style";
import InputPhoneNumber from "./src/components/InputPhoneNumber";

const App: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  return (
    <Container>
      <StatusBar style="auto" />
      <InputPhoneNumber value={phoneNumber} onChangeText={setPhoneNumber} />
    </Container>
  );
};

export default App;
