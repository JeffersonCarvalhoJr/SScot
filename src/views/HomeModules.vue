<template>
<section class="vh-100" style="background-color: #212529;">
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
                  <a href="#" class="btn btn-primary stretched-link">Acesse</a>
                </b-card>
                <br />

                <b-card
                  bg-variant="light"
                  text-variant="Light"
                  header="Fornecedores"
                  class="text-center"
                  style="width: 30rem"
                >
                  <a href="#" class="btn btn-primary stretched-link">Acesse</a>
                </b-card>
                <br />
                <b-card
                  bg-variant="light"
                  text-variant="Light"
                  header="Cotações"
                  class="text-center"
                  style="width: 30rem"
                >
                  <a href="#" class="btn btn-primary stretched-link">Acesse</a>
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
      <b-button variant="primary">Nova Cotação Rápida</b-button>
    </b-container>
  </div>
</section>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  color: white;
}
</style>