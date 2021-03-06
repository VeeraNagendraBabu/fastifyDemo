import fastify from 'fastify'
import autoload from 'fastify-autoload'
import {join} from 'desm'

export default function(opts){ 
    const app = fastify(opts)

    app.register(autoload,{
        dir:join(import.meta.url, 'router')
    })
 return app
}