import React, { useState } from 'react';

const OnboardingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    selection: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    selection: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

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

    if (formData.selection.length === 0) {
      formIsValid = false;
      newErrors.selection = 'Selection is required';
    }

    setErrors(newErrors);

    if (formIsValid) {
      // Form is valid, save the data to local storage
      localStorage.setItem('formData', JSON.stringify(formData));
      console.log('Form data saved:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        {errors.firstName && <div className="error">{errors.firstName}</div>}
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        {errors.lastName && <div className="error">{errors.lastName}</div>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label>
          Selection:
          <select
            name="selection"
            value={formData.selection}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </label>
        {errors.selection && <div className="error">{errors.selection}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default OnboardingForm;
