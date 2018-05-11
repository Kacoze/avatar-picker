import React, { Component } from 'react';
import propTypes from 'prop-types';
import { AvatarListShape } from '../../utils/types';
import Avatar from './Avatar';
import styles from './style.scss';

class ListContainer extends Component {
  handleClickOutside = () => this.props.handleActiveClick();
  render() {
    const {
      list,
      activeAvatar,
      loading,
      handleAvatarChange,
      handleActiveClick,
    } = this.props;
    return (
      <div className={styles.Popover}>
        <h4 className={styles.PickerHeader}>Choose your avatar</h4>
        <div className={styles.AvatarList}>
          <Avatar
            image={list[activeAvatar - 1]}
            onAction={handleActiveClick}
          />
          {list.map(image => image.id !== list[activeAvatar - 1].id && (
            <Avatar
              key={image.id}
              image={image}
              onAction={handleAvatarChange}
              loading={loading === image.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

ListContainer.propTypes = {
  list: AvatarListShape.isRequired,
  loading: propTypes.oneOfType([propTypes.bool, propTypes.number]).isRequired,
  activeAvatar: propTypes.number.isRequired,
  handleAvatarChange: propTypes.func.isRequired,
  handleActiveClick: propTypes.func.isRequired,
};

export default ListContainer;
