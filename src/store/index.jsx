import { configureStore } from '@reduxjs/toolkit'
import  name  from './slices/name.slice'
import  items  from './slices/items.slice'
export default configureStore({
  reducer: {
    name,
    items,
	}
})