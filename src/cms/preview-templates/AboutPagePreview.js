import React from 'react';

import { AboutPageTemplate } from '../../templates/about-page';

const AboutPagePreview = ({ entry }) => (
  <AboutPageTemplate
    experiences={entry.getIn(['data', 'experiences']).toJS()}
    sections={entry.getIn(['data', 'sections']).toJS()}
    tagline={entry.getIn(['data', 'tagline'])}
  />
);

export default AboutPagePreview;
