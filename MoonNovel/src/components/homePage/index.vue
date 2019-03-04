<template>
  <v-app id="cmsApp">
    <v-navigation-drawer
      class="aside-shadow"
      width="200"
      fixed
      app
      v-model="drawer"
      permanent
      :mini-variant.sync="mini"
      mini-variant-width="48"
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="@/assets/user/default.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      dark
      flat
      fixed
      height="50"
      color="primary"
    >
      <v-toolbar-side-icon @click.stop="mini = !mini"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items flat>
        <v-menu
          bottom
          left
          content-class="dropdown-menu"
          offset-y
          transition="slide-y-transition">
          <v-btn
            slot="activator"
            color="primary"
            dark
          >
            Dropdown
          </v-btn>
          <v-list>
            <v-list-tile>11</v-list-tile>
            <v-list-tile>11</v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <v-content class="layout-content-box">
      <v-container fluid class="main-content">
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer
      color="white"
      fixed
      inset
      app
      class="main-footer"
    >
      <strong>Copyright &copy; 2017-{{ new Date().getFullYear() }} Oliver.wu</strong>
        {{$t('homePage.rights')}}
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'HomePage',
    data() {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        mini: false
      }
    },
    created() {
    }
  }
</script>

<style lang="scss" scoped>
  @import "index.scss";
</style>
