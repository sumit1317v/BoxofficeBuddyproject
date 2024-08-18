import React, { useEffect, useReducer, useState } from 'react';
import './addtheatre.css';

// Initial state for the form
const initialState = {
    theatreName: '',
    phone: '',
    noOfScreens: '',
    gstNo: '',
    addressLine1: '',
    addressLine2: '',
    pincode: '',
    city: ''
};

// Reducer function to manage form state
const formReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.field]: action.value
            };
        case 'RESET_FORM':
            return initialState;
        default:
            return state;
    }
};

function TheaterRegister() {
    const [form, dispatch] = useReducer(formReducer, initialState);
    const [errors, setErrors] = useState({});
    const [cities, setCities] = useState([]);
    const [successMessage, setSuccessMessage] = useState(''); // Add success message state

    useEffect(() => {
        const fetchCity = async () => {
            try {
                const response = await fetch("http://localhost:8080/getallcity");
                if (!response.ok) {
                    throw new Error('Failed to fetch cities');
                }

                const data = await response.json();
                setCities(data);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };

        fetchCity();
    }, []);

    const validateForm = () => {
        const newErrors = {};

        if (!form.theatreName) newErrors.theatreName = 'Theatre Name is required';
        if (!form.phone) {
            newErrors.phone = 'Contact No is required';
        } else if (parseInt(form.phone, 10) < 0) {
            newErrors.mobileNo = "Contact No cannot be negative";
        }else if (!/^\d{10}$/.test(form.phone)) {
            newErrors.phone = 'Contact No must be 10 digits';
        }
        if (!form.noOfScreens) newErrors.noOfScreens = 'Number of Screens is required';
        if (!form.gstNo) {
            newErrors.gstNo = 'GST No is required';
        } else if (!/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/.test(form.gstNo)) {
            newErrors.gstNo = 'GST No is invalid';
        }
        if (!form.addressLine1) newErrors.addressLine1 = 'Address Line 1 is required';
        if (!form.pincode) {
            newErrors.pincode = 'Pincode is required';
        } else if (parseInt(form.pincode, 10) < 0) {
            newErrors.pincode = "Pincode cannot be negative";
        }else if (!/^\d{6}$/.test(form.pincode)) {
            newErrors.pincode = 'Pincode must be 6 digits';
        }
        if (!form.city) newErrors.city = 'City is required';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Update the form state
        dispatch({
            type: 'UPDATE_FIELD',
            field: name,
            value: value
        });
    
        // Validate the specific field
        let newErrors = { ...errors };
    
        if (name === 'theatreName' && !value) {
            newErrors.theatreName = 'Theatre Name is required';
        } else if (name === 'phone') {
            if (!value) {
                newErrors.phone = 'Contact No is required';
            } else if (!/^\d{10}$/.test(value)) {
                newErrors.phone = 'Contact No must be 10 digits';
            } else {
                delete newErrors.phone;
            }
        } else if (name === 'noOfScreens' && !value) {
            newErrors.noOfScreens = 'Number of Screens is required';
        } else if (name === 'gstNo') {
            if (!value) {
                newErrors.gstNo = 'GST No is required';
            } else if (!/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/.test(value)) {
                newErrors.gstNo = 'GST No is invalid';
            } else {
                delete newErrors.gstNo;
            }
        } else if (name === 'addressLine1' && !value) {
            newErrors.addressLine1 = 'Address Line 1 is required';
        } else if (name === 'pincode') {
            if (!value) {
                newErrors.pincode = 'Pincode is required';
            } else if (!/^\d{6}$/.test(value)) {
                newErrors.pincode = 'Pincode must be 6 digits';
            } else {
                delete newErrors.pincode;
            }
        } else if (name === 'city' && !value) {
            newErrors.city = 'City is required';
        } else {
            delete newErrors[name];
        }
    
        // Update errors state
        setErrors(newErrors);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const loggedUser = JSON.parse(localStorage.getItem("LoggedUser"));
            const dataSto = loggedUser.userId;

            const dataToSend = {
                theatreName: form.theatreName,
                phone: form.phone,
                noOfScreens: +form.noOfScreens,
                gstNo: form.gstNo,
                addressLine1: form.addressLine1,
                addressLine2: form.addressLine2,
                pincode: form.pincode,
                cityid: +form.city,
                userid: dataSto
            };

            const reqdata = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend)
            };

            fetch("http://localhost:8080/savetheat", reqdata)
                .then(async resp => {
                    if (!resp.ok) {
                        const error = await resp.json();
                        throw new Error(JSON.stringify(error.errors));
                    }
                    return resp.json();
                })
                .then(data => {
                    setSuccessMessage("Theatre registered successfully!"); // Set success message
                    dispatch({ type: 'RESET_FORM' });
                    setErrors({}); // Clear errors on successful registration
                })
                .catch(error => {
                    console.error("Error:", error.message);
                    alert("Failed to register: " + error.message);
                });
        }
    };

    return (
        <div className="container mt-5">
            <h2>Add Theater</h2>
            <form onSubmit={handleSubmit}>
                <div className='mainDiv'>
                    <div className='subDiv1'>
                        <div className="form-group">
                            <label>Theatre Name</label>
                            <input
                                type="text"
                                name="theatreName"
                                value={form.theatreName}
                                onChange={handleChange}
                                className={`form-control ${errors.theatreName ? 'is-invalid' : ''}`}
                            />
                            {errors.theatreName && <div className="invalid-feedback">{errors.theatreName}</div>}
                        </div>

                        <div className="form-group">
                            <label>Contact No</label>
                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                maxLength={10}
                                onChange={handleChange}
                                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                            />
                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>

                        <div className="form-group">
                            <label>Number of Screens</label>
                            <input
                                type="text"
                                name="noOfScreens"
                                value={form.noOfScreens}
                                onChange={handleChange}
                                className={`form-control ${errors.noOfScreens ? 'is-invalid' : ''}`}
                            />
                            {errors.noOfScreens && <div className="invalid-feedback">{errors.noOfScreens}</div>}
                        </div>

                        <div className="form-group">
                            <label>GST No</label>
                            <input
                                type="text"
                                name="gstNo"
                                value={form.gstNo}
                                onChange={handleChange}
                                maxLength={15}
                                className={`form-control ${errors.gstNo ? 'is-invalid' : ''}`}
                            />
                            {errors.gstNo && <div className="invalid-feedback">{errors.gstNo}</div>}
                        </div>
                    </div>
                    <div className='subDiv2'>
                        <div className="form-group">
                            <label>Address Line 1</label>
                            <input
                                type="text"
                                name="addressLine1"
                                value={form.addressLine1}
                                onChange={handleChange}
                                className={`form-control ${errors.addressLine1 ? 'is-invalid' : ''}`}
                            />
                            {errors.addressLine1 && <div className="invalid-feedback">{errors.addressLine1}</div>}
                        </div>

                        <div className="form-group">
                            <label>Address Line 2</label>
                            <input
                                type="text"
                                name="addressLine2"
                                value={form.addressLine2}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>Pincode</label>
                            <input
                                type="text"
                                name="pincode"
                                value={form.pincode}
                                onChange={handleChange}
                                maxLength={6}
                                className={`form-control ${errors.pincode ? 'is-invalid' : ''}`}
                            />
                            {errors.pincode && <div className="invalid-feedback">{errors.pincode}</div>}
                        </div>

                        <div className="form-group">
                            <label>City</label>
                            <select
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                            >
                                <option value="">Select City</option>
                                {cities.map((city) => (
                                    <option key={city.cityId} value={city.cityId}>
                                        {city.cityName}
                                    </option>
                                ))}
                            </select>
                            {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Save</button>
            </form>

            {/* Display success message */}
            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
        </div>
    );
}

export default TheaterRegister;
