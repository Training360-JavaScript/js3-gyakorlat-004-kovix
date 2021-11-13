const checkIP = (ip) => /^((2[0-5][0-5]|1[0-9][0-9]|[0-9][0-5]|\d)\.){3}(2[0-5][0-5]|1[0-9][0-9]|[0-9][0-5]|\d)$/.test(ip);

export default checkIP;