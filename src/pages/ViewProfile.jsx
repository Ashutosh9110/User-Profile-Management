import React from "react"
import { useProfileContext } from "../context/ProfileContext"
import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ViewProfile() {
  const { profile } = useProfileContext()

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      
      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-sm border p-8 flex flex-col sm:flex-row items-center sm:items-start gap-8">
        
        {/* Avatar */}
        <div className="shrink-0">
          <div className="w-32 h-32 rounded-full bg-gray-100 overflow-hidden ring-4 ring-teal-100">
            {profile.image ? (
              <img
                src={profile.image}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                No Image
              </div>
            )}
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center sm:text-left space-y-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {profile.name || "Unnamed User"}
            </h2>
            <p className="text-gray-500 text-md mt-4">
              Contact Info:
            </p>
          </div>

          <div className="space-y-2 text-gray-700">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Mail className="w-4 h-4 text-teal-600" />
              <span>{profile.email || "No email added"}</span>
            </div>

            {profile.phone && (
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Phone className="w-4 h-4 text-teal-600" />
                <span>{profile.phone}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Address Card */}
      <div className="bg-white rounded-2xl shadow-sm border p-6 space-y-3">
        <div className="flex items-center gap-2 text-gray-800 font-semibold">
          <MapPin className="w-5 h-5 text-teal-600" />
          <h3 className="text-lg">Address</h3>
        </div>

        <p className="text-gray-600 leading-relaxed">
          {profile.address || "No address added"}
        </p>
      </div>

      {/* Action */}
      <div className="flex justify-end">
        <Link
          to="/edit"
          className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl shadow-sm hover:bg-teal-700 hover:shadow-md transition-all"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  )
}
