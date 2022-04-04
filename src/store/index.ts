import { createStore } from 'vuex'
import movieModule from './movie'
import directorModule from './director'
import ActorModule from './actor'

export default createStore({
  modules: {
    movie: movieModule,
    director: directorModule,
    actor: ActorModule,
  },
})
