// page.tsx
'use client'; // Needed if you’re on Next.js 13+ app router for a client-side component

import * as React from 'react'; // 👈 important for types
// or simply: import React from 'react'; (if you got latest Next.js + types)

export default function Page() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#ffffff',
      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)'
    }}>
      AUCUN AUTRE TEMOIGNAGE POUR LE MOMENT
    </div>
  );
}
