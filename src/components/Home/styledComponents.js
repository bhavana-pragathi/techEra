import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const MainDiv = styled.div`
  font-family: 'Roboto';
`
export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 250px;
`
export const FailureImage = styled.img``
export const FailureHead = styled.h1``
export const FailurePara = styled.p``
export const RetryButton = styled.button``
export const CoursesHead = styled.h1`
  margin-left: 50px;
`
