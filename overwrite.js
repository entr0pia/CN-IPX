// Define main function (script entry)

const newDns = {
  "enable": true,
  "use-system-hosts": true,
  "use-hosts": false,
  "ipv6": false,
  "enhanced-mode": "redir-host",
  "respect-rules": true,
  "prefer-h3": false,
  "proxy-server-nameserver": [
    "https://dns.pub/dns-query",
    "https://doh.apad.pro/dns-query",
    "180.184.1.1"
  ],
  "nameserver": [
    "tls://1.0.0.1",
    "tls://8.8.8.8",
    "https://dns.google/dns-query"
  ],
  "default-nameserver": [
    "119.29.29.29",
    "223.5.5.5",
    "180.184.1.1"
  ],
  "nameserver-policy": {
    "services.googleapis.cn": "tls://8.8.8.8",
    "geosite:googlefcm": "tls://8.8.8.8",
    "dl.google.com": "https://dns.pub/dns-query",
    "geosite:cn": [
      "https://dns.alidns.com/dns-query",
      "https://dns.pub/dns-query",
      "https://9999.alidns.com/dns-query",
      "https://doh.apad.pro/dns-query"
    ]
  },
  "fallback": null
}


function main(config, profileName) {
  config['dns'] = { ...config['dns'], ...newDns }
  return config;
}
