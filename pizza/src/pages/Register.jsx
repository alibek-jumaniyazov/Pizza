import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setShowAlert(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setShowAlert(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowAlert(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setShowAlert(true);
      return;
    }
    // Ma'lumotlarni yuborish yoki saqlash logikasi
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // ... qo'shimcha muvaffaqiyatli amallar
  };

  return (
    <div>
      <h2>Register</h2>
      {showAlert && <p>Barcha maydonlar to'ldirilishi kerak!</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder='Имя'

        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder='example@gmail.com'
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder='password'
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
