<template>
  <main>
    <div class="mask d-flex align-items-center h-25 gradient-custom-3">
      <div class="container h-100">
        <br />
        <h2>Listagem de Cotações</h2>
        <br />
        <table class="table table-bordered">
          <thead class="table table-light">
            <tr>
              <th scope="col">N° Cotação</th>
              <th scope="col">Razão Social</th>
              <th scope="col">CNPJ</th>
              <th scope="col">Status</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="cotation in cotations"
              :key="cotation.id"
              class="table-light"
            >
              <td>{{ cotation.cot_number }}</td>
              <td>{{ cotation.razao_social }}</td>
              <td>{{ cotation.cnpj }}</td>
              <td>{{ cotation.status }}</td>
              <td>
                <router-link
                  :to="{ name: 'MainCotationSup', params: { user_id: cotation.user_id, cot_number: cotation.cot_number, sup_id: cotation.sup_id  } }"
                >
                  <button style="margin-right: 10px" class="btn btn-success">
                    Ver
                  </button></router-link
                >
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
  data() {
    return {
      cotations: [],
      id: localStorage.getItem("id"),
    };
  },

  //  http://localhost:5000/cotation
  // https://apiproducts-sscot.herokuapp.com/cotation/
  created() {
    axios
      .get("https://apiproducts-sscot.herokuapp.com/cotation/")
      .then((res) => {
        console.log(res);
        console.log(this.cotations);
        this.cotations = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
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