<template>
  <b-form-datepicker
    :disabled="disabled"
    :readonly="readonly"
    :placeholder="placeholder"
    :hidden="hidden"
    v-model="modelVal"
    :class="mergeConfig.class"
    :size="mergeConfig.size"
    @input="onInput"
    :locale="mergeConfig.locale"
    :min="mergeConfig.min"
    :max="mergeConfig.max"
    :state="mergeConfig.state"
  ></b-form-datepicker>
</template>

<script>
import ncformCommon from "@ncform/ncform-common";
import validateStateMixin from "@/mixins/validateStateMixin";
export default {
  mixins: [ncformCommon.mixins.vue.controlMixin, validateStateMixin],
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      inputVal: "",
      defaultConfig: {
        class: "",
        size: "md",
        locale: "en",
        min: null,
        max: null,
        state: null
      }
    };
  },
  methods: {
    _processModelVal(newVal) {
      return `${
        newVal
          ? this.mergeConfig.valueFormat
            ? newVal
            : +new Date(newVal)
          : ""
      }`;
    },
    onInput() {}
  },
  mounted() {
    this.defaultConfig.locale = window.__$ncform.lang;
  }
};
</script>

<style></style>
