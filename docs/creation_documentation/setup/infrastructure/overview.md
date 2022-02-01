# Infrastructure Overview

*Last Updated: 2022-01-28*

## Introduction

This document provides a brief overview of the infrastructure used to create this project.

## Hosting

I'm using [AWS Lightsail](https://aws.amazon.com/lightsail/) to host the site. Lightsail provides a pre-configured
`MEAN` stack running on a Bitnami Linux instance. This pre-configuration allowed me to quickly deploy the 
application while focusing on the app itself.

### Apache Server

The instance image comes with an Apache server running on the  default HTTP 80 port. This means that accessing the 
instance's IP from a browser will return the default Apache page  at `/opt/bitnami/apache2/htdocs/index.html` on the 
image, i.e. something like:
![](../../_images/default_bitnami_page.png)

In order to open up port 80 for the application server, so that accessing the instance's IP (or [http://www.jens-johnson.com](http://www.jens-johnson.com))
from a browser will return the content served by the application, the Apache server either needs to be disabled, or
moved to a separate port; opted for the latter option.

To do this, I modified the Apache configuration files as such:
1. First, I changed the following file:
    ```shell
    $ vi /opt/bitnami/apache2/conf/httpd.conf
    ```
   Where there is a default `Listen` command:
   ```shell
   Listen 8080 # Changed to 8080 instead of 80
   ```
2. I then changed the following file:
   ```shell
   $ vi /opt/bitnami/apache2/conf/bitnami/bitnami.conf
   ```

   To have default port of 8080 on the virtual hosts instead of 80:
   ```shell
   <VirtualHost _default_:8080> # Change this line to port 80
    DocumentRoot "/opt/bitnami/apache/htdocs"
    <Directory "/opt/bitnami/apache/htdocs">
      Options Indexes FollowSymLinks
      AllowOverride All
      Require all granted
    </Directory>
    
    # Error Documents
    ErrorDocument 503 /503.html
   </VirtualHost>
   ```

I then restarted the `apache` service to launch the changes (because these are configuration files, the changes are
also permanent at startup):
```shell
$ sudo /opt/bitnami/ctlscript.sh restart apache
```

## Domain Service

I wanted a custom domain for the site instead of the default IP that came with the Lightsail instance used to host 
the site (obviously it wouldn't be ideal to tell people to visit `192.472.40.21` or something when they visited my 
site). Thankfully, [jens-johnson.com](http://jens-johnson.com) was available through Google Domains. Once the 
instance was configured, and I had the server running on the default HTTP port, I was able to use DNS routing to 
configure my custom domain to point to my site (more on this in the [Lightsail](../../../architecture/hosting/lightsail.md)
architecture docs).

## Storage

- The website uses the MongoDB instance on the Lightsail stack for storage.
- The application itself uses a client that connects to the DB through a privileged role, i.e.:
  ![](../../_images/db_authentication.jpg)
- The access role/connection URI is authenticated through a simple username/password combination specified in the connection string, i.e.:
  ```
  mongodb://{user}:{password}@{host}:{port}/{website-database-name}?authSource=admin&readPreference=primary&directConnection=true
  ```
- I've also created roles that allow me to connect to the website database through services like MongoDB compass for debugging and development.