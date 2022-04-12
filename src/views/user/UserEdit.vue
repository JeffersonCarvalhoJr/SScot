<template>
  <section class="vh-100" style="background-color: #212529">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
                <br />
                <h2>SSCot - Sistema de Cotações</h2>
                <h4>Gestão de Usuário</h4>
                <hr />
                <div fluid="sm">
                  <h6>Nome de Usuário</h6>
                  <b-form-group>
                    <b-form-input
                      id="input-1"
                      v-model="name"
                      :disabled="true"
                    ></b-form-input>
                  </b-form-group>
                  <br />
                  <h6>Email</h6>
                  <b-form-group>
                    <b-form-input
                      id="input-2"
                      v-model="email"
                      :disabled="true"
                    ></b-form-input>
                  </b-form-group>
                  <br /><br /><br />
                  <h6>Solicitar Representada - Insira o CNPJ</h6>
                  <b-form-input
                    v-model="cnpj"
                    v-mask="'##.###.###/####-##'"
                  ></b-form-input>
                  <br />
                  <b-button @click="findbycnpj()" variant="success"
                    >Solicitar agora!</b-button
                  >
                  
                </div>
                <br />
                <b-modal
                  ref="my-modal"
                  hide-footer
                  title="Nova Representada"
                >
                  <div class="d-block text-center">
                    <h4>Você deseja solicitar a representada de {{ supplier }}?</h4>

                    <b-row class="mb-2">
                      <b-col>
                        <b-button v-if="msgErro==''"
                          class="mt-2"
                          variant="success"
                          @click="includeCNPJ(cnpj, supplier)"
                          >Sim</b-button
                        >
                        <h5>{{msgErro}}</h5>
                      </b-col>
                    </b-row>
                  </div>
                </b-modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
        "https://apiuserssscot.herokuapp.com/user/" +
          localStorage.getItem("id"),
        req
      )
      .then((res) => {
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
      cnpj: "",
      supplier: "",
      msgErro: "",
      razao_social: "",
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
          "https://apiuserssscot.herokuapp.com/user",
          {
            name: this.name,
            email: this.email,
            id: this.id,
          },
          req
        )
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "Users" });
        })
        .catch((err) => {
          var msgErro = err.response.data.err;
          this.error = msgErro;
        });
    },

    findbycnpj() {
      var cnpjtreat;
      cnpjtreat = this.cnpj.replaceAll("/", "");
      cnpjtreat = cnpjtreat.replaceAll("-", "");
      cnpjtreat = cnpjtreat.replaceAll(".", "");
      const config = {
        method: "get",
        url: "https://api.cnpja.com/office/" + cnpjtreat,
        headers: {
          Authorization:
            "df691c4f-9148-4ab7-9cdc-7c55622c1376-52756d1a-10b4-4227-98fc-eefc218f774f",
        },
      };

      axios(config)
        .then((response) => {
          this.supplier = response.data.company.name;
          // console.log(this.supplier);
          this.msgErro = '',
          this.$refs["my-modal"].show();
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    includeCNPJ(cnpj, razao_social) {   

      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios
        .post(
          "https://apiuserssscot.herokuapp.com/user/cnpj",
          {
            razao_social: razao_social,
            user_id: localStorage.getItem("id"),
            cnpj: cnpj,
          },
          req
        )
        .then((res) => {
          console.log(razao_social);
          console.log(res);
          this.$router.push({ name: "HomeModules" });
        })
        .catch((err) => {
          this.msgErro = err.response.data.err;
        //  this.$refs["my-modal"].hide();
        });
    }
    
  },
};
</script>

<style scoped>
h4 {
  color: black;
}

h2 {
  color: black;
}

h5 {
  color: red;
}

h6 {
  color: black;
}



</style>