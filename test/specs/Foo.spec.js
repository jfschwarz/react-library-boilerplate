import React from 'react'
import { shallow } from 'enzyme'
import expect from '../expect'

import Foo from '../../src/Foo'


describe('<Foo />', () => {

  it('should greet the user with his name', () => {
    const wrapper = shallow(<Foo name="world" />)
    expect(wrapper).to.have.text("Hello world!")
  })

})
