import createApp from "./app.js"
import test from "tape"

test('hello world', async(t)=>{

    const app = createApp()
    const res = await app.inject('/')

    t.deepEqual(res.json(), {hello: 'world'})

    await app.close()

})