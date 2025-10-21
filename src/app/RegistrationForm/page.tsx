'use client';

import { useState, useEffect } from 'react';
import './registration-form.css';


export default function RegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    email: '',
    birthDate: '',
  });

  // ולידציה חיה בזמן הקלדה
  useEffect(() => {
    const newErrors: typeof errors = {
      fullName: '',
      phone: '',
      email: '',
      birthDate: '',
    };

    // שם מלא: לפחות שתי מילים, לא מתחילות במספר
    const nameParts = fullName.trim().split(' ');
    if (fullName && (nameParts.length < 2 || nameParts.some(word => /^\d/.test(word)))) {
      newErrors.fullName = 'יש להזין שם פרטי ושם משפחה ללא מספרים בתחילה';
    }

    // טלפון: רק מספרים
    if (phone && !/^\d+$/.test(phone)) {
      newErrors.phone = 'מספר טלפון יכול להכיל רק ספרות';
    }

    // אימייל תקני
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'כתובת אימייל אינה תקינה';
    }

    // תאריך לידה: מעל גיל 18
    if (birthDate) {
      const birth = new Date(birthDate);
      const now = new Date();
      const age = now.getFullYear() - birth.getFullYear();
      const isBirthdayPassed =
        now.getMonth() > birth.getMonth() ||
        (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate());
      const actualAge = isBirthdayPassed ? age : age - 1;

      if (actualAge < 18) {
        newErrors.birthDate = 'יש להיות מעל גיל 18';
      }
    }

    setErrors(newErrors);
  }, [fullName, phone, email, birthDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some(error => error !== '');
    if (hasErrors) {
      alert('יש לתקן את השגיאות לפני שליחה');
    } else {
      alert('הטופס נשלח בהצלחה!');
    }
  };

  return (
   <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '5rem auto 2rem', direction: 'rtl' }}>

      <label>שם מלא:</label>
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName}</p>}

      <label>טלפון:</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}

      <label>אימייל:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

      <label>תאריך לידה:</label>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      {errors.birthDate && <p style={{ color: 'red' }}>{errors.birthDate}</p>}

      <button type="submit" style={{ marginTop: '1rem' }}>שלח</button>
    </form>
  );
}
