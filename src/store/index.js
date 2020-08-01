import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tls: true,
    chaincodeLabel: "",
    chaincodeFilename: "",
    chaincodeLanguage: "",
    chaincodePath: "",
    packageId: "",
    ordererHost: "",
    ordererTLSHostname: "",
    channelid: "",
    sequence: "",
    version: "",
    chaincodeName: "",
    cafile: "",
    org1peer: "",
    org2peer: "",
    org1peertlscert: "",
    org2peertlscert: "",
    arguments: ""
  },
  mutations: {
    chaincodeLabel(state, label) {
      state.chaincodeLabel = label;
    },
    chaincodeFilename(state, x) {
      state.chaincodeFilename = x;
    },
    chaincodePath(state, x) {
      state.chaincodePath = x;
    },
    chaincodeLanguage(state, x) {
      state.chaincodeLanguage = x;
    },
    packageId(state, x) {
      state.packageId = x;
    },
    ordererHost(state, x) {
      state.ordererHost = x;
    },
    ordererTLSHostname(state, x) {
      state.ordererTLSHostname = x;
    },
    channelid(state, x) {
      state.channelid = x;
    },
    sequence(state, x) {
      state.sequence = x;
    },
    version(state, x) {
      state.version = x;
    },
    chaincodeName(state, x) {
      state.chaincodeName = x;
    },
    cafile(state, x) {
      state.cafile = x;
    },
    tls(state, x) {
      state.tls = x;
    },
    org1peer(state, x) {
      state.org1peer = x;
    },
    org2peer(state, x) {
      state.org2peer = x;
    },
    org1peertlscert(state, x) {
      state.org1peertlscert = x;
    },
    org2peertlscert(state, x) {
      state.org2peertlscert = x;
    },
    arguments(state, x) {
      state.arguments = x;
    }
  },

  getters: {
    chaincodeLabel: state => {
      return state.chaincodeLabel;
    },
    chaincodeFilename: state => {
      return state.chaincodeFilename;
    },
    chaincodePath: state => {
      return state.chaincodePath;
    },
    chaincodeLanguage: state => {
      return state.chaincodeLanguage;
    },
    packageId(state) {
      return state.packageId;
    },
    ordererHost(state) {
      return state.ordererHost;
    },
    ordererTLSHostname(state) {
      return state.ordererTLSHostname;
    },
    channelid(state) {
      return state.channelid;
    },
    sequence(state) {
      return state.sequence;
    },
    version(state) {
      return state.version;
    },
    chaincodeName(state) {
      return state.chaincodeName;
    },
    cafile(state) {
      return state.cafile;
    },
    tls(state) {
      return state.tls;
    },
    org1peer(state) {
      return state.org1peer;
    },
    org2peer(state) {
      return state.org2peer;
    },
    org1peertlscert(state) {
      return state.org1peertlscert;
    },
    org2peertlscert(state) {
      return state.org2peertlscert;
    },
    arguments(state) {
      return state.arguments;
    }
  },
  actions: {},
  modules: {}
});
