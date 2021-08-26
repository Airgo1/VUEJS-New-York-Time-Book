<template>
    <div>
      <b-modal v-model="isModalVisible" size="xl" hide-footer>
        <template #modal-title>
            <strong> {{ book.title }} </strong> <br>
            by {{ book.author }}
        </template>

        <b-container >
            <b-row>
                <b-col >
                    <b-img :src="book.book_image" fluid alt="Responsive image"></b-img>
                </b-col>

                <b-col>
                    <strong> ISBN : </strong> {{book.primary_isbn13}} <br>
                    <strong> Publisher : </strong> {{book.publisher}} <br>
                    <strong> Contributor : </strong> {{book.contributor}} <br>
                    <br>
                    <strong> description : </strong> {{book.description}} <br>
                    <br>
                    <strong> Price : </strong> {{book.price}} €
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <div class="center">
                <b-button @click="addBookToCard">Add to Card</b-button>
            </div>
        </b-container>

        </b-modal>

        <b-modal id="add-validation-model" size="xl" hide-header hide-footer>
            <diV>
                {{ book.title }} is add to card
            </diV>
            <div>
                <b-button href="#/cart">Go to cart</b-button>
                <b-button @click="$bvModal.hide('add-validation-model')">Continue to buy</b-button>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
  name: 'modalBook',
  props: {
    bookProps: Object,
    isModalVisibleProps: Boolean
  },
  data () {
    return {
      book: this.bookProps,
      isModalVisible: this.isModalVisibleProps,
      cart: [],
      bookCart: {
        title: null,
        isbn: null,
        image: null,
        price: null,
        quantity: 1
      }
    }
  },
  created () {
    this.book.price = this.book.primary_isbn13 % 30 + 10

    this.bookCart.title = this.book.title
    this.bookCart.isbn = this.book.primary_isbn13
    this.bookCart.image = this.book.book_image
    this.bookCart.price = this.book.price
  },
  methods: {
    addBookToCard () {
      var added = false
      this.cart.forEach(element => {
        if (element.title === this.bookCart.title) {
          element.quantity += 1
          added = true
        }
      })
      if (added !== true) {
        this.cart.push(this.bookCart)
      }

      this.saveCart()
      this.$bvModal.show('add-validation-model')
    },
    getLocalStorageCard () {
      if (localStorage.getItem('cart')) {
        this.cart = JSON.parse(localStorage.getItem('cart'))
      }
    },
    saveCart () {
      const parsed = JSON.stringify(this.cart)
      localStorage.setItem('cart', parsed)
    },
    continueBuy () {
      this.$bvModal.hide('add-validation-model')
    }
  },
  watch: {
    isModalVisibleProps (newVal) {
      this.isModalVisible = newVal
      if (newVal === true) {
        this.getLocalStorageCard('add-validation-model')
      }
    },
    isModalVisible (newVal) {
      this.$emit('update:isModalVisible', newVal)
    }
  }
}
</script>

<style>
.center {
  margin: 0;
  position: absolute;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
