import React, { useCallback } from "react"
import ProfileForm from "../components/ProfileForm"
import { useNavigate, Link } from "react-router-dom"
import { ArrowLeft, User } from "lucide-react"

export default function EditProfile() {
  const navigate = useNavigate()

  const onSaved = useCallback(() => {
    navigate("/")
  }, [navigate])

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
            <User className="w-5 h-5 text-teal-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Edit Profile
            </h1>
            <p className="text-sm text-gray-500">
              Update your personal information
            </p>
          </div>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-teal-600 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border p-8">
        <ProfileForm onSaved={onSaved} />
      </div>
    </div>
  )
}
