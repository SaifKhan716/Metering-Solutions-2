import React, { useState } from "react";

const AddMeter = ({ isOpen, handleCancel, addMeter }) => {
  if (!isOpen) return null;
  const [steps, setSteps] = useState(1);
  const [formData, setFormData] = useState({
    energySensor: "Energy Sensor",
    connectivity: "",
    network: "",
    devEui: "",
    name: "",
    manufacture: "",
    location: "",
  });

  const [formDataController, setFormDataController] = useState({
    connectivity: "",
    network: "",
    controller: "IO Controller",
    manufacture: "",
    location: "",
  });

  const nextStep = () => {
    setSteps(steps + 1);
  };
  const prevStep = () => {
    setSteps(steps - 1);
  };

  const fieldOptions = {
    connectivity: ["LoRaWAN"],
    network: ["Senra", "Loriot", "TTN"],
    manufacture: ["Dragino", "Milesight"],
    controller: ["Controller 1"], // Only one option
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormDataController((prev) => ({ ...prev, [name]: value }))
  };

  const resetFormData = () => {
    setFormData({
      energySensor: "",
      connectivity: "",
      network: "",
      devEui: "",
      name: "",
      manufacture: "",
      location: "",
    });
    setFormDataController({
      connectivity: "",
      network: "",
      controller: "",
      manufacture: "",
      location: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    resetFormData();
    const newMeter = {
      //   id: `MTR-${Date.now()}`, // Unique ID
      ...formData,
      ...formDataController,
    };

    console.log(
      "form Data is : ",
      formData,
      "form data controller is : ",
      formDataController
    );

    addMeter(newMeter); // Send data to MeterManagement
  };

  return (
    <div className="mt-2 max-h-60 overflow-y-scroll">
      {filteredUsers.map(user => (
        <div
          key={user.id}
          onClick={() => {
            setSelectedUser(user.id);
            setShowAddMeterModal(true);
          }}
          className={`p-3 border-b border-gray-100 cursor-pointer transition-colors ${selectedUser === user.id ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'
            }`}
        >
          <div className="flex items-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 flex items-center justify-center mr-3">
              <User className="h-5 w-5 text-gray-500" />
            </div>
            <div>
              <div className="font-medium text-gray-900">{user.name}</div>
              <div className="text-sm text-gray-500">{user.email}</div>
              <div className="text-xs text-gray-500">Meters: {user.meters.length}</div>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default AddMeter;
