import React from 'react';
import { Table } from 'antd';
import { getWeekdays, getWeek, getMonthName } from '../utils/date';

const { Column, ColumnGroup } = Table;

const WeekBoard = () => {
  const arrDates = getWeek();
  const weekdays = getWeekdays();

  const currentWeekName = `${arrDates[0].toLocaleDateString()} - ${arrDates[
    arrDates.length - 1
  ].toLocaleDateString()}`;

  return (
    <ColumnGroup title={currentWeekName}>
      {arrDates.map((date, index) => {
        const day = date.getDate();
        const dayOfWeek = weekdays[index];
        const month = getMonthName(date.getMonth());

        const dateTitle = `${dayOfWeek}, ${day} ${month}`;

        return (
          <Column
            className="day"
            title={dateTitle}
            dataIndex={date.toLocaleDateString()}
            key={`day${day}`}
          />
        );
      })}
    </ColumnGroup>
  );
};

export default WeekBoard;
