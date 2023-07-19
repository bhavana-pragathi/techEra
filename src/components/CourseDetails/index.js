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
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CourseDetails extends Component {
  state = {courseItem: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getItemData()
  }

  getItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatus: apiConstants.inProgress})
    const apiUrl = `https://apis.ccbp.in/te/courses/${id}`
    const options = {method: 'GET'}
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = {
        id: fetchedData.course_details.id,
        name: fetchedData.course_details.name,
        imageUrl: fetchedData.course_details.image_url,
        description: fetchedData.course_details.description,
      }
      this.setState({courseItem: updatedData, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {courseItem} = this.state
    return (
      <CourseDiv>
        <CourseImage src={courseItem.imageUrl} alt={courseItem.name} />
        <CourseNameDesc>
          <CourseName>{courseItem.name}</CourseName>
          <CourseDesc>{courseItem.description}</CourseDesc>
        </CourseNameDesc>
      </CourseDiv>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  renderFailureView = () => {}

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
        <Header />
        {this.renderCourseItemPage}
      </MainDiv>
    )
  }
}

export default CourseDetails
