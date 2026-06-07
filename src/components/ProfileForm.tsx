import React from 'react';

const ProfileForm = () => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget;
    const login = form.login.value;
    const password = form.password.value;

    const response = await fetch('http://localhost:8080/createProfile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
    });

    if (response.ok) {
      alert('Profile created successfully!');
    } else {
      alert('Error creating profile.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="login">Login:</label>
        <input type="text" id="login" name="login" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default ProfileForm;