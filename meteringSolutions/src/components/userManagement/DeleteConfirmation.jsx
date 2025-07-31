// src/components/user-management/DeleteConfirmation.jsx
import React from 'react';
import Icons from '../icons/LucideIcons';

const DeleteConfirmation = ({
  user,
  setShowDeleteConfirm,
  confirmDelete,
  isDeleting
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Confirm Delete</h2>
            <button 
              onClick={() => setShowDeleteConfirm(false)}
              className="text-gray-400 hover:text-gray-500"
            >
              <Icons.X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700 mb-3">
              Are you sure you want to delete this user? This action cannot be undone.
            </p>
            {user && (
              <div className="bg-red-50 p-3 rounded-md">
                <div className="font-medium text-red-800">
                  {user.firstName} {user.lastName}
                </div>
                <div className="text-sm text-red-700">
                  @{user.username}
                </div>
              </div>
            )}
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setShowDeleteConfirm(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={confirmDelete}
              disabled={isDeleting}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:bg-red-400"
            >
              {isDeleting ? (
                <span className="flex items-center">
                  <Icons.Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Deleting...
                </span>
              ) : 'Delete User'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;