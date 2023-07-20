import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CourseDetails extends Component {
  state = {course: {}, apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getItemData()
  }

  getItemData = async () => {
    this.setState({apiStatus: apiConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      method: 'Get',
    }
    const res = await fetch(url, options)
    if (res.ok === true) {
      const dat = await res.json()
      const updateCourse = {
        id: dat.course_details.id,
        name: dat.course_details.name,
        imageUrl: dat.course_details.image_url,
        description: dat.course_details.description,
      }
      this.setState({course: updateCourse, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {course} = this.state
    return (
      <div className="course-div">
        <img className="course-image" src={course.imageUrl} alt={course.name} />
        <div className="course-name-desc">
          <h1 className="course-name">{course.name}</h1>
          <p className="course-desc">{course.description}</p>
        </div>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="loader-div" data-testid="loader">
      <Loader type="ThreeDots" color="#4656a1" height={50} width={50} />
    </div>
  )

  onRetry = () => {
    this.getItemData()
  }

  renderFailureView = () => (
    <div className="failure-div">
      <img
        className="failure-image"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1 className="failure-head">Oops! Something Went Wrong</h1>
      <p className="failure-para">
        We cannot seem to find the page you are looking for.
      </p>
      <button className="retry-button" type="submit" onClick={this.onRetry}>
        Retry
      </button>
    </div>
  )

  renderCourseItemPage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.inProgress:
        return this.renderLoadingView()
      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="main-div">
        <Link className="link-item" to="/">
          <nav className="nav">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
              alt="website logo"
            />
          </nav>
        </Link>
        <div className="bottom-div">{this.renderCourseItemPage()}</div>
      </div>
    )
  }
}

export default CourseDetails
