<template>
  <div class="search">
    <header>
      <i class="el-icon-arrow-left" @click="back"></i>
      <el-input placeholder="搜一搜" prefix-icon="el-icon-search" v-model="input1"></el-input>
      <el-button type="primary" round @click="search">搜索</el-button>
    </header>
    <div class="history">
      <div class="title">
        <h3>历史记录</h3>
        <i class="el-icon-delete" @click="deleteH"></i>
      </div>
      <div class="historyContent" v-if="historyc?historyc:null">
        <el-button
          type="info"
          round
          v-for="(item,index) in history"
          v-text="item.title"
          :key="index"
        ></el-button>
      </div>
    </div>
    <div class="content">
      <div class="title">
        <h3>搜索发现</h3>
      </div>
      <div class="searchCon" v-if="hotc?hotc:null">
        <el-button
          type="info"
          round
          v-for="(item,index) in hot"
          v-text="item.title"
          :key="index"
          @click="putHis(item)"
        ></el-button>
      </div>
    </div>
  </div>
</template>

<script>
import types from "../../store/store-types";
import search from "../../api/search";
export default {
  data() {
    return {
      input1: "",
      hot: null,
      detailSearch: null,
      history: null
    };
  },
  created() {
    if (this.$store.state.search.searchList === null) {
      window.console.log(this.hot, this.history);
      this.$store.dispatch(types.SEARCH_QUERY_SEARCHLIST_ACTION);
      return;
    }
    this.detailSearch = this.$store.state.search.searchList.detailSearch;
    this.hot = this.$store.state.search.searchList.hot;
    this.history = this.$store.state.search.searchList.history;
  },
  methods: {
    back() {
      window.history.go(-1);
    },
    search() {
      this.$router.push({ path: "/detail", query: { title: this.input1 } });
    },
    putHis(item) {
      if (!this.history||!this.hot) {
        this.history = this.$store.state.search.searchList.history;
        this.hot = this.$store.state.search.searchList.hot;
        return
      }
      this.history = this.history.filter(item1 => {
        return item1.gid !== item.gid;
      });
      this.history.push(item);
      this.input1 = item.title;
    },
    deleteH() {
      this.history = [];
    }
  },
  components: {},
  updated() {
    if (!this.history||!this.hot) {
        this.history = this.$store.state.search.searchList.history;
        this.hot = this.$store.state.search.searchList.hot;
        return
      }
  },
  computed: {
    hotc() {
      let hot = this.$store.state.search.searchList;
      if (hot) {
        hot = hot.hot;
      }
      return hot;
    },
    historyc() {
      let history = this.$store.state.search.searchList;
      if (history) {
        history = history.history;
      }
     return history;
    }
  }
};
</script>
<style lang='less' scoped>
html,
body {
  width: 100%;
  .search {
    width: 100%;
    header {
      display: flex;
      height: 0.4rem;
      background-color: lightgrey;
      i {
        width: 20%;
        text-align: center;
        line-height: 0.4rem;
        font-size: 0.2rem;
      }
      button {
        width: 20%;
        background-color: red;
        border-radius: 50%;
      }
    }
    .history {
      width: 100%;
      .title {
        width: 100%;
        height: 0.6rem;
        display: flex;
        font-size: 0.2rem;
        line-height: 0.6rem;
        h3 {
          width: 80%;
          height: 100%;
          padding-left: 0.2rem;
          text-align: left;
        }
        i {
          width: 20%;
          height: 100%;
          padding-right: 0.2rem;
          text-align: right;
          line-height: 0.6rem;
          color: darkgrey;
          font-size: 0.16rem;
        }
      }
      .historyContent {
        padding: 0.1rem;
        button {
          margin: 0.05rem;
        }
      }
    }
    .content {
      padding-top: 0.2rem;
      width: 100%;
      padding: 0.2rem;
      .title {
        height: 0.6rem;
        display: flex;
        font-size: 0.2rem;
        line-height: 0.6rem;
      }
      .searchCon {
        width: 100%;
        button {
          margin: 0.05rem;
        }
      }
    }
  }
}
</style>