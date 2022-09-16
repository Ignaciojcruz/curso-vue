
const app = Vue.createApp({
    //template: `
    //<H1> Hola mundo</h1>
    //<p> Desde app.js </p>
    //`

    data() {
        return {
            quote: "I'm batman ",
            author: "Bruce Wayne"
        }
    },
    methods: {
        changeQuote( event ) {
            console.log('Hola mundo', event )
            this.author = 'Ignacio Cruz'

            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }

})

app.mount('#myApp')
