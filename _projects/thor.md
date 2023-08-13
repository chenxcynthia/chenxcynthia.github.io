---
layout: page
title: 'THOR'
description: A distributed systems model of Tor with peer-to-peer encrypted communication.
img: assets/img/proj/thor_thumbnail.png
importance: 1
github: https://github.com/chenxcynthia/thor262
category: engineering
---

<div class = "projheader">
    <div class="links"><a href='https://github.com/chenxcynthia/thor262' class="btn z-depth-0" role="button"> <i class="fab fa-github gh-icon"></i> Github</a></div>
    <div class="links"><a href='https://drive.google.com/file/d/1j-kz729MqY8b7sRjPmwttHnctdFmPCG9/view?usp=share_link' class="btn z-depth-0" role="button"> Paper</a></div>
</div>

Project Collaborator: [Dimitrije Pavlov](https://github.com/darkwood101/)

<br>

#### Background

*Thor262* is a distributed systems implementation of The Onion Router, widely known as Tor. We develop a peer-to-peer distributed system to enable encrypted communication between the client and respective onion routers. Our system relies on three onion routers, selected using a directory server, and the client maintains encrypted connection with these onion routers which eventually relay a connection request to a website in an anonymous manner. Finally, we deploy our system for a real-word application: connecting to ChatGPT in Italy, where it is currently banned, by relaying data through a series of onion routers hosted on international AWS instances.  

#### System Design

We define our own wire protocol for all messages exchanged between Thor participants. We maintain a directory server (DS) that manages a dynamic list of onion routers (ORs). We implement fault detection—the DS is able to detect fail-stop failures of any onion routers through heartbeat messages—and new onion routers can also join the network by sending a message to the directory server. 

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.html path="assets/img/proj/thor_design.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The overall Thor262 system design for client-server communication and establishment of onion routers.
</div>

When a client establishes a connection with the DS, it is given the IP addresses of three onion routers with which it establishes a circuit with. We maintain encrypted communication between client and onion routers through various message types in the form of control cells (Create, Created, Destroy) and relay cells: Extend, Extended, Begin, Data, End. The diagram below explains how the 3rd onion router is established using these message types. Finally, the last onion router (typically OR3) in the circuit establishes a TCP connection with the given destination website <hostname, port> (usually HTTP(S)).


<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.html path="assets/img/proj/thor_or3.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    How the 3rd onion router is established using various message types.
</div>

Encrypted communication is enabled via:
- Mix of asymmetric and symmetric cryptography
- The directory server has a long-term private/public keypair — public key is well-known and is the root for our chain of trust
- ORs have a long-term private/public keypair for signatures – public keys are verified and signed by DS
- Client and ORs negotiate temporary secret keys during circuit creation


&#8202;
#### Running Thor

**Starting a Directory Server (DS)**

Generate private key file for the DS:
```console
$ python3 generate_signing_key.py <DS PRIVATE KEY FILE>
```
Get the corresponding public key:
```console
$ generate_public_key.py <DS PRIVATE KEY FILE> <DS PUBLIC KEY FILE>
```
Make sure that the output DS public key file is distributed to any ORs or clients.

Start a DS:
```console
$ python3 directory_server.py <DS PRIVATE KEY FILE>
```
The DS will bind to all addresses on the machine.

**Starting an Onion Router (OR)**

Generate private key file for the OR:
```console
$ python3 generate_signing_key.py <OR PRIVATE KEY FILE>
```

Start an OR:
```console
$ python3 onion_router.py <DS IP ADDRESS> <DS PUBLIC KEY FILE> <OR PRIVATE KEY FILE>
```
The OR will attempt to join the network administered by the DS at the given IP address with the given public key.


**Creating a ChatGPT client**

To connect to OpenAI API using Thor, first make sure you have a DS running and at least 3 ORs. You will also need an OpenAI API key. Then run the following:
```console
$ python3 chatgpt_client.py <OPENAI API KEY FILE> USETOR <DS PUBLIC KEY FILE> <DS IP ADDRESS>
```
The client will establish a circuit using the OR information received from the DS, and then connect to OpenAI API through the circuit.

<br>

#### Tests

To run tests:
```console
$ python3 test_protocol.py
```

&#8202;
#### Real-World Application

ChatGPT is currently blocked in Italy. We use Thor to circumvent this ban by setting up onion routers hosted on international AWS instances and using the third onion router to establish a TCP connection with https://chat.openai.com using the ChatGPT API.
