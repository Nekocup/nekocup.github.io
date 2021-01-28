import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: {
      name: "臺北市",
      today: {
        Wx: "",
        PoP: "",
        MinT: "",
        MaxT: "",
        startTime: "",
        endTime: "",
        url: ""
      },
      tm: {
        Wx: "",
        PoP: "",
        MinT: "",
        MaxT: "",
        startTime: "",
        endTime: "",
        url: ""
      },
      tn: {
        Wx: "",
        PoP: "",
        MinT: "",
        MaxT: "",
        startTime: "",
        endTime: "",
        url: ""
      }
    }
  },
  mutations: {
    // 氣象局的資料寫入
    writeCityData(state, data) {
      let city = state.city
      let weatherElement = data.weatherElement
      let datalist = ['today', 'tm', 'tn']
      let url = "https://www.cwb.gov.tw//V8/assets/img/weather_icons/weathers/svg_icon/day/"
      city.name = data.locationName
      for (let i = 0; i < 3; i++) {
        city[datalist[i]].Wx = weatherElement[0].time[i].parameter.parameterName
        city[datalist[i]].url = weatherElement[0].time[i].parameter.parameterValue
        city[datalist[i]].PoP = weatherElement[1].time[i].parameter.parameterName
        city[datalist[i]].MinT = weatherElement[2].time[i].parameter.parameterName
        city[datalist[i]].MaxT = weatherElement[4].time[i].parameter.parameterName
        city[datalist[i]].startTime = moment(weatherElement[0].time[i].startTime).format('H:mm')
        city[datalist[i]].endTime = moment(weatherElement[0].time[i].endTime).format('H:mm')
        if (city[datalist[i]].url < 10) {
          city[datalist[i]].url = url + "0" + city[datalist[i]].url + '.svg'
        } else {
          city[datalist[i]].url = url + city[datalist[i]].url + '.svg'
        }
      }
    }
  },
  actions: {
    // 氣象局api
    changeCity({ commit }, counties) {
      axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?',
        {
          params: {
            Authorization: "CWB-938A26A8-5C31-4256-8790-04A21CA94305",
            locationName: counties,
          }
        })
        .then((res) => {
          let data = res.data.records.location[0]
          commit('writeCityData', data)
        })
    }
  },
  getters: {
    getName(state) {
      return state.city.name
    },
    getToday(state) {
      return state.city.today
    },
    getTm(state) {
      return state.city.tm
    },
    getTn(state) {
      return state.city.tn
    },
  },
  modules: {
  }
})
