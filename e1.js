/**
 * Create By admins on 2020/9/27.
 */
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
eventEmitter.on('start', (start, end) => {
    console.log(`从 ${start} 到 ${end}`)
})

eventEmitter.emit('start', 1, 100);