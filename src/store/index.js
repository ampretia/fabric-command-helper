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
    targettedPeers: [],
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
  },
  actions: {},
  modules: {},
});
