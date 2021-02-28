app.component('photo-views', {
  props: {
    'filtered-list': Array,
    'select-image': Boolean,
    'current-index': Number
  },
  /*html*/
  template: `
    <div class="grid grid-cols-3 auto-rows-auto gap-16 font-semibold mb-16">
      <div v-if="selectImage"></div>
        <div v-if="selectImage">
          <div class="bg-black text-xl rounded-lg font-medium mt-5 py-5 mx-auto my-auto border-2 border-red-400">
            <div class="px-auto">
              <span class="material-icons select-none flex justify-end mt-1 mb-1 mx-auto text-white"
                @click="hideView">cancel</span>
              <img class="w-100 h-80 mx-auto" :src="filteredList[currentIndex].url">
            </div>
            <p class="pt-2 text-center text-lg text-white" v-if="selectImage"> {{ filteredList[currentIndex].name }} </p>
            <p class="p-2 my-28 text-lg	text-center text-white" v-else>Preview Photo here</p>
          </div>
        </div>
      <div v-if="selectImage"></div>
    </div>
      `,
  methods: {
    hideView() {
      this.$emit('hide-view', this.selectImage);
    }
  }
})