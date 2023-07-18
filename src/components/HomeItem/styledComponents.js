import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const Li = styled.li`
  display: flex;
  margin-right: 80px;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  margin-top: 20px;
  margin-left: 80px;
`
export const Name = styled.p`
  color: #1e293b;
`
export const Image = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 10px;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`
