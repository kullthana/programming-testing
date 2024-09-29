<template>
  <div class="lg:pt-12 pt-6 w-full px-4">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
    >
      <div class="px-4 py-4 flex-auto">
        <label for="first-name" class="block text-base font-bold leading-6">Sorting Number</label>
      </div>
      <div class="px-4 py-2 flex-auto">
        <label for="first-name" class="block text-sm font-medium leading-6 text-justify"
          >Number</label
        >
        <div class="mt-2">
          <input
            type="text"
            v-model="numbers"
            class="block w-full rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div class="mt-2">
          <button
            class="bg-blue-500 text-white active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none"
            @click="addNumber(numbers)"
            style="transition: all 0.15s ease 0s"
          >
            Submit
          </button>
        </div>
        <p class="mt-3 text-sm leading-6 text-justify">Sorting number: {{ sort }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortingNumber',
  data() {
    return {
      numberLists: this.$store.state.numbers
    }
  },
  computed: {
    sort() {
      const sorted = [...this.numberLists].sort((a, b) => a - b)
      return sorted
    }
  },
  methods: {
    addNumber(value) {
      this.numberLists.push(parseInt(value))
    }
  }
}
</script>
