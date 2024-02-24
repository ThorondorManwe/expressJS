import React from "react";
import './App.css'

export default function App() {
  const getElement = (weather: string): JSX.Element => {
      const element = <h1>The weather is {weather}</h1>;
      return element;
  };
  return getElement("sunny");
}