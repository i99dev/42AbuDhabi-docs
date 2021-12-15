<template>
  <body
    
    :class="
      show == true ? 'bg-white border-2 border-dashed rounded' : 'bg-gray-200'
    "
    class="overflow-y-hidden"
  >
    <div>
      <div class="cursor-pointer">
        <div
        @click="show = !show"
         class="font-semibold text-gray-800 py-2 text-center">Solution</div>
      </div>
      <div
        v-if="show"
        class="flex flex-col font-normal text-base leading-6 text-gray-600 px-2"
      >
        <slot></slot>
        <button
         @click="show = !show"
          class="mx-2 my-2 w-25 bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-5 py-1 text-xs"
        >
          Close
        </button>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style></style>
