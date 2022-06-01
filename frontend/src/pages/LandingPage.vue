<template>
  <q-page class="flex flex-center">
    <ul class="background">
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
</ul>
    <div class="card-login-container">
      <q-card class="login-card transparent" flat bordered>
           <div class="column items-center">
            <img
              class="logo col"
              alt="Employmapp"
              width="250" height="600"
              src="../assets/app-removebg-preview.png"
            />
          </div>

<br/><br/><br/><br/>
            <div align="center">
              <q-btn
                @click="this.$router.push('/');"
                size="lg"
                type="submit"
                class="q-ma-sm"
                square
                style="color: #0267C1; background-color:white"
                label="TRACK"
              />
              <br/><br/>
              <q-btn
                @click="this.$router.push('/info');"
                size="MD"
                type="submit"
                class="q-ma-sm"
                square
                style="color: #0267C1; background-color:white"
                icon="eva-corner-down-right-outline"
                label="LEARN MORE"
              />
            </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { LocalStorage } from "quasar";
export default {
  name: "AuthPage",
  data() {
    return {
      tab: "one",
      signup: {
        password: "",
        email: "",
        name: ""
      },
      login: {
        password: "",
        email: ""
      }
    };
  },
  beforeMount() {
    if (LocalStorage.getItem("loggedIn")) {
      this.$router.push("/");
    }
  },
  methods: {
    onSignup() {
      console.log("onSignup fired");
      // this.$axios
      //   .post(`${process.env.API}/api/auth/register`, this.signup)
      //   .then(response => {
      //     console.log(response.data);
      //     this.$q.notify({
      //       color: "green",
      //       message: response.data.message,
      //       icon: "arrow_forward"
      //     });
      //   })
      //   .catch(error => {
      //     this.$q.notify({
      //       color: "negative",
      //       message: error.response.data.message,
      //       icon: "report_problem"
      //     });
      //   });
    },
    onLogin() {
      console.log("onLogin fired");
      this.$router.push("/");
      // this.$axios
      //   .post(`${process.env.API}/api/auth/login`, {
      //     email: this.login.email,
      //     password: this.login.password
      //   })
      //   .then(response => {
      //     this.$q.notify({
      //       color: "green",
      //       message: response.data.message,
      //       icon: "arrow_forward"
      //     });
      //     console.log(response.data);
      //     LocalStorage.set("loggedIn", true);
      //     LocalStorage.set("userId", response.data.userId);
      //     this.$router.push("/");
      //   })
      //   .catch(error => {
      //     this.$q.notify({
      //       color: "negative",
      //       message: error.response.data.message,
      //       icon: "report_problem"
      //     });
      //   });
    }
  }
};
</script>

<style lang="sass" scoped>
/* .bg-image {
 *   background-image: url(../assets/topography.svg);
 *  background-size: contain;
 *  background-color: #f0f4ef;
 *}
   */
.bg-image
  background-image: url("../assets/blob-scene-haikei.svg")
  background-size: cover
.card 
  backdrop-filter: blur(16px) saturate(180%)
  -webkit-backdrop-filter: blur(16px) saturate(180%)
  background-color: rgba(17, 25, 40, 0.75)
  border-radius: 12px
  border: 1px solid rgba(255, 255, 255, 0.125)
.card-login-container
  min-width: 35%
  text-align: center
.titleN
  margin:0
  padding:0.2em 0.3em
  display: inline-block
  color: black
  background-color: $primary
  border-radius:100%
.login-card
  width: 100%
  border: 1px solid rgba(0, 0, 0, 0.1)
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  padding: 2vh 12vh
  height: 50vh
  backdrop-filter: blur(16px) saturate(100%)
  -webkit-backdrop-filter: blur(16px) saturate(100%)
  background-color: rgba(17, 25, 40, 0.75)
  border-radius: 12px
.q-field, .q-field--standout .q-field__control
  margin-bottom: 10px
@media only screen and (max-width: 700px)
  .login-card
    padding: 2vh
@media only screen and (max-width: 1150px)
  .login-card
    padding: 2vh
