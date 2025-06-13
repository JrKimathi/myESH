import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import InputField from '../components/InputField';
import LoadingSpinnerSmall from '../components/LoadingSpinnerSmall';
import MyEshLogo from '../components/MyEshLogo';

const RegisterPage = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const storage = getStorage();
      let photoURL = '';

      if (profileImage) {
        const storageRef = ref(storage, `profileImages/${user.uid}`);
        await uploadBytes(storageRef, profileImage);
        photoURL = await getDownloadURL(storageRef);
      }

      await updateProfile(user, { displayName: name, photoURL });

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name,
        email: user.email,
        photoURL,
        createdAt: serverTimestamp(),
      });

      onNavigate('login'); 

    } catch (err) {
      let message = '';
      switch (err.code) {
        case 'auth/email-already-in-use':
          message = 'This email is already registered. Please use a different email or log in.';
          break;
        case 'auth/invalid-email':
          message = 'Please enter a valid email address.';
          break;
        case 'auth/weak-password':
          message = 'Password must be at least 6 characters long.';
          break;
        default:
          message = 'Registration failed. Please try again later.';
      }
      setError(message);
      console.error('Registration error:', err);
    }

    setLoading(false);
  };






  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
        <div className="text-center mb-6">
          <MyEshLogo className="mb-2" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create a MyESH Account</h1>
          <p className="text-gray-500 dark:text-gray-300">Get started with the platform today.</p>
        </div>
        {error && <p className="text-red-600 text-sm bg-red-100 p-2 rounded-md mb-4">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
          <InputField label="Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <InputField label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <InputField label="Profile Picture" type="file" onChange={(e) => setProfileImage(e.target.files[0])} />
          <button type="submit" disabled={loading} className="w-full py-3 px-4 bg-teal-700 text-white rounded-lg hover:bg-teal-800 disabled:opacity-60">
            {loading ? <LoadingSpinnerSmall /> : 'Create Account'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <button onClick={() => onNavigate('login')} className="text-teal-600 hover:underline">Sign in</button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
