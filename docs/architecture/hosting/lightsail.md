# Lightsail Overview

## Introduction

The following document highlights how the site is deployed and hosted using AWS Lightsail as a virtual host.

## Configuration

### System Services

MongoDB and Apache are both configured as services on the Lightsail instance. There is a control script that can 
control these services in `/opt/bitnami/ctlscript.sh` on the image, i.e.:

```shell
$ sudo /opt/bitnami/ctlscript.sh [start|stop|restart] [mongo|apache]
```

## Networking

### Ports

By default, Lightsail images come with all ports restricted, except for port 22 (for `ssh`) and ports 80 and 443 (for 
`http`). If desired, you can add custom port rules on the Lightsail portal, i.e. adding a TCP rule for port 8080 to 
open it to all IPs (such as in the case of verifying that the Apache server that I configured to use it is running).

### IP Addresses/DNS

Lightsail images come with dynamic IPs by default. I wanted to configure my instance to use a static IP address, 
which I could then point my custom domain (`jens-johnson.com`) at.

#### Static IP Address

To create a static IP address, I created a static IP address for the instance in the Lightsail portal, which I named 
`jens-johnson.com` (which resolves to an IPv4 such as `xx.xx.xx.xx`).

#### DNS

After creating a static IP for the site, I created a DNS A record on the Lightsail console to resolve the subdomain 
`@.jens-johnson.com` to the static IP. After doing this, Lightsail gives you a set of custom DNS name servers which 
you can configure using your domain provider (in my case, this was easy to do with Google Domains).