</style>
<style scoped>
@keyframes animate {
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}
.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background: #fff;
    overflow: hidden;
}
.background li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(182, 225, 255, 0.7);
    animation: animate 15s linear infinite;
}
.background li:nth-child(0) {
    left: 60%;
    width: 136px;
    height: 136px;
    bottom: -136px;
    animation-delay: 1s;
}
.background li:nth-child(1) {
    left: 17%;
    width: 169px;
    height: 169px;
    bottom: -169px;
    animation-delay: 3s;
}
.background li:nth-child(2) {
    left: 65%;
    width: 191px;
    height: 191px;
    bottom: -191px;
    animation-delay: 5s;
}
.background li:nth-child(3) {
    left: 37%;
    width: 165px;
    height: 165px;
    bottom: -165px;
    animation-delay: 7s;
}
.background li:nth-child(4) {
    left: 39%;
    width: 168px;
    height: 168px;
    bottom: -168px;
    animation-delay: 2s;
}
.background li:nth-child(5) {
    left: 89%;
    width: 195px;
    height: 195px;
    bottom: -195px;
    animation-delay: 8s;
}
.background li:nth-child(6) {
    left: 1%;
    width: 186px;
    height: 186px;
    bottom: -186px;
    animation-delay: 23s;
}
.background li:nth-child(7) {
    left: 89%;
    width: 117px;
    height: 117px;
    bottom: -117px;
    animation-delay: 29s;
}
.background li:nth-child(8) {
    left: 46%;
    width: 193px;
    height: 193px;
    bottom: -193px;
    animation-delay: 25s;
}
.background li:nth-child(9) {
    left: 78%;
    width: 195px;
    height: 195px;
    bottom: -195px;
    animation-delay: 6s;
}
.background li:nth-child(10) {
    left: 5%;
    width: 127px;
    height: 127px;
    bottom: -127px;
    animation-delay: 43s;
}
.background li:nth-child(11) {
    left: 48%;
    width: 191px;
    height: 191px;
    bottom: -191px;
    animation-delay: 5s;
}
.background li:nth-child(12) {
    left: 59%;
    width: 120px;
    height: 120px;
    bottom: -120px;
    animation-delay: 28s;
}
.background li:nth-child(13) {
    left: 2%;
    width: 198px;
    height: 198px;
    bottom: -198px;
    animation-delay: 2s;
}
.background li:nth-child(14) {
    left: 8%;
    width: 171px;
    height: 171px;
    bottom: -171px;
    animation-delay: 58s;
}
.background li:nth-child(15) {
    left: 39%;
    width: 138px;
    height: 138px;
    bottom: -138px;
    animation-delay: 10s;
}
.background li:nth-child(16) {
    left: 60%;
    width: 151px;
    height: 151px;
    bottom: -151px;
    animation-delay: 45s;
}
.background li:nth-child(17) {
    left: 6%;
    width: 141px;
    height: 141px;
    bottom: -141px;
    animation-delay: 34s;
}
.background li:nth-child(18) {
    left: 61%;
    width: 139px;
    height: 139px;
    bottom: -139px;
    animation-delay: 86s;
}
.background li:nth-child(19) {
    left: 66%;
    width: 187px;
    height: 187px;
    bottom: -187px;
    animation-delay: 34s;
}
.background li:nth-child(20) {
    left: 51%;
    width: 190px;
    height: 190px;
    bottom: -190px;
    animation-delay: 93s;
}
.background li:nth-child(21) {
    left: 66%;
    width: 123px;
    height: 123px;
    bottom: -123px;
    animation-delay: 103s;
}
.background li:nth-child(22) {
    left: 32%;
    width: 168px;
    height: 168px;
    bottom: -168px;
    animation-delay: 27s;
}
.background li:nth-child(23) {
    left: 10%;
    width: 129px;
    height: 129px;
    bottom: -129px;
    animation-delay: 69s;
}
.background li:nth-child(24) {
    left: 46%;
    width: 174px;
    height: 174px;
    bottom: -174px;
    animation-delay: 85s;
}
.background li:nth-child(25) {
    left: 56%;
    width: 119px;
    height: 119px;
    bottom: -119px;
    animation-delay: 6s;
}
.background li:nth-child(26) {
    left: 5%;
    width: 111px;
    height: 111px;
    bottom: -111px;
    animation-delay: 78s;
}
.background li:nth-child(27) {
    left: 48%;
    width: 142px;
    height: 142px;
    bottom: -142px;
    animation-delay: 129s;
}
.background li:nth-child(28) {
    left: 14%;
    width: 156px;
    height: 156px;
    bottom: -156px;
    animation-delay: 136s;
}
.background li:nth-child(29) {
    left: 45%;
    width: 152px;
    height: 152px;
    bottom: -152px;
    animation-delay: 30s;
}
.background li:nth-child(30) {
    left: 89%;
    width: 147px;
    height: 147px;
    bottom: -147px;
    animation-delay: 128s;
}
.background li:nth-child(31) {
    left: 23%;
    width: 147px;
    height: 147px;
    bottom: -147px;
    animation-delay: 45s;
}
.background li:nth-child(32) {
    left: 63%;
    width: 102px;
    height: 102px;
    bottom: -102px;
    animation-delay: 84s;
}
.background li:nth-child(33) {
    left: 14%;
    width: 160px;
    height: 160px;
    bottom: -160px;
    animation-delay: 129s;
}
.background li:nth-child(34) {
    left: 7%;
    width: 187px;
    height: 187px;
    bottom: -187px;
    animation-delay: 32s;
}
.background li:nth-child(35) {
    left: 34%;
    width: 176px;
    height: 176px;
    bottom: -176px;
    animation-delay: 65s;
}
.background li:nth-child(36) {
    left: 87%;
    width: 160px;
    height: 160px;
    bottom: -160px;
    animation-delay: 72s;
}
</style>