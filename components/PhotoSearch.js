app.component('photo-searchs', {
    props: {
        Hokkaido: {
            type: Array,
            require: true
        }
    },
    /*html*/
    template: `
      <div>
        <div v-if="searchOpen">
          <input v-model="inputsTask" @input="search" placeholder="Searching Here.... "
            class="rounded-lg px-2 text-lg ml-5 border-2 border-red-400">
          <button @click="opencloseSearchMenu" class="bg-red-400 text-white rounded-lg px-2 text-lg ml-1">Cancel</button>
        </div>
        <i v-else="searchOpen" class="material-icons inline-block text-5xl text-red-400 text-3xl ml-5"
          @click="openSearchMenu">search</i>
      </div>
      `,
    data() {
        return {
            inputsTask: '',
            searchOpen: false
        }
    },
    methods: {
        opencloseSearchMenu() {
            this.searchOpen = !this.searchOpen
            this.inputsTask = ''
            this.$emit('search', this.inputsTask)
        },
        search() {
            this.$emit('search', this.inputsTask)
        },
    }
})