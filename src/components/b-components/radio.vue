<template>
  <div>
    <b-form-group v-slot="{ ariaDescribedby }" :class="mergeConfig.class">
      <div v-if="mergeConfig.enumSource">
        <b-form-radio-group
          :disabled="disabled"
          :readonly="readonly"
          :placeholder="placeholder"
          :hidden="hidden"
          v-model="modelVal"
          :options="mergeConfig.enumSource"
          :aria-describedby="ariaDescribedby"
          :name="mergeConfig.name"
          :size="mergeConfig.size"
          :stacked="mergeConfig.stacked"
        ></b-form-radio-group>
      </div>
      <div v-else>
        <b-form-radio
          :disabled="disabled"
          :readonly="readonly"
          :placeholder="placeholder"
          :hidden="hidden"
          v-model="modelVal"
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          :value="true"
          :size="mergeConfig.size"
          >{{ $nclang("yes") }}</b-form-radio
        >
        <b-form-radio
          :disabled="disabled"
          :readonly="readonly"
          :placeholder="placeholder"
          :hidden="hidden"
          v-model="modelVal"
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          :value="false"
          :size="mergeConfig.size"
          >{{ $nclang("no") }}</b-form-radio
        >
      </div>
    </b-form-group>
  </div>
</template>

<script>
import ncformCommon from "@ncform/ncform-common";
export default {
  mixins: [ncformCommon.mixins.vue.controlMixin],
  i18nData: {
    en: {
      yes: "Yes",
      no: "No"
    },
    ru: {
      yes: "Да",
      no: "Нет"
    }
  },
  data() {
    return {
      selected: "",
      defaultConfig: {
        class: "",
        size: "md",
        enumSource: null,
        name: "radios",
        stacked: false
      }
    };
  }
};
</script>

<style></style>
