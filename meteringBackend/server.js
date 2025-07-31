const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB } = require('./src/config/dbConfig');
const mainRoutes = require('./src/routes/index');
const { scheduleMidnightJob } = require('./src/jobs/scheduleMidnightJob');
const { sendNotification } = require('./src/service/notificationService');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();
scheduleMidnightJob();

app.use('/api/v1', mainRoutes);

app.get("/test", async (req, res) => {
  try {
    // const meterId = "6878ac53ae445ccc27e284e5"; // Hardcoded for now

    // const meter = await Meter.findById(meterId)
    //   .populate({
    //     path: "assingnedUserId",
    //     select: "-password -refreshToken -otp -otpExpiresAt -actionHistory -__v",
    //     populate: {
    //       path: "adminId",
    //       select: "-password -refreshToken -otp -otpExpiresAt -actionHistory -__v",
    //     }
    //   })
    //   .select("-__v");

    // if (!meter) {
    //   return res.status(404).json({ error: "Meter not found" });
    // }

    let validatedReading={
  "payload_version": { "value": 1, "unit": "" },
  "slave_id": { "value": 1, "unit": "" },
  "function_code": { "value": 3, "unit": "" },
  "meter_serial_number": { "value": "MTR888", "unit": "" },
  "version": { "value": 1, "unit": "" },
  "cum_eb_kwh": { "value": 1250.5, "unit": "kWh" },
  "cum_dg_kwh": { "value": 300.2, "unit": "kWh" },
  "cum_kvah_eb": { "value": 1300.5, "unit": "kVAh" },
  "cum_kvah_dg": { "value": 320.3, "unit": "kVAh" },
  "cum_kvarh_eb": { "value": 450.7, "unit": "kvarh" },
  "cum_kvarh_dg": { "value": 150.5, "unit": "kvarh" },
  "relay_status": { "status": "ON", "value": 1 },
  "eb_dg_status": { "value": 1, "unit": "" },
  "eb_load_setting": { "value": 5000, "unit": "W" },
  "dg_load_setting": { "value": 3000, "unit": "W" },
  "eb_tariff_setting": { "value": 7.5, "unit": "currency/unit" },
  "dg_tariff_setting": { "value": 12, "unit": "currency/unit" },
  "balance_amount": { "value": 5, "unit": "currency" },
  "daily_charge_setting": { "value": 5, "unit": "currency/day" },
  "voltage_r": { "value": 230, "unit": "V" },
  "current_r": { "value": 10, "unit": "A" },
  "current_y": { "value": 10, "unit": "A" },
  "current_b": { "value": 10, "unit": "A" },
  "power_factor": { "value": 0.98, "unit": "pf" },
  "frequency": { "value": 50, "unit": "Hz" },
  "tempor": [
    { "value": "High Load Usage", "unit": 567 },
    { "value": "Magnetic Interference", "unit": false }
  ],
  "timestamp": "2025-07-29T12:00:00Z"
}
let meterId="6874d79fbd06639d75c593a2"

            await sendNotification({
  // meterId: validatedReading.meterId,
  meterId,
  data: {
    tempor: validatedReading.tempor,
    balance_amount: validatedReading.balance_amount
  }
});

    return res.status(200).json({
      // meter,
      // user: meter.assingnedUserId,  // No need for separate query
      // admin:meter.assingnedUserId.adminId
      message:"Notifications Send Succesfully"
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});


const twilio = require('twilio');



const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
// Initialize Twilio Client
const client = new twilio(accountSid, authToken);
app.get("/sms", async (req, res) => {

try {

  // Send SMS
let message= await client.messages
  .create({
    body: 'Hello Saif! This SMS is sent using Node.js and Twilio Phone Number.',
    // from: '+14025425333',  // Twilio Phone Number
    from: twilioPhone,  // Twilio Phone Number
    to: '+919889667456'    // Recipient Number (must be verified in trial mode)
  })
  // .then(message => console.log('Message SID:', message.sid))
  // .catch(error => console.error('Error:', error));

    return res.status(200).json({
      // meter,
      // user: meter.assingnedUserId,  // No need for separate query
      // admin:meter.assingnedUserId.adminId
    message
    });
  
} catch (error) {
  console.log(error)
}






})
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
