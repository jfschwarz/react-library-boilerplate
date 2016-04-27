import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(sinonChai)
chai.use(chaiEnzyme())
export default expect
