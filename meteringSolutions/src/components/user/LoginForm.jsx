

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from '../../redux/thunks/auththunks';
// import { fetchUserInit } from '../../redux/slice/userDashboardSlice'

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [signInError, setSignInError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const dispatch = useDispatch();

//   const handleLogin = async () => {
//     setSignInError(false);
//     setLoading(true);

//     console.log("Id pass of the user", { email, password });
//     try {
//       const resultAction = await dispatch(loginUser({ email, password }));
//       console.log('resultAction', resultAction);

//       if (loginUser.fulfilled.match(resultAction)) {

//         if (resultAction.payload.role === "admin") {
//           //await dispatch(fetchAdminInit(user.id));
//           console.log('role', resultAction.payload.id);
//           navigate(`/admin/dashboard/${resultAction.payload.id}`);

//         } else if (resultAction.payload.role === "user") {
//           await dispatch(fetchUserInit(resultAction.payload.id));
//           navigate(`/user/dashboard/${resultAction.payload.id}`);

//         } else if (resultAction.payload.role === "superAdmin") {
//           navigate(`/${resultAction.payload.role}/admin-dashboard`);
//         }

//       } else {
//         setSignInError(true);
//       }
//     } catch (error) {
//       setSignInError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-100 p-4">
//       <div className="w-full max-w-xl bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
//         {/* Left Branding Panel */}
//         <div className="bg-gradient-to-br from-cyan-400 to-blue-600 text-white flex flex-col items-center justify-center p-8">
//           <img src="./logo.svg" alt="Logo" className="w-36 mb-6" />
//           <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
//           <p className="text-center text-sm">Log in to your dashboard and manage your account</p>
//         </div>

//         {/* Right Form Panel */}
//         <div className="p-8">
//           <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Sign In</h2>

//           <div className="mb-4 relative">
//             <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
//             <input
//               type="email"
//               id="email"
//               placeholder="Email"
//               className="w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-6 relative">
//             <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
//             <input
//               type={showPassword ? 'text' : 'password'}
//               id="password"
//               placeholder="Password"
//               className="w-full pl-10 pr-10 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
//               value={password}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter') {
//                   handleLogin();
//                 }
//               }}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword((prev) => !prev)}

//               className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
//             >
//               {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//             </button>
//           </div>

//           <button
//             type="button"
//             onClick={handleLogin}
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
//           >
//             {loading ? 'Signing In...' : 'Sign In'}
//           </button>

//           {signInError && (
//             <p className="text-red-500 text-center mt-4 text-sm">
//               The email/password combination is incorrect
//             </p>
//           )}

//           <div className="text-center mt-6">
//             <p className="text-sm text-gray-600">
//               Don&apos;t have an account?{' '}
//               <Link to="/customer-register" className="text-blue-600 font-semibold hover:underline">
//                 Sign Up
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useDispatch } from "react-redux";
import { loginUser } from '../../redux/thunks/auththunks';
import { fetchUserInit } from '../../redux/slice/userDashboardSlice';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInError, setSignInError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setSignInError(false);
    setLoading(true);

    try {
      const resultAction = await dispatch(loginUser({ email, password }));
      const payload = resultAction.payload;
      console.log(payload);
      console.log("checking the",loginUser.fulfilled.match(resultAction));
      if (loginUser.fulfilled.match(resultAction)===true) {
        const role = payload?.role;
        const id = payload?.id;
        console.log(role,id)
        if (role === "admin") {
          console.log('checking inside the role === admin')
          navigate(`/admin/dashboard/${id}`);
        } else if (role === "user") {
          await dispatch(fetchUserInit(id));
          navigate(`/user/dashboard/${id}`);
        } else if (role === "superadmin") {
          navigate(`/super-admin/${id}`);
        } else {
          setSignInError(true);
        }
      } else {
        setSignInError(true);
      }
    } catch (error) {
      setSignInError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-100 p-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Branding Panel */}
        <div className="bg-gradient-to-br from-cyan-400 to-blue-600 text-white flex flex-col items-center justify-center p-8">
          <img src="./logo.svg" alt="Logo" className="w-36 mb-6" />
          <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-center text-sm">Log in to your dashboard and manage your account</p>
        </div>

        {/* Right Form Panel */}
        <div className="p-8">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Sign In</h2>

          <div className="mb-4 relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6 relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={password}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleLogin();
                }
              }}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>

          {signInError && (
            <p className="text-red-500 text-center mt-4 text-sm">
              The email/password combination is incorrect
            </p>
          )}

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link to="/customer-register" className="text-blue-600 font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

