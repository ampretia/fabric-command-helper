<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">1st Organization's Peer</label>
          </div>
          <div class="field-body">
            <div class="field">
              <label class="label">Host:Port</label>
              <p class="control is-expanded">
                <input v-model="org1peer" class="input" type="text" />
              </p>
            </div>
            <div class="field">
              <label class="label">TLS RootCert</label>
              <p class="control is-expanded">
                <input v-model="org1peertlscert" class="input" type="text" :disabled="!tlsEnabled" />
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">2nd Organization's Peer</label>
          </div>
          <div class="field-body">
            <div class="field">
              <label class="label">Host:Port</label>
              <p class="control is-expanded">
                <input v-model="org2peer" class="input" type="text" />
              </p>
            </div>
            <div class="field">
              <label class="label">TLS RootCert</label>
              <p class="control is-expanded">
                <input v-model="org2peertlscert" class="input" type="text" :disabled="!tlsEnabled" />
              </p>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Version</label>
          <div class="control">
            <input v-model="version" class="input" type="text" />
          </div>
        </div>

        <div class="field">
          <label class="label">Sequence</label>
          <div class="control">
            <input v-model="sequence" class="input" type="text" />
          </div>
        </div>

        <div class="field">
          <label class="label">Orderer Hostname:Port</label>
          <div class="control">
            <input v-model="ordererHost" class="input" type="text" />
          </div>
        </div>

        <div class="field">
          <label class="label">Orderer TLS Hostname override</label>
          <div class="control">
            <input v-model="ordererTLSHostname" class="input" type="text" :disabled="!tlsEnabled" />
          </div>
        </div>

        <div class="field">
          <label class="label">Channel ID</label>
          <div class="control">
            <input v-model="channelid" class="input" type="text" />
          </div>
        </div>

        <div class="field">
          <label class="label">Chaincode Name</label>
          <div class="control">
            <input v-model="chaincodeName" class="input" type="text" />
          </div>
        </div>

        <div class="field">
          <label class="label">TLS Enabled</label>
          <div class="control">
            <input v-model="tlsEnabled" type="checkbox" />
          </div>
        </div>

        <div class="field">
          <label class="label">CAFile</label>
          <div class="control">
            <input v-model="cafile" class="input" type="text" :disabled="!tlsEnabled" />
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-content">
            <p class="has-background-info-light my-2">Run on only one peer to commit across network:</p>
            <div class="content">
              <div class="command-contents">{{commitCommand}}</div>
            </div>
          </div>
          <div class="card-footer">
            <button v-clipboard:copy="commitCommand">Copy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function mapBidirectional(propname) {
  return {
    get() {
      return this.$store.getters[propname];
    },
    set(value) {
      this.$store.commit(propname, value);
    }
  };
}

export default {
  computed: {
    version: mapBidirectional("version"),
    sequence: mapBidirectional("sequence"),
    ordererHost: mapBidirectional("ordererHost"),
    channelid: mapBidirectional("channelid"),
    chaincodeName: mapBidirectional("chaincodeName"),
    packageId: mapBidirectional("packageId"),
    tlsEnabled: mapBidirectional("tls"),
    ordererTLSHostname: mapBidirectional("ordererTLSHostname"),
    cafile: mapBidirectional("cafile"),
    org1peer: mapBidirectional("org1peer"),
    org2peer: mapBidirectional("org2peer"),
    org1peertlscert: mapBidirectional("org1peertlscert"),
    org2peertlscert: mapBidirectional("org2peertlscert"),
    commitCommand() {
      if (this.tlsEnabled) {
        return `peer lifecycle chaincode commit -o ${this.ordererHost}--peerAddresses ${this.org1peer} --tlsRootCertFiles ${this.org1peertlscert}  --peerAddresses ${this.org2peer} --tlsRootCertFiles ${this.org2peertlscert} --ordererTLSHostnameOverride ${this.ordererTLSHostname} --channelID ${this.channelid} --name ${this.chaincodeName} -v ${this.version} --sequence ${this.sequence} --tls --cafile ${this.cafile} --waitForEvent`;
      } else {
        return `peer lifecycle chaincode commit -o ${this.ordererHost}--peerAddresses ${this.org1peer}  --peerAddresses ${this.org2peer} --channelID ${this.channelid} --name ${this.chaincodeName} -v ${this.version} --sequence ${this.sequence} --waitForEvent`;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.command-contents {
  font-family: monospace;
}
</style>
