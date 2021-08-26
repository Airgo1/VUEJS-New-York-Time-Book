<template>
  <div class="home">

    <b-container class="listView">
      <b-row>
        <!--<b-col>
          <div class="mt-3">Select a theme : </div>
          <b-form-select v-model="querySelected" :options="qerySelectorOption"></b-form-select>
        </b-col>-->

        <b-col>
          <div class="mt-3">filtred by : </div>
          <b-form-select v-model="querySelectedUpdate" :options="qerySelectorUpdateOption"></b-form-select>
        </b-col>

        <b-col>
          <label class="mt-3">Choose a date :</label>
          <b-form-datepicker id="example-datepicker" v-model="queryDate" class="mb-2"></b-form-datepicker>
        </b-col>

      </b-row>
    </b-container>

    <b-container class="listCard">
      <div v-if="listShort">
        <carTheme v-for="one in listShort" v-bind:key="one.list_name_encoded" v-bind:listProps="one" v-bind:date="queryDate" class="listCard"></carTheme>
      </div>

      <div v-else>
        <b-icon icon="exclamation-circle" style="width: 120px; height: 120px;"></b-icon>
      </div>
    </b-container>

  </div>
</template>

<script>
import carTheme from '@/components/Home/CardTheme'

import axios from 'axios'
axios.defaults.baseURL = 'https://api.nytimes.com/svc/books/v3/'

export default {
  name: 'listTheme',
  components: {
    carTheme
  },
  data () {
    const now = new Date()
    const today = now.getFullYear() + '-' + (now.getMonth() + 1).toString().padStart(2, '0') + '-' + now.getDate()
    return {
      apiKey: 'kg5NbaANHHWdCoQNd7lMd6UGbRkrvoyi',

      listAll: [],
      nbrResultAll: null,
      listShort: [],
      nbrResultShort: null,

      loadingList: false,
      haveError: false,
      messageError: '',

      qerySelectorOption: [],
      qerySelectorUpdateOption: [{ value: null, text: 'All' }, { value: 'WEEKLY', text: 'WEEKLY' }, { value: 'MONTHLY', text: 'MONTHLY' }],
      querySelected: null,
      querySelectedUpdate: null,
      queryTheme: null,
      queryDate: today
    }
  },
  created () {
    this.getBestSellersList()
    this.createSelector()
  },
  methods: {
    async getBestSellersList () {
      this.loadingList = true
      var config = {
        method: 'get',
        url: axios.defaults.baseURL + '/lists/names.json?api-key=' + this.apiKey,
        headers: { }
      }

      await axios(config)
        .then(response => {
          this.listAll = response.data.results
          this.nbrResultAll = response.data.num_results
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    createSelector () {
      this.qerySelectorOption = []
      this.qerySelectorOption.push({
        value: null,
        text: 'none'
      })

      this.listShort.forEach(element => {
        this.qerySelectorOption.push({
          value: element.list_name,
          text: element.display_name
        })
      })
    },
    setlistShort (date, updated) {
      this.listShort = []
      this.listAll.forEach(element => {
        if (element.oldest_published_date < date && element.newest_published_date > date) {
          if (updated == null) {
            this.listShort.push(element)
          } else {
            if (element.updated === updated) {
              this.listShort.push(element)
            }
          }
        }
      })
      this.loadingList = false
    }
  },
  watch: {
    queryDate (newVal) {
      this.createSelector()
      this.setlistShort(newVal, this.querySelectedUpdate)
    },
    querySelectedUpdate (newVal) {
      this.createSelector()
      this.setlistShort(this.queryDate, newVal)
    },
    listAll () {
      this.setlistShort(this.queryDate, this.querySelectedUpdate)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  margin: 15px;
}
.listView {
  align-content: center;
  vertical-align: middle;
}
.listCard {
  margin-top: 10px;
}
</style>
