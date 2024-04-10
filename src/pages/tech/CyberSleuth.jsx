import React, { useEffect } from "react";
import Button from "../../components/Button";

function CyberSleuth() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rules = [
    "Each team has to be 2 members",
    "Usage of Chat-GPT or other genAI is prohibited",
    "Time given to complete the task is 20 mins",
    "Complete each challenge to reveal a letter",
    "First participant who reveals a word is the winner",
    "Having your own laptop is strongly encouraged"
  ];

  const round1 = [
    "Coding Challenge",
    "Debugging",
    "Crypo-graphic word puzzles",
    "Data Exploration",
    "HTML, CSS",
    "Networking"
  ];

  const round2 = [
    "It will be a debugging of given code.",
    "3 questions with errors are given. You have to rectify the errors.",
    "30 minutes given for this round.",
  ];

  return (
    <>
      <div className="events">
        <div className="count-h">CYBERSLEUTH</div>
        <div className="count-p">Treasure Hunt</div>

        <div className="d-flex">
          <div className="img">
            <img src="/imgs/tech/event5.webp" width={450} alt="" />
            <div
              className="btn-ly"
              style={{
                marginTop: -5,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button />
            </div>
            <h5 className="event-phone" style={{ textAlign: "center", marginTop: 34, fontSize: 21 }}>
              +91 7305840226
            </h5>
            <h5 style={{ textAlign: "center", marginTop: 12, fontSize: 24 }}>
              Rithish R
            </h5>
          </div>
          <div className="info">
            <h2>Description</h2>
            <p>
              Treasure hunt game which has 6 clues for a final result word (eg..
              'Hakuna matata' ) need to solve all the challenges to find the
              final word
            </p>
            <h2>Challenges</h2>
            <ol>
              {round1.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ol>

            <h2>Rules</h2>
            <ul>
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

           

            <ul className="students">
              <h2>Coordinators</h2>
              <p>Rithish R</p>
              <p>Sneha sree S</p>
              <p>Sachin R</p>
              <p>Moneeshwar M</p>
              <p>Vigesh E</p>
            </ul>
          </div>
        </div>
        {/* <div style={{margin: 'auto', textAlign: 'center'}}>
                    <Button></Button>
                </div> */}
      </div>
    </>
  );
}

export default CyberSleuth;
