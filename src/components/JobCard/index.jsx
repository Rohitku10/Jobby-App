import { Link } from 'react-router-dom'
// import { FaStar } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { BsFillBriefcaseFill,BsStarFill } from 'react-icons/bs'
import './index.css'

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
    // <Link to={`/jobs/${id}`} className="job-card-link">
    //   <li className="job-item">
    //     <div className="logo-title-container">
    //       <img src={companyLogoUrl} alt="company logo" className="job-card-logo" />
    //       <div>
    //         <h1 className="job-card-title">{title}</h1>
    //         <div className="job-card-rating">
    //           <FaStar className="star-icon" />
    //           <p>{rating}</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="job-card-info">
    //       <div className="job-card-location-type">
    //         <p><MdLocationOn /> {location}</p>
    //         <p><BsBriefcaseFill /> {employmentType}</p>
    //       </div>
    //       <p className="job-card-package">{packagePerAnnum}</p>
    //     </div>

    //     <hr />
    //     <h1 className="job-card-description-title">Description</h1>
    //     <p className="job-card-description">{jobDescription}</p>
    //   </li>
    // </Link>
    <Link to={`/jobs/${id}`} className="link-item">
      <li className="job-item">
        <div className="logo-title-location-container">
          <div className="logo-title-container">
            <img
              src={companyLogoUrl}
              alt="company logo"
              className="company-logo"
            />
            <div className="title-rating-container">
              <h1 className="title-heading">{title}</h1>
              <div className="rating-container">
                <BsStarFill className="rating-icon" />
                <p className="rating-heading">{rating}</p>
              </div>
            </div>
          </div>
          <div className="location-package-container">
            <div className="location-employee-container">
              <div className="location-container">
                <MdLocationOn className="location-icon" />
                <p className="location-heading">{location}</p>
              </div>
              <div className="employee-type-container">
                <BsFillBriefcaseFill className="brief-case-icon" />
                <p className="employee-type-heading">{employmentType}</p>
              </div>
            </div>
            <p className="package-heading">{packagePerAnnum}</p>
          </div>
        </div>
        <hr className="line" />
        <h1 className="description-heading">Description</h1>
        <p className="description-text">{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobCard
