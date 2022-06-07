<template>
  <main>
      <h2>Edição de usuário</h2>
    <div class="card p-5 col-sm-8" style="border-radius: 15px">
      <div class="container h-100">
        <h5 class="text">Editar Nome</h5>
        <b-form-input
          type="text"
          placeholder="Nome de Usuário"
          class="input"
          v-model="name"
        ></b-form-input>
        <br>
        <h5 class="text">Editar E-mail</h5>
        <b-form-input
          type="email"
          placeholder="email@email.com"
          class="input"
          v-model="email"
        ></b-form-input>
        <hr />
        <b-button class="btn btn-warning" @click="update">Editar</b-button>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  created() {
    var req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios
      .get(
        "https://apiuserssscot.herokuapp.com/user/" + this.$route.params.id,
        req
      )
      .then((res) => {
        console.log(res);

        this.name = res.data.name;
        this.email = res.data.email;
        this.id = res.data.id;
      })
      .catch((err) => {
        console.log(err.response);
        this.$router.push({ name: "Users" });
      });
  },
  data() {
    return {
      name: "",
      email: "",
      id: -1,
      error: undefined,
    };
  },
  methods: {
    update() {
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      axios
        .put(
          "https://apiuserssscot.herokuapp.com/admin",
          {
            name: this.name,
            email: this.email,
            id: this.id,
          },
          req
        )
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "np" });
        })
        .catch((err) => {
          var msgErro = err.response.data.err;
          this.error = msgErro;
        });
    },
  },
};
</script>

<style scoped>
h2 {
  color: var(--color-text-light);
}
h4 {
  color: var(--color-text-dark);
}
.card {
  margin: auto;
  padding: 10px;
}

</style>