import Index from './pages/Index'
import New from './pages/New'
import Show from './pages/Show'

const routesBuilder = ({ path, key }) => [
  {
    path: `${path}`,
    key: `${key}_INDEX`,
    exact: true,
    component: Index
  },
  {
    path: `${path}/new`,
    key: `${key}_NEW`,
    exact: true,
    component: New
  },
  {
    path: `${path}/:id`,
    key: `${key}_SHOW`,
    exact: true,
    component: Show
  }
]

export default routesBuilder
