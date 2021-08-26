<template>
    <div>
        <b-col>
            <b-card class="card" @click="isModalVisible = !isModalVisible">
                <b-media>
                    <template #aside>
                        <b-img :src="book.book_image" blank-color="#ccc" width="64" alt="placeholder"></b-img>
                    </template>

                    <h5 class="mt-0">{{this.book.title}}</h5>
                    <p>
                        Author : {{ this.book.author}}
                    </p>
                </b-media>
            </b-card>
        </b-col>

        <modalBook v-bind:isModalVisibleProps="isModalVisible" v-bind:bookProps="book" v-on:my-event="updatemodal"/>
    </div>
</template>

<script>
import modalBook from '@/components/OneList/ModalBook'
export default {
  name: 'cardBook',
  components: {
    modalBook
  },
  props: {
    book: Object
  },
  data () {
    return {
      isModalVisible: false
    }
  },
  methods: {
    updatemodal (value) {
      this.isModalVisible = value
    }
  }
}
</script>

<style scoped>
.card {
    margin-bottom: 15px;
}
.card:hover {
  transform: scale(1.1);
}
</style>
