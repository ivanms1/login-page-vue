<template>
  <div class="login-page">
    <h1>Login Page</h1>
    <el-form
      :model="signupForm"
      :rules="rules"
      @submit.prevent.native="submitForm"
      ref="signupForm"
    >
      <el-form-item prop="email">
        <el-input class="input" placeholder="Your email" v-model="signupForm.email"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          class="input"
          placeholder="Your password"
          v-model="signupForm.password"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-button
          native-type="submit"
          type="primary"
          @click="submitForm('signupForm')"
          class="login-button"
        >Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    const passValidator = (rule, value, callback) => {
      if (value !== "12345678" && value !== "") callback(new Error("Invalid password"));
      else callback();
    };

    const emailValidator = (rule, value, callback) => {
      if (value !== "test@email.com" && value !== "") callback(new Error("Email not registered"));
      else callback();
    };

    return {
      signupForm: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          {
            required: true,
            message: "This field is required",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: "blur"
          },
          { validator: emailValidator, trigger: "submit" }
        ],
        password: [
          {
            required: true,
            message: "This field is required",
            trigger: "blur"
          },
          { validator: passValidator, trigger: "submit" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.signupForm.validate(valid => {
        if (valid) {
          this.$router.push("profile");
        }
      });
    }
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input {
  max-width: 300px;
  margin-top: 1rem;
}

.login-button {
  margin-top: 1rem;
}
</style>
