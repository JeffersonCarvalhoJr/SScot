<template>
  <main>
    <div class="mask d-flex align-items-center h-25 gradient-custom-3">
      <div class="container h-100">
        <br />
        <h2>Aprovar Representantes</h2>
        <br />
        <table class="table table-bordered">
          <thead class="table table-light">
            <tr>
              <th scope="col">Nome de Usuário</th>
              <th scope="col">E-mail Cadastro</th>
              <th scope="col">CNPJ</th>
              <th scope="col">Razão Social</th>
              <th scope="col">Data Solicitação</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id" class="table-light">
              <td v-if="user.cnpj != null && user.aproved == '0'">{{ user.name }}</td>
              <td v-if="user.cnpj != null && user.aproved == '0'">{{ user.email }}</td>
              <td v-if="user.cnpj != null && user.aproved == '0'">{{ user.cnpj }}</td>
              <td v-if="user.cnpj != null && user.aproved == '0'">{{ user.razao_social }}</td>
              <td v-if="user.cnpj != null && user.aproved == '0'">{{ user.sup_created_at }}</td>
              <td v-if="user.cnpj != null && user.aproved == '0'">
                <button
                  style="margin-right: 10px"
                  class="btn btn-danger"
                  @click="aproveCNPJ(user.cnpj, 2, user.sup_id)"
                >
                  Reprovar
                </button>

                <b-button
                  class="btn btn-success"
                  style="margin-right: 10px"
                  @click="aproveCNPJ(user.cnpj, 1, user.sup_id)"
                >
                  Aprovar
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>
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
      .get("https://apiuserssscot.herokuapp.com/admin/cnpj", req)
      .then((res) => {
        console.log(res);
        console.log(this.users);
        this.users = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      users: [],
      cnpj: "",
    };
  },
  methods: {
    aproveCNPJ(cnpj, definition, sup_id) {
      this.cnpj = cnpj;
      this.definition = definition;
      this.sup_id = sup_id; 

      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      axios
        .put(
          "https://apiuserssscot.herokuapp.com/user/cnpj",
          {
            cnpj: this.cnpj,
            definition: this.definition,
            sup_id: this.sup_id,

          },
          req
        )
        .then((res) => {
          console.log(res);
          this.$router.go()
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  filters: {
    processRole: function (value) {
      if (value == 0) {
        return "Representante";
      } else if (value == 1) {
        return "Comprador";
      } else if (value == 2) {
        return "Gestor de Compras";
      }
    },
  },
};
</script>

<style scoped>
td {
  justify-content: center;
  align-items: center;
}
h2 {
  color: var(--color-text-light);
}
</style>

