https://mayiyun.club/api/v1/client/subscribe?token=66c1e2b9cd66cc81c42ca58a025b4b95


https://v1.efshop.cc/api/v1/client/subscribe?token=9fb0efd38f431ef64ff9435507307fb7


&config=https%3A%2F%2Fraw.githubusercontent.com%2Frangluwme%2Frule%2Fmain%2Fclash.ini

```
parsers:
  - url: https://sub.xeton.dev/sub?target=clash&new_name=true&url=https%3A%2F%2Fmayiyun.club%2Fapi%2Fv1%2Fclient%2Fsubscribe%3Ftoken%3D66c1e2b9cd66cc81c42ca58a025b4b95%7Chttps%3A%2F%2Fv1.efshop.cc%2Fapi%2Fv1%2Fclient%2Fsubscribe%3Ftoken%3D9fb0efd38f431ef64ff9435507307fb7&insert=false&config=https%3A%2F%2Fraw.githubusercontent.com%2Frangluwme%2Frule%2Fmain%2Fclash.ini
    yaml:
      prepend-rules:
        - DOMAIN-KEYWORD,steamdownload,REJECT # rules最前面增加一个规则
        - DOMAIN-KEYWORD,logitechg,REJECT
        - DOMAIN-KEYWORD,weibo,REJECT # rules最前面增加一个规则
        - DOMAIN-KEYWORD,v2ex,REJECT
        - DOMAIN-KEYWORD,cc98,REJECT
        - DOMAIN-KEYWORD,rangluw,REJECT
      # append-proxies:
      #   - name: test # proxies最后面增加一个服务
      #     type: http
      #     server: 123.123.123.123
      #     port: 456

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
```
    - https://east.lele233.pro/dns-query
    - https://east.lele233.pro/cdn
    - https://hk.lele233.cn:2333/dns-query
    - https://cn-east.iqiqzz.com/dns-query
    - https://cn-east.iqiqzz.com/cdn
    - https://cn-south.iqiqzz.com/dns-query
    - https://cn-south.iqiqzz.com/cdn
    - https://south.lele233.pro/dns-query
    - https://south.lele233.pro/cdn
```
