import React from 'react';

const FeedbackForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.email.value;
    const subject = 'Feedback from Website';
    const body = `Name: ${form.name.value}
Email: ${email}`;
    const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <button type="submit">Send Feedback</button>
    </form>
  );
};

export default FeedbackForm;