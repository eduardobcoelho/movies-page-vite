import { createStore } from 'vuex'
import movieModule from './movie'
import directorModule from './director'

export default createStore({
  modules: {
    movie: movieModule,
    director: directorModule,
  },
})
