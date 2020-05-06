import React from 'react';

import { PortfolioItemTemplate } from '../../templates/portfolio-page';

const PortfolioPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  
  return (
      <PortfolioItemTemplate
        content={data.content}
        featuredHeaderImage={getAsset(data.featuredHeaderImage)}
        technologies={data.technologies}
        timeline={data.timeline}
        title={data.title}
      />
  );
};

export default PortfolioPagePreview;
