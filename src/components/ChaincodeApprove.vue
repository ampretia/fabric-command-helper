<template>
  <div class="container">
    <div class="columns">
      <div class="column">
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
          <label class="label">Package ID</label>
          <div class="control">
            <input v-model="packageId" class="input" type="text" />
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
      <!--column-->

      <div class="column">
        <div class="card">
          <div class="card-content">
            <p class="has-background-danger-light my-2">Repeat for each peer:</p>

            <div class="content">
              <div class="command-contents">{{approveCommand}}</div>
            </div>
          </div>
          <div class="card-footer">
            <button v-clipboard:copy="approveCommand">Copy</button>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <p class="has-background-info-light my-2">Run to check commit readdiness:</p>
            <div class="content">
              <div class="command-contents">{{checkcommitCommand}}</div>
            </div>
          </div>
          <div class="card-footer">
            <button v-clipboard:copy="checkcommitCommand">Copy</button>
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
    checkcommitCommand() {
      return `peer lifecycle chaincode checkcommitreadiness --channelID ${this.channelid} --name ${this.chaincodeName} -v ${this.version} --sequence ${this.sequence}`;
    },
    approveCommand() {
      if (this.tlsEnabled) {
        return `peer lifecycle chaincode approveformyorg --orderer ${this.ordererHost} --ordererTLSHostnameOverride ${this.ordererTLSHostname}----channelID ${this.channelid} --name ${this.chaincodeName} -v ${this.version} --package-id ${this.packageId} --sequence ${this.sequence} --tls --cafile ${this.cafile}`;
      } else {
        return `peer lifecycle chaincode approveformyorg --orderer ${this.ordererHost} --channelID ${this.channelid} --name ${this.chaincodeName} -v ${this.version} --package-id ${this.packageId} --sequence ${this.sequence}`;
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
