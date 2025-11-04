import React from "react";
import { InputContainer, Label, Field } from "./styles";

export default function Input({ label, type, value, onChange }) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Field type={type} value={value} onChange={onChange} />
    </InputContainer>
  );
}
