import React, { useMemo, useState, useCallback, useEffect } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import useProfile from "../hooks/useProfile"

const ProfileSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string(),
  address: Yup.string(),
})

export default function ProfileForm({ onSaved }) {
  const { profile, save } = useProfile()

  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(profile.image)

  const initialValues = useMemo(
    () => ({
      name: profile.name || "",
      email: profile.email || "",
      phone: profile.phone || "",
      address: profile.address || "",
    }),
    [profile]
  )

  useEffect(() => {
    setPreview(profile.image)
  }, [profile.image])

  const handleFileChange = useCallback(
    (e) => {
      const f = e.target.files?.[0] ?? null
      setFile(f)
      if (f) {
        setPreview(URL.createObjectURL(f))
      } else {
        setPreview(profile.image)
      }
    },
    [profile.image]
  )

  const handleSubmit = useCallback(
    async (values, { setSubmitting }) => {
      await save(values, file)
      setSubmitting(false)
      if (onSaved) onSaved()
    },
    [file, save, onSaved]
  )

  return (
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={ProfileSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                {preview ? (
                  <img
                    src={preview}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="w-full h-full text-gray-500 flex justify-center items-center">No Image</span>
                )}
              </div>

              <div>
                <label>Profile Image: </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="block mt-2 text-sm text-gray-600 file:bg-teal-600 file:text-white file:border-0 file:px-3 file:py-2 file:rounded-md file:hover:bg-teal-800 file:cursor-pointer"
                />
              </div>
            </div>
            <div>
              <label>Name</label>
              <Field
                name="name"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label>Email</label>
              <Field
                name="email"
                type="email"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label>Phone</label>
              <Field name="phone" className="border p-2 rounded w-full" />
            </div>

            {/* Address */}
            <div>
              <label>Address</label>
              <Field
                as="textarea"
                rows="3"
                name="address"
                className="border p-2 rounded w-full"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 bg-teal-600 text-white py-2.5 rounded-lg shadow hover:bg-teal-800 transition-all disabled:bg-gray-400 cursor-pointer"
            >

              {isSubmitting ? "Saving..." : "Save Profile"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
