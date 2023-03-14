https://mayiyun.club/api/v1/client/subscribe?token=66c1e2b9cd66cc81c42ca58a025b4b95

https://v1.efshop.cc/api/v1/client/subscribe?token=9fb0efd38f431ef64ff9435507307fb7

&config=https%3A%2F%2Fraw.githubusercontent.com%2Frangluwme%2Frule%2Fmain%2Fclash.ini

```
parsers:
parsers:
  - url: https://sub.xeton.dev/sub?target=clash&url=https%3A%2F%2Fmayiyun.club%2Fapi%2Fv1%2Fclient%2Fsubscribe%3Ftoken%3D66c1e2b9cd66cc81c42ca58a025b4b95%7Chttps%3A%2F%2Fv1.efshop.cc%2Fapi%2Fv1%2Fclient%2Fsubscribe%3Ftoken%3D9fb0efd38f431ef64ff9435507307fb7&config=https%3A%2F%2Fraw.githubusercontent.com%2Frangluwme%2Frule%2Fmain%2Fclash.ini
    yaml:
      prepend-rules:
        - DOMAIN-KEYWORD,logitechg,REJECT
        - DOMAIN-KEYWORD,weibo,REJECT # rules最前面增加一个规则
        - DOMAIN-KEYWORD,v2ex,REJECT
        - DOMAIN-KEYWORD,cc98,REJECT
        - DOMAIN-KEYWORD,rangluw,REJECT
        - DOMAIN-KEYWORD,analytics,REJECT
        - DOMAIN-KEYWORD,adservice,REJECT
        - DOMAIN-KEYWORD,youtube,REJECT
        - DOMAIN-KEYWORD,googlevideo,REJECT
        - DOMAIN-SUFFIX,ytimg.com,REJECT
        - DOMAIN-SUFFIX,t.me,REJECT
        - DOMAIN-SUFFIX,tdesktop.com,REJECT
        - DOMAIN-SUFFIX,telegra.ph,REJECT
        - DOMAIN-SUFFIX,telegram.me,REJECT
        - DOMAIN-SUFFIX,telegram.org,REJECT
        - DOMAIN-SUFFIX,telesco.pe,REJECT
        - IP-CIDR,91.108.0.0/16,REJECT
        - IP-CIDR,109.239.140.0/24,REJECT
        - IP-CIDR,149.154.160.0/20,REJECT
        - IP-CIDR6,2001:67c:4e8::/48,REJECT
        - IP-CIDR6,2001:b28:f23d::/48,REJECT
        - IP-CIDR6,2001:b28:f23f::/48,REJECT
      append-proxies:
        - name: ZJU # proxies最后面增加一个服务
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

## 检测网络联通性&generate_204

- http://www.msftconnecttest.com/connecttest.txt
- http://captive.apple.com/
- http://www.apple.com/library/test/success.html

---

- https://www.google.com/search?q=%s&lr=lang_zh-CN
- https://www.google.com/search?q=%s&hl=zh_CN

- https://www.google.com/?hl=zh_CN
- https://www.google.com/?lr=lang_zh-CN

> (A).*(B)        节点名既有 A又有 B  
>
> (A)|(B)         节点名有 A 或者 B  
>
> ^((?!A).)*$     节点名不含有 A  
>
> (?!.*(A)).*(B)  节点名不含有 A，同时含有 B

```yaml
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
    use-hosts: true # 查询 hosts 并返回 IP 记录
    nameserver-policy:
      '+.zju.edu.cn': '10.105.1.124'
      '+.cc98.org': '10.105.1.124'
      '+.cc98.top': '10.105.1.124'
    # proxy-server-nameserver:
    default-nameserver:
      - 223.5.5.5
      - 1.1.1.1
    nameserver:
      - https://doh.pub/dns-query
      - https://dns.alidns.com/dns-query
    fallback:
      - https://east.lele233.pro/dns-query
      - https://east.lele233.pro/cdn
      - https://south.lele233.pro/dns-query
      - https://south.lele233.pro/cdn
      - https://hk.lele233.cn:2333/dns-query
      - https://cn-east.iqiqzz.com/dns-query
      - https://cn-east.iqiqzz.com/cdn
      - https://cn-south.iqiqzz.com/dns-query
      - https://cn-south.iqiqzz.com/cdn
      # - https://cloudflare-dns.com/dns-query
      # - https://dns.google/dns-query
    fallback-filter: #开启之后，fallback才会生效，符合条件的IP会使用fallback解析，实际测试下来速度会很慢，此时可以把nameserver里面的DNS放到fallback里面
    # 但是这样就跟原来不开启fallback-filter是一样的。
    # 所以在dns污染的时候可以开启fallback和fallback-filter 选项，默认不开启就可以了。Alidns对于国内外域名解析是一流的，可以放心使用。
      geoip: true
      geoip-code: CN
      ipcidr:
         - 240.0.0.0/4
         - 0.0.0.0/32
         - 127.0.0.1/32
    fake-ip-filter:
      - www.msftconnecttest.com 
```
