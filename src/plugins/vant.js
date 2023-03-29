import {
  Button,
  Swipe, 
  SwipeItem,
  Lazyload 
} from 'vant'

const plugins = [
  Button,
  Swipe, 
  SwipeItem,
  Lazyload
]
export default function getVant(app) {
  plugins.forEach(item => {
    return app.use(item)
  })
}