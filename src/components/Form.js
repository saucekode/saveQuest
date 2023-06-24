import React, { useEffect, useState } from 'react';

const OnboardingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tierType: '',
    amount:'',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tierType: ''
  });

  const [userRecords, setUserRecords] = useState([])

  

//   console.log(userRecord)
const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedFormData = { ...formData };
  
    if (value === "tier_1") {
      updatedFormData = {
        ...updatedFormData,
        amount: "10000"
      };
    } else if (value === "tier_2") {
      updatedFormData = {
        ...updatedFormData,
        amount: "20000"
      };
    } else if (value === "tier_3") {
      updatedFormData = {
        ...updatedFormData,
        amount: "30000"
      };
    }
  
    updatedFormData[name] = value;
  
    setFormData(updatedFormData);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  

  const handleCalculateInterest = () => {
    
  }
  let userRecord = [];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    let formIsValid = true;
    const newErrors = { ...errors };

    if (formData.firstName.trim() === '') {
      formIsValid = false;
      newErrors.firstName = 'First name is required';
    }

    if (formData.lastName.trim() === '') {
      formIsValid = false;
      newErrors.lastName = 'Last name is required';
    }

    if (formData.email.trim() === '') {
      formIsValid = false;
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      newErrors.email = 'Invalid email format';
    }

    if (formData.tierType.trim() === '') {
      formIsValid = false;
      newErrors.tierType = 'Tier type is required';
    }

    setErrors(newErrors);


    if (formIsValid) {
      localStorage.setItem('formData', JSON.stringify(formData));

      setUserRecords((prevFormArray) => [...prevFormArray, formData]);

      localStorage.setItem('users', JSON.stringify(userRecords))
    }
  };


  useEffect(() => {
    localStorage.setItem("userRecords", JSON.stringify(userRecord))
  })
 
  return (
    <form onSubmit={handleSubmit}>
      <div>
      {errors.firstName && <div className="error">{errors.firstName}</div>}
        <label>
          First Name<br/>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
      {errors.lastName && <div className="error">{errors.lastName}</div>}
        <label>
          Last Name<br/>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        
      </div>
      <div>
        {errors.email && <div className="error">{errors.email}</div>}
        <label>
          Email<br/>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
      {errors.tierType && <div className="error">{errors.tierType}</div>}

        <label>
          Select tier<br/>
          <select
            name="tierType"
            value={formData.tierType}
            onChange={handleChange}
          >
            <option value="">Select a savings tier</option>
            <option value="tier_1">Tier 1</option>
            <option value="tier_2">Tier 2</option>
            <option value="tier_3">Tier 3</option>
          </select>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default OnboardingForm;
