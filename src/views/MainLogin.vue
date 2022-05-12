<template>
<main>
  <section>
    <div id="conteiner" class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
                <h2 class="text">Sistema de Cotações - SSCOT</h2>
                <hr />
                <h3 class="text">Login</h3>

                <form>
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3cg"
                      class="form-control form-control-lg"
                      v-model="email"
                    />
                    <label class="form-label" for="form3Example3cg"
                      >Email</label
                    >
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4cg"
                      class="form-control form-control-lg"
                      v-model="password"
                    />
                    <label class="form-label" for="form3Example4cg"
                      >Senha</label
                    >
                  </div>
                  <div class="d-flex justify-content-center">
                    <button
                      type="button"
                      @click="login"
                      class="btn btn-primary"
                    >
                      Login
                    </button>
                  </div>

                  <p class="text-center text-muted mt-5 mb-0">
                    Esqueceu sua senha?
                    <a href="/recoverpassword" class="fw-bold text-body"><u>Clique aqui</u></a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      password: "",
      email: "",
      error: undefined,
    };
  },
  methods: {
    login() {
      axios
        .post("https://apiuserssscot.herokuapp.com/login", {
          password: this.password,
          email: this.email,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("name", res.data.name);
          localStorage.setItem("role", res.data.role);

          if (res.data.role == 0) {
            this.$router.push({
              name: "UserEdit",
              params: res.data.role,
            });
          } else {
            this.$router.push({
              name: "HomeModules",
            });
          }
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

.container {
  width: 100%;
  height: calc(100vh - 120px);
}


</style>