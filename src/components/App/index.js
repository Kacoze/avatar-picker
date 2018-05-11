import React from 'react';
import Picker from '../../components/Picker';
import styles from './style.scss';

const list = [
  { src: 'images/avatar/avatar1.png', label: 'Avatar 1', id: 1 },
  { src: 'images/avatar/avatar2.png', label: 'Avatar 2', id: 2 },
  { src: 'images/avatar/avatar3.png', label: 'Avatar 3', id: 3 },
  { src: 'images/avatar/avatar4.png', label: 'Avatar 4', id: 4 },
  { src: 'images/avatar/avatar5.png', label: 'Avatar 5', id: 5 },
  { src: 'images/avatar/avatar6.png', label: 'Avatar 6', id: 6 },
];

const App = () => (
  <div className={styles.app}>
    <Picker list={list} />
  </div>
);

export default App;
