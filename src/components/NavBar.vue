<template>
<div>
  <b-navbar type="navbar navbar-dark bg-dark">
    <b-navbar-nav>
      <b-nav-item href="/">Página Inicial</b-nav-item>
      <b-nav-item href="/login">Login</b-nav-item>
      <b-nav-item href="/register">Registro</b-nav-item>
      <b-nav-item href="/admin/users">Usuários</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
