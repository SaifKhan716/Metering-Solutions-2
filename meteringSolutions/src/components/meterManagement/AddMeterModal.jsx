
import React, { useState } from 'react';
import { Search, User, X, CheckCircle, Zap } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIotMeters } from '../../redux/slice/meterManagementSlice';
import { assignUserToMeter } from '../../redux/thunks/meterThunks';
import { selectUserId } from '../../redux/slice/authSlice';

const AddMeterModal = ({
  userSearch,
  setUserSearch,
  filteredUsers,
  selectedUser,
  setSelectedUser,
  setShowAddMeterModal,
  meterSearch,
  setMeterSearch,
}) => {
  const dispatch = useDispatch();
  const AdminId = useSelector(selectUserId);//adminId vo jo meter assign karega.
  console.log("----------->",AdminId);

  const [selectedMeterId, setSelectedMeterId] = useState('');

  const unassignedIOTMeter = useSelector(selectIotMeters);

  // Filter meters based on search with null/undefined checks
  const filteredUnassignedMeters = unassignedIOTMeter.filter(meter => {
    const deviceId = meter.deviceId || '';
    const searchTerm = (meterSearch || '').toLowerCase();
    return deviceId.toLowerCase().includes(searchTerm);
  });

  const handleMeterSelection = (meterId) => {
    setSelectedMeterId(prev => (prev === meterId ? '' : meterId)); // toggle
  };

  const handleAssign = () => {
    if (selectedUser && selectedMeterId) {
      dispatch(assignUserToMeter({ userId: selectedUser, meterId: selectedMeterId,adminId:AdminId}));
      //setShowAddMeterModal(false); // close modal
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-100/30 backdrop-blur-sm">
      <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl w-full max-w-4xl max-h-screen">
        <div className="p-6 max-h-[80vh] flex flex-col overflow-hidden">

          {/* Modal Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900">Assign Meter</h2>
            <button
              onClick={() => setShowAddMeterModal(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="space-y-6 flex-1 overflow-y-auto p-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* User Selection */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Select User</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="mt-2 max-h-60 overflow-y-auto border border-gray-200 rounded-md">
                  {filteredUsers.map(user => (
                    <div
                      key={user.id}
                      onClick={() => setSelectedUser(user.id)}
                      className={`p-3 border-b border-gray-100 cursor-pointer transition-colors ${
                        selectedUser === user.id ? 'bg-green-100 border-green-300' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 flex items-center justify-center mr-3">
                            <User className="h-5 w-5 text-gray-500" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{user.name}</div>
                            <div className="text-xs text-gray-500">{user.email}</div>
                            <div className="text-xs text-gray-500">Meters: {user.meters?.length || 0}</div>
                          </div>
                        </div>
                        {selectedUser === user.id && (
                          <div className="flex items-center space-x-1 text-green-600 text-xs">
                            <CheckCircle className="h-4 w-4" />
                            <span>Selected</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {filteredUsers.length === 0 && (
                    <div className="p-4 text-center text-gray-500">No users found</div>
                  )}
                </div>
              </div>

              {/* Meter Selection */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Select a Meter</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search meters..."
                    value={meterSearch}
                    onChange={(e) => setMeterSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="mt-2 max-h-60 overflow-y-auto border border-gray-200 rounded-md">
                  {filteredUnassignedMeters.map(meter => (
                    <div
                      key={meter.id}
                      onClick={() => handleMeterSelection(meter.deviceId)}
                      className={`p-3 border-b border-gray-100 cursor-pointer transition-colors ${
                        selectedMeterId === meter.deviceId ? 'bg-blue-100 border-blue-300' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-yellow-200 border-2 border-dashed rounded-xl w-10 h-10 flex items-center justify-center mr-3">
                            <Zap className="h-5 w-5 text-yellow-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Device ID: {meter.deviceId}</div>
                            <div className="text-xs text-gray-500">Status: Unassigned</div>
                          </div>
                        </div>
                        {selectedMeterId === meter.deviceId && (
                          <div className="flex items-center space-x-1 text-blue-600 text-xs">
                            <CheckCircle className="h-4 w-4" />
                            <span>Selected</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {filteredUnassignedMeters.length === 0 && (
                    <div className="p-4 text-center text-gray-500">
                      {unassignedIOTMeter.length === 0
                        ? 'No unassigned meters available'
                        : 'No meters match your search'}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex justify-end space-x-3 pt-4">
            <button
              onClick={() => setShowAddMeterModal(false)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleAssign}
              disabled={!selectedUser || !selectedMeterId}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Assign Meter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMeterModal;
