<h1 align="center">
   ♻️ App Double Biceps
</h1>
<h1 align="center">
    <img alt="Aircnc" src=".github/1.png" />
</h1>

<h4 align="center">
  🚀 Trabalho De DWS
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/guuhx97/aircnc">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

## 📰 Back-end

No back-end ou API, é onde de fato as funções de cadastro, busca, login, entre outras são executadas. É responsabilidade dele também realizar a integração com bando de dados insirindo e buscando informações. Por default, a API está utilizando a porta `3333`, mas que pode ser alterada no arquivo **server.js**.


## 🌱 Rotas
| Rota | Método | Função | Descrição |
| :--- | :--- | :--- | :---|
| `/sessions` | `POST` | `SessionController.store` | `Cria uma nova sessão para os usuários que logam.` |
| `/spots` | `GET` | `SpotController.index` | `Busca todos os spots que estão cadastrados.` |
| `/spots` | `POST` | `SpotController.store` | `Cadastra um novo spot no sistema.` |
| `/dashboard` | `GET` | `DashboardController.show` | `Busca todos os spost de um determinada empresa.` |
| `/spots/:spot_id/bookings` | `POST` | `BookingController.store` | `Cadastra uma solicitação de reserva no sistema.` |
| `/booking/:booking_id/approval` | `POST` | `ApprovalController.store` | `Cadastra a aprovação da reserva do desenvolvedor no sistema.` |
| `/booking/:booking_id/rejection` | `POST` | `RejectionController.store` | `Cadastra a rejeição da reserva do desenvolvedor no sistema.` |
-------------------------



## 🔄 Executar
- Entrar na pasta `backend`;
 - Executar `yarn install` para instalar dependências do projeto;
 - Executar `yarn dev` para que o projeto seja executado;

 ## 📝 Licença
Este projeto está sobre a licença MIT. Veja o arquivo [LICENSE](../LICENSE.md) para mais detalhes.


---
<h4 align="center">
  Feito com ❤️ by Victor G Paravatti & Adriano Rosa & Pedro Calasans & Lucas Bandeira & Demetrios Pantaleão
</h4>
