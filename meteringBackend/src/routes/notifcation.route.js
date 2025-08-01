// routes/notifications.js

const express = require('express');
const notificationRouter = express.Router();
const NotificationModel = require('../model/Notification');
const User = require('../model/User');

// Get notifications for users under an admin (including super admin hierarchy)
notificationRouter.get('/admin/:adminId', async (req, res) => {
  try {
    // console.log("==========",req)
    const adminId = req.params.adminId;

    console.log(req.params.adminId)
    
    // Find all users where adminId matches or is under the super admin
    let users;
    // if (req.user.role === 'superAdmin') {
    //   users = await User.find({ 
    //     $or: [
    //       { adminId: adminId },
    //       { superAdminId: adminId }
    //     ]
    //   });
    // } else {
      users = await User.find({ adminId: adminId });
    // }
    console.log("======users========",users)
    const userIds = users.map(user => user._id);
       console.log("======userIds========",userIds)
    // Get notifications for these users
    const notifications = await NotificationModel.find({ userId: { $in: userIds } })
      .populate('userId', 'name email role')
      .populate('meterId', 'meterId location');
    console.log()
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get admin-specific system notifications
notificationRouter.get('/system/:adminId', async (req, res) => {
  try {
    const adminId = req.params.adminId;
    
    // These would be notifications specifically for admin/superadmin
    const notifications = await NotificationModel.find({
      $or: [
        { userId: null }, // System-wide notifications
        { userId: adminId }, // Notifications specifically for this admin
        { 
          userId: { $exists: true },
          'userNotification.alertType': {
            $in: ['System Alert', 'Security Alert', 'Maintenance Required']
          }
        }
      ]
    })
    .sort({ createdAt: -1 })
    .populate('userId', 'name email role')
    .populate('meterId', 'meterId location');
    
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get notifications for a specific user
notificationRouter.get('/user/:userId', async (req, res) => {
  try {
    const notification = await NotificationModel.findOne({ userId: req.params.userId })
      .populate('userId', 'name email role')
      .populate('meterId', 'meterId location');
    
    if (!notification) {
      return res.status(404).json({ message: 'No notifications found for this user' });
    }
    
    res.json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Toggle notification status
notificationRouter.patch('/:id/status', async (req, res) => {
  try {
    const notification = await NotificationModel.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    
    res.json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = notificationRouter;