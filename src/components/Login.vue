<template>
  
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Giriş</title>
</head>

<body class="background  no-footer">
    <div class="fixed-background"></div>
    <main>
        <div class="container">
            <div class="row h-100">
                <div class="col-12 col-md-10 mx-auto my-auto" >
                    <div class="card auth-card">
                        <div class="position-relative image-side " >

                            <p class=" text-white h2">MAGIC IS IN THE DETAILS</p>

                            <p class="white mb-0">
                                Please use your credentials to login.
                                <br>If you are not a member, please
                                <a href="#" class="white">register</a>.
                            </p>
                        </div>
                        <div class="form-side">
                            <a href="Dashboard.Default.html">
                                <span class="logo-single"></span>
                            </a>
                            <h6 class="mb-4">Login</h6>
                            <form>
                                <label class="form-group has-float-label mb-4">
                                    <input class="form-control" v-model="email" />
                                    <span>E-mail</span>
                                </label>

                                <label class="form-group has-float-label mb-4">
                                    <input class="form-control" v-model="pass" type="password" placeholder="" />
                                    <span>Password</span>
                                </label>
                                <div class="d-flex justify-content-between align-items-center">
                                    <a href="#">Forget password?</a>
                                    <button class="btn btn-primary btn-lg btn-shadow" @click="giris" type="button">LOGIN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>

</html>
</template>

<script>
export default {
    data() {
        return {
            email: 'iletisim@omersavas.com',
            pass: '1234Aa.',
        }
    },
    methods: {
        giris() {
            var params={
                email: this.email,
                password: this.pass,
            }
            this.$store.dispatch('login',params)
        }
    }
}
</script>

<style>

</style>