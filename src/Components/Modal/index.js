import React from 'react';
import PropTypes from 'prop-types';

import { ModalCon, ModalContent, CloseIcon } from './skins';

const Modal = props => {
  const { onClose, children, isShowModal } = props;
  return isShowModal ? (
    <ModalCon>
      <ModalContent>
        <CloseIcon onClick={onClose} />
        {React.Children.toArray(children)}
      </ModalContent>
    </ModalCon>
  ) : null;
};

Modal.propTypes = {
  isShowModal: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.object,
};

export default Modal;
