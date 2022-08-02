import React from 'react';

const styles = {
  page: {
    minHeight: '100vh',
    minWidth: '100vw'
  }
};

export default function Container({ children }) {
  return (
    <div className="container" style={styles.page}>
      {children}
    </div>
  );
}
