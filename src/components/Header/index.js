import {Nav, WebsiteLogo, LinkItem} from './styledComponents'

const Header = () => (
  <Nav>
    <LinkItem to="/">
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </LinkItem>
  </Nav>
)

export default Header
