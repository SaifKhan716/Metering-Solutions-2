// import React from 'react';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const SignUpForm = () => {
//   const navigate = useNavigate();
//   const registerApi = `${import.meta.env.VITE_BACKEND_URL}/create-customers`;

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     countryCode: '',
//     phoneNumber: '',
//     companyName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const {
//       firstName,
//       lastName,
//       countryCode,
//       phoneNumber,
//       email,
//       password,
//       confirmPassword,
//     } = formData;

//     if (
//       !firstName ||
//       !lastName ||
//       !countryCode ||
//       !phoneNumber ||
//       !email ||
//       !password ||
//       !confirmPassword
//     ) {
//       alert('Please fill in all required fields.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert('Passwords do not match.');
//       return;
//     }

//     try {
//       const response = await axios.post(registerApi, formData);

//       if (response.status === 201) {
//         alert('Registration successful!');
//         navigate('/');

//         // Reset form
//         setFormData({
//           firstName: '',
//           lastName: '',
//           countryCode: '',
//           phoneNumber: '',
//           companyName: '',
//           email: '',
//           password: '',
//           confirmPassword: '',
//         });
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//       const message =
//         error.response?.data?.message || 'An error occurred. Please try again.';
//       alert(`Error: ${message}`);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen p-6">
//       <div className="w-full md:max-w-[40%] sm:max-w-[50%] bg-white p-6 rounded-xl shadow-lg border ">
//         <div className="flex justify-center mb-3">
//           <img src="./logo.svg" alt="Logo" className="w-40 h-20" />
//         </div>

//         <h2 className="text-xl font-semibold mb-6 text-center">Get Started Now</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name Fields */}
//           <div className="flex flex-col md:flex-row gap-4">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//               className="flex-1 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//               className="flex-1 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//             />
//           </div>

//           {/* Phone Fields */}
//           <div className="flex flex-col md:flex-row gap-4">
//             <input
//               type="text"
//               name="countryCode"
//               placeholder="Country Code"
//               value={formData.countryCode}
//               onChange={handleChange}
//               required
//               className="flex-1 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//             />
//             <input
//               type="text"
//               name="phoneNumber"
//               placeholder="Phone Number"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//               className="flex-1 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//             />
//           </div>

//           {/* Company Name */}
//           <input
//             type="text"
//             name="companyName"
//             placeholder="Company Name (Optional)"
//             value={formData.companyName}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//           />

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//           />

//           {/* Password */}
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//           />

//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//           />

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors"
//           >
//             Submit
//           </button>
//         </form>

//         <p className="mt-4 text-center">
//           Already have an account?{' '}
//           <Link to="/" className="text-cyan-600 hover:underline">
//             Log In
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

//////////////////////////////////////////



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, Building } from 'lucide-react';

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    countryCode: '',
    phoneNumber: '',
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      countryCode,
      phoneNumber,
      email,
      password,
      confirmPassword,
    } = formData;

    if (!firstName || !lastName || !countryCode || !phoneNumber || !email || !password || !confirmPassword) {
      alert('Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    setTimeout(() => {
      alert(' Dummy registration successful!');
      navigate('/');
      setFormData({
        firstName: '',
        lastName: '',
        countryCode: '',
        phoneNumber: '',
        companyName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-100 to-blue-100 p-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side */}
        <div className="bg-gradient-to-br from-cyan-400 to-blue-600 text-white flex flex-col justify-center items-center p-8">
          <img src="./logo.svg" alt="Logo" className="w-36 mb-6" />
          <h2 className="text-3xl font-bold mb-2">Welcome!</h2>
          <p className="text-center text-sm">Start your journey by creating a free account with us.</p>
        </div>

        {/* Right Side */}
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">Sign Up</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="relative w-1/2">
                <User className="absolute left-2 top-3.5 text-gray-400" size={18} />
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full pl-8 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="relative w-1/2">
                <User className="absolute left-2 top-3.5 text-gray-400" size={18} />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full pl-8 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="relative w-1/2">
                <Phone className="absolute left-2 top-3.5 text-gray-400" size={18} />
                <input
                  type="text"
                  name="countryCode"
                  placeholder="Country Code"
                  value={formData.countryCode}
                  onChange={handleChange}
                  required
                  className="w-full pl-8 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="relative w-1/2">
                <Phone className="absolute left-2 top-3.5 text-gray-400" size={18} />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full pl-8 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="relative">
              <Building className="absolute left-2 top-3.5 text-gray-400" size={18} />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name (Optional)"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full pl-8 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-2 top-3.5 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-8 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-2 top-3.5 text-gray-400" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-8 pr-10 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <Lock className="absolute left-2 top-3.5 text-gray-400" size={18} />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full pl-8 pr-10 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 cursor-pointer text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Register
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            Already have an account?{' '}
            <Link to="/" className="text-blue-600 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

