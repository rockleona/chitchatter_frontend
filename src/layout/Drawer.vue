<template>
  <div class="container mx-auto my-5 py-2">
    <div class="grid grid-cols-4 gap-10">
      <div
        class="col-span-2 h-full flex flex-col justify-center items-end"
        v-if="status_toggle"
      >
        <h1 class="text-right text-5xl font-kurewa">
          你抽到的話題是:
          <span class="text-base-100 font-bold">{{ picked_dict.title }}</span>
        </h1>
        <div class="stats shadow w-min mt-5 bg-secondary-dark font-kurewa">
          <div class="stat">
            <div class="stat-title text-primary">本日搜尋流量</div>
            <div class="stat-value">{{ picked_dict.traffic }}</div>
            <div class="stat-desc text-primary mt-2 text-small">你有跟上這個話題嗎？</div>
          </div>
        </div>
      </div>
      <div
        class="col-span-2 h-full m-5 bg-secondary-light rounded-lg"
        v-if="status_toggle"
      >
        <div class="grid grid-cols-4 gap-10 m-5">
          <h1 class="col-span-4 text-3xl font-kurewa text-center font-bold text-primary">
            相關新聞
          </h1>
          <div class="col-span-2" v-for="news in this.picked_dict.news" :key="news[0]">
            <NewsCard
              :title="news[0]"
              :content="news[1]"
              :link="news[2]"
              :provider="news[3]"
            ></NewsCard>
          </div>
        </div>
      </div>
      <div class="col-start-2 col-span-2">
        <button
          id="button-pickup"
          class="btn btn-block font-kurewa text-center text-primary bg-secondary rounded-xl text-2xl"
          @click="pickAWord()"
        >
          抽!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from "../components/NewsCard.vue";
import Papa from "papaparse";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export default {
  setup() {},
  data() {
    return {
      status_toggle: false,
      keyword_json: "",
      keyword_json_length: 0,
      csv_string: "",
      picked_dict: {
        title: "Larum Inpus",
        time: "xxxxxxxx",
        traffic: "100000xxx",
        news: [["hehe"], ["hehe"]],
      },
    };
  },
  computed: {
    reformat_news: {
      get() {
        return this.picked_dict.news;
      },
      set(unformat) {
        var unformat = unformat;
        unformat = unformat.slice(1, -1);
        var splited = unformat.split(",");
        if (splited.length == 4) {
          this.picked_dict.news = [splited];
        } else if (splited.length == 8) {
          this.picked_dict.news = [splited.slice(0, 4), splited.slice(4)];
        }
      },
    },
  },
  methods: {
    pickAWord() {
      this.statusChecker();
      const lucky_number = getRandomInt(this.keyword_json_length);
      this.picked_dict.title = this.keyword_json.data[lucky_number].title;
      this.picked_dict.time = this.keyword_json.data[lucky_number].time;
      this.picked_dict.traffic = this.keyword_json.data[lucky_number].traffic;
      this.reformat_news = this.keyword_json.data[lucky_number].news;
    },
    statusChecker() {
      if (!this.status_toggle) {
        this.status_toggle = !this.status_toggle;
      }
    },
    fetchCsv() {
      this.axios
        .get("/chitchatter_crawler/output/keywords.csv", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Header": "Origin, Content-Type",
            "Content-Type": "application/xml",
          },
        })
        .then((response) => {
          this.csv_string = response.data;
          this.parseCsv();
        });
    },
    parseCsv() {
      this.keyword_json = Papa.parse(this.csv_string, { header: true });
      this.keyword_json_length = this.keyword_json.data.length;
    },
  },
  mounted() {
    console.log("HI, mounted!");
    this.fetchCsv();
  },
  components: { NewsCard },
};
</script>
