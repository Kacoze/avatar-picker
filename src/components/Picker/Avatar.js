import React from 'react';
import propTypes from 'prop-types';
import { AvatarShape } from '../../utils/types';
import styles from './style.scss';

function Avatar({
  image,
  onAction,
  loading,
  id,
}) {
  return (
    <button
      className={`${styles.avatarButton} ${loading && styles.loadingButton}`}
      onClick={() => onAction(image.id)}
    >
      <img
        src={image.src}
        alt={image.label}
        className={styles.avatar}
        id={id}
      />
      {loading && <div className={styles.loading} />}
    </button>
  );
}

Avatar.propTypes = {
  image: AvatarShape.isRequired,
  onAction: propTypes.func.isRequired,
  loading: propTypes.bool,
  id: propTypes.string,
};

Avatar.defaultProps = {
  loading: false,
  id: null,
};


export default Avatar;
