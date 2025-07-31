import React, { useState } from 'react';
import { 
  User, Lock, Bell, CreditCard, Power, Shield, 
  Mail, Phone, Building, Check, Trash2, Plus,Key 
} from 'lucide-react';

const AccountSettings = () => {
  // User state
  const [userData, setUserData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Energy Solutions Inc.',
    role: 'Facility Manager'
  });

  // Password state
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Notification preferences
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsAlerts: false,
    billingReminders: true,
    consumptionReports: true,
    maintenanceAlerts: true
  });

  // Payment methods
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'visa', last4: '4242', expiry: '12/25', primary: true },
    { id: 2, type: 'mastercard', last4: '1881', expiry: '08/24', primary: false }
  ]);

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications(prev => ({ ...prev, [name]: checked }));
  };

  // Form submission handlers
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', userData);
    // Show success indicator
    const submitBtn = document.getElementById('profile-submit');
    submitBtn.innerHTML = 'Updated!';
    submitBtn.classList.add('bg-green-600');
    setTimeout(() => {
      submitBtn.innerHTML = 'Update Profile';
      submitBtn.classList.remove('bg-green-600');
    }, 2000);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords don't match!");
      return;
    }
    console.log('Password changed');
    // Show success indicator
    const submitBtn = document.getElementById('password-submit');
    submitBtn.innerHTML = 'Password Updated!';
    submitBtn.classList.add('bg-green-600');
    setTimeout(() => {
      submitBtn.innerHTML = 'Change Password';
      submitBtn.classList.remove('bg-green-600');
    }, 2000);
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  // Delete payment method
  const deletePaymentMethod = (id) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
  };

  // Set primary payment method
  const setPrimaryMethod = (id) => {
    setPaymentMethods(paymentMethods.map(method => ({
      ...method,
      primary: method.id === id
    })));
  };

  // Add new payment method
  const [showAddPayment, setShowAddPayment] = useState(false);
  const [newPayment, setNewPayment] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardName: ''
  });

  const handleAddPayment = () => {
    if (newPayment.cardNumber && newPayment.expiry) {
      const last4 = newPayment.cardNumber.slice(-4);
      const newMethod = {
        id: paymentMethods.length + 1,
        type: 'visa',
        last4,
        expiry: newPayment.expiry,
        primary: false
      };
      setPaymentMethods([...paymentMethods, newMethod]);
      setShowAddPayment(false);
      setNewPayment({ cardNumber: '', expiry: '', cvv: '', cardName: '' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Account Settings</h1>
        <p className="text-gray-600 mt-2">Manage your metering solution preferences and account details</p>
      </header>
      
      {/* Profile Information Section */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex items-center mb-6">
          <User className="text-blue-600 w-5 h-5 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Profile Information</h2>
        </div>
        
        <form onSubmit={handleProfileSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <User className="w-4 h-4 mr-1 text-gray-500" /> Full Name
              </label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Mail className="w-4 h-4 mr-1 text-gray-500" /> Email Address
              </label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Phone className="w-4 h-4 mr-1 text-gray-500" /> Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Building className="w-4 h-4 mr-1 text-gray-500" /> Company
              </label>
              <input
                type="text"
                name="company"
                value={userData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <button
            id="profile-submit"
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200 flex items-center"
          >
            <Check className="w-4 h-4 mr-2" /> Update Profile
          </button>
        </form>
      </section>

      {/* Password Section */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex items-center mb-6">
          <Lock className="text-blue-600 w-5 h-5 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Password & Security</h2>
        </div>
        
        <form onSubmit={handlePasswordSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <Lock className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <Lock className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <Lock className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="flex items-center mb-4 p-3 bg-blue-50 rounded-lg">
            <Shield className="text-blue-600 mr-3 flex-shrink-0" />
            <span className="text-sm text-gray-700">
              Use 8+ characters with a mix of uppercase, lowercase, numbers, and symbols
            </span>
          </div>
          <button
            id="password-submit"
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200 flex items-center"
          >
            <Key className="w-4 h-4 mr-2" /> Change Password
          </button>
        </form>
      </section>

      {/* Notification Preferences */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex items-center mb-6">
          <Bell className="text-blue-600 w-5 h-5 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Notification Preferences</h2>
        </div>
        
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <label className="text-gray-700 flex items-center">
                <Bell className="w-4 h-4 mr-3 text-gray-500" />
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </label>
              <div className="relative inline-block w-12 h-6">
                <input
                  type="checkbox"
                  name={key}
                  checked={value}
                  onChange={handleNotificationChange}
                  className="sr-only"
                  id={`switch-${key}`}
                />
                <label 
                  htmlFor={`switch-${key}`} 
                  className={`block w-12 h-6 rounded-full transition ${value ? 'bg-blue-600' : 'bg-gray-300'}`}
                >
                  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition left-1 ${value ? 'transform translate-x-6' : ''}`}></span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Billing Information */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <CreditCard className="text-blue-600 w-5 h-5 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Billing Information</h2>
          </div>
          {!showAddPayment && (
            <button 
              onClick={() => setShowAddPayment(true)}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm"
            >
              <Plus className="w-4 h-4 mr-1" /> Add Payment
            </button>
          )}
        </div>
        
        {showAddPayment ? (
          <div className="mb-6 p-4 border border-blue-200 rounded-lg bg-blue-50">
            <h3 className="font-medium mb-3">Add New Payment Method</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Card Number</label>
                <input
                  type="text"
                  value={newPayment.cardNumber}
                  onChange={(e) => setNewPayment({...newPayment, cardNumber: e.target.value})}
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Cardholder Name</label>
                <input
                  type="text"
                  value={newPayment.cardName}
                  onChange={(e) => setNewPayment({...newPayment, cardName: e.target.value})}
                  placeholder="Name on card"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Expiry Date</label>
                <input
                  type="text"
                  value={newPayment.expiry}
                  onChange={(e) => setNewPayment({...newPayment, expiry: e.target.value})}
                  placeholder="MM/YY"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">CVV</label>
                <input
                  type="text"
                  value={newPayment.cvv}
                  onChange={(e) => setNewPayment({...newPayment, cvv: e.target.value})}
                  placeholder="123"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={handleAddPayment}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center"
              >
                <Check className="w-4 h-4 mr-1" /> Save Card
              </button>
              <button 
                onClick={() => setShowAddPayment(false)}
                className="border border-gray-300 px-4 py-2 rounded-lg text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : null}
        
        <div className="space-y-4">
          {paymentMethods.map(method => (
            <div key={method.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-200 transition">
              <div className="flex items-center">
                <div className="bg-gray-100 border rounded-lg w-12 h-8 mr-4 flex items-center justify-center">
                  {method.type === 'visa' ? (
                    <span className="text-blue-800 font-bold text-xs">VISA</span>
                  ) : (
                    <span className="text-red-700 font-bold text-xs">MC</span>
                  )}
                </div>
                <div>
                  <p className="font-medium">
                    •••• {method.last4}
                  </p>
                  <p className="text-sm text-gray-500">Exp {method.expiry}</p>
                </div>
              </div>
              <div className="flex space-x-3">
                {method.primary ? (
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center">
                    <Check className="w-3 h-3 mr-1" /> Primary
                  </span>
                ) : (
                  <button 
                    onClick={() => setPrimaryMethod(method.id)}
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  >
                    <Check className="w-4 h-4 mr-1" /> Set primary
                  </button>
                )}
                <button 
                  onClick={() => deletePaymentMethod(method.id)}
                  className="text-red-600 hover:text-red-800 text-sm flex items-center"
                >
                  <Trash2 className="w-4 h-4 mr-1" /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Account Actions */}
      <section className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Actions</h2>
        <div className="space-y-3">
          <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex items-center border border-gray-200">
            <Power className="mr-3 text-gray-600" />
            <div>
              <p className="font-medium">Logout from all devices</p>
              <p className="text-sm text-gray-500">Secure your account by signing out everywhere</p>
            </div>
          </button>
          <button className="w-full text-left p-3 hover:bg-red-50 text-red-600 rounded-lg flex items-center border border-red-100">
            <Trash2 className="mr-3" />
            <div>
              <p className="font-medium">Request account deletion</p>
              <p className="text-sm">Permanently delete your account and all data</p>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AccountSettings;