// app/page.tsx
'use client';

import { useState } from 'react';

const EmailForm = () => {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ to, subject, text }),
            });

            const data = await res.json();
            if (data.success) {
                setSuccess(true);
                setTo('');
                setSubject('');
                setText('');
            } else {
                setError('Failed to send email.');
            }
        } catch (err) {
            setError('An error occurred while sending the email.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Send an Email</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>To:</label>
                    <input
                        type="email"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Subject:</label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Email'}
                </button>
            </form>
            {success && <p>Email sent successfully!</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default EmailForm;
