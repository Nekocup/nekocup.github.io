<template>
  <div class="container">
    <!-- 現在的天氣 -->
    <div class="today information">
      <h4>{{ getName }}</h4>
      <div class="weatherInformation">
        <p>目前的天氣: {{ getToday.Wx }}</p>
        <p>開始時間: {{ getToday.startTime }} ~ {{ getToday.endTime }}</p>
        <p>溫度: {{ getToday.MinT }}°-{{ getToday.MaxT }}°</p>
        <div class="rain">
          <img src="@/assets/icon/umbrella.svg" alt="" />
          <span>: {{ getToday.PoP }}%</span>
        </div>
      </div>
      <img :src="getToday.url" alt="" />
    </div>
    <!-- 之後的天氣 -->
    <div class="tomorrow">
      <div class="information first">
        <div class="weatherInformation">
          <p>{{ getTm.Wx }}</p>
          <p>時間: {{ getTm.startTime }} ~ {{ getTm.endTime }}</p>
          <p>溫度: {{ getTm.MinT }}°-{{ getTm.MaxT }}°</p>
          <div class="rain">
            <img src="@/assets/icon/umbrella.svg" alt="" />
            <span>: {{ getTm.PoP }}%</span>
          </div>
        </div>
        <img :src="getTm.url" alt="" />
      </div>
      <div class="information second">
        <div class="weatherInformation">
          <p>{{ getTn.Wx }}</p>
          <p>時間: {{ getTn.startTime }} ~ {{ getTn.endTime }}</p>
          <p>溫度: {{ getTn.MinT }}°-{{ getTn.MaxT }}°</p>
          <div class="rain">
            <img src="@/assets/icon/umbrella.svg" alt="" />
            <span>: {{ getTn.PoP }}%</span>
          </div>
        </div>
        <img :src="getTn.url" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "main-container",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getName", "getToday", "getTm", "getTn", "getImgUrl"]),
  },
  methods: {
    ...mapActions({
      changeCity: "changeCity",
    }),
  },
  mounted() {
    // 先跑預設資料
    this.changeCity("臺北市");
  },
};
</script>

<style lang="scss" scoped>
$blockBg: #b450f7;
$blockBorder: #a329f5;
$font-color: #ffffff;

.container {
  & > h1 {
    text-align: center;
  }
  padding: 1em;
}
.rain {
  display: flex;
  align-items: center;
  img {
    width: 20px;
  }
  span {
    padding-left: 12px;
  }
}
.information {
  position: relative;
  background: $blockBg;
  padding: 1em;
  box-sizing: border-box;
  border: 3px solid $blockBorder;
  border-radius: 10px;
  color: $font-color;
  width: 100%;
  h4 {
    padding-bottom: 20px;
  }
  p {
    padding: 7.5px 0;
  }
  > img {
    position: absolute;
    bottom: 1em;
    right: 1em;
  }
}
// 手機版
@media screen AND (max-width: 766px) {
  .tomorrow {
    width: 100%;
  }
  .today {
    width: 100%;
  }
  .information {
    margin: 3px 0;
    > img {
      width: 80px;
    }
  }
}
@media screen AND (max-width: 767px) AND (min-width: 412px) {
  .information {
    margin: 3px 0;
    > img {
      width: 150px;
    }
  }
}
// 氣象圖案處理
@media screen AND (min-width: 768px) AND (max-width: 940px) {
  .information {
    > img {
      width: 140px;
    }
  }
}
// 氣象圖案處理
@media screen AND (min-width: 941px) {
  .information {
    > img {
      width: 140px;
    }
  }
  .today {
    > img {
      width: 190px;
    }
  }
}
// 電腦版
@media screen AND (min-width: 768px) {
  .container {
    display: flex;
  }
  .tomorrow {
    width: 100%;
    .first {
      margin-bottom: 3px;
    }
    .second {
      margin-top: 3px;
    }
  }
  .today {
    width: 100%;
    margin-right: 20px;
  }
}
</style>