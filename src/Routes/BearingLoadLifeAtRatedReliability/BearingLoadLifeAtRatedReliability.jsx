import { Fragment } from "react";
import TextBearingLoadLifeAtRatedReliability from "../../Components/TextBearingLoadLifeAtRatedReliability/TextBearingLoadLifeAtRatedReliability";
import InputForm from "../../Components/InputForm/InputForm";

function BearingLoadLifeAtRatedReliability() {
  const formData = {
    legend: {
      text: "Basic Dynamic Load Rating",
      symbol: "C",
      symbolSub: "10",
      unit: "kN",
    },
    inputs: [
      {
        labelFor: "designLoad",
        labelText: "Enter Design Load",
        labelUnit: "kN",
        labelSymbol: "F",
        labelSymbolSub: "D",
        inputType: "text",
        inputName: "designLoad",
        inputId: "designLoad",
        inputPattern: "([0-9]{1,})||([0-9]{0,}[.][0-9]{1,})",
        inputSize: "10",
        inputPlaceholder: "10.0",
        inputValue: "",
        inputRequired: true,
      },
      {
        labelFor: "designLife",
        labelText: "Enter Design Life",
        labelUnit: "revs",
        labelSymbol: "L",
        labelSymbolSub: "D",
        inputType: "text",
        inputName: "designLife",
        inputId: "designLife",
        inputPattern: "[0-9]{1,}",
        inputSize: "20",
        inputPlaceholder: "1000000",
        inputValue: "",
        inputRequired: true,
      },
    ],
    fieldsets: [
      {
        legend: {
          text: "Choose the type of bearing",
          symbol: "a",
          symbolSub: "",
          unit: "",
        },
        inputs: [
          {
            labelFor: "ballBearing",
            labelText: "Ball Bearing",
            labelUnit: "",
            labelSymbol: "a = 3",
            labelSymbolSub: "",
            inputType: "radio",
            inputName: "typeOfBearing",
            inputId: "ballBearing",
            inputPattern: "",
            inputSize: "",
            inputPlaceholder: "",
            inputValue: "3",
            inputRequired: "",
            defaultChecked: true,
          },
          {
            labelFor: "rollerBearing",
            labelText: "Roller Bearing",
            labelUnit: "",
            labelSymbol: "a = 10 / 3",
            labelSymbolSub: "",
            inputType: "radio",
            inputName: "typeOfBearing",
            inputId: "rollerBearing",
            inputPattern: "",
            inputSize: "",
            inputPlaceholder: "",
            inputValue: "10/3",
            inputRequired: "",
            defaultChecked: false,
          },
        ],
      },
    ],
    button: {
      buttonType: "submit",
      buttonOnClick: "",
      buttonText: "Calculate",
      buttonSymbol: "C",
      buttonSymbolSub: "10",
    },
  };

  return (
    <Fragment>
      <h2>Bearing Load Life At Rated Reliability</h2>
      <InputForm formData={formData} />
      <TextBearingLoadLifeAtRatedReliability />
    </Fragment>
  );
}

export default BearingLoadLifeAtRatedReliability;
