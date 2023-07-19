import Header from '../Header'
import {NotFoundDiv, NotFoundImage, LinkItem} from './styledComponents'

const NotFound = () => (
  <>
    <LinkItem to="/">
      <Header />
    </LinkItem>
    <NotFoundDiv>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png "
        alt="not found"
      />
    </NotFoundDiv>
  </>
)

export default NotFound
