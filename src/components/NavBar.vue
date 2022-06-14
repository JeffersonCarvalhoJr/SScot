<template>


  <header>
    <b-navbar type="navbar navbar-dark bg-dark">
      <b-navbar-nav>
        <b-nav-item href="/">Página Inicial</b-nav-item>
        <b-nav-item href="/admin/users">Usuários</b-nav-item>
        <b-nav-item href="/home">Módulos</b-nav-item>
        <b-nav-item v-if="message != 'null'" @click="handleLogout">Sair</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </header>


</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      message: localStorage.getItem("token"),
      role: localStorage.getItem("role"),
    };
  },
  methods: {
    handleLogout() {
      localStorage.setItem("token", "null");
      this.$router.go()
    },
  },
};
</script>

<style scoped>

header {
  width: 100%;
}


</style>