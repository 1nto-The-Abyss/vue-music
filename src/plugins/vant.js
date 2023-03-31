import {
  Button,
  Swipe, 
  SwipeItem,
  Lazyload,
  Icon,
  Popup  
} from 'vant'

const plugins = [
  Button,
  Swipe, 
  SwipeItem,
  Lazyload,
  Icon,
  Popup 
]
export default function getVant(app) {
  plugins.forEach(item => {
    return app.use(item)
  })
}