<template>
  <div class="post">
    <div class="date-time">{{readableDateTime}}</div>
    <div class="text">{{post.text}}</div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
  props:{
    post: {
      type: Object,
      required: true
    }
  },
  setup(props){
    let post = reactive(props.post)
    console.log(post);
    let readableDateTime = computed(()=>{
      return new Date(post.time).toLocaleDateString()
    })
    return {
      post,
      readableDateTime
    }
  }
}
</script>

<style scoped lang="scss">
.post{
  border: 1px solid $main-color;
  margin: 10px 0px 10px;
  border-radius: 5px;
  text-align: left;
  padding: 5px 10px;
  .date-time{
    font-size: 14px;
    color: $additional-color;
  }
  .text{
    color: black;
    font-size: 20px;
    font-weight: 500;
  }
}
</style>