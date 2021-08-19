<template>
    <div class="OneList">
        <listBook v-bind:date="this.$route.params.date" v-bind:nameTheme="this.$route.params.name" />
    </div>
</template>

<script>
import listBook from '@/components/OneList/listBook'
export default {
    name: 'OneList',
    components: {
        listBook
    }
}
</script>

<style >
.OneList {
  margin: 15px;
}
</style>