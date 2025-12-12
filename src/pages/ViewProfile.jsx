import React from 'react'
import { useProfileContext } from '../context/ProfileContext'
import { Link } from 'react-router-dom'


export default function ViewProfile() {
const { profile } = useProfileContext()


return (
<div className="max-w-2xl mx-auto p-6">
<div className="flex items-center space-x-6">
<div className="w-32 h-32 rounded-full bg-gray-100 overflow-hidden">
{profile.image ? (
<img src={profile.image} alt="avatar" className="w-full h-full object-cover" />
) : (
<div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
)}
</div>
<div>
<h2 className="text-2xl font-semibold">{profile.name || 'Unnamed'}</h2>
<p className="text-sm text-gray-600">{profile.email}</p>
<p className="text-sm text-gray-600">{profile.phone}</p>
</div>
</div>


<div className="mt-6 bg-white p-4 rounded shadow">
<h3 className="font-medium">Address</h3>
<p className="text-sm text-gray-700 mt-2">{profile.address || 'No address added'}</p>
</div>


<div className="mt-6">
<Link to="/edit" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded">Edit Profile</Link>
</div>
</div>
)
}