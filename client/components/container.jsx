import React from 'react';

const styles = {
  page: {
    minHeight: 'calc(100vh - 10rem)'
  }
};

export default function Container({ children }) {
  return (
    <div className="container" style={styles.page}>
      {children}
    </div>
  );
}
