import React from "react";
import { TextInputMask } from "react-native-masked-text";
import style from "./style";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

const InputPhoneNumber: React.FC<Props> = ({ value, onChangeText }) => (
  <TextInputMask
    placeholder="(00) 00000-0000"
    style={style.input}
    type="cel-phone"
    options={{
      maskType: "BRL",
      withDDD: true,
      dddMask: "(99) ",
    }}
    value={value}
    onChangeText={onChangeText}
  />
);

export default InputPhoneNumber;
