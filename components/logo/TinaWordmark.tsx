import React from 'react'
import styled from 'styled-components'
import TinaWordmarkSvg from '../../public/svg/tina-wordmark.svg'

const TinaWordmark = styled(({ ...styleProps }, props) => {
  return (
    <a href="/" {...styleProps}>
      <h1>
        <TinaWordmarkSvg />
      </h1>
    </a>
  )
})`
  text-decoration: none;

  h1 {
    margin: 0;
    font-size: 1rem;
  }

  svg {
    height: 40px;
    width: auto;
  }
`

export default TinaWordmark