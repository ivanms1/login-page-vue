<template>
  <el-form
    :model="editProfileForm"
    label-position="top"
    :rules="rules"
    ref="editProfileForm"
    class="edit-form"
  >
    <el-form-item label="New Email" prop="email">
      <el-input class="input" placeholder="Your new email" v-model="editProfileForm.email"/>
    </el-form-item>
    <el-form-item label="New Password" prop="password">
      <el-input
        placeholder="Your new password"
        type="password"
        v-model="editProfileForm.password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="Confirm Password" prop="confirmPassword">
      <el-input type="password" v-model="editProfileForm.confirmPassword" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item class="save-button">
      <el-button type="primary" @click="submitForm('editProfileForm')">Save</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Notification } from "element-ui";

export default {
  data() {
    const confirmPassValidator = (rule, value, callback) => {
      if (value !== this.editProfileForm.password)
        return callback(new Error("Passwords do not match"));
      callback();
    };

    return {
      editProfileForm: {
        email: "test@email.com",
        password: "12345678",
        confirmPassword: ""
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
            message: "Please input a correct email address",
            trigger: ["blur", "change"]
          }
        ],
        password: [
          {
            required: true,
            message: "This field is required",
            trigger: "blur"
          },
          {
            min: 6,
            max: 10,
            message: "Password should be between 6 and 10 characters",
            trigger: "change"
          }
        ],
        confirmPassword: [
          {
            required: true,
            message: "Please confirm your new password",
            trigger: "blur"
          },
          { validator: confirmPassValidator, trigger: ["blur", "change"] }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          Notification.success({
            title: "Saved",
            message: "Your changes have been saved"
          });
          this.$refs[formName].clearValidate();
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.edit-form {
  width: 300px;
  margin-top: 1rem;
}

.save-button {
  margin-top: 1rem;
}
</style>

