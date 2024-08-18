// import React, { useState } from 'react';
// import './login.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import { login } from "../loggedSlice"; 

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const navigate = useNavigate();
//   const reduxAction = useDispatch();

//   const validate = () => {
//     let inputErrors = {};
//     let isValid = true;

//     if (!username) {
//       isValid = false;
//       inputErrors["username"] = "Please enter your username.";
//     } else if (username.length < 3) {
//       isValid = false;
//       inputErrors["username"] = "Username must be at least 3 characters long.";
//     } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
//       isValid = false;
//       inputErrors["username"] = "Username can only contain letters and numbers.";
//     }

//     if (!password) {
//       isValid = false;
//       inputErrors["password"] = "Please enter your password.";
//     } else if (password.length < 6) {
//       isValid = false;
//       inputErrors["password"] = "Password must be at least 6 characters long.";
//     } else if (!/[A-Z]/.test(password)) {
//       isValid = false;
//       inputErrors["password"] = "Password must contain at least one uppercase letter.";
//     } else if (!/[a-z]/.test(password)) {
//       isValid = false;
//       inputErrors["password"] = "Password must contain at least one lowercase letter.";
//     } else if (!/[0-9]/.test(password)) {
//       isValid = false;
//       inputErrors["password"] = "Password must contain at least one number.";
//     } else if (!/[!@#$%^&*]/.test(password)) {
//       isValid = false;
//       inputErrors["password"] = "Password must contain at least one special character.";
//     }

//     setErrors(inputErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrors({});
//     setLoading(true);

//     if (validate()) {
//       try {
//         const response = await fetch('https://localhost:7234/api/Userlogin/CheckLogin', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ userName: username, password: password }),
//         });

//         const data = await response.json();
//         console.log('Response data:', data);

//         if (response.ok) {
//           localStorage.setItem("LoggedUser",JSON.stringify(data));
         
//           switch (data.roleId) {
//             case 1:
//               console.log("admin");
//               reduxAction(login());
//               navigate("/admin");
//               break;
//             case 2:
//               console.log(data.status)
//               if(data.status===0){
//                 setErrors({ submit: 'Your Request not Approved. Try After Some Time' });
//                 break;
//               }
//               reduxAction(login());
//               navigate('/theaterOwner');
//               break;
//             case 3:
//               navigate('/user');
//               break;
//             default:
//               setErrors({ submit: 'Unexpected role' });
//               break;
//           }
//         } else {
//           setErrors({ submit: data.message || 'Login failed' });
//         }
//       } catch (error) {
//         console.error('Login error:', error);
//         setErrors({ submit: 'Login failed. Please try again.' });
//       }
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {success ? (
//         <div className="success-message">Login successful!</div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Username:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className={errors.username ? 'error' : ''}
//             />
//             {errors.username && <div className="text-danger">{errors.username}</div>}
//           </div>
//           <div className="form-group">
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className={errors.password ? 'error' : ''}
//             />
//             {errors.password && <div className="text-danger">{errors.password}</div>}
//           </div>
//           {errors.submit && <div className="text-danger">{errors.submit}</div>}
//           <button type="submit" disabled={loading}>
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../loggedSlice"; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const reduxAction = useDispatch();

  const validate = () => {
    let inputErrors = {};
    let isValid = true;

    if (!username) {
      isValid = false;
      inputErrors["username"] = "Please enter your username.";
    } else if (username.length < 3) {
      isValid = false;
      inputErrors["username"] = "Username must be at least 3 characters long.";
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      isValid = false;
      inputErrors["username"] = "Username can only contain letters and numbers.";
    }

    if (!password) {
      isValid = false;
      inputErrors["password"] = "Please enter your password.";
    } else if (password.length < 6) {
      isValid = false;
      inputErrors["password"] = "Password must be at least 6 characters long.";
    } else if (!/[A-Z]/.test(password)) {
      isValid = false;
      inputErrors["password"] = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
      isValid = false;
      inputErrors["password"] = "Password must contain at least one lowercase letter.";
    } else if (!/[0-9]/.test(password)) {
      isValid = false;
      inputErrors["password"] = "Password must contain at least one number.";
    } else if (!/[!@#$%^&*]/.test(password)) {
      isValid = false;
      inputErrors["password"] = "Password must contain at least one special character.";
    }

    setErrors(inputErrors);
    return isValid;
  };

  // Login.js

const handleSubmit = async (e) => {
  e.preventDefault();
  setErrors({});
  setLoading(true);

  if (validate()) {
    try {
      const response = await fetch('https://localhost:7234/api/Userlogin/CheckLogin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName: username, password: password }),
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        localStorage.setItem("LoggedUser", JSON.stringify(data));
        reduxAction(login(data)); // Dispatch login action with user data
        
        switch (data.roleId) {
          case 1:
            navigate("/admin");
            break;
          case 2:
            if (data.status === 0) {
              setErrors({ submit: 'Your Request not Approved. Try After Some Time' });
              break;
            }
            navigate('/theaterOwner');
            break;
          case 3:
            navigate('/');
            break;
          default:
            setErrors({ submit: 'Unexpected role' });
            break;
        }
      } else {
        setErrors({ submit: data.message || 'Login failed' });
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ submit: 'Login failed. Please try again.' });
    }
  }

  setLoading(false);
};


  return (
    <div className="login-container">
      <h2>Login</h2>
      {success ? (
        <div className="success-message">Login successful!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={errors.username ? 'error' : ''}
            />
            {errors.username && <div className="text-danger">{errors.username}</div>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <div className="text-danger">{errors.password}</div>}
          </div>
          {errors.submit && <div className="text-danger">{errors.submit}</div>}
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;