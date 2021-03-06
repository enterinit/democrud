import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

const RemoteSubmitButton = ({ dispatch }) => (
  <button type='button' className='modalbtn' onClick={() => dispatch(submit('AddNewHotDog'))}>
    Submit
  </button>
);

export default connect()(RemoteSubmitButton);
