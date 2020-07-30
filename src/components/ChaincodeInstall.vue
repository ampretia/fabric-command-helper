<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Archive Filename</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="cp.tar.gz"
              :value="chaincodeFilename"
              @input="updateFilename"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Label</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="cp_0"
              :value="chaincodeLabel"
              @input="updateLabel"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Path</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="./contract"
              :value="chaincodePath"
              @input="updatePath"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Language</label>
          <div class="control">
            <div class="select">
              <select :value="chaincodeLanguage" @input="updateLanguage">
                <option>node</option>
                <option>java</option>
                <option>go</option>
              </select>
            </div>
          </div>
        </div>
        <hr />
        <div class="container">
          <p class="has-text-info is-size-5">Enter the package ID here</p>
          <div class="field">
            <label class="label">PackageID</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="cp_0"
                :value="chaincodeLabel"
                @input="updateLabel"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card mb-2">
          <div class="card-content">
            <div class="content">
              <div class="command-contents">
                peer lifecycle chaincode package
                <p class="has-background-success-light">
                  {{ chaincodeFilename }}
                </p>
                --lang {{ chaincodeLanguage }} --path
                {{ chaincodePath }} --label
                {{ chaincodeLabel }}
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button v-clipboard:copy="packageCommand">Copy</button>
          </div>
        </div>

        <div class="card mb-2">
          <div class="card-content">
            <p class="has-background-danger-light my-2">
              Repeat for each peer:
            </p>

            <div class="content">
              <div class="command-contents">
                peer lifecycle chaincode install {{ chaincodeFilename }}
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button v-clipboard:copy="packageCommand">Copy</button>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <p class="has-background-info-light my-2">To find package ids:</p>

            <div class="content">
              <div class="command-contents"></div>
            </div>
          </div>
          <div class="card-footer">
            <button v-clipboard:copy="packageCommand">Copy</button>
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
      "chaincodeLabel",
      "chaincodeFilename",
      "chaincodeLanguage",
      "chaincodePath"
    ]),
    ...mapGetters([
      "chaincodeLabel",
      "chaincodeFilename",
      "chaincodeLanguage",
      "chaincodePath"
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
    }
  }
};
</script>

<style lang="scss" scoped>
.command-contents {
  font-family: monospace;
}
</style>
