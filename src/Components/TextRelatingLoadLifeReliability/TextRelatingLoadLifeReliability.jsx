import { Fragment, useState } from "react";
import Button from "../Button/Button";

function TextRelatingLoadLifeReliability() {
  const [textOnOrOff, setTextOnOrOff] = useState(0);

  function textOnOffClickHandler() {
    setTextOnOrOff(textOnOrOff === 0 ? 1 : 0);
  }
  return (
    <Fragment>
      <Button
        buttonData={{
          buttonType: "button",
          buttonOnClick: textOnOffClickHandler,
          buttonText: "Explantion Text " + (textOnOrOff === 0 ? "On" : "Off"),
          buttonSymbol: "",
          buttonSymbolSub: "",
        }}
      />
      {textOnOrOff === 0 ? (
        ""
      ) : (
        <Fragment>
          <div>
            <h3>Catalog reliability of 90%</h3>
            <p>
              The rating of life of bearing given in catalog has reliability of
              0.90 which means at a given load 90 percent of my bearing will not
              show any signs of failure for 10<sup>6</sup> revs which is rating
              life. But during design of critical components this reliability
              rating is too low so sometimes we have to go for reliability
              values upto 0.99. In the proceeding text we will see how to find
              the C<sub>10</sub> rating for a given load and life with the
              desired reliability.
            </p>
            <h3>
              Finding catalog rating for reliability other than the catalog
              reliability of 0.90
            </h3>
            <p>
              On the logarithmic graph of load v/s x &#40;
              <i>
                L<sub>D</sub>/L<sub>10</sub> a dimnesionless life measure
              </i>
              &#41;, there is line with constant slope with reliability of 0.90
              that we used in section{" "}
              <b>Bearing load life at rated reliablity</b> to determine the C
              <sub>10</sub> rating at the desired load and life.
            </p>
            <p>
              Now when we require different reliability a parallel line is drawn
              to the above mentioned line and somehow we have have to travel
              from this line to the 0.90 reliability line. This process is
              described in book{" "}
              <b>Shigley&apos;s Meachanical engineering design</b>. We are
              directly going to plagiarize the formula for our calculations. The
              formula and the meaning of symbols used in it are given below.
              <br></br>
            </p>
            <center>
              <b>
                <font size="5">
                  C<sub>10</sub> = a
                  <sub>
                    <i>f</i>
                  </sub>{" "}
                  F
                  <sub>
                    <i>D</i>
                  </sub>{" "}
                  &#91;{" "}
                  <i>
                    x<sub>D</sub>
                  </i>{" "}
                  &#123; <i>x</i>
                  <sub>0</sub> + &#40; <i>&theta;</i> - <i>x</i>
                  <sub>0</sub> &#41; &#91; ln &#40; 1 &frasl;{" "}
                  <i>
                    R<sub>D</sub>
                  </i>{" "}
                  &#41; &#93;{" "}
                  <sup>
                    <i>1 &frasl; b</i>
                  </sup>{" "}
                  &#125; <sup>-1</sup>&#93;
                  <sup>
                    <i>1 &frasl; a</i>
                  </sup>
                  &emsp;...<i>iii</i>
                </font>
              </b>
            </center>
            <br></br>
            <ul>
              <li>
                The above equation &#40;
                <i>
                  <b>iii</b>
                </i>
                &#41; can be further simplified further by noting that ...
                <br></br>
                <center>
                  <font size="5">
                    <b>
                      ln &#40; 1 /{" "}
                      <i>
                        R<sub>D</sub>
                      </i>{" "}
                      &#41; = &#40; 1 -{" "}
                      <i>
                        R<sub>D</sub>
                      </i>
                      &#41;
                    </b>
                  </font>
                </center>
              </li>
              <li>
                So the equation &#40; <i>iii</i> &#41; can be written as
                <br></br>
                <center>
                  <font size="5">
                    <b>
                      C<sub>10</sub> = a
                      <sub>
                        <i>f</i>
                      </sub>{" "}
                      F
                      <sub>
                        <i>D</i>
                      </sub>{" "}
                      &#91;{" "}
                      <i>
                        x<sub>D</sub>
                      </i>{" "}
                      &#123; <i>x</i>
                      <sub>0</sub> + &#40; <i>&theta;</i> - <i>x</i>
                      <sub>0</sub> &#41; &#91; &#40; 1 -{" "}
                      <i>
                        R<sub>D</sub>
                      </i>{" "}
                      &#41; &#93;{" "}
                      <sup>
                        <i>1 &frasl; b</i>
                      </sup>{" "}
                      &#125; <sup>-1</sup> &#93;
                      <sup>
                        <i>1 &frasl; a</i>
                      </sup>
                      &emsp;R &gt; = 0.90 &emsp;...<i>iv</i>
                    </b>
                  </font>
                </center>
                <br></br>
              </li>
              <li>
                When{" "}
                <i>
                  R<sub>D</sub>
                </i>{" "}
                = 0.90 the denominator reduces to 1.
              </li>
              <li>
                Shafts generally have two bearings with individual reliability{" "}
                <i>
                  R<sub>A</sub>
                </i>{" "}
                and{" "}
                <i>
                  R<sub>B</sub>
                </i>
                . So reliability of the pair of bearing <i>R</i> is
                <center>
                  <font size="5">
                    <b>
                      <i>
                        R = R<sub>A</sub> R<sub>B</sub>&emsp;...<i>iv</i>
                      </i>
                    </b>
                  </font>
                </center>
              </li>
              <li>
                From the equation <i>iv</i> we observe that both{" "}
                <i>
                  R<sub>A</sub>
                </i>{" "}
                and{" "}
                <i>
                  R<sub>B</sub>
                </i>{" "}
                are greater than <i>R</i>. So during sizing bearing one may
                begin by equating{" "}
                <i>
                  R<sub>A</sub>
                </i>{" "}
                and{" "}
                <i>
                  R<sub>B</sub>
                </i>{" "}
                equal to the square root of reliability goal <i>R</i>. If
                somehow the{" "}
                <i>
                  R<sub>A</sub>
                </i>{" "}
                is greater than the square root of reliability goal <i>R</i>{" "}
                then it is better to round down to the reliability of B and
                still have the product of{" "}
                <i>
                  R<sub>A</sub>
                </i>{" "}
                and{" "}
                <i>
                  R<sub>B</sub>
                </i>{" "}
                exceed reliability goal.
              </li>
              <li>
                In our calculations we are going to use the Weibull parameters
                of the manufacture number 2 as given in the{" "}
                <b>Shigely Meachanical Design.</b>
              </li>
            </ul>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default TextRelatingLoadLifeReliability;
