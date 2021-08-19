<template>
<div>
  <div class="cart">
    <b-card title="Your Cart" sub-title="List of book in your cart">
      <b-list-group class="list-book">
        <b-list-group-item v-for="book in cart" :key="book.title">
           <b-container>
            <b-row>
              <b-col>
                <b-img :src="book.image" width="50" fluid alt="Responsive image"></b-img>
              </b-col>
              <b-col>
                {{ book.title }}
              </b-col>
              <b-col>
                <b-form-spinbutton v-model="book.quantity" @change="updateQuantity(book.quantity, book.title)" min="0" max="100"></b-form-spinbutton>
              </b-col>
              <b-col>
                X     {{ book.price }} € : {{ book.price*book.quantity}} €
              </b-col>
              <b-col>
                <b-button @click="deleteBook(book.title)">Remove</b-button>
              </b-col>
            </b-row>
          </b-container>
        </b-list-group-item>
      </b-list-group>

      <p>Total (with no shipping): {{ totalNoShipping }} €</p>
      <p>Total (with shipping): {{ totalWithShipping }} €</p>
    </b-card> 
  </div>
  <div class="form">
    <formCheckout />
  </div>
</div>
</template>

<script>
import formCheckout from '@/components/Cart/formCheckout'
export default {
  name: 'shoppingCarte',
  components: {
    formCheckout
  },
  data () {
    return {
      cart: [],
      totalNoShipping: 0,
      totalWithShipping: 0,
      priceShipping: 3
    }
  },
  created() {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart'))
    }
  },
  methods: {
    getLocalStorageCard () {
        if (localStorage.getItem('cart')) {
            this.cart = JSON.parse(localStorage.getItem('cart'))
        }
    },
    updateTotals () {
      this.cart.forEach(element => {
        this.totalNoShipping += element.price * element.quantity
      })
      this.totalWithShipping = this.totalNoShipping + this.priceShipping
    },
    updateQuantity (quantity, name) {
      this.cart.find(element => element.title == name).quantity = quantity
      if(quantity == 0) {
        this.deleteBook(name)
      }
      this.saveCart()
    },
    deleteBook (title) {
      var newCart = []
      this.cart.forEach(element => {
        if(element.title != title) {
          newCart.push(element)
        }
      })
      this.cart = newCart
    },
    saveCart () {
      const parsed = JSON.stringify(this.cart)
      localStorage.setItem('cart', parsed)
    }
  },
  watch: {
    cart (newValue) {
      this.cart = newValue
      this.updateTotals()
      this.saveCart()
    }
  }
}
</script>

<style>
.list-book {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
