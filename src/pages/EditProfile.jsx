import React, { useCallback } from 'react'
import ProfileForm from '../components/ProfileForm'
import { useNavigate } from 'react-router-dom'


export default function EditProfile() {
const navigate = useNavigate()


const onSaved = useCallback(() => {
navigate('/')
}, [navigate])


return (
  <div className="min-h-screen w-full flex justify-center items-start py-10 bg-white">
    <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Edit Your Profile
      </h1>
      <ProfileForm onSaved={onSaved} />
    </div>
  </div>
);

}