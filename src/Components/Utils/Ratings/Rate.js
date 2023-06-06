import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const Rate = ({ count, rating, color, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }

    return color.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_,i) => i + 1)
      .map((idx) => (
        <FaStar
          key={idx}
          className="cursor-pointer"
          size={50}
          color={getColor(idx)}
          onClick={() => onRating(idx)}
          style={style.rateCarrier}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

  return <div>{starRating}</div>;
};

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onChange: PropTypes.func,
  color: {
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  },
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "#004B9D",
    unfilled: "#F5F5F5",
  },
};

const style = {
  rateCarrier:{
    cusor: 'pointer',
    border: '1px solid #336FB1', 
    padding: '0.5rem',
    marginTop: '0.3rem',
    marginLeft: '0.3rem'
  }
}

export default Rate;
