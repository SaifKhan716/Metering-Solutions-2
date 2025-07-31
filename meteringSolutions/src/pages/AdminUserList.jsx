import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdminUserMeterData } from '../redux/thunks/adminDashboardThunks'; // adjust path
import { Eye, ArrowLeft, Calendar, Filter, Activity, Zap } from 'lucide-react';
import { selectUserId } from '../redux/slice/authSlice';
import {selectAdminUserMeterData,selectLoading,selectError} from '../redux/slice/adminDashboardSlice'


const AdminUserList = () => {

    const [currentView, setCurrentView] = useState('main');
  const [selectedUser, setSelectedUser] = useState(null);
  const [dateFilter, setDateFilter] = useState('7days');
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  
  const adminId = useSelector(selectUserId);

  const  adminUserMeterData =  useSelector(selectAdminUserMeterData);
  const  loading = useSelector(selectLoading);
  const error  = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAdminUserMeterData(adminId));
  }, [dispatch, adminId]);
  const filteredUsers = adminUserMeterData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setCurrentView('userDetails');
  };

  const handleBackToUserList = () => {
    setSelectedUser(null);
    setCurrentView('main');
    setDateFilter('7days');
    setSearchTerm('');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const filterDataByDate = (dailyData) => {
    const currentDate = new Date();
    return dailyData.filter((data) => {
      const dataDate = new Date(data.date);
      const daysDiff = Math.ceil((currentDate - dataDate) / (1000 * 3600 * 24));
      switch (dateFilter) {
        case '7days': return daysDiff <= 7;
        case '30days': return daysDiff <= 30;
        case '3months': return daysDiff <= 90;
        case '6months': return daysDiff <= 180;
        case '1year': return daysDiff <= 365;
        default: return true;
      }
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  console.log("===selectedUser======",selectedUser)

  return (
    <div className=" bg-blue-200/10 p-4 sm:p-6 md:p-8">
      {currentView === 'main' && (
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
            <p className="text-gray-500">Manage users and their meter data</p>
          </div>

          <div className="min-h-screen bg-white rounded-lg shadow mb-6">
            <div className="px-6 py-4 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-xl font-semibold text-gray-800">Users List</h2>
              <input
                type="text"
                placeholder="Search by Name, Email or ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-72 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meters</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-750">{user.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{user.userId}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{user.email || 'N/A'}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{user.meters?.length || 0}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleViewUser(user)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                        >
                          <Eye className="w-4 h-4 mr-1" /> View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {currentView === 'userDetails' && selectedUser && (
        <div className="max-w-7xl mx-auto">
          <button
            onClick={handleBackToUserList}
            className="text-blue-600 hover:text-blue-800 flex items-center mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to User List
          </button>

          {/* <div className="bg-white rounded-lg shadow p-4 mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">User Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">User Name</label>
                <p className="text-lg text-gray-900 font-medium mt-1">{selectedUser.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">User ID</label>
                <p className="text-lg text-gray-900 font-medium mt-1">{selectedUser.userId}</p>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="text-lg text-gray-900 font-medium mt-1">{selectedUser.email || 'N/A'}</p>
              </div>
            </div>
          </div> */}

          <div className="bg-white rounded-lg shadow p-4 mb-4">
  <h2 className="text-xl font-semibold text-gray-800 mb-2">User Information</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700">User Name</label>
      <p className="text-lg text-gray-900 font-medium mt-1">{selectedUser.name}</p>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">User ID</label>
      <p className="text-lg text-gray-900 font-medium mt-1">{selectedUser.userId}</p>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <p className="text-lg text-gray-900 font-medium mt-1">{selectedUser.email || 'N/A'}</p>
    </div>
  </div>
</div>


          {/* {selectedUser?.meters?.map((meter, idx) => {
            return (
              <div key={idx} className="bg-white rounded-lg shadow mb-6">
                <div className="px-6 py-4 border-b">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-yellow-500" /> {meter.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{meter.meterType}</p>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-md font-semibold text-gray-800 flex items-center">
                      <Activity className="w-4 h-4 mr-1 text-blue-500" /> Daily Data
                    </h4>
                    <div className="flex items-center space-x-2">
                      <Filter className="w-4 h-4 text-gray-500" />
                      <select
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        className="text-sm border border-gray-300 rounded-md px-2 py-1"
                      >
                        <option value="7days">Last 7 Days</option>
                        <option value="30days">Last 30 Days</option>
                        <option value="3months">Last 3 Months</option>
                        <option value="6months">Last 6 Months</option>
                        <option value="1year">Last 1 Year</option>
                      </select>
                    </div>
                  </div>

                  {filterDataByDate(meter.dailyData).length > 0 ? (
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-gray-500">Date</th>
                          <th className="px-4 py-2 text-gray-500">Total kWh</th>
                          <th className="px-4 py-2 text-gray-500">Deduction</th>
                          <th className="px-4 py-2 text-gray-500">EG</th>
                          <th className="px-4 py-2 text-gray-500">DG</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterDataByDate(meter.dailyData).map((entry, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-4 py-2 text-gray-900">{formatDate(entry.date)}</td>
                            <td className="px-4 py-2 text-gray-900">{entry.totalKWh}</td>
                            <td className="px-4 py-2 text-gray-900">{entry.totalDeduction}</td>
                            <td className="px-4 py-2 text-gray-900">{entry.totalEG}</td>
                            <td className="px-4 py-2 text-gray-900">{entry.totalDG}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-gray-500 text-center py-6">No data available for selected range.</div>
                  )}
                </div>
              </div>
            );
          })} */}


          {selectedUser?.meters?.map((entry, idx) => {
  const meter = entry.meter || entry; // support both formats

  return (
    <div key={idx} className="bg-white rounded-lg shadow mb-6">
      <div className="px-6 py-4 border-b">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-yellow-500" /> {meter.name}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{meter.type}</p>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-md font-semibold text-gray-800 flex items-center">
            <Activity className="w-4 h-4 mr-1 text-blue-500" /> Daily Data
          </h4>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="text-sm border border-gray-300 rounded-md px-2 py-1"
            >
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="3months">Last 3 Months</option>
              <option value="6months">Last 6 Months</option>
              <option value="1year">Last 1 Year</option>
            </select>
          </div>
        </div>

        {filterDataByDate(entry.dailyData || []).length > 0 ? (
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-gray-500">Date</th>
                <th className="px-4 py-2 text-gray-500">Total kWh</th>
                <th className="px-4 py-2 text-gray-500">Deduction</th>
                <th className="px-4 py-2 text-gray-500">EG</th>
                <th className="px-4 py-2 text-gray-500">DG</th>
              </tr>
            </thead>
            <tbody>
              {filterDataByDate(entry.dailyData).map((data, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-900">{formatDate(data.date)}</td>
                  <td className="px-4 py-2 text-gray-900">{data.totalKWh}</td>
                  <td className="px-4 py-2 text-gray-900">{data.totalDeduction}</td>
                  <td className="px-4 py-2 text-gray-900">{data.totalEG}</td>
                  <td className="px-4 py-2 text-gray-900">{data.totalDG}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-gray-500 text-center py-6">No data available for selected range.</div>
        )}
      </div>
    </div>
  );
})}
        </div>
      )}
    </div>
  );
};

export default AdminUserList;