


// // Alert Config Mapping
// const ALERT_CONFIG = {
//   "Low Balance": {
//     message: "Your balance is low. Please recharge soon.",
//     sendTo: ["User"]
//   },

//   "Balance Expired": {
//     message: "Your balance has expired. Emergency 2 units activated.",
//     sendTo: ["User", "Admin"]
//   },
//   "Recharge Successful": {
//     message: "Recharge of ₹100 successful. New balance: ₹150.",
//     sendTo: ["User"]
//   },
//   "Recharge Failed": {
//     message: "Recharge failed. Please try again or check payment method.",
//     sendTo: ["User"]
//   },
//   "Reminder to Recharge": {
//     message: "Hey! It’s been a while since your last recharge. Need help?",
//     sendTo: ["User"]
//   },
//   "Magnetic Interference": {
//     message: "We detected possible magnetic interference on Meter ID #MTR888 (User ID #USR333). Please ensure the area is safe.",
//     sendTo: ["User", "Admin"]
//   },
//   "Neutral Voltage Issue": {
//     message: "Voltage fluctuation detected – this may damage appliances (Meter ID #MTR678).",
//     sendTo: ["Admin"]
//   },
//   "Reverse Polarity": {
//     message: "Reverse current detected for Meter ID #MTR321 (User ID #USR654). Downlink sent to protect the system.",
//     sendTo: ["Admin"]
//   },
//   "High Load Usage": {
//     message: "High load detected on Meter ID #MTR456 for User ID #USR789. Please reduce usage to avoid overload.",
//     sendTo: ["User", "Admin"]
//   },
//   "Current Imbalance": {
//     message: "Phase current imbalance noticed – please check wiring or load for Meter ID #MTR567.",
//     sendTo: ["Admin"]
//   }
// };




const ALERT_CONFIG = {
  "Low Balance": {
    message: "Your balance is low. Please recharge soon.",
    sendTo: {
      User: "Email"
    }
  },
  "Balance Expired": {
    message: "Your balance has expired. Emergency 2 units activated.",
    sendTo: {
      User: "Email",
      Admin: "Text"
    }
  },
  "Recharge Successful": {
    message: "Recharge of ₹100 successful. New balance: ₹150.",
    sendTo: {
      User: "Email"
    }
  },
  "Recharge Failed": {
    message: "Recharge failed. Please try again or check payment method.",
    sendTo: {
      User: "Email"
    }
  },
  "Reminder to Recharge": {
    message: "Hey! It’s been a while since your last recharge. Need help?",
    sendTo: {
      User: "Text"
    }
  },
  "Magnetic Interference": {
    message: "We detected possible magnetic interference on Meter ID #MTR888 (User ID #USR333). Please ensure the area is safe.",
    sendTo: {
      User: "Email",
      Admin: "Text"
    }
  },
  "Neutral Voltage Issue": {
    message: "Voltage fluctuation detected – this may damage appliances (Meter ID #MTR678).",
    sendTo: {
      Admin: "Email"
    }
  },
  "Reverse Polarity": {
    message: "Reverse current detected for Meter ID #MTR321 (User ID #USR654). Downlink sent to protect the system.",
    sendTo: {
      Admin: "Text"
    }
  },
  "High Load Usage": {
    message: "High load detected on Meter ID #MTR456 for User ID #USR789. Please reduce usage to avoid overload.",
    sendTo: {
      User: "Text",
      Admin: "Email"
    }
  },
  "Current Imbalance": {
    message: "Phase current imbalance noticed – please check wiring or load for Meter ID #MTR567.",
    sendTo: {
      Admin: "Text"
    }
  }
};