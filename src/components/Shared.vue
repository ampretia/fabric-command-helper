<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Channel ID</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="mychannel"
              :value="channelid"
              @input="updateChannelid"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Chaincode Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="assetcontract"
              :value="chaincodeName"
              @input="updateChaincodeName"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Orderer Hostname:Port</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="localhost:7052"
              :value="ordererHost"
              @input="updateOrdererHost"
            />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">
            TLS Enabled
          </label>
          <div class="control">
            <input type="checkbox" :value="tls" @input="updateTLS" />
          </div>
        </div>

        <div class="field">
          <label class="label">Orderer TLS Hostname override</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="cp_0"
              :value="ordererTLSHostname"
              @input="updateOrdererTLSHostname"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">CAFile</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="cp_0"
              :value="cafile"
              @input="updateCAFile"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters /*, mapActions*/ } from "vuex";

export default {
  computed: {
    ...mapState([
      "tls",
      "chaincodeLabel",
      "chaincodeFilename",
      "chaincodeLanguage",
      "chaincodePath",
      "packageId",
      "ordererHost",
      "ordererTLSHostname",
      "channelid",
      "sequence",
      "version",
      "chaincodeName",
      "cafile"
    ]),
    ...mapGetters([
      "tls",
      "chaincodeLabel",
      "chaincodeFilename",
      "chaincodeLanguage",
      "chaincodePath",
      "packageId",
      "ordererHost",
      "ordererTLSHostname",
      "channelid",
      "sequence",
      "version",
      "chaincodeName",
      "cafile"
    ]),
    packageCommand() {
      return `peer lifecycle chaincode package ${this.$store.state.chaincodeFilename} --lang ${this.$store.state.chaincodeLanguage} --path ${this.$store.state.chaincodePath} --label ${this.$store.state.chaincodeLabel}`;
    }
  },
  methods: {
    updateLabel(e) {
      this.$store.commit("chaincodeLabel", e.target.value);
    },
    updateFilename(e) {
      this.$store.commit("chaincodeFilename", e.target.value);
    },
    updatePath(e) {
      this.$store.commit("chaincodePath", e.target.value);
    },
    updateLanguage(e) {
      this.$store.commit("chaincodeLanguage", e.target.value);
    },
    updatePackageId(e) {
      this.$store.commit("packageId", e.target.value);
    },
    updateOrdererHost(e) {
      this.$store.commit("ordererHost", e.target.value);
    },
    updateOrdererTLSHostname(e) {
      this.$store.commit("ordererTLSHostname", e.target.value);
    },
    updateChannelid(e) {
      this.$store.commit("channelid", e.target.value);
    },
    updateSequence(e) {
      this.$store.commit("sequence", e.target.value);
    },
    updateVersion(e) {
      this.$store.commit("version", e.target.value);
    },

    updateChaincodeName(e) {
      this.$store.commit("chaincodeName", e.target.value);
    },
    updateCAFile(e) {
      this.$store.commit("cafile", e.target.value);
    },
    updateTLS(e) {
      this.$store.commit("tls", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.command-contents {
  font-family: monospace;
}
</style>
