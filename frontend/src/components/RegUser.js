import { useReducer, useState, useEffect } from "react";
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

// Define initial errors and reducer for form errors
const initErrors = {
    fullname: "",
    uname: "",
    password: "",
    mobileNo: "",
    email: "",
    addrline1: "",
    addrline2: "",
    pincode: "",
    state: "",
    city: ""
};

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

const errorReducer = (state, action) => {
    switch (action.type) {
        case 'setError':
            return { ...state, [action.field]: action.error };
        case 'reset':
            return initErrors;
        default:
            return state;
    }
};

export default function RegisterComponents() {
    const [info, dispatch] = useReducer(formReducer, init);
    const [errors, dispatchError] = useReducer(errorReducer, initErrors);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await fetch("https://localhost:7234/api/Userlogin/GetAllState");
                if (!response.ok) {
                    throw new Error('Failed to fetch states');
                }
            
                const data = await response.json();
                console.log(data);
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

    const validateField = (name, value) => {
        let error = "";

        switch (name) {
            case "fullname":
                if (!value) error = "Full name is required.";
                break;
            case "uname":
                if (!value) error = "Username is required.";
                break;
            case "password":
                if (!value) {
                    error = "Password is required.";
                } else if (value.length < 6) {
                    error = "Password must be at least 6 characters long.";
                }
                break;
            case "mobileNo":
                if (!value) error = "Mobile number is required.";
                else if (!/^\d{10}$/.test(value)) error = "Mobile number must be 10 digits.";
                break;
            case "email":
                if (!value) error = "Email is required.";
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Email is not valid.";
                break;
            case "addrline1":
                if (!value) error = "Address Line 1 is required.";
                break;
            case "addrline2":
                if (!value) error = "Address Line 2 is required.";
                break;
            case "pincode":
                if (!value) error = "Pincode is required.";
                else if (!/^\d{6}$/.test(value)) error = "Pincode must be 6 digits.";
                break;
            case "state":
                if (!value) error = "State is required.";
                break;
            case "city":
                if (!value) error = "City is required.";
                break;
            default:
                break;
        }

        dispatchError({ type: 'setError', field: name, error });
    };

    const validate = () => {
        let hasErrors = false;
        Object.keys(info).forEach(field => {
            validateField(field, info[field]);
            if (errors[field]) {
                hasErrors = true;
            }
        });
        return !hasErrors;
    };

    const sendData = (e) => {
        e.preventDefault();
        if (validate()) {
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
                roleId: 3,
                status: 1
            };

            const reqdata = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend)
            };
            alert(JSON.stringify(dataToSend));
            console.log(JSON.stringify(dataToSend));

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
                    console.log("Success:");
                    alert("success");
                })
                .catch(error => {
                    console.error("Error:", error.message);
                    alert("failed");
                });
        } else {
            alert("Please fix errors before submitting.");
        }
    };

    return (
        <div className="login-card">
            <h1 className="login-title">Customer Registration Form</h1>
            <div className="login-form-container">
                <form className="login-form" onSubmit={sendData}>
                    <div className="mainDiv">
                        <div className="subDiv1">
                            <div className="mb-3">
                                <label htmlFor="fullname" className="form-label">Full Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fullname"
                                    name="fullname"
                                    value={info.fullname}
                                    onChange={(e) => {
                                        dispatch({ type: 'update', fld: 'fullname', val: e.target.value });
                                        validateField('fullname', e.target.value);
                                    }}
                                />
                                {errors.fullname && <div className="error-message">{errors.fullname}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="uname" className="form-label">Username:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="uname"
                                    name="uname"
                                    value={info.uname}
                                    onChange={(e) => {
                                        dispatch({ type: 'update', fld: 'uname', val: e.target.value });
                                        validateField('uname', e.target.value);
                                    }}
                                />
                                {errors.uname && <div className="error-message">{errors.uname}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={info.password}
                                    onChange={(e) => {
                                        dispatch({ type: 'update', fld: 'password', val: e.target.value });
                                        validateField('password', e.target.value);
                                    }}
                                />
                                {errors.password && <div className="error-message">{errors.password}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobileNo" className="form-label">Mobile No:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mobileNo"
                                    name="mobileNo"
                                    value={info.mobileNo}
                                    onChange={(e) => {
                                        dispatch({ type: 'update', fld: 'mobileNo', val: e.target.value });
                                        validateField('mobileNo', e.target.value);
                                    }}
                                />
                                {errors.mobileNo && <div className="error-message">{errors.mobileNo}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Id:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={info.email}
                                    onChange={(e) => {
                                        dispatch({ type: 'update', fld: 'email', val: e.target.value });
                                        validateField('email', e.target.value);
                                    }}
                                />
                                {errors.email && <div className="error-message">{errors.email}</div>}
                            </div>
                        </div>
                        <div className="subDiv2">
                            <div className="mb-3">
                                <label htmlFor="addrline1" className="form-label">Address Line 1:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="addrline1"
                                    name="addrline1"
                                    value={info.addrline1}
                                    onChange={(e) => {
                                        dispatch({ type: 'update', fld: 'addrline1', val: e.target.value });
                                        validateField('addrline1', e.target.value);
                                    }}
                                />
                                {errors.addrline1 && <div className="error-message">{errors.addrline1}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="addrline2" className="form-label">Address Line 2:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="addrline2"
                                    name="addrline2"
                                    value={info.addrline2}
                                    onChange={(e) => {
                                        dispatch({ type: 'update', fld: 'addrline2', val: e.target.value });
                                        validateField('addrline2', e.target.value);
                                    }}
                                />
                                {errors.addrline2 && <div className="error-message">{errors.addrline2}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pincode" className="form-label">Pincode:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="pincode"
                                    name="pincode"
                                    value={info.pincode}
                                    onChange={(e) => {
                                        dispatch({ type: 'update', fld: 'pincode', val: e.target.value });
                                        validateField('pincode', e.target.value);
                                    }}
                                />
                                {errors.pincode && <div className="error-message">{errors.pincode}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="state" className="form-label">State:</label>
                                <select
                                    className="form-control"
                                    id="state"
                                    name="state"
                                    value={info.state}
                                    onChange={(e) => {
                                        dispatch({ type: 'update', fld: 'state', val: e.target.value });
                                        validateField('state', e.target.value);
                                    }}
                                >
                                    <option value="">Select State</option>
                                    {states.map(state => (
                                        <option key={state.stateId} value={state.stateId}>{state.stateName}</option>
                                    ))}
                                </select>
                                {errors.state && <div className="error-message">{errors.state}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">City:</label>
                                <select
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    value={info.city}
                                    onChange={(e) => {
                                        dispatch({ type: 'update', fld: 'city', val: e.target.value });
                                        validateField('city', e.target.value);
                                    }}
                                >
                                    <option value="">Select City</option>
                                    {cities.map(city => (
                                        <option key={city.cityId} value={city.cityId}>{city.cityName}</option>
                                    ))}
                                </select>
                                {errors.city && <div className="error-message">{errors.city}</div>}
                            </div>
                        </div>
                    </div>
                    <div className="button-group">
                        <button type="submit" className="btn btn-primary btnFont">Submit</button>&nbsp;
                        <button type="button" className="btn btn-secondary btnFont" onClick={() => dispatch({ type: 'reset' })}>Clear</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
