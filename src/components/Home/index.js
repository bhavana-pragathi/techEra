import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import HomeItem from '../HomeItem'
import {
  MainDiv,
  Ul,
  LoaderContainer,
  FailureImage,
  FailureHead,
  FailurePara,
  RetryButton,
  CoursesHead,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {courseList: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getCourseData()
  }

  getCourseData = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/te/courses'
    const options = {method: 'GET'}
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.courses.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        logoUrl: eachItem.logo_url,
      }))
      this.setState({courseList: updatedData, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {courseList} = this.state
    return (
      <>
        <CoursesHead>Courses</CoursesHead>
        <Ul>
          {courseList.map(eachItem => (
            <HomeItem key={eachItem.id} courseDetails={eachItem} />
          ))}
        </Ul>
      </>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureHead>Oops! Something Went Wrong</FailureHead>
      <FailurePara>
        We cannot seem to find the page you are looking for.
      </FailurePara>
      <RetryButton>Retry</RetryButton>
    </>
  )

  renderCoursePage = () => {
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
      <MainDiv>
        <Header />
        {this.renderCoursePage()}
      </MainDiv>
    )
  }
}

export default Home
