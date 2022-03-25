<template>
  <div class="w-85 p-4">
    <br />
    <h2>Manutenção de Usuários</h2>
    <br />
    <table class="table table-bordered">
      <thead class="table table-dark">
        <tr>
          <th scope="col">Nome de Usuário</th>
          <th scope="col">E-mail Cadastro</th>
          <th scope="col">Permissão</th>
          <th scope="col">Data de Cadastro</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role | processRole }}</td>
          <td>{{ user.created_at }}</td>
          <td>
            <router-link
              :to="{ name: 'MainUserEdit', params: { id: user.id } }"
            >
              <button class="btn btn-warning">Editar</button></router-link
            >
            |
            <button class="btn btn-danger" @click="showModalUser(user.id)">
              Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <b-modal ref="my-modal" hide-footer title="Exclusão de Cadastro de Usuário">
      <div class="d-block text-center">
        <h4>Você deseja realmente deseja excluir este cadastro?</h4>
      </div>
        <div style="display: flex; justify-content: flex-end">
      <b-button
        class="mt-2"
        variant="btn btn-danger"
        @click="deleteUser()"
        >Sim</b-button></div>
    </b-modal>    
  </div>
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
      .get("http://localhost:8686/user", req)
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
      modalShow: false,
      deleteUserId: -1,
    };
  },
  methods: {
    hideModal() {
      this.showModal = false;
      this.$refs['my-modal'].hide()
    },
    showModalUser(id) {
      this.$refs["my-modal"].show();
      this.deleteUserId = id;
      this.modalShow = true;
    },
    deleteUser() {
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios
        .delete("http://localhost:8686/user/" + this.deleteUserId, req)
        .then((res) => {
          console.log(res);
         this.$refs['my-modal'].hide()
          this.users = this.users.filter((u) => u.id != this.deleteUserId);
        })
        .catch((err) => {
          console.log(err);
          this.$refs['my-modal'].hide()
        });
    },
  },
  filters: {
    processRole: function (value) {
      if (value == 0) {
        return "Usuário";
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
</style>

