import {
  Button,
  Swipe, 
  SwipeItem,
  Lazyload,
  Icon,
  Popup,
  Slider,
  Tab, 
  Tabs  
} from 'vant'

const plugins = [
  Button,
  Swipe, 
  SwipeItem,
  Lazyload,
  Icon,
  Popup,
  Slider,
  Tab,
  Tabs
]
export default function getVant(app) {
  plugins.forEach(item => {
    return app.use(item)
  })
}