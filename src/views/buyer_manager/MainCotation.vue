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
        <b-button @click="addNewTodo" variant="primary"
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
              <tr  v-for="(todo, index) in todos" v-bind:key="todo.id" v-bind:title="todo.title" v-on:remove="todos.splice(index, 1)" class="table-light">
                <td>
                  <b-form-input
                    v-model="cod_prod"
                    type="search"
                    placeholder="..."
                  ></b-form-input>
                </td>
                <td></td>
                <td>
                  <b-form-input
                    v-model="cod_der"
                    type="search"
                    placeholder="..."
                  ></b-form-input>
                </td>
                <td></td>
                <td>
                  <b-form-input
                    v-model="colecao"
                    type="search"
                    placeholder="..."
                  ></b-form-input>
                </td>
                <td></td>
                <td>
                  <b-form-input
                    v-model="qtd"
                    type="search"
                    placeholder="..."
                  ></b-form-input>
                </td>
              </tr>
            </table>
          </b-col>
        </b-row>

        <br />
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

          <b-col md="4" sm="12">
            <br />
            <b-button variant="success">Gerar Cotação</b-button>
          </b-col>
        </b-row>
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
      newProduct: "",
      todos: [
        {
          id: "",
          cod_prod: "",
        },
      ],
      nextProductId: 2,
    };
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        cod_prod: this.newProduct,
      });
      this.newProduct = "";
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