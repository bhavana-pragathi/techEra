import Header from '../Header'
import {NotFoundDiv, NotFoundImage} from './styledComponents'

const NotFound = () => (
  <>
    <Header />
    <NotFoundDiv>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png "
        alt="not found"
      />
    </NotFoundDiv>
  </>
)

export default NotFound
