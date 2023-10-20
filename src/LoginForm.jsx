import React from 'react';
import useLoginForm from './useLoginForm';

function LoginForm() {
  const { formData, handleInputChange } = useLoginForm();

  function handleSubmit(event) {
    event.preventDefault();
    
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleInputChange}/>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange}/>
      </div>
      <button type="submit">Invia</button>
    </form>
  );
}

export default LoginForm;
