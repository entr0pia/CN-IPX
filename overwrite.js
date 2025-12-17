const newDns = {
  'enable': true,
  'use-system-hosts': true,
  'use-hosts': false,
  'ipv6': false,
  'enhanced-mode': 'redir-host',
  'respect-rules': true,
  'prefer-h3': false,
  'default-nameserver': [
    '119.29.29.29',
    '223.5.5.5',
    '123.125.81.6' // 最近的运营商dns
  ],
  'proxy-server-nameserver': [
    'https://dns.pub/dns-query',
    'https://dns.alidns.com/dns-query',
    '123.125.81.6'
  ],
  'nameserver': [
    'tls://1.0.0.1',
    'tls://8.8.8.8',
    'https://dns.google/dns-query'
  ],
  'nameserver-policy': {
    'services.googleapis.cn': 'tls://8.8.8.8',
    'geosite:googlefcm': 'tls://8.8.8.8',
    'dl.google.com': 'https://dns.pub/dns-query',
    'geosite:cn': [
      'https://dns.alidns.com/dns-query',
      'https://dns.pub/dns-query',
      'https://9999.alidns.com/dns-query',
      'https://10000.alidns.com/dns-query'
    ]
  },
  'fallback': null
}

const newSniffer = {
  'enable': true,
  'force-dns-mapping': true,
  'parse-pure-ip': true,
  'override-destination': false,
  'sniff': {
    'HTTP': {
      'ports': [
        '80',
        '8000-9000'
      ],
      'override-destination': true
    },
    'TLS': {
      'ports': [
        '443',
        '5228',
        '8443'
      ]
    },
    'QUIC': {
      'ports': [
        '443',
        '5228',
        '8443'
      ]
    }
  },
  'force-domain': [
    '+.v2ex.com'
  ],
  'skip-domain': [
    'Mijia Cloud',
    'dlg.io.mi.com',
    '+.apple.com'
  ],
  'skip-src-address': [
    '192.168.0.3/32'
  ],
  'skip-dst-address': [
    '192.168.0.3/32'
  ]
}

// Define main function (script entry)
function main(config, profileName) {
  config['dns'] = { ...config['dns'], ...newDns }
  config['sniffer'] = { ...config['sniffer'], ...newSniffer }
  return config;
}
