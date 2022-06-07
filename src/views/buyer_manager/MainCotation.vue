<template>
  <main>
    <h2>Cadastro de Cotação</h2>

    <div class="card p-5 col-sm-8" style="border-radius: 15px">
      <header style="text-align: left">
        <h4>Cotação N°: {{ cotation }}</h4>
      </header>

      <b-row>
        <b-form-group label="Selecione os Fornecedores:">
          <multiselect
            v-model="value"
            :options="users"
            :multiple="true"
            :custom-label="razaoSocial"
            placeholder="Adicione um novo fornecedor"
          ></multiselect>
        </b-form-group>
      </b-row>
      <br />
      <b-col md="20" sm="12">
        <b-button @click="addNewline" variant="primary"
          >Adicionar novo produto</b-button
        >
        <br /><br />
      </b-col>
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

              <tbody>
                <td>
                  <b-form-input
                    type="text"
                    v-model="newCodProd"
                    id="new-product"
                    placeholder="..."
                  ></b-form-input>
                </td>
                <td>
                  <b-form-input
                    type="text"
                    v-model="newDescProd"
                    id="new-product"
                    placeholder="..."
                  ></b-form-input>
                </td>
                <td>
                  <b-form-input
                    type="text"
                    v-model="newCodDer"
                    id="new-CODDER"
                    placeholder="..."
                  ></b-form-input>
                </td>
                <td>
                  <b-form-input
                    type="text"
                    v-model="newDescDer"
                    id="new-DESCDER"
                    placeholder="..."
                  ></b-form-input>
                </td>
                <td>
                  <b-form-input
                    type="text"
                    v-model="newColecao"
                    id="new-COLECAO"
                    placeholder="..."
                  ></b-form-input>
                </td>
                <td>
                  <b-form-input
                    type="text"
                    v-model="newUM"
                    id="new-UM"
                    placeholder="..."
                  ></b-form-input>
                </td>
                <td>
                  <b-form-input
                    type="text"
                    v-model="newQTD"
                    id="new-QTD"
                    placeholder="..."
                    @keyup.enter="addNewline"
                  ></b-form-input>
                </td>

                <tr v-for="todo in todos" :key="todo.id" class="table-light">
                  <td>{{ todo.cod_prod }}</td>
                  <td>{{ todo.desc_prod }}</td>
                  <td>{{ todo.cod_der }}</td>
                  <td>{{ todo.desc_der }}</td>
                  <td>{{ todo.colecao }}</td>
                  <td>{{ todo.um }}</td>
                  <td>{{ todo.qtd }}</td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>

        <!-- Notificação -->

        <b-row>
          <b-col md="8" sm="12">
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

          <!-- botao -->

          <b-col md="4" sm="12">
            <br />
            <b-button variant="success">Gerar Cotação</b-button>
          </b-col>
        </b-row>

        <br />
      </b-form>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";

export default {
  created() {
    var req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios
      .get("https://apiuserssscot.herokuapp.com/cnpj", req)
      .then((res) => {
        console.log(res);
        console.log(this.users);
        this.users = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  components: { Multiselect },
  data() {
    return {
      cotation: 156.554,
      value: null,
      users: [],
      todos: [],
      newCodProd: "",
      newDescProd: "",
      newCodDer: "",
      newDescDer: "",
      newColecao: "",
      newUM: "",
      newQTD: "",
      nextProductId: 1,
    };
  },
  methods: {
    addNewline: function () {
      this.todos.push({
        id: this.nextProductId++,
        cod_prod: this.newCodProd,
        desc_prod: this.newDescProd,
        cod_der: this.newCodDer,
        desc_der: this.newDescDer,
        colecao: this.newColecao,
        um: this.newUM,
        qtd: this.newQTD,
      });
      this.newCodProd = "";
      this.newDescProd = "";
      this.newCodDer = "";
      this.newDescDer = "";
      this.newColecao = "";
      this.newUM = "";
      this.newQTD = "";
      console.log(this.todos);
    },
    razaoSocial({ razao_social }) {
      return `${razao_social}`;
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

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