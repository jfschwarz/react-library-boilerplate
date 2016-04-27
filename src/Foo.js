import React, { PropTypes } from 'react'

export default function Foo({ name }) {
  return (
    <div>
      Hello { name }!
    </div>
  )
}

Foo.propTypes = {
  name: PropTypes.string.isRequired,
}
