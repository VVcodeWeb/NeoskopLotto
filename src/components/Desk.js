import React, { useState } from "react";
import Field from "./Field";
import Fade from "react-reveal/Fade";
import { v4 as uuidv4 } from "uuid";
import { getPayout, getRandomNumbers } from "../utils/helpers";

import "../styles/Desk.scss";

import Dialog from "./Dialog";
//Material UI
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function Desk() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [payout, setPayout] = useState();

  const onPlayGame = (selectedNumbers) => {
    const randomizedNumbers = getRandomNumbers([...Array(49).keys()]);
    const matches = randomizedNumbers.filter((number) =>
      selectedNumbers.includes(number)
    ).length;
    setPayout(getPayout(matches));
    setRandomNumbers(randomizedNumbers);
    onDialogClose();
  };

  const onDialogClose = () => {
    setDialogOpen(false);
  };
  const onDialogOpen = () => {
    setDialogOpen(true);
  };
  const onClear = () => {
    setSelectedNumbers([]);
    setRandomNumbers([]);
    setPayout("");
  };
  const onSelectNumber = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers((oldNumbers) =>
        oldNumbers.filter((choosenNumbers) => choosenNumbers !== number)
      );
    } else if (selectedNumbers.length < 6) {
      setSelectedNumbers((oldNumbers) => [...oldNumbers, number]);
    }
  };

  return (
    <div className="desk">
      <div className="desk__header text-left">
        <h2 className="ml-3">
          Play "6 out of 49"{" "}
          <span>
            for 5$ and only 3$ for{" "}
            <span className="desk__header__Neoskop">Neoskop employees</span>
          </span>
          <span>{payout}</span>
        </h2>
      </div>
      <div className="desk__content">
        <div
          className={`${
            selectedNumbers.length >= 6 && "disabled_desk"
          } desk__content__numbers`}
        >
          <Grid container>
            {[...Array(49)].map((_, i) => (
              <Field
                number={i + 1}
                key={uuidv4()}
                onClick={onSelectNumber}
                selectedNumbers={selectedNumbers}
                randomNumbers={randomNumbers}
              />
            ))}
          </Grid>
        </div>
        <div className="desk__content__side_bar">
          <div className="desk__content__side_bar__counterTOGO p-1">
            {!payout && payout !== 0 ? (
              <h2>
                <span
                  className={`${
                    selectedNumbers.length >= 6 ? "green" : "purple"
                  } mr-2 bold`}
                >
                  {6 - selectedNumbers.length}
                </span>
                <span className="desk__content__side_bar__TOGO ">to go!</span>
              </h2>
            ) : (
              <span>
                {payout > 0
                  ? `You have won ${payout}$.`
                  : "Better luck next time"}
              </span>
            )}
          </div>
          <div className="desk__content__side_bar__buttons">
            {selectedNumbers.length >= 6 && (
              <Fade top>
                <Button
                  variant="contained"
                  color="primary"
                  className="w-100 mb-4"
                  onClick={onDialogOpen}
                >
                  <span className="white">Ready!</span>
                </Button>
              </Fade>
            )}
            <Button
              variant="contained"
              color="secondary"
              disabled={selectedNumbers.length > 0 ? false : true}
              startIcon={<DeleteIcon />}
              onClick={onClear}
            >
              Clear
            </Button>
          </div>
        </div>
      </div>
      <Dialog
        dialogOpen={dialogOpen}
        selectedNumbers={selectedNumbers}
        onDialogClose={onDialogClose}
        onPlayGame={onPlayGame}
      />
    </div>
  );
}

export default Desk;
