<template>
  <v-layout row wrap justify-center>
    <v-flex lg3>
      <v-card class="mt-5">
        <v-card-title class="grey--text-darken-4">
          <v-text-field
            readonly
            flat
            :value="formula.data.symbols.join('')"
            label="Equation"
            outline
            reverse
            class="calc-field"
          />
        </v-card-title>
        <v-card-text>
          <v-layout row wrap justify-space-between>
            <!-- CE, C, <- / -->
            <v-flex xs3>
              <v-btn @click="clearExisting" class="calc-field calc-btn">CE</v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn @click="clearAll" class="calc-field calc-btn">C</v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn @click="removeLastSymbol" class="calc-field calc-btn">
                <v-icon>backspace</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn @click="setOperation('÷')" class="calc-field calc-btn">÷</v-btn>
            </v-flex>

            <!-- 7 8 9 X -->
            <v-flex xs3>
              <v-btn @click="addSymbol(7)" class="calc-field calc-btn">7</v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn @click="addSymbol(8)" class="calc-field calc-btn">8</v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn @click="addSymbol(9)" class="calc-field calc-btn">9</v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn @click="setOperation('x')" class="calc-field calc-btn">x</v-btn>
            </v-flex>

            <!-- 4 5 6 - -->
            <v-flex xs3>
              <v-btn @click="addSymbol(4)" class="calc-field calc-btn">4</v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn @click="addSymbol(5)" class="calc-field calc-btn">5</v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn @click="addSymbol(6)" class="calc-field calc-btn">6</v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn @click="setOperation('-')" class="calc-field calc-btn">-</v-btn>
            </v-flex>

            <!-- 1 2 3 + -->
            <v-flex xs3>
              <v-btn @click="addSymbol(1)" class="calc-field calc-btn">1</v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn @click="addSymbol(2)" class="calc-field calc-btn">2</v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn @click="addSymbol(3)" class="calc-field calc-btn">3</v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn @click="setOperation('+')" class="calc-field calc-btn">+</v-btn>
            </v-flex>

            <!-- ± 0 . = -->
            <v-flex xs3>
              <v-btn @click="changeSign('±')" class="calc-field calc-btn">±</v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn @click="addSymbol(0)" class="calc-field calc-btn">0</v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn @click="addSymbol('.')" class="calc-field calc-btn">.</v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn @click="solve" class="calc-field calc-btn">=</v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import * as functions from "@/utils/functions";
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { State, Mutation, namespace } from "vuex-class";
import Screen from "../components/Screen";

const formula = namespace("formula/");

@Component({
  components: {
    Screen
  }
})
export default class Calculator extends Vue {
  @State formula;
  @formula.Mutation addSymbol;
  @formula.Mutation setOperation;
  @formula.Mutation clearExisting;
  @formula.Mutation clearAll;
  @formula.Mutation changeSign;
  @formula.Mutation removeLastSymbol;
  @formula.Mutation solve;
}
</script>
