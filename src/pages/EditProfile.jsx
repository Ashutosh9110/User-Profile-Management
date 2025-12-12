import React, { useCallback } from 'react'
import ProfileForm from '../components/ProfileForm'
import { useNavigate } from 'react-router-dom'


export default function EditProfile() {
const navigate = useNavigate()


const onSaved = useCallback(() => {
// after save, navigate back to view
navigate('/')
}, [navigate])


return (
<div className="p-6">
<h1 className="text-2xl font-semibold mb-4">Edit Profile</h1>
<ProfileForm onSaved={onSaved} />
</div>
)
}