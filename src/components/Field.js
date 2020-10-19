import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/Field.scss";
import Grid from "@material-ui/core/Grid";

function Field(props) {
  const { number, onClick, selectedNumbers, randomNumbers } = props;
  const [isNumberChoosed, setIsNumberChoosed] = useState(false);
  const [isNumberRandomed, setIsNumberRandomed] = useState(false);
  useEffect(() => {
    if (selectedNumbers.includes(number)) {
      setIsNumberChoosed(true);
    }
  }, [selectedNumbers, number]);

  useEffect(() => {
    if (randomNumbers?.includes(number)) {
      setIsNumberRandomed(true);
    }
  }, [number, randomNumbers]);
  return (
    <Grid item xs="auto">
      <div
        className={`field ${isNumberChoosed && isNumberRandomed
            ? "hit"
            : isNumberChoosed
              ? "choosed"
              : isNumberRandomed
                ? "randomed"
                : "unactive"
          }
              ${(!isNumberChoosed && selectedNumbers.length >= 6)
            ? "disabled"
            : "clickable"
          }
          ${randomNumbers.length > 0 && "pointer-event-none"}   `}
        onClick={() => onClick(number)}
      >
        <p>{number}</p>
      </div>
    </Grid>
  );
}

Field.propTypes = {
  number: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  selectedNumbers: PropTypes.array.isRequired,
  randomNumbers: PropTypes.array,
};
export default Field;
