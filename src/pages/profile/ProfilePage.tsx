// ProfilePage.tsx

import React from 'react';
import { CreateProfileForm } from '@/features/create-profile/ui';
import { createProfile } from '@/features/create-profile/api';

const ProfilePage: React.FC = () => {
  const handleSubmit = async (data: CreateProfileSchema) => {
    try {
      await createProfile(data);
      alert('Профиль успешно создан!');
    } catch (error) {
      alert('Ошибка при создании профиля.');
    }
  };

  return (
    <div>
      <h1>Регистрация профиля</h1>
      <CreateProfileForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ProfilePage;