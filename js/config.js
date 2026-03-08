// Configuration file for Stackweb
// This file loads environment variables for the application

const CONFIG = {
    supabase: {
        url: 'https://axcyusvthsoruuzjoxil.supabase.co',
        anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Y3l1c3Z0aHNvcnV1empveGlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NjUwMjIsImV4cCI6MjA4ODU0MTAyMn0.yh0zagPHaG0BKJvp6P2QwbPreFR7E-fTONa7CPkTT6Y',
        serviceRoleKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Y3l1c3Z0aHNvcnV1empveGlsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3Mjk2NTAyMiwiZXhwIjoyMDg4NTQxMDIyfQ.cnz73t4NR5_l-vHSB4g4zUFD6K5hfOII0iwfIIW2ND0'
    },
    admin: {
        password: 'stackweb@qwerty'
    },
    whatsapp: {
        number: '9100605066',
        adminName: 'Ruthvik'
    }
};

// Export for use in other files
window.CONFIG = CONFIG;
