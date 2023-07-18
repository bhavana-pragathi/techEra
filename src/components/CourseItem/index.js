import {
  CourseDiv,
  CourseImage,
  CourseNameDesc,
  CourseName,
  CourseDesc,
} from './styledComponents'

const CourseItem = props => {
  const {courseDetails} = props
  const {name, imageUrl, description} = courseDetails
  return (
    <CourseDiv>
      <CourseImage src={imageUrl} alt={name} />
      <CourseNameDesc>
        <CourseName>{name}</CourseName>
        <CourseDesc>{description}</CourseDesc>
      </CourseNameDesc>
    </CourseDiv>
  )
}

export default CourseItem
