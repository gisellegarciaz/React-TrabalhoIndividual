import React from "react";
import { CardContainer, CardTitle, CardDescription } from "./styles";

export default function Card({ title, description }) {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
}
