import {configureStore} from '@reduxjs/toolkit';
import pageReducer from '../features/page/pageSlicer';

export default configureStore({
    reducer: {
        page: pageReducer,
    }
})