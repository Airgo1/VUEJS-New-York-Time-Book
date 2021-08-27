<template>
  <div>
    <div  class="title">
        <h2>{{ this.ListBestSellers.display_name }}</h2>
    </div>

    <b-container fluid="lg" class="container-card">
        <b-row v-if="!loadingList" cols="2">
            <cardBook v-for="book in ListBestSellers.books" v-bind:key="book.title" v-bind:book="book" />
        </b-row>
        <div class="spining" v-else>
          <b-spinner label="Spinning"></b-spinner>      
        </div>
    </b-container>
  </div>
</template>

<script>
import cardBook from '@/components/OneList/CardBook'
import axios from 'axios'
axios.defaults.baseURL = 'https://api.nytimes.com/svc/books/v3/'
export default {
  name: 'listBook',
  components: {
    cardBook
  },
  props: {
    date: String,
    nameTheme: String
  },
  data () {
    return {
      loadingList: true,
      ListBestSellers: [],
      nbrResult: null
    }
  },
  created () {
    this.getBestSellersList()
  },
  methods: {
    getBestSellersList () {
      this.loadingList = true
      var config = {
        method: 'get',
        url: axios.defaults.baseURL + '/lists/' + this.date + '/' + this.nameTheme + '.json?api-key=kg5NbaANHHWdCoQNd7lMd6UGbRkrvoyi',
        headers: { }
      }

      axios(config)
        .then(response => {
          this.ListBestSellers = response.data.results
          this.nbrResult = response.data.num_results
          this.loadingList = false
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style>
.container-card {
    margin-top: 15px;
    margin-bottom: 15px;
}
.spining{
  text-align: center;
}
</style>
