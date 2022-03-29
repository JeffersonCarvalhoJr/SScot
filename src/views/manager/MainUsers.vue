<template>
  <div>
    <b-container fluid>
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
              <button style='margin-right:10px' class="btn btn-warning">Editar</button></router-link
            >
             
            <button style='margin-right:10px'
              class="btn btn-danger"
              @click="showModalUserDelete(user.id)"
            >
              Deletar
            </button>
             
            <b-button style='margin-right:10px' @click="showModalUserRole(user.id)"> Alçada </b-button>
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
            <b-button class="changerole" variant="primary" @click="changeRoleUser()"
              >Usuário</b-button
            >
            |
           <b-button class="changerole" variant="primary" @click="changeRoleBuyer()"
              >Comprador</b-button
            >
            |
            <b-button class="changerole" variant="primary" @click="changeRoleManager()"
              >Gestor de Compras</b-button
            >
          </b-col>
        </b-row>
      </div>
    </b-modal>
    </b-container>
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


    changeRoleUser() {
      console.log(this.newRole)
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios
        .put("https://apiuserssscot.herokuapp.com/user/",{
            role: "0",
            id: this.changeRoleUserId
            }, req).then(res => {
                console.log(res);
                location.reload();
                this.$refs["my-modalrole"].hide();
            }).catch(err => {
                var msgErro = err.response.data.err;
                this.error = msgErro;
            })
        },

    changeRoleBuyer() {
      console.log(this.newRole)
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios
        .put("https://apiuserssscot.herokuapp.com/user/",{
            role: "1",
            id: this.changeRoleUserId
            }, req).then(res => {
                console.log(res);
                location.reload();
                this.$refs["my-modalrole"].hide();
            }).catch(err => {
                var msgErro = err.response.data.err;
                this.error = msgErro;
            })
        },
      changeRoleManager() {
      console.log(this.newRole)
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios
        .put("https://apiuserssscot.herokuapp.com/user/",{
            role: "2",
            id: this.changeRoleUserId
            }, req).then(res => {
                console.log(res);
                location.reload();
                this.$refs["my-modalrole"].hide();
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

