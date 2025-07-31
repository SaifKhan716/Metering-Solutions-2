const EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <title>{ALERT_TITLE}</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
  <table width="100%" style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px;">
    <tr>
      <td>
        <h2 style="color: {COLOR};">{ALERT_TITLE}</h2>
        <p>Dear User <strong>{USER_ID}</strong>,</p>
        <p>{ALERT_MESSAGE}</p>
        <p>Meter ID: <strong>{METER_ID}</strong></p>
        <p>Value: <strong>{VALUE}</strong></p>
        <p>Timestamp: <strong>{TIME}</strong></p>
        <hr/>
        <p>Thank you,<br/>Smartlynk Metering Team</p>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const renderEmailTemplate = ({
  alertTitle,
  color,
  userId,
  meterId,
  alertMessage,
  value,
  time,
}) => {
  return EMAIL_TEMPLATE.replace(/{ALERT_TITLE}/g, alertTitle)
    .replace(/{COLOR}/g, color)
    .replace(/{USER_ID}/g, userId)
    .replace(/{METER_ID}/g, meterId)
    .replace(/{ALERT_MESSAGE}/g, alertMessage)
    .replace(/{VALUE}/g, value)
    .replace(/{TIME}/g, time);
};

const alertColors = {
  "Low Balance": "#d9534f",
  "Recharge Successful": "#28a745",
  "Balance Expired": "#dc3545",
  "Reminder to Recharge": "#007bff",
  "High Load Usage": "#ffcc00",
  Default: "#333333",
};

const renderSMSTemplate = ({
  alertType,
  userId,
  meterId,
  value,
  time,
  message,
}) => {
  return `
⚠️ [Alert: ${alertType}]

Dear User (${userId}),
${message}

Meter ID: ${meterId}
Value: ₹${value}
Time: ${time}

- Smartlynk Metering
  `.trim();
};

module.exports = {
  EMAIL_TEMPLATE,
  renderEmailTemplate,
  alertColors,
  renderSMSTemplate,
};
