import { Fragment } from "react";
import { Form, useActionData } from "react-router-dom";
import TextBearingLoadLifeAtRatedReliability from "../../Components/TextBearingLoadLifeAtRatedReliability/TextBearingLoadLifeAtRatedReliability";

function BearingLoadLifeAtRatedReliability() {
  const actionData = useActionData();
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
              // value={designLoad}
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
              // value={designLife}
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
      {actionData && actionData.error && <p>{actionData.error}</p>}
      {actionData && actionData.c10Rating && <p>{actionData.c10Rating}</p>}
      <br></br>
      <TextBearingLoadLifeAtRatedReliability />
    </Fragment>
  );
}

export default BearingLoadLifeAtRatedReliability;
