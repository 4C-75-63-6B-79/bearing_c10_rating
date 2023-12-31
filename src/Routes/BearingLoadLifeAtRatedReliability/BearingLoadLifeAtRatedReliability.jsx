import { Fragment } from "react";
import { useState } from "react";
import { Form } from "react-router-dom";
import TextBearingLoadLifeAtRatedReliability from "../../Components/TextBearingLoadLifeAtRatedReliability/TextBearingLoadLifeAtRatedReliability";

function BearingLoadLifeAtRatedReliability() {
  const [designLoad, setDesignLoad] = useState("");
  const [designLife, setDesignLife] = useState("");
  const [valueOfA, setValueOfA] = useState(3);

  function valueOfDesignLoadChanged(event) {
    setDesignLoad(event.target.value);
  }

  function valueOfDesignLifeChanged(event) {
    setDesignLife(event.target.value);
  }

  function typeOfBearingChanged(event) {
    setValueOfA(event.target.name.checked ? event.target.value : valueOfA);
  }

  function calculateC10Rating() {
    let c10 = designLoad * Math.pow(designLife / 1000000, 1 / valueOfA);
    console.log(c10);
  }

  return (
    <Fragment>
      <h2>Bearing Load Life At Rated Reliability</h2>
      <Form method="POST">
        <fieldset>
          <legend>
            Basic Dynamic Load Rating or
            <i>
              C<sub>10</sub>
            </i>
          </legend>
          <div>
            <label htmlFor="designLoad">
              Enter Design Load <i>kN</i> F<sub>D</sub>&emsp;
            </label>
            <input
              type="text"
              name="designLoad"
              id="designLoad"
              pattern="([0-9]{1,})||([0-9]{0,}[.][0-9]{1,})"
              size="10"
              placeholder="10.0"
              value={designLoad}
              onChange={valueOfDesignLoadChanged}
              required
            ></input>
          </div>
          <br></br>
          <div>
            <label htmlFor="designLife">
              Enter design life <i>revs</i> L<sub>D</sub>&emsp;
            </label>
            <input
              type="text"
              name="designLife"
              id="designLife"
              pattern="[0-9]{1,}"
              size="20"
              placeholder="1000000"
              value={designLife}
              onChange={valueOfDesignLifeChanged}
              required
            ></input>
          </div>
          <br></br>
          <div>
            <fieldset>
              <legend>
                Choose the type of bearing <i>&#40;a&#41;</i>
              </legend>
              <input
                type="radio"
                id="ballBearing"
                name="typeOfBearing"
                value="3"
                onChange={typeOfBearingChanged}
                defaultChecked
              ></input>
              <label htmlFor="ballBearing">
                Ball Bearing &#40; <i>a = 3</i> &#41;
              </label>
              <br></br>
              <input
                type="radio"
                id="rollerBearing"
                name="typeOfBearing"
                value="10/3"
                onChange={typeOfBearingChanged}
              ></input>
              <label htmlFor="rollerBearing">
                Roller Bearing &#40; <i>a = 10 &frasl; 3</i> &#41;
              </label>
            </fieldset>
          </div>
          <br></br>
          <div>
            <button type="submit">
              Calculate F<sub>R</sub> or C<sub>10</sub>
            </button>
          </div>
        </fieldset>
      </Form>
      <br></br>
      <TextBearingLoadLifeAtRatedReliability />
    </Fragment>
  );
}

export default BearingLoadLifeAtRatedReliability;
