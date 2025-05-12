import {BsSearch} from 'react-icons/bs'
import ProfileDetails from '../ProfileDetails'
import './index.css'

const FiltersGroup = props => {
  const {
    employmentTypesList,
    salaryRangesList,
    changeSearchInput,
    searchInput,
    getJobs,
    changeSalary,
    changeEmployeeList,
  } = props

  const onChangeSearchInput = event => {
    changeSearchInput(event)
  }

  // const onEnterSearchInput = event => {
  //   if (event.key === 'Enter') {
  //     getJobs()
  //   }
  // }

  // const renderSearchInput = () => (
  //   <div className="search-input-container">
  //     <input
  //       type="search"
  //       className="search-input"
  //       placeholder="Search"
  //       value={searchInput}
  //       onChange={onChangeSearchInput}
  //       onKeyDown={onEnterSearchInput}
  //     />
  //     <button
  //       type="button"
  //       data-testid="searchButton"
  //       aria-label="Save"
  //       className="search-button-container"
  //       onClick={getJobs}
  //     >
  //       <BsSearch className="search-icon" />
  //     </button>
  //   </div>
  // )

  const onSelectEmployeeType = event => {
    changeEmployeeList(event.target.value)
  }

  const renderTypeOfEmployment = () => (
    <div className="employment-type-container">
      <h1 className="employment-type-heading">Type of Employment</h1>
      <ul className="employee-type-list-container">
        {employmentTypesList.map(each => (
          <li className="employee-item" key={each.employmentTypeId}>
            <input
              type="checkbox"
              id={each.employmentTypeId}
              className="check-input"
              value={each.employmentTypeId}
              onChange={onSelectEmployeeType}
            />
            <label htmlFor={each.employmentTypeId} className="check-label">
              {each.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )

  const renderSalaryRange = () => (
    <div className="salary-range-container">
      <h1 className="salary-range-heading">Salary Range</h1>
      <ul className="salary-range-list-container">
        {salaryRangesList.map(each => (
          <li
            className="salary-item"
            key={each.salaryRangeId}
            onClick={() => changeSalary(each.salaryRangeId)}
          >
            <input
              type="radio"
              id={each.salaryRangeId}
              name="salary"
              className="check-input"
            />
            <label htmlFor={each.salaryRangeId} className="check-label">
              {each.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="filters-group-container">
      {/* {renderSearchInput()} */}
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderTypeOfEmployment()}
      <hr className="horizontal-line" />
      {renderSalaryRange()}
    </div>
  )
}

export default FiltersGroup