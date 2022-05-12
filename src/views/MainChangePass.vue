<template>
  <main>
    <section>
      <div
        id="conteiner"
        class="mask d-flex align-items-center h-100 gradient-custom-3"
      >
        <div class="container">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style="border-radius: 15px">
                <div class="card-body p-5">
                  <h2 class="text">Sistema de Cotações - SSCOT</h2>
                  <hr />
                  <h3 class="text">Recupere sua senha</h3>

                  <form>
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
                        @click="change"
                        class="btn btn-primary"
                      >
                        Alterar senha! 
                      </button>                     
                    </div>
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
      token: "",
      password: "",
      msgErro: "",
      error:"",
    }; 
  },
  methods: {
    change() {
      axios
        .post("https://apiuserssscot.herokuapp.com/changepassword", {
        token: this.$route.params.token,
        password: this.password,        
        })
        .then((res) => {
          console.log(res);
          alert("Senha Alterada!");
          this.$router.push({ name: "MainLogin" });
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