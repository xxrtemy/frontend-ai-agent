import React from 'react';
import ProfileForm from '../components/ProfileForm';
import '../styles/global.css'; // подключение стилей

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <h1>Profile Registration</h1>
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;