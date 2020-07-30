<template>
  <section class="section">
    <div class="container mb-5">
      <div class="notification">
        <p class="title has-text-info  has-background-gray">
          Shared Information
        </p>
      </div>
      <div class="container">
        <Shared></Shared>
      </div>
    </div>
    <div class="container mb-5">
      <div class="notification">
        <p class="title has-text-info  has-background-gray">
          Chaincode: Package and Install
        </p>
      </div>
      <div class="container">
        <ChaincodeInstall></ChaincodeInstall>
      </div>
    </div>
    <div class="container mb-5">
      <div class="notification">
        <p class="title has-text-info  has-background-gray">
          Chaincode: Approve for Organization
        </p>
      </div>
      <div class="container mb-5">
        <ChaincodeApprove></ChaincodeApprove>
      </div>
    </div>
    <div class="container">
      <div class="notification">
        <p class="title has-text-info  has-background-gray">
          Chaincode: Commit
        </p>
      </div>
      <div class="container">
        <ChaincodeCommit></ChaincodeCommit>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
//import Command from "@/components/Command.vue";
import ChaincodeInstall from "@/components/ChaincodeInstall.vue";
import ChaincodeApprove from "@/components/ChaincodeApprove";
import ChaincodeCommit from "@/components/ChaincodeCommit.vue";
import Shared from "@/components/Shared.vue";
export default {
  name: "Home",
  components: {
    Shared,
    ChaincodeInstall,
    ChaincodeApprove,
    ChaincodeCommit
  }
};
</script>
