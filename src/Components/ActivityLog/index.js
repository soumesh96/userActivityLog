import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { UserTableWrapper, UserTable, TableHead, TableRow } from './skins';
import BModal from '../Modal';
import UserModal from './UserModal';

const ActivityLog = (props) => {
  const { userDetails } = props;
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedUser, setSelecteduser] = useState('');

  const getIndividualDetails = (index) => {
    const selectedUserdata = userDetails && userDetails.members[index];
    setShowUserModal(true);
    setSelecteduser(selectedUserdata);
  }

  const closeModalHanlder = () => {
    setShowUserModal(false);
  }

  return (
    <React.Fragment>
      <UserTableWrapper>
        <UserTable>
          <TableHead>
            <TableRow>Serial No.</TableRow>
            <TableRow>Username</TableRow>
          </TableHead>
          {userDetails && userDetails.members.length > 0 && userDetails.members.map((user, index) => (
            <TableHead hover key={user.id} onClick={() => getIndividualDetails(index)}>
              <TableRow>{index + 1}</TableRow>
              <TableRow>{user.real_name}</TableRow>
            </TableHead>
          ))}
        </UserTable>
      </UserTableWrapper>
      {showUserModal && selectedUser &&
        <BModal isShowModal={showUserModal} onClose={closeModalHanlder}>
          <UserModal selectedUser={selectedUser} onClose={closeModalHanlder} />
        </BModal>
      }
    </React.Fragment>
  );
};

ActivityLog.propTypes = {
  userDetails: PropTypes.object,
};

export default ActivityLog;
