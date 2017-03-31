import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import SparkBar from '../SparkBar';

const realData = [
  {
    currency: 'EUR',
    amount: 1597,
    week: '2017 w01'
  },
  {
    currency: 'EUR',
    amount: 1660,
    week: '2017 w02'
  },
  {
    currency: 'EUR',
    amount: 1663,
    week: '2017 w03'
  },
  {
    currency: 'EUR',
    amount: 1640,
    week: '2017 w04'
  },
  {
    currency: 'EUR',
    amount: 2190,
    week: '2017 w05'
  },
  {
    currency: 'EUR',
    amount: 2342,
    week: '2017 w06'
  },
  {
    currency: 'EUR',
    amount: 2370,
    week: '2017 w07'
  },
  {
    currency: 'EUR',
    amount: 2554,
    week: '2017 w08'
  },
  {
    currency: 'EUR',
    amount: 2378,
    week: '2017 w09'
  },
  {
    currency: 'EUR',
    amount: 2243,
    week: '2017 w10'
  },
  {
    currency: 'EUR',
    amount: 2356,
    week: '2017 w11'
  },
  {
    currency: 'EUR',
    amount: 2481,
    week: '2017 w12'
  },
  {
    currency: 'EUR',
    amount: 1027,
    week: '2017 w13'
  }
].map(o => ({ y: o.amount }));

const twelve = [
  { x: '0', y: 50 },
  { x: '1', y: 80 },
  { x: '2', y: 88 },
  { x: '3', y: 32 },
  { x: '4', y: 52 },
  { x: '5', y: 49 },
  { x: '6', y: 88 },
  { x: '7', y: 72 },
  { x: '8', y: 91 },
  { x: '9', y: 49 },
  { x: '10', y: 63 },
  { x: '11', y: 42 }
];

const twentyfive = [
  { x: '0', y: 50 },
  { x: '1', y: 80 },
  { x: '2', y: 88 },
  { x: '3', y: 32 },
  { x: '4', y: 52 },
  { x: '5', y: 49 },
  { x: '6', y: 88 },
  { x: '7', y: 72 },
  { x: '8', y: 91 },
  { x: '9', y: 49 },
  { x: '10', y: 63 },
  { x: '11', y: 42 },
  { x: '12', y: 11 },
  { x: '13', y: 12 },
  { x: '14', y: 26 },
  { x: '15', y: 57 },
  { x: '16', y: 32 },
  { x: '17', y: 19 },
  { x: '18', y: 74 },
  { x: '19', y: 11 },
  { x: '20', y: 64 },
  { x: '21', y: 76 },
  { x: '22', y: 88 },
  { x: '23', y: 13 },
  { x: '24', y: 59 }
];

const fifty = [
  { x: '0', y: 16 },
  { x: '1', y: 39 },
  { x: '2', y: 64 },
  { x: '3', y: 8 },
  { x: '4', y: 79 },
  { x: '5', y: 83 },
  { x: '6', y: 70 },
  { x: '7', y: 31 },
  { x: '8', y: 17 },
  { x: '9', y: 72 },
  { x: '10', y: 48 },
  { x: '11', y: 69 },
  { x: '12', y: 65 },
  { x: '13', y: 81 },
  { x: '14', y: 91 },
  { x: '15', y: 50 },
  { x: '16', y: 95 },
  { x: '17', y: 96 },
  { x: '18', y: 40 },
  { x: '19', y: 36 },
  { x: '20', y: 90 },
  { x: '21', y: 25 },
  { x: '22', y: 79 },
  { x: '23', y: 60 },
  { x: '24', y: 41 },
  { x: '25', y: 19 },
  { x: '26', y: 97 },
  { x: '27', y: 47 },
  { x: '28', y: 35 },
  { x: '29', y: 19 },
  { x: '30', y: 36 },
  { x: '31', y: 72 },
  { x: '32', y: 21 },
  { x: '33', y: 57 },
  { x: '34', y: 96 },
  { x: '35', y: 92 },
  { x: '36', y: 50 },
  { x: '37', y: 90 },
  { x: '38', y: 30 },
  { x: '39', y: 73 },
  { x: '40', y: 39 },
  { x: '41', y: 63 },
  { x: '42', y: 16 },
  { x: '43', y: 86 },
  { x: '44', y: 85 },
  { x: '45', y: 38 },
  { x: '46', y: 80 },
  { x: '47', y: 12 },
  { x: '48', y: 42 },
  { x: '49', y: 7 }
];

storiesOf('SparkBar', module)
  .add('No props', () => <SparkBar />)
  .add('Empty array', () => <SparkBar data={[]} />)
  .add('Two data points', () => (
    <SparkBar data={[{ x: 1, y: 1 }, { x: 2, y: 3 }]} />
  ))
  .add('25 data points', () => <SparkBar data={twentyfive} />)
  .add('50 data points', () => <SparkBar data={fifty} />)
  .add('50 large', () => <SparkBar data={fifty} width="800" height="500" />)
  .add('Coral color', () => <SparkBar data={twelve} color="coral" />)
  .add('Real', () => <SparkBar data={realData} />);