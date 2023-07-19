import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const MainDiv = styled.div`
  font-family: 'Roboto';
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 250px;
`
export const CourseDiv = styled.div`
  display: flex;
  background-color: ##ffffff;
  height: 400px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #e8e8e8;
`

export const CourseImage = styled.img`
  width: 40vw;
`
export const CourseNameDesc = styled.div`
  margin-left: 20px;
  margin-top: 30px;
  margin-right: 20px;
`
export const CourseName = styled.h1`
  color: #1e293b;
  font-size: 30px;
`
export const CourseDesc = styled.p`
  color: #475569;
`
export const FailureDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  height: 300px;
  margin-bottom: 10px;
`
export const FailureHead = styled.h1`
  color: #475569;
  font-weight: bold;
`
export const FailurePara = styled.p`
  color: #64748b;
`
export const RetryButton = styled.button`
  background-color: #4656a1;
  border: none;
  border-radius: 3px;
  height: 30px;
  width: 60px;
  color: #ffffff;
  font-size: 12px;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`
export const BottomDiv = styled.div`
  padding: 50px;
`
