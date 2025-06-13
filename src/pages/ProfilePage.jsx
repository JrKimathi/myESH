import React, { useState } from 'react';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import LoadingSpinner from '../components/LoadingSpinner';
import LoadingSpinnerSmall from '../components/LoadingSpinnerSmall';
import InputField from '../components/InputField';
import { db } from '../firebase';
import { HEADING_TEAL, TEXT_SECONDARY, DEEP_TEAL } from '../utils/colors';

const appId = 'myesh-platform';

const ProfilePage = ({ user, onNavigate }) => {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [location, setLocation] = useState(user?.location || '');
  const [role, setRole] = useState(user?.role || 'farmer');
  const [farmSize, setFarmSize] = useState(user?.farmSize || '');
  const [mangoTrees, setMangoTrees] = useState(user?.mangoTrees || '');
  const [avocadoTrees, setAvocadoTrees] = useState(user?.avocadoTrees || '');
  const [gapCertified, setGapCertified] = useState(user?.gapCertified || false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
  
    if (!db) {
      setMessage("Database service is not available.");
      setLoading(false);
      return;
    }
  
    if (!user || !user.uid) {
      setMessage("User not authenticated.");
      setLoading(false);
      return;
    }
  
    try {
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        name,
        email,
        phone,
        location,
        role,
        farmSize: farmSize ? parseFloat(farmSize) : null,
        mangoTrees: mangoTrees ? parseInt(mangoTrees) : null,
        avocadoTrees: avocadoTrees ? parseInt(avocadoTrees) : null,
        gapCertified,
        updatedAt: Timestamp.now()
      }, { merge: true });
  
      setMessage('Profile updated successfully!');
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage('Failed to update profile: ' + error.message);
    }
  
    setLoading(false);
  };
  
  if (!user) return <LoadingSpinner message="Loading profile..." />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
        <h1 className={`text-3xl font-bold text-[${HEADING_TEAL}] dark:text-white mb-8 text-center`}>Your Profile</h1>
        {message && (
          <p className={`p-3 rounded-md mb-4 text-sm ${message.includes('successfully') ? 'bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200' : 'bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-300'}`}>{message}</p>
        )}

        <form onSubmit={handleProfileUpdate} className="space-y-6">
          <fieldset className="p-4 border rounded-lg border-gray-300 dark:border-gray-600">
            <legend className="px-2 font-semibold text-gray-700 dark:text-gray-200">Basic Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <InputField label="Full Name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" />
              <InputField label="Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email" disabled />
              <InputField label="Phone Number" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+254 7XX XXX XXX" />
              <InputField label="Location (Village/Ward)" type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="e.g., Kalawa Ward" />
            </div>
          </fieldset>

          <fieldset className="p-4 border rounded-lg border-gray-300 dark:border-gray-600">
            <legend className="px-2 font-semibold text-gray-700 dark:text-gray-200">Farm Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <InputField label="Farm Size (Acres)" type="number" value={farmSize} onChange={e => setFarmSize(e.target.value)} placeholder="e.g., 2.5" />
              <InputField label="# of Mango Trees" type="number" value={mangoTrees} onChange={e => setMangoTrees(e.target.value)} placeholder="e.g., 50" />
              <InputField label="# of Avocado Trees" type="number" value={avocadoTrees} onChange={e => setAvocadoTrees(e.target.value)} placeholder="e.g., 30" />
            </div>
            <div className="pt-4">
              <label className="flex items-center space-x-3">
                <input type="checkbox" checked={gapCertified} onChange={e => setGapCertified(e.target.checked)} className={`h-5 w-5 rounded border-gray-300 text-[${DEEP_TEAL}] focus:ring-[${DEEP_TEAL}]`} />
                <span className="text-gray-700 dark:text-gray-300">Farmer has Global G.A.P. Certification</span>
              </label>
            </div>
          </fieldset>

          <div className="pt-2">
            <button type="submit" disabled={loading} className={`w-full flex justify-center py-3 px-4 bg-[${DEEP_TEAL}] text-white rounded-lg font-semibold hover:bg-[#154E48] disabled:opacity-60 transition-colors`}>{loading ? <LoadingSpinnerSmall /> : 'Save Changes'}</button>
          </div>

        </form>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">User ID: {user.uid}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
