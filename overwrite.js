// Define main function (script entry)

const newSniffer = {
  "enable": true,
  "force-dns-mapping": true,
  "parse-pure-ip": true,
  "override-destination": false,
  "sniff": {
    "HTTP": {
      "ports": [
        "80",
        "8080-8880"
      ],
      "override-destination": true
    },
    "TLS": {
      "ports": [
        "443",
        "5228",
        "8443"
      ]
    },
    "QUIC": {
      "ports": [
        "443",
        "5228",
        "8443"
      ]
    }
  },
  "force-domain": [
    "+.v2ex.com"
  ],
  "skip-domain": [
    "Mijia Cloud",
    "dlg.io.mi.com",
    "+.apple.com"
  ],
  "skip-src-address": [
    "192.168.0.3/32"
  ],
  "skip-dst-address": [
    "192.168.0.3/32"
  ]
}

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
  config['sniffer'] = { ...config['sniffer'], ...newSniffer }
  config['dns'] = { ...config['dns'], ...newDns }
  return config;
}
