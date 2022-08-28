import React, { useEffect } from 'react';
import { Modal as AntdModal } from 'antd';
import classNames from 'classnames';

import { TModalProps } from '@/components/Modal/Modal.types';
import Button from '@/components/Button';

import './Modal.scss';

const Modal: React.FC<TModalProps> = ({
  visible,
  cancelButton,
  confirmButton,
  centered,
  width,
  wrapClassName,
  className,
  closeable,
  hideFooter,
  children,
  onClose,
  onSubmit,
}) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [visible]);

  return (
    <AntdModal
      footer={null}
      title={null}
      closable={closeable}
      visible={visible}
      width={width}
      centered={centered}
      onCancel={onClose}
      wrapClassName={classNames('Modal-wrapper', wrapClassName)}
      className={classNames('Modal', className)}
    >
      <div className="Modal-body">{children}</div>

      {!hideFooter && (
        <div
          className={classNames('Modal-footer flex justify-between', {
            single: (confirmButton && !cancelButton) || (!confirmButton && cancelButton),
          })}
        >
          {cancelButton && <Button onClick={onClose} {...cancelButton} />}
          {confirmButton && <Button onClick={onSubmit} {...confirmButton} />}
        </div>
      )}
    </AntdModal>
  );
};

export default Modal;
