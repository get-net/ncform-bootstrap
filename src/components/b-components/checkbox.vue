<template>
  <div v-if="mergeConfig.options">
    <b-form-group v-slot="{ ariaDescribedby }" :class="mergeConfig.class">
      <b-form-checkbox-group
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        v-model="modelVal"
        :options="mergeConfig.options"
        :aria-describedby="ariaDescribedby"
        :name="mergeConfig.name"
        :size="mergeConfig.size"
        :stacked="mergeConfig.stacked"
      ></b-form-checkbox-group>
    </b-form-group>
  </div>
  <div v-else>
    <b-form-checkbox
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :hidden="hidden"
      v-model="modelVal"
      :name="mergeConfig.name"
      :size="mergeConfig.size"
      :class="mergeConfig.class"
    >
    </b-form-checkbox>
  </div>
</template>

<script>
import ncformCommon from "@ncform/ncform-common";
export default {
  mixins: [ncformCommon.mixins.vue.controlMixin],
  data() {
    return {
      inputVal: "",
      defaultConfig: {
        size: "md",
        name: "",
        stacked: false
      }
    };
  }
};
</script>

<style></style>
