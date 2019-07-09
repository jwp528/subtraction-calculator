<template>
  <v-app :dark="settings.dark">
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content @keyup="calcKey">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import { State, namespace } from "vuex-class";
import Screen from "./components/Screen.vue";

const settings = namespace("settings/");
const formula = namespace("formula/");

@Component()
export default class App extends Vue {
  @State settings;
  @settings.Mutation update;

  @State formula;
  @formula.Mutation addSymbol;
  @formula.Mutation setOperation;
  @formula.Mutation clearExisting;
  @formula.Mutation clearAll;
  @formula.Mutation changeSign;
  @formula.Mutation removeLastSymbol;
  @formula.Mutation solve;

  calcKey(board) {
    switch (board.key) {
      case "x":
      case "*":
        this.setOperation("x");
        break;
      case "÷":
      case "/":
        this.setOperation("÷");
        break;
      case "+":
        this.setOperation("+");
        break;
      case "-":
        this.setOperation("-");
        break;
      case "Enter":
        this.solve();
        break;
      case "Backspace":
        this.removeLastSymbol();
        break;
      case "Delete":
        this.clearExisting();
        break;
      default:
        if (!isNaN(board.key) || board.key === ".") {
          this.addSymbol(board.key);
        }
        break;
    }
  }

  created() {
    document.addEventListener("keydown", this.calcKey);
  }
}
</script>
