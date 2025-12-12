import React from "react";
import { useProfileContext } from "../context/ProfileContext";
import { Link } from "react-router-dom";

export default function ViewProfile() {
  const { profile } = useProfileContext();

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      
      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-6">
        {/* Avatar */}
        <div className="w-32 h-32 rounded-full bg-gray-100 overflow-hidden shadow-inner">
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

        {/* Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {profile.name || "Unnamed"}
          </h2>

          <p className="text-gray-600 mt-1">{profile.email}</p>
          {profile.phone && (
            <p className="text-gray-600 mt-1">{profile.phone}</p>
          )}
        </div>
      </div>

      {/* Address Card */}
      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-lg font-semibold text-gray-800">Address</h3>

        <p className="text-gray-600 mt-2">
          {profile.address || "No address added"}
        </p>
      </div>

      {/* Edit Button */}
      <div className="text-right">
        <Link
          to="/edit"
          className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-all"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
}
