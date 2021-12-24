<template>
  <div>
    <v-container v-if="branch != null">
      <Home :keycloak="keycloakValue" />
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import * as Keycloak from "keycloak-js";
import Home from "./Home.vue";

export default {
  name: "Tenant",
  components: {
    Home,
  },
  data() {
    return {
      branch: null,
      keycloakValue: undefined,
    };
  },
  methods: {
    loginToBranch() {
      let initOptions = {
        url: "http://localhost:8180/auth/",
        clientId: "vue-keycloak",
        realm: "demorealm",
        onLoad: "login-required",
      };
      let keycloak = Keycloak(initOptions);

      keycloak
        .init({ onLoad: initOptions.onLoad })
        .then((auth) => {
          if (!auth) {
            window.location.reload();
          } else {
            Vue.$log.info("Authenticated");
            localStorage.setItem("jwt", keycloak.token);
            localStorage.setItem("jwt-refresh-token", keycloak.refreshToken);
            console.log(keycloak);

            this.keycloakValue = keycloak;
            this.branch = initOptions.realm;
          }

          //Token Refresh
          setInterval(() => {
            keycloak
              .updateToken(70)
              .then((refreshed) => {
                if (refreshed) {
                  Vue.$log.info("Token refreshed" + refreshed);
                } else {
                  Vue.$log.warn(
                    "Token not refreshed, valid for " +
                      Math.round(
                        keycloak.tokenParsed.exp +
                          keycloak.timeSkew -
                          new Date().getTime() / 1000
                      ) +
                      " seconds"
                  );
                }
              })
              .catch(() => {
                Vue.$log.error("Failed to refresh token");
              });
          }, 6000);
        })
        .catch(() => {
          Vue.$log.error("Authenticated Failed");
        });
    },
  },
  created() {
    this.loginToBranch();
  },
};
</script>
