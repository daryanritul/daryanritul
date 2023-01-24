import React from 'react';

import './PageTitle.scss';

const PageTitle = ({ title }) => {
  return (
    <div className="pageTitle">
      <p>{title}</p>
    </div>
  );
};

export default PageTitle;
