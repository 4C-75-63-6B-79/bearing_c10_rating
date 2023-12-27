import { Fragment } from "react";

function TextBearingLoadLifeAtRatedReliability() {
  return (
    <Fragment>
      <h2>Bearing Load Life At Rated Reliability</h2>
      <div>
        <h3>Bearing Life</h3>
        <p>
          Life of individual bearing is the total number of revolutions of
          bearing opeartions until first faliure criterion is developed in load
          carrying surfaces. According to American Bearing Manufactures
          Association the failue criterion is the first evidence of fatigue. The
          fatigue criterion used by Timken Company Laboratories is the spalling
          or pitting of an area of 0.01 in<sup>2</sup>. Timken also observes
          that useful life of the bearing may extend considerably beyond this
          point.
        </p>
        <h3>Rating Life</h3>
        <p>
          Rating life for a group of bearing is the number of revolutions the
          group of bearing will achieve or exceed before the faliure criterion
          develops. The terms minimum life, L<sub>10</sub> life are synonyms for
          rating life. Each bearing manufacturer will choose a specific rating
          life for which load ratings of bearings are reported. Most commonly
          used rating life is 10<sup>6</sup> revolutions. Timken Company is well
          known exception, rating its bearing at 90 x 10
          <sup>6</sup>. revolutions.
        </p>
        <h3>Catalog load rating</h3>
        <p>
          Catalog load rating is defined as the radial load that causes 10
          percent of a group of bearings to fail at bearing manufacturer&apos;s
          rating life. This is denoted by C<sub>10</sub>. This is often referred
          to as Basic Dynamic Load Rating or Basic Load Rating. Radial load
          required to cause failure at such low life is unrealistically high.
          Thus this is just a reference value.
        </p>
        <h3>
          Process to relate design bearing life and load with catalog rating
          life and load.
        </h3>
        <ol>
          <li>
            The life failure criterion is plotted on a graph using log
            tranformation. Using regression equation of form,
            <center>
              <br></br>
              <b>
                <font size="5">
                  FL<sup>1/a</sup> = constant&emsp;&emsp;... <i>i</i>
                </font>
              </b>
            </center>
            <br></br>
            <ul>
              <li>a = 3 for ball bearings</li>
              <li>
                a = 10/3 for roller bearings (cylindrical and tapered roller)
              </li>
            </ul>
          </li>
          <li>
            We need to determine the radial load required for our application as
            well as the bearing life that we require.
          </li>
          <li>
            Once the desired load and life are determined we can use equation
            &#40; <i>ii</i> &#41; to relate the catalog load rating
            corresponding to the catalog life rating life.
            <center>
              <br></br>
              <b>
                <font size="5">
                  F<sub>R</sub>L<sub>R</sub>
                  <sup>1/a</sup> = F<sub>D</sub>L<sub>D</sub>
                  <sup>1/a</sup>&emsp;&emsp;...<i>ii</i>
                </font>
              </b>
            </center>
            <br></br>
            Units of L<sub>R</sub> and L<sub>D</sub> are in revolutions and
            subscripts R and D stand for rated and desired respectively. F
            <sub>R</sub> obtained from equation &#40; <i>ii</i> &#41; is equal
            to the C<sub>10</sub> rating.
            <br></br>
            <b>
              <i>x</i>
              <sub>D</sub> = L<sub>D</sub> &frasl; L<sub>D</sub>
            </b>{" "}
            is dimnesionless multiple of rating life.
            <br></br>
          </li>
        </ol>
      </div>
    </Fragment>
  );
}

export default TextBearingLoadLifeAtRatedReliability;
