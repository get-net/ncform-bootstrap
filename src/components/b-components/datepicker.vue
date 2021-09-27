<template>
  <div>
    <DatePicker
        :state="mergeConfig.state"
        :popover="popoverOnRight"
        :min-date="mergeConfig.min"
        :max-date="mergeConfig.max"
        :locale="mergeConfig.locale"
        @context="onContext"
        :size="mergeConfig.size"
        v-model="modelVal"
    >
      <template v-slot="{ inputValue, togglePopover }">
        <b-input-group :class="mergeConfig.class" :size="mergeConfig.size" class="flex">
          <b-form-input
              :value="inputValue"
              @change="onChange"
              :class="mergeConfig.class"
              v-if="mergeConfig.allowInput"
              :disabled="mergeConfig.readonly"
              :state="mergeConfig.state"
              ref="dateInput"
          />
          <b-input-group-append>
            <b-button @click="togglePopover" >
              <BIconCalendar />
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </template>
    </DatePicker>
  </div>
</template>

<script>
import ncformCommon from "@ncform/ncform-common";
import validateStateMixin from "@/mixins/validateStateMixin";
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import moment from 'moment/src/moment'
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
      popoverOnRight: { placement: "bottom-end" },
      inputVal: "",
      defaultConfig: {
        size: "md",
        locale: "en",
        min: null,
        max: null,
        state: null,
        format: "YYYY-MM-DD",
        allowInput: true,
        readonly: true
      }
    };
  },
  components: {
    Calendar,
    DatePicker
  },
  methods: {
    _processModelVal(newVal) {
      let m = moment(newVal);
      return m.toDate().toISOString();
    },
    onContext(ctx) {
      if (ctx.selectedDate) {
        let m = moment(ctx.selectedDate);
        this.inputVal = m.format(this.mergeConfig.format);
      }
    },
    onChange() {
      let inputData = this.$refs.dateInput.$data;
      let m = moment(inputData.vModelValue, this.mergeConfig.format);
      let ofRightLength = inputData.vModelValue.length === 10;
      let inRange = m.toDate() > this.mergeConfig.min &&
                    m.toDate() < this.mergeConfig.max

      let formattedModelValue = moment(this.modelVal)
          .format(this.mergeConfig.format);

      if (ofRightLength && inRange) {
        this.modelVal = m.toDate();

      } else {
        if (this.modelVal) {
          this.inputVal = formattedModelValue;
          inputData.localValue = formattedModelValue;
          inputData.vModelValue = formattedModelValue;
        } else {
          this.inputVal = "";
          inputData.localValue = "";
          inputData.vModelValue = "";
        }
      }
    }
  },
  mounted() {
    this.defaultConfig.locale = window.__$ncform.lang;
  }
};
</script>

<style></style>
