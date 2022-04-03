<template>
  <div class="container mx-auto my-5 py-2">
    <div class="grid grid-cols-4 gap-10">
      <div class="col-span-4">
        <h1 class="text-8xl font-kurewa text-center" id="topic-display">~來抽話題吧~</h1>
      </div>
      <div class="col-start-2 col-span-2" v-if="status_toggle">
        <h1>here</h1>
      </div>
      <div class="col-start-2 col-span-2">
        <button
          id="button-pickup"
          class="text-3xl font-kurewa text-center text-primary bg-pink-light w-full p-5 rounded-xl"
          @click="status_toggle = !status_toggle"
        >
          抽!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      status_toggle: true,
    };
  },
};
</script>
