import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import {
  MainDiv,
  LoaderContainer,
  CourseDiv,
  CourseImage,
  CourseNameDesc,
  CourseName,
  CourseDesc,
  FailureImage,
  FailureHead,
  FailurePara,
  LinkItem,
  RetryButton,
  BottomDiv,
  FailureDiv,
} from './styledComponents'

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
      <CourseDiv>
        <CourseImage src={course.imageUrl} alt={course.name} />
        <CourseNameDesc>
          <CourseName>{course.name}</CourseName>
          <CourseDesc>{course.description}</CourseDesc>
        </CourseNameDesc>
      </CourseDiv>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4656a1" height={50} width={50} />
    </LoaderContainer>
  )

  onRetry = () => {
    this.getItemData()
  }

  renderFailureView = () => (
    <FailureDiv>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureHead>Oops! Something Went Wrong</FailureHead>
      <FailurePara>
        We cannot seem to find the page you are looking for.
      </FailurePara>
      <RetryButton onClick={this.onRetry}>Retry</RetryButton>
    </FailureDiv>
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
      <MainDiv>
        <LinkItem to="/">
          <Header />
        </LinkItem>
        <BottomDiv>{this.renderCourseItemPage()}</BottomDiv>
      </MainDiv>
    )
  }
}

export default CourseDetails
