<template>
  <div class="card lg:card-side bg-base-100 shadow-xl h-full text-primary">
    <div class="card-body font-kurewa">
      <h2 class="card-title">{{ _title[1] }}</h2>
      <p>{{ _provider[1] }}</p>
      <p class="text-lg">{{ _content[1] }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary text-lg" @click="goToNews()">來看看</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    link: String,
    provider: String,
  },
  data() {
    return {
      _title: this.title.split("'"),
      _provider: this.provider.split("'"),
      _content: this.content.split("'"),
      _link: this.link.split("'"),
    };
  },
  methods: {
    goToNews() {
      window.open(this._link[1], "_blank");
    },
  },
};
</script>
