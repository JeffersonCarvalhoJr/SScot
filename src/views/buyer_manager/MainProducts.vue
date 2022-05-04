<template>
  <main>
    <h2>Cadastro de Produto</h2>

    <div class="card p-5 col-sm-8" style="border-radius: 15px">
      <div class="col-md-15 control-label"></div>
      <b-container style="margin-top: 20px">
        <b-form @submit="onSubmit">
          <b-row>
            <b-col cols="12" md="3" sm="12">
              <b-form-group label="Código da Família*">
                <b-form-input
                  v-model="cod_fam"
                  placeholder="Informe o código da familia da familia"
                  required
                  maxlength="4"
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
                  maxlength="45"
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
                  maxlength="10"
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
                  maxlength="45"
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
                  maxlength="5"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="3" sm="12">
              <b-form-group label="Descrição Derivação">
                <b-form-input
                  v-model="desc_der"
                  placeholder="Informe a descrição da derivação"
                  maxlength="45"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="3" sm="12">
              <b-form-group label="U.M.*">
                <b-form-input
                  v-model="UM"
                  placeholder="Informe a unidade de medida"
                  required
                  maxlength="3"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="3" sm="12">
              <b-form-group label="Coleção">
                <b-form-input
                  v-model="colecao"
                  placeholder="Informe a coleção"
                  maxlength="13"
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
          <b-button
            type="submit"
            style="margin-right: 10px"
            @click="register"
            variant="primary"
            class="mr-3"
            >Cadastrar</b-button
          >
          <b-button type="reset" variant="danger">Resetar</b-button>
        </b-form>
      </b-container>
      <br>
      <h5>Cadastro de Produtos em Lote</h5>
      <div>
        <input type="file" @change="uploadFile" ref="file" />
        <b-button 
        type="submit" 
        style="margin-right: 10px"
        variant="success"
        @click="submitFile">Upload!</b-button>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cod_fam: "",
      desc_fam: "",
      cod_prod: "",
      desc_prod: "",
      cod_der: "",
      desc_der: "",
      UM: "",
      colecao: "",
      estrategico: null,
      options: [
        { value: null, text: "Selecione uma opção" },
        { value: "Alavancado", text: "Alavancado" },
        { value: "Estratégico", text: "Estratégico" },
        { value: "Não Crítico", text: "Não Crítico" },
        { value: "Gargalo", text: "Gargalo" },
      ],
    };
  },
  methods: {
    onSubmit() {
      alert("Produto Cadastrado");
    },
    register() {
      axios
        .post("http://localhost:5000/produtos", {
          cod_fam: this.cod_fam,
          desc_fam: this.desc_fam,
          cod_prod: this.cod_fam,
          desc_prod: this.desc_prod,
          cod_der: this.cod_der,
          desc_der: this.desc_der,
          UM: this.UM,
          colecao: this.colecao,
          estrategico: this.estrategico,
        })
        .then((res) => {
          console.log(res);
          // this.$router.push({ name: "MainProduct" });
        })
        .catch((err) => {
          var msgErro = err.response.data.err;
          this.error = msgErro;
        });
    },
    uploadFile() {
      this.Images = this.$refs.file.files[0];
    },
    submitFile() {
      const formData = new FormData();
      formData.append("file", this.Images);
      const headers = { "Content-Type": "multipart/form-data" };
      axios
        .post("http://localhost:5000/upload", formData, { headers })
        .then((res) => {
          res.data.files; // binary representation of the file
          res.status; // HTTP status
        });
    },
  },
};
</script>

<style scoped>
h2 {
  color: var(--color-text-light);
}

.card {
  margin: auto;
  padding: 10px;
}
</style>