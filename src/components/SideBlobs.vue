<template>
  <div class="side-blobs">
    <div id="blob-1">
      <img src="../assets/blob1.svg" alt="blob1" />
    </div>
    <div id="blob-2">
      <img src="../assets/blob2.svg" alt="blob2" />
    </div>
    <div id="blob-3">
      <img src="../assets/blob3.svg" alt="blob3" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBlobs",
};
</script>

<style scoped>
.side-blobs {
  z-index: -1;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
}
  
#blob-1 {
  position: absolute;
  top: 1rem;
  right: 10%;

}
#blob-2 {
  position: absolute;
  top: 15rem;
  right: 0%;
}
#blob-3 {
  position: absolute;
  top: 55rem;
  right: 0rem;
}

#blob-1, #blob-2, #blob-3 {
  transform: translateX(calc(4rem + 10%));
}
</style>