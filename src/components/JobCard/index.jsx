import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { BsBriefcaseFill } from 'react-icons/bs'
// import './index.css'

const JobCard = props => {
  const { jobData } = props
  const {
    id,
    title,
    rating,
    location,
    employmentType,
    packagePerAnnum,
    companyLogoUrl,
    jobDescription,
  } = jobData

  return (
    <Link to={`/jobs/${id}`} className="job-card-link">
      <li className="job-card">
        <div className="job-card-header">
          <img src={companyLogoUrl} alt="company logo" className="job-card-logo" />
          <div>
            <h1 className="job-card-title">{title}</h1>
            <div className="job-card-rating">
              <FaStar className="star-icon" />
              <p>{rating}</p>
            </div>
          </div>
        </div>

        <div className="job-card-info">
          <div className="job-card-location-type">
            <p><MdLocationOn /> {location}</p>
            <p><BsBriefcaseFill /> {employmentType}</p>
          </div>
          <p className="job-card-package">{packagePerAnnum}</p>
        </div>

        <hr />
        <h1 className="job-card-description-title">Description</h1>
        <p className="job-card-description">{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobCard
