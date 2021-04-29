const vm = new Vue({
    el: '#app',
    data: {
     userToken: '',
     roomToken: '',
     roomId: '',
     room: undefined,
     client: undefined,   
    },
    mounted(){
        api.setRestToken()
    },
    // Hàm được gọi trong Vue phải nằm trong 1 opject
    methods: {
        createRoom: async function(){
            console.log('create room')
            const room = await api.createRoom()
            const roomToken = await api.getRoomToken(room.roomId)
            this.roomId = room.roomId
            this.roomToken = room.roomToken
        },
        joinRoom: async function(){
            const roomId = prompt('Dán Room ID vào đây')
            if(!roomId){
                return
            }

            const roomToken = await api.getRoomToken(roomId)
            this.roomId = roomId
            this.roomToken = roomToken
        }
    }
})