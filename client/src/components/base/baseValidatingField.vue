<template>
  <div
    class="validating-field"
  >
    <div
      :style="labelStyle"
      class="label-block"
    >
      <label :for="name">{{ label }}</label>
    </div>
    <input
      :id="name"
      :name="name"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :style="style"
      :class="{ 'has-error': !!errorMessage}"
      @input="handleChange"
      @blur="handleBlur"
    >

    <p
      v-show="errorMessage"
      class="help-message"
      :style="errorStyle"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import { useField } from 'vee-validate'
import { toRef } from 'vue'
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    successMessage: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '30px'
    },
    outline: {
      type: String,
      default: 'none'
    },
    fontSize: {
      type: String,
      default: '20px'
    },
    borderRadius: {
      type: String,
      default: '5px'
    },
    labelPosition: {
      type: String,
      default: 'left'
    },
    labelFontSize: {
      type: String,
      default: '20px'
    },
    errorFontSize: {
      type: String,
      default: '18px'
    }
  },
  setup (props) {
    // eslint-disable-next-line
    const style = {
      width: props.width,
      height: props.height,
      outline: props.outline,
      'font-size': props.fontSize,
      'border-radius': props.borderRadius
    }
    const labelStyle = {
      'text-align': props.labelPosition,
      'font-size': props.labelFontSize
    }
    const errorStyle = {
      'font-size': props.errorFontSize
    }
    const name = toRef(props, 'name')
    const {
      value,
      errorMessage,
      handleBlur,
      handleChange,
      meta
    } = useField(name, undefined, {
      initialValue: props.value
    })
    console.log(value)
    return {
      style,
      errorMessage,
      meta,
      labelStyle,
      handleChange,
      errorStyle,
      value,
      handleBlur
    }
  }
}
</script>

<style scoped lang="scss">
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
