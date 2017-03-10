import { connect } from 'react-redux'
import { App } from '../components/app'

const mapStateToProps = ({ pages }, { children }) => ({ pages, children })
export default connect(mapStateToProps)(App)
