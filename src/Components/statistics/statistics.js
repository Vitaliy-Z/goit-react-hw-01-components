import PropTypes from "prop-types";
import "./statistics.css";

function makeBgColor() {
  const color = (Math.random().toString(16) + "000000")
    .substring(2, 8)
    .toUpperCase();
  return "#" + color;
}

export default function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {stats.map((stat) => (
          <li
            class="item"
            style={{ backgroundColor: makeBgColor() }}
            key={stat.id}
          >
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.object,
};
