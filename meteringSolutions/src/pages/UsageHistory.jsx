import React, { useState, useEffect } from 'react';

const UsageHistory = () => {
  const [usageData, setUsageData] = useState([]);
  const [timeRange, setTimeRange] = useState('monthly');
  const [loading, setLoading] = useState(true);

  // Simulated data fetching
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchData = () => {
      setLoading(true);
      setTimeout(() => {
        // Generate mock data based on selected time range
        const data = generateMockData(timeRange);
        setUsageData(data);
        setLoading(false);
      }, 800);
    };

    fetchData();
  }, [timeRange]);

  // Generate mock usage data
  const generateMockData = (range) => {
    const data = [];
    const itemsCount = range === 'daily' ? 24 : range === 'weekly' ? 7 : 30;
    const baseConsumption = range === 'daily' ? 0.8 : 25;
    
    for (let i = itemsCount - 1; i >= 0; i--) {
      const date = new Date();
      if (range === 'daily') {
        date.setHours(date.getHours() - i);
      } else {
        date.setDate(date.getDate() - i);
      }

      const consumption = (baseConsumption * (1 + Math.random() * 0.3)).toFixed(2);
      const cost = (consumption * 0.15).toFixed(2); // $0.15 per kWh

      data.push({
        id: i,
        date: date.toISOString(),
        consumption,
        cost,
        timePeriod: range === 'daily' 
          ? date.toLocaleTimeString([], { hour: '2-digit' }) 
          : date.toLocaleDateString([], { month: 'short', day: 'numeric' })
      });
    }
    return data;
  };

  // Format energy values
  const formatEnergy = (value) => `${value} kWh`;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Electric Meter Usage History</h1>
      
      {/* Time Range Selector */}
      <div className="flex space-x-4 mb-6">
        {['daily', 'weekly', 'monthly'].map((range) => (
          <button
            key={range}
            className={`px-4 py-2 rounded-lg transition ${
              timeRange === range
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => setTimeRange(range)}
          >
            {range.charAt(0).toUpperCase() + range.slice(1)}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Current Usage</h3>
          <p className="text-2xl font-bold">
            {usageData.length ? formatEnergy(usageData[usageData.length - 1].consumption) : '0 kWh'}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Avg. Daily</h3>
          <p className="text-2xl font-bold">
            {usageData.length 
              ? formatEnergy((usageData.reduce((sum, item) => sum + parseFloat(item.consumption), 0) / usageData.length).toFixed(2))
              : '0 kWh'}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Estimated Cost</h3>
          <p className="text-2xl font-bold">
            {usageData.length ? `$${usageData[usageData.length - 1].cost}` : '$0.00'}
          </p>
        </div>
      </div>

      {/* Usage Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">Loading usage data...</div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {timeRange === 'daily' ? 'Hour' : 'Date'}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Consumption
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cost
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {usageData.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {entry.timePeriod}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatEnergy(entry.consumption)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${entry.cost}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Chart Placeholder */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Consumption Visualization</h2>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">[Chart visualization would appear here]</p>
        </div>
      </div>
    </div>
  );
};

export default UsageHistory;