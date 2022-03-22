<template>
<section class="vh-100" style="background-color: black;">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text">Sistema de Cotações - SSCOT</h2>
              <hr>
              <h3 class="text">Crie sua conta</h3>                     

              <form>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" v-model="name"/>
                  <label class="form-label" for="form3Example1cg">Nome</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" v-model="email"/>
                  <label class="form-label" for="form3Example3cg">Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" v-model="password"/>
                  <label class="form-label" for="form3Example4cg">Senha</label>
                </div>
                <div class="d-flex justify-content-center">
                  <button type="button" @click="register" class="btn btn-primary">Registrar</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Já possui conta registrada? <a href="/login" class="fw-bold text-body"><u>Faça login</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            name: '',
            password: '',
            email: '',
            error: undefined,
        }
    },
    methods: {
        register(){
            axios.post("http://localhost:8686/user",{
                name: this.name,
                password: this.password,
                email: this.email
            }).then(res => {
                console.log(res);
                this.$router.push({name: 'Home'});
            }).catch(err => {
                var msgErro = err.response.data.err;
                this.error = msgErro;
            })
        }
    }
}
</script>

<style scoped>

</style>