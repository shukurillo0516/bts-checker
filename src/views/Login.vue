<template>
  <div class="main">
    <b-card title="Login" class="card">
      <div class="inputBx">
        <input type="text" placeholder="Username" />
      </div>
      <div class="inputBx">
        <input type="password" placeholder="Password" />
      </div>
      <label class="remember">
        <input type="checkbox" />
        Remember me
      </label>
      <div class="inputBx">
        <input type="submit" value="Login" />
      </div>
    </b-card>
  </div>
</template>
<style scoped>
.main {
  background: url(../../public/images/bukhara.jpg) no-repeat center center;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  position: relative;
  margin: 0;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 480px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.inputBx {
  margin: 10px 0;
}
</style>