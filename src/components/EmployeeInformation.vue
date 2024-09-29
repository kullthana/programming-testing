<template>
  <div class="lg:pt-12 pt-6 w-full px-4">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
    >
      <div class="px-4 py-4 flex-auto">
        <label for="first-name" class="block text-base font-bold leading-6"
          >Employee Information</label
        >
      </div>
      <div class="px-4 py-2 flex-auto">
        <label for="first-name" class="block text-sm font-medium leading-6 text-justify"
          >Name</label
        >
        <div class="mt-2">
          <input
            type="text"
            v-model="name"
            class="block w-full rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <label for="first-name" class="block text-sm font-medium leading-6 text-justify"
          >Postion</label
        >
        <div class="mt-2">
          <input
            type="text"
            v-model="position"
            class="block w-full rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div class="mt-2">
          <button
            class="bg-blue-500 text-white active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none"
            @click="addEmployee(name, position)"
            style="transition: all 0.15s ease 0s"
          >
            Submit
          </button>
        </div>
        <p class="mt-3 text-sm leading-6 text-justify" v-for="n in employeeLists" :key="n">
          ชื่อ {{ n.name }} ตําแหน่ง {{ n.position }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortingNumber',
  data() {
    return {
      employeeLists: this.$store.state.employee
    }
  },
  methods: {
    addEmployee(name, position) {
      this.employeeLists.push({ name: name, position: position })
    }
  }
}
</script>
