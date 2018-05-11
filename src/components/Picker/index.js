import React, { Component } from 'react';
import Outside from 'react-click-outside';
import { AvatarListShape } from '../../utils/types';
import Avatar from './Avatar';
import styles from './style.scss';
import ListContainer from './ListContainer';

const EnhancedListContainer = Outside(ListContainer);

class Picker extends Component {
  state = {
    loading: false,
    activeAvatar: 1,
    visibleList: false,
  }
  request = cb => setTimeout(cb, 1000);
  handleActiveClick = () => this.setState({ visibleList: !this.state.visibleList });
  handleAvatarChange = (id) => {
    this.setState({ loading: id });
    this.request(() => this.setState({ activeAvatar: id, visibleList: false, loading: false }));
  }
  render() {
    const { list } = this.props;
    const { activeAvatar, visibleList, loading } = this.state;
    return (
      <div className={styles.Picker}>
        <Avatar
          image={list[activeAvatar - 1]}
          onAction={this.handleActiveClick}
          id="avatarPicker"
        />
        {visibleList && (
          <EnhancedListContainer
            list={list}
            activeAvatar={activeAvatar}
            loading={loading}
            handleAvatarChange={this.handleAvatarChange}
            handleActiveClick={this.handleActiveClick}
          />)}
      </div>
    );
  }
}

Picker.propTypes = {
  list: AvatarListShape.isRequired,
};

export default Picker;
