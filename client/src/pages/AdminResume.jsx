import React, { useState } from 'react';

export default function AdminResume() {
  const [file, setFile] = useState(null);
  const [adminKey, setAdminKey] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type !== 'application/pdf') {
        setMessage('Only PDF files are allowed.');
        return;
      }
      if (selectedFile.size > 5 * 1024 * 1024) {
        setMessage('File size must be under 5 MB.');
        return;
      }
      setFile(selectedFile);
      setMessage('');
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file first.');
      return;
    }
    if (!adminKey) {
      setMessage('Please enter the Admin Key.');
      return;
    }

    setStatus('loading');
    setMessage('');

    const formData = new FormData();
    formData.append('resume', file);

    const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

    try {
      const response = await fetch(`${baseUrl}/resume/upload`, {
        method: 'POST',
        headers: {
          'x-admin-key': adminKey,
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Resume uploaded successfully.');
      } else {
        setStatus('error');
        setMessage(data.message || 'Upload failed.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setStatus('error');
      setMessage('Network error occurred during upload.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '100px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Admin Resume Upload</h1>
      <form onSubmit={handleUpload} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label>Admin Key: </label>
          <input 
            type="password" 
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            style={{ padding: '8px', width: '100%' }}
          />
        </div>
        <div>
          <label>Resume (PDF, max 5MB): </label>
          <input 
            type="file" 
            accept="application/pdf"
            onChange={handleFileChange}
            style={{ padding: '8px', width: '100%' }}
          />
        </div>
        <button 
          type="submit" 
          disabled={status === 'loading'}
          style={{ padding: '10px', background: '#3B82F6', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          {status === 'loading' ? 'Uploading...' : 'Upload Resume'}
        </button>
      </form>
      
      {message && (
        <div style={{ marginTop: '20px', padding: '10px', background: status === 'success' ? '#D1FAE5' : '#FEE2E2', color: status === 'success' ? '#065F46' : '#991B1B' }}>
          {message}
        </div>
      )}
    </div>
  );
}
