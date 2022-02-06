import React from 'react';
import PropTypes from 'prop-types';
import { Stat, StatList } from './Statistics.style';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <StatList>
        <Stat>good: {good}</Stat>
        <Stat>neutral: {neutral}</Stat>
        <Stat>bad: {bad}</Stat>
        <Stat>Total:{total} </Stat>
        <Stat>Positive feedback: {positivePercentage}%</Stat>
      </StatList>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
