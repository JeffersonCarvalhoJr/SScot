<template>
<main>

<div class="text-top"> Aprovação de Representantes</div>

 <table class="table table-bordered">
          <thead class="table table-light">
            <tr>
              <th scope="col">Nome de Usuário</th>
              <th scope="col">E-mail Cadastro</th>
              <th scope="col">Permissão</th>
              <th scope="col">Data de Cadastro</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id" class="table-light">
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.role | processRole }}</td>
              <td>{{ user.created_at }}</td>
              <td>
                <router-link
                  :to="{ name: 'MainUserEdit', params: { id: user.id } }"
                >
                  <button style="margin-right: 10px" class="btn btn-warning">
                    Editar
                  </button></router-link
                >

                <button
                  style="margin-right: 10px"
                  class="btn btn-danger"
                  @click="showModalUserDelete(user.id)"
                >
                  Deletar
                </button>

                <b-button
                  style="margin-right: 10px"
                  @click="showModalUserRole(user.id)"
                >
                  Alçada
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>

        <b-modal
          ref="my-modaldelete"
          hide-footer
          title="Exclusão de Cadastro de Usuário"
        >
          <div class="d-block text-center">
            <h4>Você deseja realmente deseja excluir este cadastro?</h4>

            <b-row class="mb-2">
              <b-col>
                <b-button
                  class="mt-2"
                  variant="btn btn-danger"
                  @click="deleteUser()"
                  >Sim</b-button
                >
              </b-col>
            </b-row>
          </div>
        </b-modal>

        <b-modal ref="my-modalrole" hide-footer title="Alterar Alçada">
          <div class="d-block text-center">
            <h4>Escolha a alçada desse usuário:</h4>

            <b-row class="mb-1">
              <b-col>
                <b-button
                  class="changerole"
                  variant="primary"
                  @click="changeRoleUser()"
                  >Usuário</b-button
                >
                |
                <b-button
                  class="changerole"
                  variant="primary"
                  @click="changeRoleBuyer()"
                  >Comprador</b-button
                >
                |
                <b-button
                  class="changerole"
                  variant="primary"
                  @click="changeRoleManager()"
                  >Gestor de Compras</b-button
                >
              </b-col>
            </b-row>
          </div>
        </b-modal>

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
      .get("https://apiuserssscot.herokuapp.com/admin", req)
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
    };
  },
  methods: {

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
}
</script>

<style scoped>
td {
  justify-content: center;
  align-items: center;
}
.text-top{
  color: var(--color-text-light);
  font-size: 28px;
}

table{
  width: 85%;
}


</style>

