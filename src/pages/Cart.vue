<template>
    <div class="cart">
        <shopingCart  />
    </div>
</template>

<script>
import shopingCart from '@/components/Cart/ShoppingCart'
export default {
    name: 'cart',
    components: {
        shopingCart
    }
}
</script>

<style >
.cart {
  margin: 15px;
}
</style>