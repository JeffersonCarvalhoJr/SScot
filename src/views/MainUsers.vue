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
            <button
              class="btn btn-danger"
              @click="showModalUserDelete(user.id)"
            >
              Deletar
            </button>
            |
            <b-button @click="showModalUserRole(user.id)"> Alçada </b-button>
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
      
      <b-row class="mb-1">
        <b-col>
          <b-button class="mt-2" variant="btn btn-danger" @click="deleteUser()"
            >Sim</b-button>          
        </b-col>
      </b-row>
      </div>
    </b-modal>

    <b-modal ref="my-modalrole" hide-footer title="Alterar Alçada">
      <div class="d-block text-center">
        <h4>Escolha a alçada desse usuário:</h4>

        <b-row class="mb-1">
          <b-col>
            <b-form-select
              v-model="newRole"
              :options="role"
            ></b-form-select>
            <br />
            <b-button class="mt-2" variant="primary" @click="changeRole()"
              >Salvar</b-button
            >
          </b-col>
        </b-row>
      </div>
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
      .get("https://apiuserssscot.herokuapp.com/user", req)
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
      // role: ["Comprador", "Gestor de Compra"],
      role: ["1", "2"],
      NewRole: '',
      modalShow: false,
      deleteUserId: -1,
    };
  },
  methods: {
    hideModal() {
      this.showModal = false;
      this.$refs["my-modaldelete"].hide();
    },
    showModalUserDelete(id) {
      this.$refs["my-modaldelete"].show();
      this.deleteUserId = id;
    },
    deleteUser() {
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios
        .delete("https://apiuserssscot.herokuapp.com/user/" + this.deleteUserId, req)
        .then((res) => {
          console.log(res);
          this.$refs["my-modaldelete"].hide();
          this.users = this.users.filter((u) => u.id != this.deleteUserId);
        })
        .catch((err) => {
          console.log(err);
          this.$refs["my-modaldelete"].hide();
        });
    },
    showModalUserRole(id) {
      this.$refs["my-modalrole"].show();
      this.changeRoleUserId = id;
    },
    changeRole() {
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios
        .put("https://apiuserssscot.herokuapp.com/user/" + this.changeRoleUserId,{
            role: this.NewRole
            
            }, req).then(res => {
                console.log(res);
                this.$router.push({name: 'Users'});
            }).catch(err => {
                var msgErro = err.response.data.err;
                this.error = msgErro;
            })
        }
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

