import React from 'react';
import { scaleLinear } from 'd3-scale';

const defaultWidth = 160;
const defaultHeight = 90;
const defaultColor = '#2ebd59';
const gapRatio = 0.15;

export default class SparkBar extends React.Component {
  render() {
    const data = this.props.data || [];
    const width = this.props.width || defaultWidth;
    const height = this.props.height || defaultHeight;
    const color = this.props.color || defaultColor;
    const gapCount = data.length - 1;
    const gapW = width / gapCount * gapRatio;
    const barW = (width - gapW * gapCount) / data.length;
    const offset = barW + gapW;
    const yScale = scaleLinear()
      .domain([0, Math.max(...data.map(p => p.y))])
      .range([0, height]);

    return (
      <svg width={width} height={height}>
        {data.map((d, i) => {
          const barH = yScale(d.y);
          return (
            <rect
              key={i}
              x={i * offset}
              y={height - barH}
              height={barH}
              width={barW}
              fill={color}
            />
          );
        })}
      </svg>
    );
  }
}
