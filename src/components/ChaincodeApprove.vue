<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Version</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="cp_0"
              value="cc_label"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Sequence</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="cp_0"
              value="cc_label"
            />
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-content">
            <p class="has-background-danger-light my-2">
              Repeat for each peer:
            </p>

            <div class="content">
              <div class="command-contents">
                peer lifecycle chaincode approveformyorg --orderer
                localhost:7050 --ordererTLSHostnameOverride orderer.example.com
                \ --channelID mychannel \ --name papercontract \ -v 0 \
                --package-id $PACKAGE_ID \ --sequence 1 \ --tls \ --cafile
                $ORDERER_CA
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button v-clipboard:copy="packageCommand">
              Copy
            </button>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <p class="has-background-info-light my-2">
              Run to check commit readdiness:
            </p>
            <div class="content">
              <div class="command-contents">
                peer lifecycle chaincode checkcommitreadiness --channelID
                mychannel --name papercontract -v 0 --sequence 1
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button v-clipboard:copy="packageCommand">
              Copy
            </button>
          </div>
        </div>

        Repeat for each peer
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters /*, mapActions*/ } from "vuex";
export default {
  computed: {
    ...mapState([
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
      "contractName",
      "caFile"
    ]),
    ...mapGetters([
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
      "contractName",
      "caFile"
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
    updateContractName(e) {
      this.$store.commit("contractName", e.target.value);
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
