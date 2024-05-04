import React from 'react';

const ViewScreen = ({ children }) => {
  return (
    <div className="view-screen">
      <h2>View Screen</h2>
      {children}
    </div>
  );
}

export default ViewScreen;
