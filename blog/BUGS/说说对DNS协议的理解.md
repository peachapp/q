# 说说对 DNS 协议的理解

DNS 全称 domain name system，将域名映射到 IP 上。

www.baidu.com --> 127.0.0.1

## 域名解析整个过程

浏览器渲染原理，从地址栏输入到页面渲染完成，经历的所有阶段，详细说明？

1. 用户输入域名
2. 检查自身 DNS 缓存
3. 操作系统 DNS 缓存
4. 本地域名服务器
5. 根据本地 DNS 服务器去查找根 DNS 服务器、顶级域名服务器（TLD）、权威 DNS 服务器，直到找到 IP 为止
6. 返回结果，浏览器缓存并向 IP 发送请求

## DNS 记录类型

1. A 记录：将域名映射到 IPv4 地址
2. AAAA 记录：将域名映射到 IPv6 地址
3. C NAME 记录：将一个域名映射到另外一个域名
4. MX 记录：指定邮件服务器
5. TXT：文本信息存储，域名验证、SPF 记录

## DNS 常见问题

### DNS 解析慢

1. DNS 预解析
2. 使用 CDN，CDN 节点用户就近
3. 减少外部资源请求，自己的域名 + oss + cdn

### DNS 劫持

1. HTTPS 证书保证传输安全性
2. DNSSEC：DNS 安全扩展

## 优化

1. DNS 缓存
2. nslookup 工具
3. dig 工具
4. 在线工具：dns.google.com、dnschecker.org
