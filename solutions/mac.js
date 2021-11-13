const mac = (macaddr) => /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/i.test(macaddr);

export default mac;