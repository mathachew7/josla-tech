// File: src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import App from '../layout/App';
import Home from '../pages/Home';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Wrap all routes in the App layout */}
      <Route path="/" element={<App />}>
        {/* Home page */}
        <Route index element={<Home />} />
        {/* Fallback for unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
