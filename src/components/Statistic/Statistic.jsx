import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export default function Statistic({ title, stats }) {
  return (
  <section className={css.statistics}>
  <div className={css.stat}>
    {title && <h2 className={css.title}>{title}</h2>}
  <ul className={css.statList}>
    {stats.map(({ id, label, percentage }) => (
  <li key={id} className={css.statsItem}>
  <span className={css.label}>{label}</span>
  <span className={css.percentage}>{percentage}</span>
  </li>
  ))}
  </ul>
  </div>
  </section>
);
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
})
),
};