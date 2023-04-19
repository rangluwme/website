- [Mixin](#mixin)
- [Code](#code)
- [DNS](#dns)

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
# Code
- https://github.com/Mythologyli/ZJU-Rule/tree/master/Clash/Providers
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
