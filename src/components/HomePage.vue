<template>
  <div class="hello">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="SSCot - Sistema de Cotações" />
        <meta name="author" content="Jefferson de Melo Carvalho Junior" />
        <title>SSCot - Sistema de Cotações</title>
        <!-- Bootstrap icons-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    <body>
       <!-- Header-->
        <header class="bg-dark py-5">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center my-5">
                            <h1 class="display-6 fw-bolder text-white mb-1">SSCot - Sistema de Cotações</h1>
                            <p class="lead text-white-50 mb-4">Sistema de cotações de produtos aplicando metodologia de Strategic Sourcing!</p>
                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="/login">Faça Login</a>
                                <a class="btn btn-outline-light btn-lg px-4" href="/register">Cadastre-se</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Features section-->
        <section class="py-5 border-bottom" id="features">
            <div class="container px-5 my-5">
                <div class="row gx-5">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div>
                        <h2 class="h4 fw-bolder">Transparência</h2>
                        <p>Tenha uma relação justa com seus parceiros/fornecedores. O SSCot traz total transparência nas negociações.</p>
                    </div>
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                        <h2 class="h4 fw-bolder">Agilidade</h2>
                        <p>Otimize seus prazos e tenha um processo de cotação ágil e seguro. O SScot traz simplicidade para gerar rápidez ao processo.</p>
                    </div>
                    <div class="col-lg-4">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                        <h2 class="h4 fw-bolder">Redução de Custo</h2>
                        <p>Tenha cotações na sua mão e elabore análises para garantir reduções em seus processos de compra. O SScot traz resultado em poucos cliques.</p>
                    </div>
                </div>
            </div>
        </section>
    </body>

<footer>
  <br>
  <div>Desenvolvido por Jefferson Carvalho Jr - Aluno FACCAT (Sistemas de Informação)</div>
  <div>Formação Prevista - 2° Sem 2022</div>

</footer>
    
  </div>
  
</template>

<script>
export default {
}
</script>

<style scoped>
section {
    background-color: white;
}
footer{
  background-color: var(--color-background);
  color:white;
  font-family: Helvetica;
}
h2{
    color: var(--color-text-dark);

}

</style>

