import { createAsyncThunk } from "@reduxjs/toolkit";
import { meterApi } from "../../api/apiService";
import { addMeterInMetering } from "../slice/meterManagementSlice";

// Get all meters from Metering
export const fetchMeters = createAsyncThunk("meter/fetchMeters", async (_, thunkAPI) => {
  try {
    const res = await meterApi.getAllMeter();
    console.log('fetch meter thunk', res.data.data);
    return res.data.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || "Failed to load meters");
  }
});

//fetch meter from the IOT platform.
export const fetchUnassignedIoTMeters = createAsyncThunk(
  "meter/fetchUnassignedIoTMeters",
  async (_, thunkAPI) => {
    try {
      // 1. Get all IoT meters
      const iotRes = await meterApi.getAllMeterFromIOT();
      const iotMeters = iotRes.data.data;

      // 2. Get all saved (assigned) meters in Metering
      const savedRes = await meterApi.getAllMeter();
      const savedMeters = savedRes.data.data;

      console.log(savedMeters);
      console.log(iotMeters);
      // Filter meters
      const unassignedMeters = iotMeters.filter(
        (iot) => !savedMeters.find((saved) => saved.deviceId === iot.deviceId)
      );

      return unassignedMeters;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || "Failed to fetch unassigned IoT meters"
      );
    }
  }
);

const generateSixDigit = () => {
  return Math.floor(100000 + Math.random() * 90);
};
export const assignUserToMeter = createAsyncThunk("meter/assignUserToMeter",
  async ({ meterId, userId, adminId }, thunkAPI) => {

    try {
      console.log("data from the modal", { meterId: meterId, userId: userId, adminId: adminId });

      const state = thunkAPI.getState();
      const existing = state.meter.metersAssigned.find((m) => m.deviceId === meterId);

      console.log("check existing", existing);

      if (existing) {
        console.log('meter exist karta hai bhai, kya kar raha tu');
      } else {
        console.log("inside the else condition");
        const data = {
          name: "Main Building - Floor 1",
          type: "Smart Water Meter",
          meterSerialNumber: `${generateSixDigit()}`,
          slaveId: '01',
          status: "online",
          adminId: `${adminId}`,
          deviceId: `${meterId}`,
        }
        {
  // "name": "Ajay's PG",
  // "type": "Smart Electric Meter",
  // "meterSerialNumber": "998855",
  // "slaveId": "03",
  // "status": "online",
  // "adminId":"68774978c2cb68989bbf187b"
}
        console.log("save meter chalegi ab");
        const saveMeter = await meterApi.addMeter(data);

        if (saveMeter) {

          const newMeter = thunkAPI.dispatch(addMeterInMetering(saveMeter.data));
          console.log("newMeter", newMeter);

          const assignRes = await meterApi.asignMeter({ meterId, userId });
          console.log("assignResponse",assignRes);
          return assignRes.data;
        } else {
          return {};
        }
      }




    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || "Failed to assign user to meter");
    }
  }
);

// Delete a meter
export const deleteMeter = createAsyncThunk("meter/delete", async (meterId, thunkAPI) => {
  try {
    await meterApi.delete(meterId);
    return { id: meterId };
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || "Failed to delete meter");
  }
});
