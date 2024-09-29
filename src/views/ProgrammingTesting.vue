<template>
  <div>
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://miro.medium.com/v2/resize:fit:1400/format:webp/1*29NeeIGT0BElEBNfzE_VlQ.jpeg');
          "
        >
          <div id="" class="w-full h-full absolute opacity-80 bg-black"></div>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">Programming Testing</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <!-- <section class="flex flex-wrap"> -->
            <sorting-number />
          </div>
          <div class="flex flex-wrap">
            <!-- <section class="flex flex-wrap"> -->
            <employee-information />
          </div>
        </div>
      </section>
    </main>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import SortingNumber from '@/components/SortingNumber.vue'
import EmployeeInformation from '@/components/EmployeeInformation.vue'
import FooterComp from '@/components/Footer.vue'

export default {
  name: 'ProgrammingTesting',
  components: {
    SortingNumber,
    EmployeeInformation,
    FooterComp
  }
}
</script>
