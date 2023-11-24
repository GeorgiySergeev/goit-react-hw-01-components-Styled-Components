import PropTypes from 'prop-types';
import { HeadingTitle, UnderTitle } from './Heading.styled';

export function Heading({ title, children }) {
  return (
    <div>
      <HeadingTitle>{title}</HeadingTitle>
      <UnderTitle>{children}</UnderTitle>
    </div>
  );
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
