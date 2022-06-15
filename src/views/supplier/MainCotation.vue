<template>
  <main>
    <h2>Cotação n° 24-1655252676248</h2>

    <div class="card p-5 col-sm-10" style="border-radius: 15px">
      <header style="text-align: left">
        <h4>À AMAZON SERVICOS DE VAREJO DO BRASIL LTDA.</h4>
        <h5>CNPJ 15.436.940/0001-03</h5>
        <hr />
        <h6>Prezado(a) Sr(a).</h6>
        <h6>
          Venho por meio desta solicitar cotação de preços para os
          produtos/serviços abaixo discriminados:
        </h6>
      </header>
      <b-row>
        <br />
        <br />
      </b-row>

      <b-form>
        <b-row>
          <b-col>
            <table class="table table-bordered">
              <thead class="table table-light">
                <tr>
                  <th scope="col">Código de Produto</th>
                  <th scope="col">Descrição de Produto</th>
                  <th scope="col">Código Derivação</th>
                  <th scope="col">Descrição Derivação</th>
                  <th scope="col">Coleção</th>
                  <th scope="col">U.M.</th>
                  <th scope="col">Preço Bruto</th>
                  <th scope="col">% ICMS</th>
                  <th scope="col">% PIS</th>
                  <th scope="col">% COFINS</th>
                  <th scope="col">% IPI</th>
                  <th scope="col">Preço Líquido</th>
                  <th scope="col">Inicio Validade</th>
                  <th scope="col">Fim Validade</th>
                  <th scope="col">Observação</th>
                </tr>
              </thead>
              <tbody>
                <td>
                  <b-form-input
                    type="text"
                    disabled
                    v-model="newDescProd"
                    id="new-product"
                    placeholder=""
                    style="text-align: center"
                    
                  ></b-form-input>
                </td>
                                <td>
                  <b-form-input
                    type="text"
                    disabled
                    v-model="newDescProd"
                    id="new-product"
                    placeholder=""
                    style="text-align: center"
                  ></b-form-input>
                </td>
                                <td>
                  <b-form-input
                    type="text"
                    disabled
                    v-model="newDescProd"
                    id="new-product"
                    placeholder=""
                    style="text-align: center"
                  ></b-form-input>
                </td>
                                <td>
                  <b-form-input
                    type="text"
                    disabled
                    v-model="newDescProd"
                    id="new-product"
                    placeholder=""
                    style="text-align: center"
                  ></b-form-input>
                </td>
                                <td>
                  <b-form-input
                    type="text"
                    disabled
                    v-model="newDescProd"
                    id="new-product"
                    placeholder=""
                    style="text-align: center"
                  ></b-form-input>
                </td>
                                <td>
                  <b-form-input
                    type="text"
                    disabled
                    v-model="newDescProd"
                    id="new-product"
                    placeholder=""
                    style="text-align: center"
                  ></b-form-input>
                </td>
                <td>
                  <b-form-input
                    type="text"
                    required
                    v-model="newDescProd"
                    id="new-product"
                    placeholder=""
                    style="text-align: center"
                  ></b-form-input>
                </td>
                <td>
                  <b-form-input
                    type="text"
                    required
                    v-model="newDescProd"
                    id="new-product"
                    placeholder=""
                    style="text-align: center"
                  ></b-form-input>
                </td>
                <td>
                  <b-form-input
                    type="text"
                    required
                    v-model="newDescProd"
                    id="new-product"
                    placeholder=""
                    style="text-align: center"
                  ></b-form-input>
                </td>
                <td>
                  <b-form-input
                    type="text"
                    required
                    v-model="newDescProd"
                    id="new-product"
                    placeholder=""
                    style="text-align: center"
                  ></b-form-input>
                </td>
                <td>
                  <b-form-input
                    type="text"
                    required
                    v-model="newDescProd"
                    id="new-product"
                    placeholder=""
                    style="text-align: center"
                  ></b-form-input>
                </td>
                                <td>
                  <b-form-input
                    type="text"
                    disabled
                    v-model="newDescProd"
                    id="new-product"
                    placeholder=""
                    style="text-align: center"
                  ></b-form-input>
                </td>
                <td>
                  <b-form-input
                    type="text"
                    required
                    v-model="newDescProd"
                    id="new-product"
                    placeholder=""
                    style="text-align: center"
                  ></b-form-input>
                </td>
                <td>
                  <b-form-input
                    type="text"
                    required
                    v-model="newDescProd"
                    id="new-product"
                    placeholder=""
                    style="text-align: center"
                  ></b-form-input>
                </td>
                <td>
                  <b-form-input
                    type="text"
                    v-model="newDescProd"
                    id="new-product"
                    placeholder=""
                    style="text-align: center"
                  ></b-form-input>
                </td>
              </tbody>
            </table>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="16" sm="12">
            <br />
            <b-button type="submit" variant="success"
              >Gravar Cotação</b-button
            ><br /><br />
            Comprador - Indústria Compradora - Emissão: 14/06/2022
          </b-col>
        </b-row>
      </b-form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      cotations: [],
      id: localStorage.getItem("id"),
    };
  },
};
</script>

<style>
h2 {
  color: var(--color-text-light);
}
h4 {
  color: var(--color-text-dark);
}
h5 {
  color: var(--color-text-dark);
}
h6 {
  color: var(--color-text-dark);
}
.card {
  margin: auto;
  padding: 10px;
}
</style>