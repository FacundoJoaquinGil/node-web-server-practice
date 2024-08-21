const { envs } = require('./config/env')
const { startServer } = require('./server/server.js')

const main = () =>{
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATCH
  })
}

(async () => {

  main()

})()