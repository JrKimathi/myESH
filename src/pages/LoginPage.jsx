import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import InputField from '../components/InputField';
import LoadingSpinnerSmall from '../components/LoadingSpinnerSmall';
import MyEshLogo from '../components/MyEshLogo';

const LoginPage = ({ onNavigate, authInstance }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        if (!authInstance) {
            setError("Authentication service is not available.");
            setLoading(false);
            return;
        }
        try {
            await signInWithEmailAndPassword(authInstance, email, password);
        } catch (err) {
            setError(err.message);
            console.error("Login error:", err);
        }
        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
                <div className="text-center mb-6">
                    <MyEshLogo className="mb-2" />
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to MyESH</h1>
                    <p className="text-gray-500 dark:text-gray-300">Sign in to the platform.</p>
                </div>
                {error && <p className="text-red-600 text-sm bg-red-100 p-2 rounded-md mb-4">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <InputField label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
                    <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
                    <button type="submit" disabled={loading} className="w-full py-3 px-4 bg-teal-700 text-white rounded-lg hover:bg-teal-800 disabled:opacity-60">
                        {loading ? <LoadingSpinnerSmall /> : 'Sign In'}
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-4">
                    Don't have an account?{' '}
                    <button onClick={() => onNavigate('register')} className="text-teal-600 hover:underline">Sign up</button>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;