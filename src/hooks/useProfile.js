import { useCallback } from 'react'
import { useProfileContext } from '../context/ProfileContext'


export default function useProfile() {
const { profile, updateProfile } = useProfileContext()


const save = useCallback((values, file) => {
return updateProfile(values, file)
}, [updateProfile])


return { profile, save }
}