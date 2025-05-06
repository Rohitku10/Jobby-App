import Cookies from "js-cookie"
import { useState,useEffect } from "react"
import Header from "../Header"


const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }
  
  const employmentTypesList = [
    {label: 'Full Time', employmentTypeId: 'FULLTIME'},
    {label: 'Part Time', employmentTypeId: 'PARTTIME'},
    {label: 'Freelance', employmentTypeId: 'FREELANCE'},
    {label: 'Internship', employmentTypeId: 'INTERNSHIP'},
  ]
  
  const salaryRangesList = [
    {salaryRangeId: '1000000', label: '10 LPA and above'},
    {salaryRangeId: '2000000', label: '20 LPA and above'},
    {salaryRangeId: '3000000', label: '30 LPA and above'},
    {salaryRangeId: '4000000', label: '40 LPA and above'},
  ]

const Jobs = () => {
    const [jobsList, setJobsList] = useState([])
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
    const [employmentType, setEmploymentType] = useState([])
    const [salaryRange, setSalaryRange] = useState('')
    const [searchInput, setSearchInput] = useState('')
    
    useEffect(() => {
        getJobs()
    },[employmentType,salaryRange])
    
    
      const getJobs = async() => {
        const jwtToken = Cookies.get(jwtToken)
        const employmentString = employmentType.join(',')
        const url = `https://apis.ccbp.in/jobs?employment_type=${employmentString}&minimum_package=${salaryRange}&search=${searchInput}`
        const options = {
            headers : {
                "Authorization" : `Bearer ${jwtToken}`
            },
            method : 'GET'
        }
        const response = await fetch(url,options)

        if (response.ok) {
            const data = await response.json()
            console.log(data)
            const updatedJobs = data.jobs.map(job => ({
              id: job.id,
              title: job.title,
              rating: job.rating,
              location: job.location,
              employmentType: job.employment_type,
              packagePerAnnum: job.package_per_annum,
              companyLogoUrl: job.company_logo_url,
              jobDescription: job.job_description,
            }))
            setJobsList(updatedJobs)
            setApiStatus(apiStatusConstants.success)
          } else {
            setApiStatus(apiStatusConstants.failure)
          }
      }

    const onChangeEmployment = value => {
        setEmploymentType(prev =>
          prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value],
        )
      }
    
      const onChangeSalary = value => {
        setSalaryRange(value)
      }
    
      const onChangeSearchInput = event => {
        setSearchInput(event.target.value)
      }
    
      const onKeyDownSearchInput = event => {
        if (event.key === 'Enter') getJobs()
      }
    
      const onClickSearch = () => {
        getJobs()
      }

      const renderJobsList = () => {
        if (jobsList.length === 0) {
          return (
            <div className="no-jobs-view">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
                alt="no jobs"
                className="no-jobs-img"
              />
              <h1>No Jobs Found</h1>
              <p>We could not find any jobs. Try other filters.</p>
            </div>
          )
        }
        return (
          <ul className="jobs-list">
            {jobsList.map(job => (
              <JobCard key={job.id} jobData={job} />
            ))}
          </ul>
        )
      }

      const renderAllJobs = () => {
        switch (apiStatus) {
          case apiStatusConstants.success:
            return renderJobsList()
          case apiStatusConstants.failure:
            return (
              <div className="failure-view">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
                  alt="failure view"
                  className="failure-img"
                />
                <h1>Oops! Something Went Wrong</h1>
                <p>We cannot seem to find the page you're looking for</p>
                <button type="button" onClick={getJobs} className="retry-button">
                  Retry
                </button>
              </div>
            )
        //   case apiStatusConstants.inProgress:
        //     return (
        //       <div className="loader-container" data-testid="loader">
        //         <ThreeDots height="50" width="50" color="#ffffff" visible />
        //       </div>
        //     )
          default:
            return null
        }
      }

    return(
        <>
            <Header />
            <div className="jobs-container">
                <div className="jobs-content">
                <FiltersGroup
                    employmentTypesList={employmentTypesList}
                    salaryRangesList={salaryRangesList}
                    changeEmployeeList={e => onChangeEmployment(e.target.value)}
                    changeSalary={onChangeSalary}
                    searchInput={searchInput}
                    changeSearchInput={onChangeSearchInput}
                    getJobs={onClickSearch}
                />
                </div>
                <div className="jobs-list-section">{renderAllJobs()}</div>

            </div>
        </>
    )
}

export default Jobs;