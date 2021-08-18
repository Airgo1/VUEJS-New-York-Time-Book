<template>
	<div>
		<b-card :title="this.listProps.list_name" :sub-title="this.listProps.updated" href="#">
			
		</b-card>
	</div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL = 'https://api.nytimes.com/svc/books/v3/'

export default {
    name: 'cardList',
    props: {
        listProps: Object,
		date: Date
    },
	data () {
		return {
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
                url: axios.defaults.baseURL+'/lists/'+this.date+'/'+this.listProps.list_name_encoded+'.json?api-key=kg5NbaANHHWdCoQNd7lMd6UGbRkrvoyi',
                headers: { }
            };

            axios(config)
                .then(response => {
                    this.ListBestSellers = response.data.results
                    this.nbrResult = response.data.num_results
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
        loadSelectedBooks(list) {
            console.log(list)
        }
    }
};
</script>