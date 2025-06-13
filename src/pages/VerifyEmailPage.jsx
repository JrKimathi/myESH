import React from 'react';
import MyEshLogo from '../components/MyEshLogo';

const VerifyEmailPage = ({ onNavigate }) => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                <MyEshLogo className="mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Verify Your Email</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A verification link has been sent to your email address. Please check your inbox and click the link to activate your account.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Once verified, you can sign in to your account.</p>
                <button
                    className="mt-6 px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800"
                    onClick={() => onNavigate('login')}
                >
                    Back to Login
                </button>
            </div>
        </div>
    );
};

export default VerifyEmailPage;
