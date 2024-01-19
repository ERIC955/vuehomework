<template>
    <div class=" d-flex justify-content-center align-items-center vh-100 ">
        <div class="d-flex flex-column">
          <input type="email" id="email" class="form-control mb-3 fs-4" v-model="emailInput" placeholder="Email">
          <input type="password" id="password" class="form-control mb-3 fs-4" v-model="pwInput" placeholder="Password">
          <button type="button" id="login" class="btn btn-primary form-control fs-3" @click="login">登入</button>
        </div>
      </div>
</template>

<script>
import axios from 'axios';
export default{

data() {
    return {
        emailInput:"",
        pwInput:"",
    }
},
methods: {
    login(){
    const url ='https://vue3-course-api.hexschool.io/v2'
    // const path = 'eric0418'
    const username = this.emailInput;
    const password = this.pwInput;

    const user = {
        username,
        password
    }

    axios.post(`${url}/admin/signin`,user)
    .then(()=>{
        
        this.$router.push('index');
    })
    // .catch(()=>{
    //     alert("密碼錯誤")
    // res.data.token  
    // })
    }
}, 
}
</script>