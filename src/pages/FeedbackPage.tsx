import React from 'react';
import FeedbackForm from '../components/FeedbackForm';
import '../styles/global.css'; // подключение стилей

const FeedbackPage = () => {
  return (
    <div className="feedback-page">
      <h1>Feedback Form</h1>
      <FeedbackForm />
    </div>
  );
};

export default FeedbackPage;