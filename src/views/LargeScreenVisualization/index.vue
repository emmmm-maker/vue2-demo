<template>
  <div>

      <dv-full-screen-container class="container">
        <dv-loading v-if="loading" class="loading">Loading...</dv-loading>
        <dv-border-box-11 class="containerBorder" title="智慧大屏">
          <div class="content">
            <div class="top">
              dsadsad
            </div>
            <div class="footer">
              dsadsd
            </div>
          </div>
        </dv-border-box-11>
      </dv-full-screen-container>
  </div>
</template>

<script>

export default {
  name: 'LargeScreenVisualization',
  data () {
    return {
      loading: false
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  background-color: #000;
  color: #fff;

  .loading {
    color: #fff;
  }
  .containerBorder {
    height: 100%;
    width: 100%;
    .content {
      height: 100%;
      display: flex;
      flex-direction: column;
      .top {
        flex: 2;
        //background-color: red;
      }
      .footer {
        flex: 1;
        //background-color: green;
      }
    }
  }

}
</style>
