import React from 'react';
import { scaleLinear } from 'd3-scale';

const defaultWidth = 160;
const defaultHeight = 90;
const defaultColor = '#2ebd59';

export default class SparkBar extends React.Component {
  render() {
    const data = this.props.data;
    const chartW = this.props.width || defaultWidth;
    const chartH = this.props.height || defaultHeight;
    const barColor = this.props.color || defaultColor;

    const yScale = scaleLinear()
      .domain([0, Math.max(...data.map(p => p.y))])
      .range([0, chartH]);

    const barW = chartW / data.length * 0.9;
    const gapW = chartW / data.length * 0.1;
    const offset = barW + gapW;

    return (
      <svg width={chartW} height={chartH}>
        {data.map((d, i) => {
          const barHeight = yScale(d.y);
          return (
            <rect
              key={d.x}
              x={i * offset}
              y={chartH - barHeight}
              height={barHeight}
              width={barW}
              fill={barColor}
            />
          );
        })}
      </svg>
    );
  }
}
