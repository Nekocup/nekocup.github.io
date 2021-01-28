<template>
  <div class="container">
    <!-- 行動版icon -->
    <div class="hambugericon" @click="handledisplay">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="contain" v-show="!ishidden">
      <ul>
        <!-- 行動版icon -->
        <img
          src="@/assets/icon/delete.svg"
          alt="img Not found"
          @click="handledisplay"
        />
        <!-- 所有縣市 -->
        <h4>北部</h4>
        <li>
          <button
            v-for="counties in address.north"
            :key="counties"
            @click="clikCity(counties)"
          >
            <h5>{{ counties }}</h5>
          </button>
        </li>
        <h4>西部</h4>
        <li>
          <button
            v-for="counties in address.east"
            :key="counties"
            @click="clikCity(counties)"
          >
            <h5>{{ counties }}</h5>
          </button>
        </li>
        <h4>南部</h4>
        <li>
          <button
            v-for="counties in address.south"
            :key="counties"
            @click="clikCity(counties)"
          >
            <h5>{{ counties }}</h5>
          </button>
        </li>
        <h4>東部</h4>
        <li>
          <button
            v-for="counties in address.west"
            :key="counties"
            @click="clikCity(counties)"
          >
            <h5>{{ counties }}</h5>
          </button>
        </li>
        <h4>離島</h4>
        <li>
          <button
            v-for="counties in address.other"
            :key="counties"
            @click="clikCity(counties)"
          >
            <h5>{{ counties }}</h5>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

// 所有縣市名稱
const address = {
  north: ["基隆市", "新北市", "臺北市", "桃園市", "新竹市", "新竹縣"],
  east: ["臺中市", "彰化縣", "南投縣"],
  south: ["雲林縣", "嘉義市", "嘉義縣", "臺南市", "高雄市", "屏東縣"],
  west: ["宜蘭縣", "花蓮縣", "臺東縣"],
  other: ["澎湖縣", "金門縣", "連江縣"],
};

export default {
  name: "nav-bar",
  mounted() {
    // 處理一開始是否顯示選單
    if (window.innerWidth <= 1200) {
      this.ishidden = true;
    }
    // 處理畫面變動時選單的顯示
    addEventListener("resize", (e) => {
      if (e.target.innerWidth > 1200) {
        this.ishidden = false;
      } else {
        this.ishidden = true;
      }
    });
  },
  data() {
    return {
      address,
      ishidden: false,
    };
  },
  methods: {
    handledisplay() {
      this.ishidden = !this.ishidden;
    },
    clikCity(counties) {
      this.changeCity(counties);
      // 行動版點擊選單隱藏
      if (window.innerWidth <= 1200) {
        this.ishidden = !this.ishidden;
      }
    },
    ...mapActions({
      changeCity: "changeCity",
    }),
  },
};
</script>

<style lang="scss" scoped>
$topColor: #dec9e9;

.contain {
  width: 100%;
  button {
    background: transparent;
    border-color: transparent;
    border-style: solid;
    outline: none;
    border-radius: 1em;
    border-width: 3px;
    &:hover {
      background: #67646b;
    }
  }
  min-height: 100vh;
  h4 {
    color: #14253d;
    padding: 0.5em 0;
    margin: 0 10px;
  }
  h5 {
    color: #24416b;
  }
  img {
    display: none;
  }
}

// 電腦版樣式
@media screen AND (min-width: 1201px) {
  .container {
    background: linear-gradient($topColor, #5233ff);
    padding: 1em;
  }
}
// 手機版樣式
@media screen AND (max-width: 1200px) {
  .contain {
    z-index: 10;
    position: absolute;
    width: 100%;
    top: 0;
    background: $topColor;
    ul {
      h4 {
        text-align: center;
        line-height: 20px;
      }
      img {
        display: block;
        width: 2em;
        padding-bottom: 10px;
        margin: 1em 0 0 1em;
      }
      li {
        text-align: center;
      }
    }
    button {
      border-color: #a06cd5;
      margin: 1em;
    }
  }
  // 手機版icon
  .hambugericon {
    width: 60px;
    span::after {
      content: "";
      display: block;
      margin: 7px auto;
      width: 60%;
      height: 7px;
      background: #a06cd5;
      border-radius: 1em;
    }
  }
}
</style>