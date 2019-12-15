import React from 'react';
import {Table} from 'antd';
import {getDaysInMonth, getMonthName, getCurrentYear} from '../utils/date';

const {Column, ColumnGroup} = Table;

const MonthBoard = () => {
  const arrDates = getDaysInMonth();
  const currentMonth = getMonthName();
  const currentYear = getCurrentYear();

  return (
    <ColumnGroup title={`${currentMonth}, ${currentYear}`}>
      {
        arrDates.map(date => {
          const day = date.getDate();
          return <Column className="day" title={day} dataIndex={date.toLocaleDateString()} key={`day${day}`}/>;
        })
      }
    </ColumnGroup>
  )
}

export {MonthBoard};