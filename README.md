
- [Parser](#parser)
- [Parser_ZJU](#parser_zju)
- [Parser_rangluw](#parser_rangluw)
- [Mixin](#mixin)
- [Code](#code)
- [DNS](#dns)
# Parser
```
parsers: # array
  - reg: ^.*$  
    code: |
      module.exports.parse = (raw, { yaml }) => {
        const rawObj = yaml.parse(raw)
        const groups = []
        const rules = []
        return yaml.stringify({ ...rawObj, 'proxy-groups': groups, rules })
      } 
    yaml:
      prepend-rules:
        - RULE-SET,BanAD,REJECT
        - RULE-SET,BanProgramAD,REJECT
        - RULE-SET,reject,REJECT
        - RULE-SET,zju,DIRECT
        - RULE-SET,proxylist,💥 Proxy Network
        - RULE-SET,Microsoft,DIRECT
        - RULE-SET,direct,DIRECT
        - RULE-SET,cncidr,DIRECT
        - RULE-SET,directlist,DIRECT
        - RULE-SET,ProxyLite,💥 Proxy Network
        - RULE-SET,ProxyGFWlist,💥 Proxy Network
        - GEOIP,CN,DIRECT
        - MATCH,💥 Proxy Network
      prepend-proxy-groups:
        - name: 💥 Proxy Network
          type: select
          proxies:
          - 🇭🇰 香港
          - 🇨🇳 台湾
          - 🇸🇬 新加坡
          - 🇯🇵 日本
          - 🇰🇷 韩国     
        - name: 🇭🇰 香港 
          type: url-test
          url: http://www.apple.com/library/test/success.html
          interval: 10
        - name: 🇨🇳 台湾 
          type: url-test
          url: http://www.apple.com/library/test/success.html
          interval: 10
        - name: 🇸🇬 新加坡 
          type: url-test
          url: http://www.apple.com/library/test/success.html
          interval: 10
        - name: 🇯🇵 日本
          type: url-test
          url: http://www.apple.com/library/test/success.html
          interval: 10
        - name: 🇰🇷 韩国
          type: url-test
          url: http://www.apple.com/library/test/success.html
          interval: 10
      commands:
        - proxy-groups.🇭🇰 香港.proxies=[]proxyNames|香港 
        - proxy-groups.🇨🇳 台湾.proxies=[]proxyNames|台
        - proxy-groups.🇸🇬 新加坡.proxies=[]proxyNames|新加坡
        - proxy-groups.🇯🇵 日本.proxies=[]proxyNames|日
        - proxy-groups.🇰🇷 韩国.proxies=[]proxyNames|韩
      mix-rule-providers: 
        directlist: 
          type: http
          behavior: classical
          url: "https://cdn.jsdelivr.net/gh/rangluwme/rule/directlist.yaml"
          path: ./ruleset/directlist.yaml
          interval: 86400
        zju: 
          type: http
          behavior: classical
          url: "https://cdn.jsdelivr.net/gh/rangluwme/rule/zju.yaml"
          path: ./ruleset/zju.yaml
          interval: 86400
        proxylist: 
          type: http
          behavior: classical
          url: "https://cdn.jsdelivr.net/gh/rangluwme/rule/proxylist.yaml"
          path: ./ruleset/proxylist.yaml
          interval: 86400
        reject: # 广告域名列表
          type: http
          behavior: domain
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt"
          path: ./ruleset/reject.yaml
          interval: 86400
        direct: # 直连域名列表
          type: http
          behavior: domain
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt"
          path: ./ruleset/direct.yaml
          interval: 86400
        cncidr: # 中国大陆 IP 地址列表
          type: http
          behavior: ipcidr
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt"
          path: ./ruleset/cncidr.yaml
          interval: 86400
        BanAD:
          behavior: classical 
          type: http
          url: "https://cdn.jsdelivr.net/gh/Mythologyli/ZJU-Rule/Clash/Providers/BanAD.yaml"
          interval: 86400
          path: ./ACL4SSR/BanAD.yaml
        BanProgramAD:
          behavior: classical 
          type: http
          url: "https://cdn.jsdelivr.net/gh/Mythologyli/ZJU-Rule/Clash/Providers/BanProgramAD.yaml"
          interval: 86400
          path: ./ACL4SSR/BanProgramAD.yaml
        Microsoft:
          behavior: classical 
          type: http
          url: "https://cdn.jsdelivr.net/gh/Mythologyli/ZJU-Rule/Clash/Providers/Ruleset/Microsoft.yaml"
          interval: 86400
          path: ./ACL4SSR/Microsoft.yaml
        ProxyLite:
          behavior: classical 
          type: http
          url: "https://cdn.jsdelivr.net/gh/Mythologyli/ZJU-Rule/Clash/Providers/ProxyLite.yaml"
          interval: 86400
          path: ./ACL4SSR/ProxyLite.yaml
        ProxyGFWlist:
          behavior: classical 
          type: http
          url: "https://cdn.jsdelivr.net/gh/Mythologyli/ZJU-Rule/Clash/Providers/ProxyGFWlist.yaml"
          interval: 86400
          path: ./ACL4SSR/ProxyGFWlist.yaml
```

# Parser_ZJU
```
        - RULE-SET,zju,🏫 ZJUWLAN
      append-proxies:
        - name: ZJU
          type: socks5
          server: 127.0.0.1
          port: 1080
      prepend-proxy-groups:
        - name: 🏫 ZJUWLAN
          type: select
          proxies:
          - DIRECT
          - ZJU
```

# Mixin
```
mixin: # Mixin 配置文件
  tun:
    enable: true
    stack: gvisor
    auto-route: true
    auto-detect-interface: true
    dns-hijack:
      - any:53
  dns:
    enable: true
    listen: 0.0.0.0:53
    ipv6: true
    enhanced-mode: fake-ip
    fake-ip-range: 198.18.0.1/16
    fake-ip-filter:
      - "*.msftncsi.com"
      - "*.msftconnecttest.com"
      - WORKGROUP
      - zjuwlan.intl.zju.edu.cn
    use-hosts: false
    nameserver-policy:
      '+.zju.edu.cn': '10.105.1.124'
      '+.cc98.org': '10.105.1.124'
      '+.cc98.top': '10.105.1.124'
    # proxy-server-nameserver:
    default-nameserver:
      - 223.5.5.5
      - 8.8.4.4
    nameserver:
      - tls://dns.alidns.com
      - tls://dns.pub
    fallback:
      - tls://east.lele233.pro
      - tls://south.lele233.pro
      - tls://cn-east.iqiqzz.com
      - tls://cn-south.iqiqzz.com
      - tls://hk.lele233.cn:853
    fallback-filter:
      geoip: true
      geoip-code: CN
      ipcidr:
         - 240.0.0.0/4
         - 0.0.0.0/32
         - 127.0.0.1/32
```

# Parser_rangluw
```
parsers: # array
  - reg: ^.*$  
    code: |
      module.exports.parse = (raw, { yaml }) => {
        const rawObj = yaml.parse(raw)
        const groups = []
        const rules = []
        return yaml.stringify({ ...rawObj, 'proxy-groups': groups, rules })
      } 
    yaml:
      prepend-rules:
        - DOMAIN-KEYWORD,logitechg,REJECT
        - DOMAIN-KEYWORD,analytics,REJECT 
        - DOMAIN-KEYWORD,adservice,REJECT
        - DOMAIN-SUFFIX,rangluw.pages.dev,REJECT
        - DOMAIN-KEYWORD,weibo,REJECT
        - DOMAIN-KEYWORD,sinaimg,REJECT
        - DOMAIN-KEYWORD,v2ex,REJECT
        - DOMAIN-KEYWORD,cc98,REJECT
        - DOMAIN-KEYWORD,rangluw,REJECT
        - DOMAIN-KEYWORD,youtube,REJECT
        - DOMAIN-KEYWORD,googlevideo,REJECT
        - DOMAIN-SUFFIX,ytimg.com,REJECT
        - RULE-SET,BanAD,REJECT
        - RULE-SET,BanProgramAD,REJECT
        - RULE-SET,reject,REJECT

        - RULE-SET,zju,DIRECT
        - RULE-SET,proxylist,💥 Proxy Network
        
        - RULE-SET,Microsoft,DIRECT
        - RULE-SET,direct,DIRECT
        - RULE-SET,cncidr,DIRECT
        - RULE-SET,directlist,DIRECT

        - RULE-SET,ProxyLite,💥 Proxy Network
        - RULE-SET,ProxyGFWlist,💥 Proxy Network
        - GEOIP,CN,DIRECT
        - MATCH,💥 Proxy Network
      prepend-proxy-groups:
        - name: 💥 Proxy Network
          type: select
          proxies:
          - 🇭🇰 香港
          - 🇨🇳 台湾
          - 🇸🇬 新加坡
          - 🇯🇵 日本
          - 🇰🇷 韩国     
        - name: 🇭🇰 香港 
          type: url-test
          url: http://www.apple.com/library/test/success.html
          interval: 10
        - name: 🇨🇳 台湾 
          # type: select
          type: url-test
          url: http://www.apple.com/library/test/success.html
          interval: 10
        - name: 🇸🇬 新加坡 
          type: url-test
          url: http://www.apple.com/library/test/success.html
          interval: 10
        - name: 🇯🇵 日本
          type: url-test
          url: http://www.apple.com/library/test/success.html
          interval: 10
        - name: 🇰🇷 韩国
          type: url-test
          url: http://www.apple.com/library/test/success.html
          interval: 10
      commands:
        - proxy-groups.🇭🇰 香港.proxies=[]proxyNames|香港 
        - proxy-groups.🇨🇳 台湾.proxies=[]proxyNames|台
        - proxy-groups.🇸🇬 新加坡.proxies=[]proxyNames|新加坡
        - proxy-groups.🇯🇵 日本.proxies=[]proxyNames|日
        - proxy-groups.🇰🇷 韩国.proxies=[]proxyNames|韩
      mix-rule-providers: 
        directlist: 
          type: http
          behavior: classical
          url: "https://cdn.jsdelivr.net/gh/rangluwme/rule/directlist.yaml"
          path: ./ruleset/directlist.yaml
          interval: 86400
        zju: 
          type: http
          behavior: classical
          url: "https://cdn.jsdelivr.net/gh/rangluwme/rule/zju.yaml"
          path: ./ruleset/zju.yaml
          interval: 86400
        proxylist: 
          type: http
          behavior: classical
          url: "https://cdn.jsdelivr.net/gh/rangluwme/rule/proxylist.yaml"
          path: ./ruleset/proxylist.yaml
          interval: 86400
        reject: # 广告域名列表
          type: http
          behavior: domain
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt"
          path: ./ruleset/reject.yaml
          interval: 86400
        direct: # 直连域名列表
          type: http
          behavior: domain
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt"
          path: ./ruleset/direct.yaml
          interval: 86400
        cncidr: # 中国大陆 IP 地址列表
          type: http
          behavior: ipcidr
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt"
          path: ./ruleset/cncidr.yaml
          interval: 86400
        BanAD:
          behavior: classical 
          type: http
          url: "https://cdn.jsdelivr.net/gh/Mythologyli/ZJU-Rule/Clash/Providers/BanAD.yaml"
          interval: 86400
          path: ./ACL4SSR/BanAD.yaml
        BanProgramAD:
          behavior: classical 
          type: http
          url: "https://cdn.jsdelivr.net/gh/Mythologyli/ZJU-Rule/Clash/Providers/BanProgramAD.yaml"
          interval: 86400
          path: ./ACL4SSR/BanProgramAD.yaml
        Microsoft:
          behavior: classical 
          type: http
          url: "https://cdn.jsdelivr.net/gh/Mythologyli/ZJU-Rule/Clash/Providers/Ruleset/Microsoft.yaml"
          interval: 86400
          path: ./ACL4SSR/Microsoft.yaml
        ProxyLite:
          behavior: classical 
          type: http
          url: "https://cdn.jsdelivr.net/gh/Mythologyli/ZJU-Rule/Clash/Providers/ProxyLite.yaml"
          interval: 86400
          path: ./ACL4SSR/ProxyLite.yaml
        ProxyGFWlist:
          behavior: classical 
          type: http
          url: "https://cdn.jsdelivr.net/gh/Mythologyli/ZJU-Rule/Clash/Providers/ProxyGFWlist.yaml"
          interval: 86400
          path: ./ACL4SSR/ProxyGFWlist.yaml
```


# Code
- https://invite.efshop.cc/#/register?code=vHGeVVP1
- https://github.com/Mythologyli/ZJU-Rule/tree/master/Clash/Providers
- https://github.abskoop.workers.dev/https://github.com/rangluwme/rule/releases/download/1.0/Clash.7z

---
- http://www.msftconnecttest.com/connecttest.txt
- http://captive.apple.com/
- http://www.apple.com/library/test/success.html
- https://www.google.com/search?q=%s&lr=lang_zh-CN
- https://www.google.com/search?q=%s&hl=zh_CN
- https://www.google.com/?hl=zh_CN
- https://www.google.com/?lr=lang_zh-CN
# DNS
```
https://cn-east.iqiqzz.com/dns-query
https://cn-east.iqiqzz.com/cdn
https://cn-south.iqiqzz.com/dns-query
https://cn-south.iqiqzz.com/cdn
https://east.lele233.pro/dns-query
https://east.lele233.pro/cdn
https://south.lele233.pro/dns-query
https://south.lele233.pro/cdn
https://hk.lele233.cn:2333/dns-query
```
