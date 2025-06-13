import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import InputField from '../components/InputField';
import LoadingSpinnerSmall from '../components/LoadingSpinnerSmall';
import MyEshLogo from '../components/MyEshLogo';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const LoginPage = ({ onNavigate, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showResetModal, setShowResetModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');


    const getFriendlyFirebaseError = (code) => {
        switch (code) {
            case 'auth/invalid-email':
                return 'Please enter a valid email address.';
            case 'auth/user-disabled':
                return 'This account has been disabled. Contact support.';
            case 'auth/user-not-found':
            case 'auth/invalid-credential':
            case 'auth/wrong-password':
                return 'Incorrect email or password.';
            case 'auth/too-many-requests':
                return 'Too many attempts. Please wait and try again later.';
            case 'auth/popup-closed-by-user':
                return 'Google sign-in was cancelled.';
            case 'auth/popup-blocked':
                return 'Popup blocked. Please allow popups and try again.';
            default:
                return 'An unexpected error occurred. Please try again.';
        }
    };


    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            onLogin({ uid: user.uid, email: user.email });

        } catch (err) {
            const friendlyMessage = getFriendlyFirebaseError(err.code);
            setError(friendlyMessage);
        }

        setLoading(false);
    };

    const handlePasswordReset = async () => {
        if (!email) {
            setError('Please enter your email address to reset your password.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            await sendPasswordResetEmail(auth, email);
            setModalMessage('Password reset email sent. Please check your inbox.');
            setShowResetModal(true);
        } catch (err) {
            const friendlyMessage = getFriendlyFirebaseError(err.code);
            setError(friendlyMessage);
        }

        setLoading(false);
    };


    const handleGoogleLogin = async () => {
        setError('');
        setLoading(true);

        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            onLogin({ uid: user.uid, email: user.email, name: user.displayName });
        } catch (err) {
            const friendlyMessage = getFriendlyFirebaseError(err.code);
            setError(friendlyMessage);
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

                <div className="text-right">
                    <button
                        type="button"
                        onClick={handlePasswordReset}
                        className="text-sm text-teal-600 hover:underline mt-1"
                        disabled={loading}
                    >
                        Forgot password?
                    </button>
                </div>



                <div className="flex items-center justify-center mt-4">
                    <button
                        onClick={handleGoogleLogin}
                        disabled={loading}
                        className="flex items-center justify-center w-full py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-60"
                    >
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 mr-2" />
                        Sign in with Google
                    </button>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">
                    Don't have an account?{' '}
                    <button onClick={() => onNavigate('register')} className="text-teal-600 hover:underline">Sign up</button>
                </p>
            </div>

            {showResetModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Email Sent</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{modalMessage}</p>
                        <button
                            onClick={() => setShowResetModal(false)}
                            className="mt-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default LoginPage;
