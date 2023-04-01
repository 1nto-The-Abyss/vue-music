import {
  Button,
  Swipe, 
  SwipeItem,
  Lazyload,
  Icon,
  Popup,
  Slider   
} from 'vant'

const plugins = [
  Button,
  Swipe, 
  SwipeItem,
  Lazyload,
  Icon,
  Popup,
  Slider 
]
export default function getVant(app) {
  plugins.forEach(item => {
    return app.use(item)
  })
}