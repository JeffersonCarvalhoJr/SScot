<template>
  <main>
    <h2>Cadastro de Cotação</h2>

    <div class="card p-5 col-sm-8" style="border-radius: 15px">
      <header style="text-align: left">
        <h4>Cotação N°: {{ cotation }}</h4>
      </header>

      <b-row>
        <b-form-group label="Fornecedores:">
          <b-form-input
            v-model="forn_name"
            type="search"
            placeholder="Procure os fornecedores para cotação"
          ></b-form-input>
          <br />
          <b-button
            type="submit"
            style="margin-right: 10px"
            @click="register"
            variant="primary"
            class="mr-3"
            >Procurar</b-button
          >
        </b-form-group>
      </b-row>

      <b-col md="4" sm="12">
        <h4>
          {{ value[0] }}<br />
          {{ value[1] }}<br />
          {{ value[2] }}
        </h4>
      </b-col>
      <br />
      <b-form>
        <b-row>
          <b-col>
            <table class="table table-bordered">
              <thead class="table table-light">
                <tr>
                  <th scope="col">Código de Produto*</th>
                  <th scope="col">Descrição de Produto</th>
                  <th scope="col">Código Derivação*</th>
                  <th scope="col">Descrição Derivação</th>
                  <th scope="col">Coleção</th>
                  <th scope="col">U.M.</th>
                  <th scope="col">Quantidade</th>
                </tr>
              </thead>
            </table>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4" sm="12">
            <b-row style="text-align: left">
              <h6>Notificar Fornecedores:</h6>
              <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
              >
                E-mail
              </b-form-checkbox>

              <br />
              <b-form-checkbox
                id="checkbox-2"
                v-model="status"
                name="checkbox-2"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Whatsapp
              </b-form-checkbox>
            </b-row>
          </b-col>

          <b-col md="4" sm="12">
            <b-button>Gerar Cotação</b-button>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </main>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      cotation: 156.554,
      value: ["Fornecedor 1", "Fornecedor 2", "Fornecedor 3"],
    };
  },
  methods: {},
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