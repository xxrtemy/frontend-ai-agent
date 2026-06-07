// CreateProfileForm.tsx

import React, { useState } from 'react';
import { CreateProfileSchema } from '@/features/create-profile/model';

interface CreateProfileFormProps {
  onSubmit: (data: CreateProfileSchema) => void;
}

const CreateProfileForm: React.FC<CreateProfileFormProps> = ({ onSubmit }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ login, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Логин:
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </label>
      <label>
        Пароль:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default CreateProfileForm;