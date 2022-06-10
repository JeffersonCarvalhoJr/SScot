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
            v-model="selectedSuppliers"
            :options="users"
            :multiple="true"
            track-by="sup_id"
            label="razao_social"
            placeholder=""
          ></multiselect>
        </b-form-group>
      </b-row>
      <br />
      <b-col md="20" sm="12">
        <b-button @click="addNewline" variant="primary"
          >Adicionar Produto</b-button
        >
        |
        <b-button @click="removeNewLine" variant="danger"
          >Remover Produto</b-button
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
                    @blur="findDescProdByCodProd()"
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
                    @blur="findDescDerbyCodDer()"
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
                  <select
                    class="form-control"
                    id="colecao"
                    v-model="newColecao"
                  >
                    <option>OI2022</option>
                    <option>PV20222023</option>
                  </select>
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

                <tr
                  v-for="product in products"
                  :key="product.id"
                  class="table-light"
                >
                  <td>{{ product.cod_prod }}</td>
                  <td>{{ product.desc_prod }}</td>
                  <td>{{ product.cod_der }}</td>
                  <td>{{ product.desc_der }}</td>
                  <td>{{ product.colecao }}</td>
                  <td>{{ product.um }}</td>
                  <td>{{ product.qtd }}</td>
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
                v-model="emailCheckbox"
                name="checkbox-1"
              >
                E-mail
              </b-form-checkbox>
            </b-row>
          </b-col>

          <!-- botao -->

          <b-col md="4" sm="12">
            <br />
            <b-button @click="newCotation()" variant="success"
              >Gerar Cotação</b-button
            >
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
        // console.log(res);
        // console.log(this.users);
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
      selectedSuppliers: null,
      users: [],
      products: [],
      newCodProd: "",
      newDescProd: "",
      newCodDer: "",
      newDescDer: "",
      newColecao: "",
      newUM: "",
      newQTD: "",
      nextProductId: 2,
      emailCheckbox: true,
      findProduct: [],
      findDer: [],
    };
  },
  methods: {
    findDescProdByCodProd() {
      axios
        .get("https://apiproducts-sscot.herokuapp.com/produto/" + this.newCodProd)
        .then((res) => {
          this.findProduct = res.data;
          this.newDescProd = res.data[0].desc_prod;
          this.newUM = res.data[0].UM;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    findDescDerbyCodDer() {
      this.findDer = this.findProduct.filter(
        (findProduct) => findProduct.cod_der == this.newCodDer
      );
      this.newDescDer = this.findDer[0].desc_der;
      console.log(this.newDescDer);
    },

    newCotation() {

      console.log(this.products)
      console.log(this.selectedSuppliers)

        if (this.selectedSuppliers == null || this.selectedSuppliers.length == 0 || this.products.length == 0){
          alert("Não é possivel gerar nova cotação sem fornecedores ou Produtos cadastrados!")
        
        
        } else{      

      // https://apiproducts-sscot.herokuapp.com/cotation
      // http://localhost:5000/cotation
      axios
        .post("https://apiproducts-sscot.herokuapp.com/cotation", {
          users: this.selectedSuppliers,
          products: this.products,
          notifyEmail: this.emailCheckbox,
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "HomeModules" });
        })
        .catch((err) => {
          var msgErro = err.response.data.err;
          this.error = msgErro;
        });

      console.log(this.products);
      console.log(this.selectedSuppliers);
      console.log(this.emailCheckbox);
    }},
    addNewline: function () {
      this.products.push({
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
    },
    removeNewLine() {
      this.products.pop();
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