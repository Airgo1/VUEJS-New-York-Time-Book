<template>
    <b-col>
        <b-card class="card">
            <b-media>
                <template #aside>
                    <b-img :src="book.book_image" blank-color="#ccc" width="64" alt="placeholder"></b-img>
                </template>

                <h5 class="mt-0">{{this.book.title}}</h5>
                <p>
                    Author : {{ this.book.author}}
                </p>
                <p>
                   Publisher : {{ this.book.publisher}}
                </p>

            </b-media>
        </b-card>
    </b-col>
</template>

<script>
export default {
    name: 'cardBook',
    props: {
        book: Object
    },
	data () {
		return {
			
		}
	},
    methods: {
        
    }
};
</script>

<style scoped>
.card {
    margin-bottom: 15px;
}
.card:hover {
  transform: scale(1.1); 
}
</style>