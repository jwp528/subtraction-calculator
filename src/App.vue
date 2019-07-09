<template>
  <v-app :dark="settings.dark">
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
     <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import {Vue, Component, Prop} from 'vue-property-decorator';
import {State, namespace} from 'vuex-class';
import Screen from './components/Screen.vue';

const settings = namespace('settings/');

@Component()
export @dec class App extends Vue {
  @State settings;
}
</script>
