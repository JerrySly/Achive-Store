<template>
  <div class="card">
    <div class="custom">
        <textarea class="custom-textarea" name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div>
        <post-item></post-item>
    </div>
  </div>
</template>

<script>
import postItem from '../post/postItem.vue'
export default {
 components: { postItem },
 setup(){

 }
}
</script>

<style lang="scss" scoped>

</style>