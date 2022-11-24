import { RouteObject } from 'react-router-dom'
import Guide from 'src/pages/Guide'
import Page1 from 'src/pages/Page1'
import Explain from '../components/Explain'

const routerList: RouteObject[] = [
  {
    path: '/',
    element: <Explain />
  },
  {
    path: '/guide',
    element: <Guide />,
    children: [
      {
        path: '/guide/page1',
        element: <Page1 />
      },
      {
        path: '/guide/page2',
        element: <div>子组件展示</div>
      }
    ]
  }
]

export default routerList
