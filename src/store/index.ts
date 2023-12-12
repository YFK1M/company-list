import { configureStore} from "@reduxjs/toolkit";
import companyReducer from "@/store/mainReducer.ts";

export const store = configureStore({
	reducer: {
		companies: companyReducer
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch