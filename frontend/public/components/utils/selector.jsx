import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

import { toString } from '../../module/k8s/selector';

const Requirement = ({kind, requirements}) => {
  const requirementAsString           = toString(requirements);
  const requirementAsUrlEncodedString = encodeURIComponent(requirementAsString);

  return (
    <div className="co-m-requirement">
      <Link className={`co-text-${kind}`} to={`search?kind=${kind}&q=${requirementAsUrlEncodedString}`}>
        <i className="fa fa-search"></i> {requirementAsString.replace(',', ', ')}
      </Link>
    </div>
  );
};

export const Selector = ({kind, expand, selector}) => {
  const requirements = selector || {};
  const className = classnames('co-m-selector', {'co-m-selector--expand': expand});

  return <div className={className}>
    { _.isEmpty(requirements)
      ? <p className="text-muted">No selector</p>
      : <Requirement kind={kind || 'pod'} requirements={requirements} /> }
  </div>;
};
