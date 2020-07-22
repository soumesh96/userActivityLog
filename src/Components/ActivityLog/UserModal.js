import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

import { ModalWrapper, ModalInputlabel, ModalInput, UserTable, TableHead, ModalTableRow, TextWrapper, ButtonWrapper, CloseBtn } from './skins';

const UserModal = (props) => {
  const { selectedUser: { real_name, activity_periods }, onClose } = props;
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [activityPeriods, setActivtyPeriods] = useState('');

  useEffect(() => {
    const reqActivityperiods = activity_periods.filter((date) => dayjs(date.start_time.substr(0, 15)).format('YYYY-MM-DD') === selectedDate);
    setActivtyPeriods(reqActivityperiods);
  }, [activity_periods, selectedDate])

  const onDateChangeHandler = (e) => {
    setSelectedDate(e.target.value);
  }

  return (
    <ModalWrapper>
      <TextWrapper>User Name : <span>{real_name}</span></TextWrapper>
      <hr />
      <div>
        <ModalInputlabel>Date :</ModalInputlabel>
        <ModalInput type="date" value={selectedDate} onChange={onDateChangeHandler} />
      </div>
      <div>
        <div>
          <UserTable>
            <TableHead>
              <ModalTableRow>Serial No.</ModalTableRow>
              <ModalTableRow>Start Time</ModalTableRow>
              <ModalTableRow>End Time</ModalTableRow>
            </TableHead>
            {activityPeriods && activityPeriods.length > 0 ? activityPeriods.map((user, index) => (
              <TableHead key={index.toString()}>
                <ModalTableRow>{index + 1}</ModalTableRow>
                <ModalTableRow>{user.start_time}</ModalTableRow>
                <ModalTableRow>{user.end_time}</ModalTableRow>
              </TableHead>
            ))
              :
              <TableHead>
               <TextWrapper> No Data Found</TextWrapper>
              </TableHead>}
          </UserTable>
        </div>
      </div>
      <ButtonWrapper>
        <CloseBtn onClick={onClose}>Close</CloseBtn>
      </ButtonWrapper>
    </ModalWrapper>
  );
};

UserModal.propTypes = {
  selectedUser: PropTypes.object,
  onClose: PropTypes.func,
};

export default UserModal;
