<template>
<main>
<section>
  <div>
    <br />
    <h2>SSCot - Sistema de Cotações</h2>
    <hr />
    <b-container fluid>
      <b-row>
        <b-col>
          <div>
            <div align="center">
              <b-card-group deck>
                <b-card
                  bg-variant="light"
                  text-variant="Light"
                  header="Produtos"
                  class="text-center"
                  style="width: 30rem"
                >
                  <a href="/products" class="btn btn-primary stretched-link">Acesse</a>
                </b-card>
                <br />

                <b-card
                  bg-variant="light"
                  text-variant="Light"
                  header="Fornecedores"
                  class="text-center"
                  style="width: 30rem"
                >
                  <a href="/admin/supplier" class="btn btn-primary stretched-link">Acesse</a>
                </b-card>
                <br />
                <b-card
                  bg-variant="light"
                  text-variant="Light"
                  header="Cotações"
                  class="text-center"
                  style="width: 30rem"
                >
                  <a href="/listcotationbuyer" class="btn btn-primary stretched-link">Acesse</a>
                </b-card>
                <br />
              </b-card-group>
            </div>
          </div>
        </b-col>
        <b-col>
          <div align="center">
            <b-card-group deck>
              <b-card
                bg-variant="light"
                text-variant="Light"
                header="Relatórios"
                class="text-center"
                style="width: 30rem"
              >
                <a href="#" class="btn btn-primary stretched-link">Acesse</a>
              </b-card>
              <br />

              <b-card
                bg-variant="light"
                text-variant="Light"
                header="Dashboard Produtos"
                class="text-center"
                style="width: 30rem"
              >
                <a href="#" class="btn btn-primary stretched-link">Acesse</a>
              </b-card>
              <br />
              <b-card
                bg-variant="light"
                text-variant="Light"
                header="Usuários"
                class="text-center"
                style="width: 30rem"
              >
                <a href="/admin/users" class="btn btn-primary stretched-link"
                  >Acesse</a
                >
              </b-card>
              <br />
            </b-card-group>
          </div>
        </b-col>
      </b-row>
      <br /><br />
      <b-row>
        <div align="center" style="font-size: 4rem">
          <b-icon icon="bag-plus-fill" variant="light"></b-icon>
        </div>
      </b-row>
      <b-button href="/cotation" variant="primary">Nova Cotação</b-button>
    </b-container>
      <br>
      <h4> {{ name }}</h4>
     <h4> {{ role | processRole }}</h4>
  </div>
 </section>
</main>
</template>

<script>
export default {
    data() {
    return {
      users:[],
      name: localStorage.getItem("name"),
      role: localStorage.getItem("role"),
    };
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
h4 {
  color: white;
}

h2 {
  color: white;
}

</style>