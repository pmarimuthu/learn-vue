Vue.component("click-counter", {
  template: "#click-counter-template",

  data() {
    return {
      count: 0,
    };
  },
});

Vue.component("plan", {
  template: "#plan-template",
  props: {
    name: {
      type: String,
      default: "pmarimuthu",
      required: true,
    },
  },
});

new Vue({
  el: "#app",
  data: {
    plans: ["Student", "Professional", "Expert"],
  },
});
