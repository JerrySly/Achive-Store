<template>
  <button @click="$emit('click')" :style="computedStyle" >
    <slot></slot>
  </button>
</template>

<script>
export default {
  emits: ["click"],
  props: {
    color: {
      type: String,
      default: "#fff",
    },
    backgroundColor: {
      type: String,
      default: 'rgb(38, 172, 33)',
    },
    width: {
      type: String,
      default: "100px",
    },
    height: {
      type: String,
      default: "50px",
    },
    fontSize:{
        type: Number,
        default: 18
    },
    borderRadius:{
        type: String,
        default: '5px'
    },
  },
  setup(props) {
    let computedStyle = {
      color: props.color,
      width: props.width,
      height: props.height,
      fontSize: props.fontSize+'px',
      borderRadius: props.borderRadius
    };
    return {
      computedStyle,
    };
  },
};
</script>

<style scoped>
button{
    cursor: pointer;
    outline: none;
    border: none;
}

</style>