import React from 'react';
import cx from 'classnames';

import common from '../../../common.module.scss';
import styles from './styles.scss';


type ToastProps = {
  error?: boolean;
  warning?: boolean;
  info?: boolean;
  success?: boolean;
  icon?: Node;
  title?: string;
  details?: string;
  onClick?: () => {} ;
};


const Toast = (props: ToastProps) => {
  return (
    <div
      className={cx(
        common.nuclear,
        styles.toast,
        { error: props.error },
        { warning: props.warning },
        { info: props.info },
        { success: props.success }
      )}
      onClick={props.onClick}
    >
      <div
        className={styles.toast_content}
      >
        {
          props.icon &&
          <div
            className={styles.toast_icon}
          >
            { props.icon }
          </div>
        }
        <div
          className={styles.toast_text}
        >
          <div className={styles.title}>{ props.title }</div>
          <div className={styles.details}>{ props.details }</div>
        </div>
      </div>
    </div>
  );
};


Toast.defaultProps = {
  error: false,
  warning: false,
  info: false,
  success: null,
  icon: null,
  title: '',
  details: '',
  onClick: () => {}
};

export default Toast;
