import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/utils/router';
import '@/styles/index.scss';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
