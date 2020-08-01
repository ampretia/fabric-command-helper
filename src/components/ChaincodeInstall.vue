<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Archive Filename</label>
          <div class="control">
            <input v-model="chaincodeFilename" class="input" type="text"  />
          </div>
        </div>

        <div class="field">
          <label class="label">Label</label>
          <div class="control">
            <input v-model="chaincodeLabel" class="input" type="text"  />
          </div>
        </div>

        <div class="field">
          <label class="label">Path</label>
          <div class="control">
            <input v-model="chaincodePath" class="input" type="text"  />
          </div>
        </div>

        <div class="field">
          <label class="label">Language</label>
          <div class="control">
            <div class="select">
              <select v-model="chaincodeLanguage">
                <option>node</option>
                <option>java</option>
                <option>go</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card mb-2">
          <div class="card-content">
            <div class="content">
              <div class="command-contents">{{packageCommand}}</div>
            </div>
          </div>
          <div class="card-footer">
            <button v-clipboard:copy="packageCommand">Copy</button>
          </div>
        </div>

        <div class="card mb-2">
          <div class="card-content">
            <p class="has-background-danger-light my-2">Repeat for each peer:</p>

            <div class="content">
              <div class="command-contents">{{ installCommand }}</div>
            </div>
          </div>
          <div class="card-footer">
            <button v-clipboard:copy="installCommand">Copy</button>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <div class="columns">
      <div class="column">
        <div class="container">
          <p class="has-text-info is-size-5">Enter the package ID here</p>
          <div class="field">
            <label class="label">PackageID</label>
            <div class="control">
              <input v-model="packageId" class="input" type="text" />
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-content">
            <p class="has-background-info-light my-2">To find package ids:</p>

            <div class="content">
              <div class="command-contents">{{queryCommand}}</div>
            </div>
          </div>
          <div class="card-footer">
            <button v-clipboard:copy="queryCommand">Copy</button>
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
    chaincodeFilename: mapBidirectional("chaincodeFilename"),
    chaincodeLanguage: mapBidirectional("chaincodeLanguage"),
    chaincodePath: mapBidirectional("chaincodePath"),
    chaincodeLabel: mapBidirectional("chaincodeLabel"),
    packageId: mapBidirectional("packageId"),
    packageCommand() {
      return `peer lifecycle chaincode package ${this.chaincodeFilename} --lang ${this.chaincodeLanguage} --path ${this.chaincodePath} --label ${this.chaincodeLabel}`;
    },
    installCommand() {
      return `peer lifeyclce chaincode install ${this.chaincodeFilename}`;
    },
    queryCommand() {
      return `peer lifycycle chaincode queryinstalled`;
    }
  }
};
</script>

<style lang="scss" scoped>
.command-contents {
  font-family: monospace;
}
</style>
