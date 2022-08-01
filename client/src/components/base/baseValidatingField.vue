<template>
  <div
    class="validating-field"
   
  >
    <div :style="labelStyle" class="label-block">
      <label :for="name">{{ label }}</label>
    </div>
    <input
      :name="name"
      :id="name"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="handleChange"
      :style="style"
      :class="{ 'has-error': !!errorMessage}"
    />

    <p class="help-message" :style="errorStyle" v-show="errorMessage">
      {{ errorMessage}}
    </p>
  </div>
</template>

<script>
import { useField } from "vee-validate";
import { reactive, ref, toRef } from "@vue/reactivity";
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    successMessage: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "30px",
    },
    outline: {
      type: String,
      default: "none",
    },
    fontSize: {
      type: String,
      default: "20px",
    },
    borderRadius: {
      type: String,
      default: "5px",
    },
    labelPosition:{
      type: String,
      default: 'left'
    },
    labelFontSize:{
      type: String,
      default: '20px'
    },
    errorFontSize:{
      type: String,
      default: '18px'
    }
  },
  setup(props) {
    let style = {
      width: props.width,
      height: props.height,
      outline: props.outline,
      "font-size": props.fontSize,
      "border-radius": props.borderRadius,
    };
    let labelStyle ={
      "text-align": props.labelPosition,
      "font-size": props.labelFontSize
    }
    let errorStyle={
      "font-size": props.errorFontSize

    }
    const name =toRef(props, 'name');
    const {
      value,
      errorMessage,
      meta,
      handleChange
    } = reactive(useField(name, undefined, {
      initialValue: props.value,
    }));
    let common = reactive(useField(name, undefined, {
      initialValue: props.value,
    }));
    return {
      common,
      style,
      value,
      errorMessage,
      meta,
      labelStyle,
      handleChange,
      errorStyle
    };
  },
};
</script>

<style scoped lang="scss" >
.validating-field {
  position: relative;
  width: 100%;
  .label-block{
    margin-bottom: 5px;
  }
  input {
    border-color: $main-color;
    padding-left: 5px;
  }
  .has-error{
    background-color: rgba(255, 132, 132, 0.534) !important;
    border-color: rgba(255, 63, 63, 0.74) !important;
    &::placeholder{
      color: rgb(75, 75, 75) !important;
    }
  }
  .help-message{
    color: $additional-color;
  }
}
</style>