<template>
  <b-navbar type="navbar navbar-dark bg-dark">
    <b-navbar-nav>
      <b-nav-item v-if="message == 'null'" href="/">Página Inicial</b-nav-item>
      <b-nav-item v-if="message == 'null'" href="/login">Login</b-nav-item>
      <b-nav-item v-if="message == 'null'" href="/register">Registro</b-nav-item>
      <b-nav-item v-if="message != 'null'" href="/admin/users">Usuários</b-nav-item>
      <b-nav-item v-if="message != 'null'" href="/home">Módulos</b-nav-item>
      <b-nav-item v-if="message != 'null'" @click="handleLogout" href="/login"
        >Sair</b-nav-item
      >
    </b-navbar-nav>
  </b-navbar>
</template>



<script>
import Userfront from "@userfront/core";

Userfront.init("demo1234");

export default {
    name: "NavBar",
    data(){
        return {
          message: localStorage.getItem("token")
    }
    },
  methods: {
    handleLogout() {
      localStorage.setItem("token", "null");
    },
  },
};
</script>