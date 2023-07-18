import {Li, Name, Image, LinkItem} from './styledComponents'

const CourseItem = props => {
  const {courseDetails} = props
  const {id, name, logoUrl} = courseDetails
  return (
    <LinkItem to={`/course/${id}`}>
      <Li>
        <Image src={logoUrl} alt={name} />
        <Name>{name}</Name>
      </Li>
    </LinkItem>
  )
}

export default CourseItem
