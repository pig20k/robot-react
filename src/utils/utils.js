export default function getObjectId(id) {
      var oId = id.timeSecond.toString(16) +
            id.machineIdentifier.toString(16) +
            id.processIdentifier.toString(16) +
            ('000000' + id.counter.toString(16)).slice(-6);
      return oId
}
