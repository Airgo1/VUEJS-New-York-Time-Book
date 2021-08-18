<template>
  <div class="home">

    <b-container class="listView">
      <b-row>
        <b-col>
          <div class="mt-3">Selected: </div>
          <b-form-select v-model="querySelected" :options="qerySelectorOption"></b-form-select>
        </b-col>

        <b-col>
          <label for="example-datepicker">Choose a date</label>
          <b-form-datepicker id="example-datepicker" v-model="queryDate" class="mb-2"></b-form-datepicker>
        </b-col>

      </b-row>
    </b-container>

    <b-container class="listCard">
      <cardList v-for="one in listAll" v-bind:key="one.list_name_encoded" v-bind:listProps="one" class="listCard"></cardList>
    </b-container>

  </div>
</template>

<script>
import cardList from '@/components/Home/cardList'

import axios from 'axios';
axios.defaults.baseURL = 'https://api.nytimes.com/svc/books/v3/'

export default {
  name: 'HelloWorld',
  components: {
    cardList
  },
  data () {
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
      querySelected: null,
      queryTheme: null,
      queryDate: null
    }
  },
  created () {
    this.getBestSellersList()
    this.createSelector()
  },
  methods: {
    getBestSellersList () {
      this.loadingList = true
      var config = {
        method: 'get',
        url: axios.defaults.baseURL+'/lists/names.json?api-key='+this.apiKey,
        headers: { }
      };

      axios(config)
        .then(response => {
          console.log(JSON.stringify(response.data))
          this.listAll = response.data.results
          this.nbrResultAll = response.data.num_results
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    createSelector () {
      this.qerySelectorOption.push({
        value: null,
        text: 'none'
      })

      this.listAll.forEach(element => {
        this.qerySelectorOption.push({
          value: element.list_name,
          text: element.display_name
        })
      });
      
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
