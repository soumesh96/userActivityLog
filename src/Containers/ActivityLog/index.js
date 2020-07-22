import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getUserDetails } from '../store/actions';
import ActivityLog from '../../Components/ActivityLog';
import { LoaderWrapper } from '../../Components/ActivityLog/skins';

const ActivityLogCon = () => {
  const dispatch = useDispatch();
  const activityLog = useSelector(state => state.activityLog);
  const { isUserDataFetched, userDetails } = activityLog;

  useEffect(() => {
    dispatch(getUserDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <React.Fragment>
      {isUserDataFetched ?
        <ActivityLog userDetails={userDetails} />
        :
        <LoaderWrapper>
          <CircularProgress />
        </LoaderWrapper>}
    </React.Fragment>
  );
};

export default ActivityLogCon;
