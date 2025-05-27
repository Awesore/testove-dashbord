import React from 'react';
import MetricCard from '../components/MetricCard';
import { mockMetrics } from '../data/mockData';

const Overview = () => (
  <div>
    <h1 className="text-2xl font-bold text-gray-900 mb-6">Overview</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockMetrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  </div>
);

export default Overview;
