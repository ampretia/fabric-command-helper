<template>
  <section class="section">
    <div class="container mb-5">
      <div class="notification">
        <p class="title has-text-info has-background-gray">Chaincode: Package and Install</p>
      </div>
      <div class="container">
        <ChaincodeInstall></ChaincodeInstall>
      </div>
    </div>
    <div class="container mb-5">
      <div class="notification">
        <p class="title has-text-info has-background-gray">Chaincode: Approve for Organization</p>
      </div>
      <div class="container mb-5">
        <ChaincodeApprove></ChaincodeApprove>
      </div>
    </div>
    <div class="container mb-5">
      <div class="notification">
        <p class="title has-text-info has-background-gray">Chaincode: Commit</p>
      </div>
      <div class="container mb-5">
        <ChaincodeCommit></ChaincodeCommit>
      </div>
    </div>
    <div class="container mb-5">
      <div class="notification">
        <p class="title has-text-info has-background-gray">Chaincode: Invoke</p>
      </div>
      <div class="container mb-5">
        <ChaincodeInvoke></ChaincodeInvoke>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import ChaincodeInstall from "@/components/ChaincodeInstall.vue";
import ChaincodeApprove from "@/components/ChaincodeApprove";
import ChaincodeCommit from "@/components/ChaincodeCommit.vue";
import ChaincodeInvoke from "@/components/ChaincodeInvokeQuery.vue";

export default {
  name: "Home",
  components: {
    ChaincodeInstall,
    ChaincodeApprove,
    ChaincodeCommit,
    ChaincodeInvoke
  }
};
</script>
