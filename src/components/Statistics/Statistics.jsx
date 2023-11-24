import PropTypes from 'prop-types';
import { getRandomHexColor } from 'helpers';
import {
  Statistics,
  Title,
  StatList,
  Item,
  ItemSpan,
} from './Statistics.styled';

export function Statistic({ title, stats }) {
  return (
    <Statistics>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(item => (
          <Item key={item.id} style={{ backgroundColor: getRandomHexColor() }}>
            <ItemSpan>{item.label}</ItemSpan>
            <ItemSpan>{item.percentage}</ItemSpan>
          </Item>
        ))}
      </StatList>
    </Statistics>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
