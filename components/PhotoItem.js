app.component('photo-items', {
  props: {
    Hokkaido: {
      type: Array,
      require: true
    },
    'search-found': Boolean,
    'filtered-list': Array

  },
  /*html*/
  template: `
    <div class="grid grid-cols-3 auto-rows-auto gap-16 font-semibold">
     <div v-for="(task,index) in filteredList" class="mx-auto">
       <img :src="task.url" class="w-80 h-60 rounded-md border-2 border-red-400" v-on:click="viewImg(index)">
         <p class="text-center mt-6 text-xl tracking-wider">
           <i v-if="task.Like" class="material-icons text-red-400 text-4xl" v-on:click="likeCheck(index)">favorite</i>
           <i v-else="task.Like" class="material-icons text-4xl" v-on:click="likeCheck(index)">favorite_border</i>
           {{task.name}}
         </p>
      </div>

      <div v-if="searchFound" class="text-center col-span-3 mt-48 text-9xl text-red-400">No Photo !!!</div>
    </div>
      `,
  data() {
    return {
      selectImage: false,
      currentIndex: 0
    }
  },
  methods: {
    likeCheck(index) {
      this.currentIndex = index
      this.$emit('like-check', this.currentIndex)
    },
    viewImg(index) {
      this.currentIndex = index
      this.selectImage = true;
      this.$emit('view-img', this.currentIndex)
      this.$emit('view-images', this.selectImage)
    },
  }
})