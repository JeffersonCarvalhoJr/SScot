<template>
  <main>
    <h2>Cadastro de Produto</h2>

    <div class="card" style="border-radius: 15px">
      <br />
      <div class="col-md-15 control-label">
        <p class="help-block"><h11>*</h11> Campo Obrigatório</p>
      </div>
      <b-container style="margin-top: 20px">
        <b-form>
          <b-row>
            <b-col cols="12" md="3" sm="12">
              <b-form-group label="Código da Família*"> 
                <b-form-input
                  v-model="cod_fam"
                  placeholder="Informe o código da familia da familia"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="3" sm="12">
              <b-form-group label="Descrição da Familia*">
                <b-form-input
                  v-model="desc_fam"
                  type="text"
                  placeholder="Informe a descrição da familia"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="12" md="3" sm="12">
              <b-form-group label="Código de Produto*">
                <b-form-input
                  v-model="cod_prod"
                  type="text"
                  placeholder="Informe o código de produto"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="3" sm="12">
              <b-form-group label="Descrição da Produto*">
                <b-form-input
                  v-model="desc_prod"
                  type="text"
                  placeholder="Informe a descrição do produto"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" md="3" sm="12">
              <b-form-group label="Código Derivação">
                <b-form-input
                  v-model="cod_der"
                  placeholder="Informe o código derivação"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="3" sm="12">
              <b-form-group label="Descrição Derivação">
                <b-form-input
                  v-model="desc_der"
                  placeholder="Informe a descrição da derivação"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="1" sm="12">
              <b-form-group label="U.M.*">
                <b-form-input
                  v-model="UM"
                  placeholder="U.M."
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="3" sm="12">
              <b-form-group label="Coleção">
                <b-form-input
                  v-model="colecao"
                  placeholder="Informe a coleção"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="15" sm="12">
              <b-form-group id="sexo" label="Estratégico">
                <b-form-select
                  id="estrategico"
                  v-model="estrategico"
                  :options="options"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <br />
          <b-button type="button" @click="register" variant="primary" class="mr-3"
            >Cadastrar</b-button
          >
          <b-button type="reset" variant="danger">Resetar</b-button>
        </b-form>
      </b-container>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      password: "",
      email: "",
      error: undefined,
      estrategico: null,
      options: [
        { value: "a", text: "Alavancado" },
        { value: "b", text: "Estratégico" },
        { value: "c", text: "Não Crítico" },
        { value: "d", text: "Gargalo" },
      ],
    };
  },
  methods: {
    register() {
      axios
        .post("http://localhost:5000/produtos", {
          cod_fam: this.cod_fam,
          desc_fam: this.desc_fam,
          cod_prod: this.cod_fam,
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "MainProduct" });
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
h11 {
  color: red;
}
</style>