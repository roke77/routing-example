const routesBuilder = ({ path, key }) => [
  {
    path: `${path}`,
    key: `${key}_INDEX`,
    exact: true,
    component: () => <h1>Store Index</h1>
  }
]

export default routesBuilder
