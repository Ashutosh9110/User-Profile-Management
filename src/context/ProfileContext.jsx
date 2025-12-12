import React, { createContext, useContext, useState, useEffect, useCallback } from "react"

const ProfileContext = createContext(null)

const defaultProfile = {
  name: "",
  email: "",
  phone: "",
  address: "",
  image: null,
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(() => {
    try {
      const raw = localStorage.getItem("profile")
      return raw ? JSON.parse(raw) : defaultProfile
    } catch (e) {
      return defaultProfile
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem("profile", JSON.stringify(profile))
    } catch (e) {}
  }, [profile])

  const updateProfile = useCallback(
    async (values, file) => {
      const fd = new FormData()
      fd.append("name", values.name)
      fd.append("email", values.email)
      fd.append("phone", values.phone)
      fd.append("address", values.address)
      if (file) fd.append("avatar", file)
  
      let imageBase64 = profile.image
      if (file) {
        imageBase64 = await fileToBase64(file)
      }
  
      setProfile((prev) => ({
        ...prev,
        ...values,
        image: imageBase64,
      }))
    },
    [profile.image, setProfile]
  )
  

  const clearImageObjectURLs = useCallback(() => {
    if (profile.image && profile.image.startsWith("blob:")) {
      try {
        URL.revokeObjectURL(profile.image)
      } catch (e) {}
    }
  }, [profile.image])

  useEffect(() => {
    return () => clearImageObjectURLs()
  }, [clearImageObjectURLs])

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfileContext = () => useContext(ProfileContext)
