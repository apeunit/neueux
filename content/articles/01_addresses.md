---
id: ltq15cz4j
title: 4/ Addresses
slug: addresses
category: Blockchain UX
featured_image: >-
  https://res.cloudinary.com/ape-unit/image/upload/v1628611403/neueux/media/articles/Frame16465%202037.png
summary: "Considering how vital wallets and their addresses are to the blockchain ecosystem, it is baffling that no one realized earlier in the development of different blockchain protocols how important human-readable names are to the usability and adoption of this technology. Mapping names to addresses has been commonplace since the 1970s. One can hardly expect first-time wallet users coming from the user-friendly applications on the Internet to be satisfied with the poor usability of crypto addresses."
author: Maximilian Blazek
date: 'August 9th, 2021'
---
## Addresses in the Internet

If you think back to your first interactions with the Internet, one of them is probably setting up an E-Mail address. For many people, it was (and is) their first interaction with the Internet and a gateway to many other services (aka. sign-up with E-Mail).
Luckily we all got an E-Mail with the **mail@example.com** format instead of an IP address (which is the actual address computers use in the background) like **123.456.78.90**. Having a human-readable email address name or website name like **example.com** is, of course, way more convenient than having to remember the actual IP address — a “random” string of numbers.
The precedent of using names instead of IP addresses on the user side was set in the 1970s on the ARPAnet — a predecessor to the Internet.  In 1971, Peggy Karp suggested  standardizing the mapping of names to IP addresses ([RFC226](https://datatracker.ietf.org/doc/html/rfc226), [RFC247](https://datatracker.ietf.org/doc/html/RFC247)). This custom was later adopted on the Internet in the form of domain names like **example.com**, **example.org** or **example.xyz**.
Mapping names to IP addresses for the sake of usability is by no means a new idea. On the contrary, it was conceived almost 20 years before the invention of the Internet as we know it today.

## Addresses in Blockchain

Wallets on the Blockchain serve a similar purpose to E-Mail Addresses on the Internet. They are the gateway to most Blockchain based products and services. You want to buy an NFT? You will have to "log in" to the NFT-marketplace and later pay with your wallet. Wallets are, similarly to E-Mail on the Internet, the first and primary way of interacting with this new technology (Blockchain) and therefore play an extremely vital role in the usability and adoption of the Blockchain ecosystem.

Unlike mail providers, cryptocurrency wallets don't give you a nice "name" like **mail@example.com**, but an address that in most cases looks similar to this `0xd8da6bf26964af9d7eed9e03e53415d37aa96045`. It’s not hard to see that, in terms of usability, this is way worse than an E-Mail-Address (which people are used to from the Internet). Wallet addresses are even longer and less memorable than IP addresses.But the usability issues of wallet addresses don't end with simply being hard to remember.

* Due to their length and complexity, it is easy to make mistakes when typing the address by hand.
* It is nearly impossible to recite it to someone without either person making a mistake.
* The addresses have no apparent structure to them, so it is way harder to spot mistakes. Even when you copy-paste the address but miss a character, chances are you will not recognise that you made a mistake.
* Making mistakes with crypto addresses is way more detrimental than other traditional financial services since blockchain transactions are final. You cannot reverse a blockchain transaction the same way you can reverse a bank transaction by simply calling your bank.
* Lastly, you receive a different address for every cryptocurrency. So you don't have just one monstrous address but potentially dozens.

Considering how vital wallets and their addresses are to the blockchain ecosystem, it is baffling to me that no one realized earlier in the development of different blockchain protocols how important human-readable names are to the usability and adoption of this technology. Mapping names to addresses has been commonplace since the 1970s. One can hardly expect first-time wallet users coming from the user-friendly applications on the Internet to be satisfied with the poor usability of crypto addresses.

## Solutions

One of the first major blockchain projects after Bitcoin was Namecoin. The idea behind Namecoin was that the blockchain could also be used to store mappings of data to names. Theoretically, Namecoin could have been used to map a cryptocurrency address to a .bit domain (example.bit for example), but unfortunately, it never gained widespread adoption due to various technical issues.
Vitalik Buterin even referenced Namecoin in his whitepaper for Ethereum and suggested a similar service could be built on Ethereum:

> _The earliest alternative cryptocurrency of all, Namecoin, attempted to use a Bitcoin-like blockchain to provide a name registration system, where users can register their names in a public database alongside other data. The major cited use case is for a DNS system, mapping domain names like "bitcoin.org" (or, in Namecoin's case, "bitcoin.bit") to an IP address. Other use cases include email authentication and potentially more advanced reputation systems. Here is the basic contract to provide a Namecoin-like name registration system on Ethereum_ \[...\]

Interestingly, Vitalik doesn't reference **name → cryptocurrency address** mapping as a possible use case, which suggests that there still wasn't a widespread awareness that this would be big UX issue. Nonetheless, it is interesting that a name service on the blockchain has been considered for a long time; it just took a long time until a solution was implemented that was technically mature enough to find widespread adoption.
Since Namecoin, there have been several projects that aimed to solve the challenges of name mapping based on blockchain technology.
In this article, however, I want to focus exclusively on ENS and Unstoppable Domains. These are by far the most popular blockchain-based naming services that focus on mapping names to cryptocurrency addresses.

### ENS

As the name suggests, the Ethereum Name Service (ENS) is built on the Ethereum Blockchain. ENS was first proposed by Nick Johnson in Ethereum Improvement Proposal 137 in 2016 and was launched in 2017.
It started with a rather minimal feature set (you could register **.eth** domains and point them at an Ethereum address) but has grown in functionality since then. The features most relevant to this article are:

* You can map a name to any cryptocurrency address, even those that are not Ethereum based. So an ENS name like example.ens can also be mapped to a bitcoin address.
* You can import some traditional domains like .xyz (with the plan to support many more in the future).
  * This opens up the possibility to have your website on example.xyz, but also receive all cryptocurrencies using the same address!
* Domain owners can create subdomains like subexample.example.eth. This allows wallet providers to issue all of their users an ENS domain in the form of a subdomain of their own ENS name, for example user1.wallet.eth

According to their website, ENS is (by far) the most integrated blockchain naming standard with over 250+ integrations with different blockchain-based applications.

### Unstoppable Domains

Unstoppable Domains is another blockchain domain name provider which has a lot of traction. They launched their first domains, most notably **.crypto**, in 2019.
Unstoppable Domainsprovides a very similar crypto address feature set to ENS. The only difference is that you cannot import traditional domains and an unstoppable domain is a one-time purchase rather than a yearly fee (like ENS).
Unstoppable Domains currently has about 50 integrations with blockchain based applications.

## Conclusion

Personally, I find it odd that blockchain-based naming services, which map names to crypto addresses, have not been successfully implemented earlier. Even the people building ARPAnet, one of the Internet’s predecessors, realized that a standardized naming system is vital for the usability of their system. In comparison, it took 6 years after Namecoin was released for a service to launch (ENS) which successfully solved the issue of mapping names to cryptocurrency addresses. Nonetheless, there are now two excellent services which solve the issue of mapping names to cryptocurrency addresses.

The final step to completely solving this UX issue is adoption by both blockchain applications and users.

### Adoption

Blockchain application developers have to embrace these services, which means integrating them with their dApps and prioritising them in their interfaces. It isn't enough that your app can resolve ENS or unstoppable domain names in the address field. If a cryptocurrency address has an ENS linked to it, you should display it instead of the cryptocurrency address!

We need to make it the norm to see names in wallet apps instead of monstrous crypto addresses!

> _It’s a small change with a big psychological impact._ — Itamar Lesuisse, Argent CEO, about integrating ENS.

Beyond prioritizing names in interfaces, we need to make it easier and cheaper for users to obtain names. Currently, users have to go out of their way to register a domain and map it to their different cryptocurrency addresses.
Think back to your first steps on the Internet: Imagine you would just have gotten an IP address (ex. **123.456.78.90**)  as an E-Mail-Address. Would you have gone out of your way to get yourself a eaily readable domain name, payed 10$ for it, and set up the correct mapping to the IP address of your E-Mail? For most people, that’s probably a no. So, we also can't expect new users coming to Blockchain to do that.

Ideally, wallet providers would give a free name to all of their users, maybe in the form of a subdomain like **user1.wallet.eth**. At the moment, this seems unrealistic since creating a subdomain on the blockchain costs a fee, which can be quite high at times. So it would be uneconomical for most wallets to give them away for free.
Luckily ENS seems to be on top of that. They are planning to move subdomain registration to L2. If you are unfamiliar with the technical term "L2" in this case, it basically means that subdomain registration would become so cheap that most wallet providers could give out subdomains for free.

> _Which wallet provider's subdomains will become the Gmail accounts of ENS names?_ — Brantly Millegan, Director of Operations @ENS