<template>
  <div class="ncform-bootstrap-file">
    <b-form-file
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :hidden="hidden"
      v-model="modelVal"
      :class="mergeConfig.class"
      :drop-placeholder="mergeConfig.drop_placeholder"
      :multiple="mergeConfig.multiple"
      :browse-text="$nclang('browse')"
      :size="mergeConfig.size"
      :state="mergeConfig.state"
      :accept="mergeConfig.accept"
      @input="handleInput"
    ></b-form-file>
  </div>
</template>

<script>
import ncformCommon from "@ncform/ncform-common";
import validateStateMixin from "@/mixins/validateStateMixin";
export default {
  mixins: [ncformCommon.mixins.vue.controlMixin, validateStateMixin],
  i18nData: {
    en: {
      browse: 'Browse',
    },
    zh_cn: {
    },
    ru: {
      browse: 'Выбрать',
    }
  },
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      modelVal: [],
      defaultConfig: {
        class: "",
        drop_placeholder: "drop file here",
        multiple: false,
        size: "md",
        state: null,
        accept: "*"
      }
    };
  },
  methods: {
    handleInput(val) {
      if (!this.mergeConfig.multiple) {
        this.modelVal = [val];
        if (this.modelVal[0] === null) {
          this.modelVal = this.modelVal.pop();
        }
      }
    }
  }
};
</script>

<style></style>
