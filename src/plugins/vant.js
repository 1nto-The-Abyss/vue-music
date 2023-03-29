import {
  Button,
  Swipe, 
  SwipeItem,
  Lazyload,
  Icon 
} from 'vant'

const plugins = [
  Button,
  Swipe, 
  SwipeItem,
  Lazyload,
  Icon
]
export default function getVant(app) {
  plugins.forEach(item => {
    return app.use(item)
  })
}