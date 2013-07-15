# nore-named

A simple name serve for node using redis.

## Features
 * Implement all of the common functionality that is in use today
 * Live update of the domains properties 

### Supported Record Types

The following record types are supported

 * A (ipv4)
 * AAAA (ipv6)
 * CNAME (aliases)
 * SOA (start of authority)
 * MX (mail server records)
 * TXT (arbitrary text entries)
 * SRV (service discovery)


## In progress
  * Fallback to popular name server (Google, OpenDNS, etc)

## Usage

    - $ npm install
    - $ node server.js

## TODO
  * Expose nice programmatic API for interacting with domains

