<script>
export default {
  name: "Newsletter",
};
</script>

<template>
  <hr />
  <div class="new-box mb-3 p-4 rounded">
    <div class="text pe-4">
      <div class="fs-3">Sign up for our newsletter</div>
      <div class="text-muted">
        Get notified about updates and be the first to get early access to new
        episodes.
      </div>
    </div>
    <div class="input w-100 ps-4">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Email"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Sign up
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.new-box {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  background: rgb(61, 219, 217);
  background: linear-gradient(
    115deg,
    rgba(61, 219, 217, 1) 0%,
    rgba(255, 255, 255, 1) 13%,
    rgba(255, 255, 255, 1) 47%,
    rgba(255, 255, 255, 1) 85%,
    rgba(138, 63, 252, 1) 100%
  );

  .btn-outline-secondary {
    background: #161616af;
    color: #ffffffaf;
    transition: all .5s ease-out;

    &:hover {
    color: #fff;
      background: #161616;
    }
  }

  .text {
    width: 80vw;
  }
}
</style>
