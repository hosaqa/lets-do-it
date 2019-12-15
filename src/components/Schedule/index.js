import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import { Table, Select, Radio, Input, Button, Modal } from 'antd';

import { useFetch } from '../../utils/useFetch';
import { getWeek } from '../../utils/date';
import { arrayToMap } from '../../utils';
import WeekBoard from '../WeekBoard';
import { MonthBoard } from '../MonthBoard';
import './Schedule.css';

const { Column } = Table;
const Option = Select.Option;

const Schedule = ({ habitsStore }) => {
  const { habitsList, getHabits } = habitsStore;

  useEffect(() => {
    getHabits();
  }, []);

  const [boardState, setBoardState] = useState('week');
  const [modalOpenState, setModalOpenState] = useState(false);

  const handleBoardChange = e => {
    if (e.target.value !== boardState) setBoardState(e.target.value);
  };

  const dataSource =
    habitsStore.habitsList &&
    habitsStore.habitsList.length &&
    habitsStore.habitsList.map(item => ({
      habitName: item.title,
      ...arrayToMap(
        item.dates.map(date => new Date(date).toLocaleDateString())
      ),
    }));

  return (
    <div className="schedule">
      <div className="schedule__topbar">
        <Radio.Group value={boardState} onChange={handleBoardChange}>
          <Radio.Button value="week">Week</Radio.Button>
          <Radio.Button value="month">Month</Radio.Button>
        </Radio.Group>
        <div className="schedule__topbar-add-form">
          <Button onClick={() => setModalOpenState(true)} type="primary">
            Add habbit
          </Button>
          <Modal
            title="Basic Modal"
            visible={modalOpenState}
            onOk={() => {}}
            onCancel={() => setModalOpenState(false)}
          >
            <p>Some contents...</p>
            <Input placeholder="Habbit name" />
          </Modal>
        </div>
      </div>
      {habitsList &&
        habitsList.length &&
        habitsList.map(item => <div key={item.title}>{item.title}</div>)}
      {habitsStore.habitsList && habitsStore.habitsList.length && (
        <Table
          dataSource={dataSource}
          bordered
          pagination={false}
          scroll={{
            x: true,
          }}
        >
          <Column title="Habits" dataIndex="habitName" key="habits" />
          {WeekBoard()}
        </Table>
      )}
    </div>
  );
};

export default inject('habitsStore')(observer(Schedule));
