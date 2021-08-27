<template>
<div class="cart">
  <div class="contain">
    <b-card title="Your Cart" sub-title="List of book in your cart">
      <b-list-group class="list-book vertical-align">
        <b-list-group-item v-for="book in cart" :key="book.title">
           <b-container>
            <b-row class="text-center" align-v="center">
              <b-col>
                <b-img :src="book.image" fluid alt="Responsive image"></b-img>
              </b-col>
              <b-col>
                <strong> Tite : </strong> <br>{{ book.title }} <br>
                <strong> ISBN : </strong> <br>{{ book.isbn }} <br>
              </b-col>
              <b-col>
                <b-form-spinbutton v-model="book.quantity" @change="updateQuantity(book.quantity, book.title)" min="0" max="100" vertical></b-form-spinbutton>
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
  <div class="contain">
    <FormCheckout />
  </div>
  <b-card class="contain">
    <Payment @handle-card="handleCard" />
  </b-card>
  <div class="contain">
    <b-button block >Checkout</b-button>
  </div>
</div>
</template>

<script>
import FormCheckout from '@/components/Cart/FormCheckout'
import Payment from '@/components/Checkout/Payment'
export default {
  name: 'shoppingCarte',
  components: {
    FormCheckout,
    Payment
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
      this.totalNoShipping = 0
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
      this.updateTotals()
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
    },
    handleAlert () {
      this.alertVisible = true
      setTimeout(() => {
        this.alertVisible = false
      }, 4000)
    },
    handleCard () {
      this.isCard = true
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

<style scoped>
.cart {
  padding-bottom: 15px;
}
.contain {
  margin-top: 15px;
  margin-bottom: 15px;
}
.list-book {
  margin-top: 15px;
  margin-bottom: 15px;
}
.vertical-align {
  vertical-align: middle;
}
</style>
