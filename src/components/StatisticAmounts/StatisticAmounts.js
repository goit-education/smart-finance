import React from 'react';
import PropTypes from 'prop-types';
import css from './StatisticAmounts.module.css';
import Panel from '../Panel/Panel';

function StatisticAmounts({ costsSum, incomeSum }) {
  return (
    <Panel className={css.wrapper}>
      <div className={css.wrapper}>
        <div className={css.column}>
          <p className={css.stat_title}>Расходы:</p>
          <p className={css.stat_exp}>-{costsSum} руб.</p>
        </div>
        <div className={css.separate} />
        <div className={css.column}>
          <p className={css.stat_title}>Доходы:</p>
          <p className={css.stat_inc}>{incomeSum} руб.</p>
        </div>
      </div>
    </Panel>
  );
}

StatisticAmounts.propTypes = {
  costsSum: PropTypes.number.isRequired,
  incomeSum: PropTypes.number.isRequired,
};

export default StatisticAmounts;
