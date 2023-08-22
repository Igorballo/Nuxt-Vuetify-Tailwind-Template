<template>
<div>
    <section class="font-poppins tw-flex tw-flex-col md:tw-flex-row-reverse tw-h-screen tw-items-center">

      <div class="tw-relative tw-bg-yellow-400 tw-hidden lg:tw-block tw-w-full md:tw-w-1/2 xl:tw-w-7/12 tw-h-screen">
      <img src="https://images.unsplash.com/photo-1603566234966-63aff3736a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" class="tw-w-full tw-h-full">
      <div class="tw-absolute tw-inset-0 tw-p-6 tw-flex tw-justify-end tw-items-end">
        <div class="tw-bg-white tw-bg-opacity-80 tw-rounded-full tw-p-2 tw-px-6 tw-flex tw-items-center tw-gap-2">
          <h1 class="tw-font-semibold tw-text-sm">Igor BALLO</h1>
        </div>
      </div>
    </div>

      <div class="tw-bg-white tw-w-full md:tw-max-w-md lg:tw-max-w-full md:tw-mx-auto md:tw-mx-0 md:tw-w-1/2 xl:tw-w-5/12 tw-h-screen tw-px-6 lg:tw-px-16 xl:tw-px-12
        tw-flex tw-items-center tw-justify-center">
        <div class="tw-w-full">
          <img class="tw-rounded-full tw-h-6 tw-w-auto" src="/img/logo-ha.png" alt="login-image">

          <div>
            <h1 class="tw-text-xl md:tw-text-2xl tw-font-bold tw-leading-tight tw-mt-12">Title Lorem</h1>

            <h2 class="text-md tw-text-gray-600 tw-mt-4">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit.
            </h2>

            <button type="button"
                    class="tw-my-6 tw-w-full tw-block tw-bg-blue-100 tw-text-blue-500 tw-font-semibold tw-rounded-lg tw-px-4 tw-py-3">
              <div class="tw-flex tw-items-center tw-justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="tw-w-6 tw-h-6"
                     viewBox="0 0 48 48">
                  <defs>
                    <path id="a"
                          d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                  </defs>
                  <clipPath id="b">
                    <use xlink:href="#a" overflow="tw-visible"/>
                  </clipPath>
                  <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/>
                  <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/>
                  <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/>
                  <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
                </svg>
                <span class="tw-ml-4">Se connecter avec Google</span>
              </div>
            </button>

            <div class="tw-flex tw-justify-center tw-w-full tw-border-b tw-border-black tw-border-dashed tw-text-center">
              <div
                  class="tw-translate-y-2 tw-leading-none tw-px-2 tw-inline-block text-md tw-text-gray-800 tw-tracking-wide tw-font-medium tw-bg-white tw-transform tw-translate-y-1/2"
              >
                Ou
              </div>
            </div>

              <h1 v-if="showError" class="tw-text-sm tw-text-red-600 tw-text-center tw-font-light">{{ errorMessage }}</h1>


            <form class="tw-mt-6" action="#" method="POST">
              <div class="tw-mt-4">
                <label class="tw-block tw-text-black">Nom complet</label>
                <input v-model="form.username" type="text" placeholder="Ex: Igor BALLO"
                       class="tw-w-full tw-text-black tw-px-4 tw-py-3 tw-rounded-lg tw-bg-gray-200 tw-mt-2 tw-border focus:tw-border-blue-500 focus:tw-bg-white focus:tw-outline-none"
                       autofocus autocomplete required>
              </div>
              <div class="tw-mt-4">
                <label class="tw-block tw-text-black">Email</label>
                <input v-model="form.email" type="email" placeholder="exemple@gmail.com"
                       class="tw-w-full tw-text-black tw-px-4 tw-py-3 tw-rounded-lg tw-bg-gray-200 tw-mt-2 tw-border focus:tw-border-blue-500 focus:tw-bg-white focus:tw-outline-none"
                       autofocus autocomplete required>
              </div>

              <div class="tw-mt-4">
                <label class="tw-block tw-text-black">Telephone</label>
                <input v-model="form.telephone" type="number" placeholder="+22896690981"
                      class="tw-w-full tw-text-black tw-px-4 tw-py-3 tw-rounded-lg tw-bg-gray-200 tw-mt-2 tw-border focus:tw-border-blue-500 focus:tw-bg-white focus:tw-outline-none"
                      autofocus autocomplete required>
              </div>



              <div class="tw-text-right tw-mt-10 tw-flex tw-items-center tw-w-full tw-justify-between">
                <NuxtLink to="/login" class="tw-text-sm tw-font-semibold tw-text-gray-800 hover:tw-text-gray-700">Me connecter</NuxtLink>
                <button @click.prevent="register()" class="tw-px-4 tw-py-2 tw-w-[fit-content] tw-block tw-bg-gray-800 tw-text-white tw-font-semibold tw-rounded-lg
              tw-px-4 tw-py-3">Créer un compte
                </button>
              </div>
            </form>

          </div>



          <div class="tw-my-8 tw-text-sm tw-flex tw-justify-between tw-w-full tw-font-medium">
            <a class="tw-text-blue-500">Aide</a>
            <a href="#" class="tw-text-gray-600 hover:tw-text-gray-700">Copyright © 2023. All rights reserved</a>
          </div>
        </div>
      </div>
    </section>
    <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="2000">
          {{ snackbar_text }}
        </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        telephone:"",
      },
      btnLoading: false,
      errorMessage: null,
      showError: false,
      snackbarColor: "primary",
      snackbar_text: "",
      snackbar: false,
    };
  },
  created() {},
  methods: {
    async register() {
      this.showError = false;
      if (!this.form.username || !this.form.email) {
        this.snackbar_text = "Veuillez renseigner tous les champs réquis.";
        this.snackbarColor = "green darken-4";
        this.snackbar = true;
        return;
      }
      this.btnLoading = true;
      this.showError = false;
      await axios
        .post("/auth/register", this.form)
        .then((response) => {
          console.log("response")
          if (response.error) {
          
          this.btnLoading = false;
          this.showError = true
          this.errorMessage = response.message
          Swal.fire({
            title: "Echec",
            text: "Une Erreur s'est produite",
            icon: "error",
          });
          return;
        }
        this.btnLoading = false;
        this.showToast("success", "Utilisateur crée avec succès");
        })
        .catch((error) => {
          this.loginError = true;
          this.loginBtn = false;
        });
    },
  },
};
</script>