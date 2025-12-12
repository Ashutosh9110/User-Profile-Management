import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ViewProfile from './pages/ViewProfile'
import EditProfile from './pages/EditProfile'


export default function App() {
return (
<div className="min-h-screen bg-gray-50">
<header className="bg-white shadow">
<div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
<h1 className="text-xl font-bold">Profile Module</h1>
<nav>
<Link to="/" className="mr-4 text-sm text-indigo-600">View</Link>
<Link to="/edit" className="text-sm text-indigo-600">Edit</Link>
</nav>
</div>
</header>


<main className="max-w-4xl mx-auto mt-8">
<Routes>
<Route path="/" element={<ViewProfile />} />
<Route path="/edit" element={<EditProfile />} />
</Routes>
</main>
</div>
)
}