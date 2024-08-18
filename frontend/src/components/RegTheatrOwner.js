import { useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './RegUser.css';

// Define initial state and reducer for form data
const init = {
    fullname: "",
    uname: "",
    password: "",
    mobileNo: "",
    email: "",
    addrline1: "",
    addrline2: "",
    pincode: "",
    state: "",
    city: 0
};

// Define initial errors
const initErrors = {};

const formReducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.fld]: action.val };
        case 'reset':
            return init;
        default:
            return state;
    }
};

export default function RegisterTheatreOwner() {
    const [info, dispatch] = useReducer(formReducer, init);
    const [errors, setErrors] = useState(initErrors);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [message, setMessage] = useState(''); // For success or error messages
    const navigate= useNavigate();

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await fetch("https://localhost:7234/api/Userlogin/GetAllState");
                if (!response.ok) {
                    throw new Error('Failed to fetch states');
                }
                const data = await response.json();
                setStates(data);
            } catch (error) {
                console.error('Error fetching states:', error);
            }
        };
        fetchStates();
    }, []);

    useEffect(() => {
        const fetchCities = async () => {
            if (info.state) {
                try {
                    const response = await fetch(`https://localhost:7234/api/Userlogin/GetAllCities?sid=${info.state}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch cities');
                    }
                    const data = await response.json();
                    setCities(data);
                } catch (error) {
                    console.error('Error fetching cities:', error);
                }
            }
        };
        fetchCities();
    }, [info.state]);

    const validateForm = () => {
        const newErrors = {};

        if (!info.fullname) {
            newErrors.fullname = "Full name is required";
        } else if (!/^[a-zA-Z\s]+$/.test(info.fullname)) {
            newErrors.fullname = "Name contains only characters and space";
        }
        if (!info.uname){ 
            newErrors.uname = "Username is required";
        } else if(!/^[a-zA-Z0-9]+$/.test(info.uname) || info.uname.length < 3){
            newErrors.uname ="Username can only contain letters and numbers."
        } 

        if (!info.password){ 
            newErrors.password = "Password is required";
        }else if (!/[A-Z]/.test(info.password)) {
            newErrors.password = "Password must contain at least one uppercase letter.";
        } else if (!/[a-z]/.test(info.password)) {
            newErrors.password = "Password must contain at least one lowercase letter.";
        } else if (!/[0-9]/.test(info.password)) {
            newErrors.password = "Password must contain at least one number.";
        } else if (!/[!@#$%^&*]/.test(info.password)) {
            newErrors.password = "Password must contain at least one special character.";
        }else if (info.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
        }

        if (!info.mobileNo) {
            newErrors.mobileNo = "Mobile number is required";
        } else if (parseInt(info.mobileNo, 10) < 0) {
            newErrors.mobileNo = "Mobile cannot be negative";
        }else if (!/^\d{10}$/.test(info.mobileNo)){
                newErrors.mobileNo = "Mobile number must be 10 digits.";
        }
        if (!info.email){
             newErrors.email = "Email is required";
         }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email)){
                newErrors.email = "Email is not valid."
        }
        if (!info.addrline1) newErrors.addrline1 = "Address Line 1 is required";
        if (!info.pincode){
             newErrors.pincode = "Pincode is required";
        } else if (parseInt(info.pincode, 10) < 0) {
            newErrors.pincode = "Pincode cannot be negative";
        }else if (!/^\d{6}$/.test(info.pincode)) {
            newErrors.pincode = "Pincode must be a valid 6-digit number";
        } 
        if (!info.state) newErrors.state = "State is required";
        if (!info.city) newErrors.city = "City is required";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendData = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setMessage("Please fill out all required fields");
            return;
        }

        const dataToSend = {
            fullname: info.fullname,
            username: info.uname,
            password: info.password,
            addressLine1: info.addrline1,
            addressLine2: info.addrline2,
            pincode: info.pincode,
            mobileNo: info.mobileNo,
            emailId: info.email,
            cityId: +info.city,
            roleId: 2,
            status: 0
        };

        const reqdata = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        };
        fetch("https://localhost:7234/api/Userlogin/SaveUser", reqdata)
            .then(resp => {
                if (!resp.ok) {
                    return resp.json().then(error => {
                        throw new Error(JSON.stringify(error.errors));
                     
                   

                    });
                }
                return resp.json();
            })
            .then(data => {
                setMessage("Registration successful!");
                navigate("/login")
            })
            .catch(error => {
                console.error("Error:", error.message);
                setMessage("Registration failed.Either Username ,EmailId or MobileNo already present");
            });
    };

    return (
        <div className="login-card">
            <h1 className="login-title">Theatre Owner Registration Form</h1>
            <div className="login-form-container">
                <form className="login-form">
                    <div className="mainDiv">
                        <div className="subDiv1">
                            <div className="mb-3">
                                <label htmlFor="fullname" className="form-label">Name:</label>
                                <input type="text" className="form-control" id="fullname" name="fullname" value={info.fullname}
                                    onChange={(e) => { dispatch({ type: 'update', fld: 'fullname', val: e.target.value }); }}
                                />
                                {errors.fullname && <div className="text-danger">{errors.fullname}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="uname" className="form-label">Username:</label>
                                <input type="text" className="form-control" id="uname" name="uname" value={info.uname}
                                    onChange={(e) => { dispatch({ type: 'update', fld: 'uname', val: e.target.value }); }}
                                />
                                {errors.uname && <div className="text-danger">{errors.uname}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="password" name="password" value={info.password}
                                    onChange={(e) => { dispatch({ type: 'update', fld: 'password', val: e.target.value }); }}
                                />
                                {errors.password && <div className="text-danger">{errors.password}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobileNo" className="form-label">Mobile No:</label>
                                <input type="text" maxLength={10} className="form-control" id="mobileNo" name="mobileNo" value={info.mobileNo}
                                    onChange={(e) => { dispatch({ type: 'update', fld: 'mobileNo', val: e.target.value }); }}
                                />
                                {errors.mobileNo && <div className="text-danger">{errors.mobileNo}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Id:</label>
                                <input type="email" className="form-control" id="email" name="email" value={info.email}
                                    onChange={(e) => { dispatch({ type: 'update', fld: 'email', val: e.target.value }); }}
                                />
                                {errors.email && <div className="text-danger">{errors.email}</div>}
                            </div>
                        </div>
                        <div className="subDiv2">
                            <div className="mb-3">
                                <label htmlFor="addrline1" className="form-label">Address Line 1:</label>
                                <input type="text" className="form-control" id="addrline1" name="addrline1" value={info.addrline1}
                                    onChange={(e) => { dispatch({ type: 'update', fld: 'addrline1', val: e.target.value }); }}
                                />
                                {errors.addrline1 && <div className="text-danger">{errors.addrline1}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="addrline2" className="form-label">Address Line 2:</label>
                                <input type="text" className="form-control" id="addrline2" name="addrline2" value={info.addrline2}
                                    onChange={(e) => { dispatch({ type: 'update', fld: 'addrline2', val: e.target.value }); }}
                                />
                                {errors.addrline2 && <div className="text-danger">{errors.addrline2}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pincode" className="form-label">Pincode:</label>
                                <input type="text" maxLength={6} className="form-control" id="pincode" name="pincode" value={info.pincode}
                                    onChange={(e) => { dispatch({ type: 'update', fld: 'pincode', val: e.target.value }); }}
                                />
                                {errors.pincode && <div className="text-danger">{errors.pincode}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="state" className="form-label">State:</label>
                                <select className="form-select" id="state" name="state" value={info.state}
                                    onChange={(e) => { dispatch({ type: 'update', fld: 'state', val: e.target.value }); }}>
                                    <option value="">Select State</option>
                                    {states.map(state => (
                                        <option key={state.stateId} value={state.stateId}>{state.stateName}</option>
                                    ))}
                                </select>
                                {errors.state && <div className="text-danger">{errors.state}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">City:</label>
                                <select className="form-select" id="city" name="city" value={info.city}
                                    onChange={(e) => { dispatch({ type: 'update', fld: 'city', val: e.target.value }); }}>
                                    <option value="">Select City</option>
                                    {cities.map(city => (
                                        <option key={city.cityId} value={city.cityId}>{city.cityName}</option>
                                    ))}
                                </select>
                                {errors.city && <div className="text-danger">{errors.city}</div>}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3" onClick={sendData}>Register</button>
                </form>
            </div>
            {message && <p className="message">{message}</p>}
        </div>
    );
}