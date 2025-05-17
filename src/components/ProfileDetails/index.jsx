import {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import {ThreeDots} from 'react-loader-spinner'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const ProfileDetails = () => {
  const [profileData, setProfileData] = useState({})
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const getProfile = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const token = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const profile = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      setProfileData(profile)
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  const renderProfileView = () => {
    const {name, profileImageUrl, shortBio} = profileData
    return (
      <div className="profile-success-container">
        <img src={profileImageUrl} alt="profile" className="profile-img" />
        <h1 className="profile-heading">{name}</h1>
        <p className="profile-bio">{shortBio}</p>
      </div>
    )
  }

  const renderFailureView = () => (
    <div className="profile-error-view-container">
      <button type="button" className="profile-failure-button" onClick={getProfile}>
        Retry
      </button>
    </div>
  )

  const renderLoadingView = () => (
    <div className="profile-loader-container" data-testid="loader">
      <ThreeDots
      height="50"
      width="50"
      radius="9"
      color="#ffffff"
      ariaLabel="three-dots-loading"
      visible={true}
    />
    </div>
  )

  const renderProfileDetails = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderProfileView()
      case apiStatusConstants.failure:
        return renderFailureView()
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      default:
        return null
    }
  }

  return <>{renderProfileDetails()}</>
}

export default ProfileDetails