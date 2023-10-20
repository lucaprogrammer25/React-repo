import React, { useState } from 'react';

function useLoginForm(initialState = { username: '', password: '' }) {
  const [formData, setFormData] = useState(initialState);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return {
    formData,
    handleInputChange
  };
}

export default useLoginForm;
