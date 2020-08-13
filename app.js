Vue.component("click-counter", {
  template: "#click-counter-template",

  data() {
    return {
      count: 0,
    };
  },
});

let PlanComponent = {
  template: "#plan-template",
  props: {
    name: {
      type: String,
      default: "pmarimuthu",
    },
  },
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    onSelect() {
      this.$emit('onSelect', this.name);
      this.selected = !this.selected;
    },
  },
};

let PlanPickerComponent = {
  template: "#plan-picker-template",
  components: {
    plan: PlanComponent,
  },
  data() {
    return {
      plans: ["Student", "Professional", "Expert"],
    };
  },
};

new Vue({
  el: "#app",
  components: {
    planpicker: PlanPickerComponent,
  },
  data: {},
});
