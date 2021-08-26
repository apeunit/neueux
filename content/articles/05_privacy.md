---
id: ltq15cz4l
title: Privacy
author: Maximilian Blazek
slug: 05_privacy
category: "UX Pitfalls of Blockchain: 5"
featured_image: >-
  https://res.cloudinary.com/ape-unit/image/upload/v1629470767/neueux/media/articles/Frame%202018.png
summary: >-
  As seductive as a Blockchain’s other advantages are, neither companies nor individuals are particularly keen on publishing all of their information onto a public database that can be arbitrarily read without any restrictions by one’s own government, foreign governments, family members, coworkers and business competitors.
date: 'August 16th, 2021'
---
## Transparency in Blockchain

<img class="article-image-left" src="https://res.cloudinary.com/ape-unit/image/upload/v1629989281/neueux/media/articles/etherscan.jpg" alt="">

Many people, when they first discover blockchain, mistakenly assume that blockchain is completely anonymous and transactions are not trackable at all. This misconception probably stems from the current state of news coverage about blockchains and cryptocurrencies. Blockchain make the news most frequently in the context of terrorism and money laundering and is often presented as if it were completely anonymous and untraceable — perfect for anonymous criminal activity. [1](#1)

But, of course, this narrative does not correspond with the truth. With most blockchains and cryptocurrencies, all transaction data is freely accessible, and each transaction can be traced since the creation of the genesis block, i.e. the first block of the blockchain.

Most blockchains are just pseudonymous, rather than anonymous. Pseudonym in this context means that your identity is not linked to your cryptocurrency address (which we will just refer to as an “address”). However, anyone can see all the transactions that a specific address has ever been involved in using tools like block explorers (such as [etherscan.io](http://etherscan.io/) for Ethereum). So, if you want all your (financial) transactions to remain private, you have to be very careful that you never connect your identity to your cryptocurrency address. If this were to happen, anyone could see every transaction you have ever made on the blockchain and how much cryptocurrency you currently own.

## Unintentionally linking your identity to your address

Now, you might think that the solution to this problem is to simply ensure that your address is never associated with your identity. But this is much more tricky than one might think. Even a harmless transaction like paying back a colleague for lunch would make all your transactions visible to him. This means that on most blockchains and with most cryptocurrencies, it is not possible to send tokens to friends, family, and acquaintances with whom you do not want to share your entire transaction history at the same time. However, it doesn't stop there. For example, if you order something from a webshop and pay for it with cryptocurrencies, this webshop might store both your delivery details and your cryptocurrency address. Suppose the data of this webshop is leaked, for whatever reason. In that case, anyone who has access to this leaked data could establish the connection between your identity and address and thus see your entire transaction history. A paper in the Journal of Forensic Research also describes how identity can be inferred from data that is freely available on the blockchain. The method described in this paper led to the arrest of Ross Ulbricht, a former operator of the dark web site "Silk Road". [2](#2)

There are many ways to unintentionally link one's identity to one's address. In fact, there are many more ways in which this connection can be (forensically) established, but describing them all here is beyond the scope of this article. If you want to dive deeper into this topic, check out [3](#3)!

### The issue with linked identities

Problems with varying degrees of severity can arise from the pseudonymous, transparent nature of blockchain if an identity is inadvertently linked to an address. 

* First, it can just be annoying. The colleague you paid back for lunch could see all your transactions and might find some of your financial decisions questionable.
* Of course, the same situation could be very embarrassing. For example, if you bought sex toys with this address and these transactions are evident on the blockchain, the colleague could also see these "embarrassing" purchases.
* Additionally, many more serious situations could also arise. For example, if you live under a regime where specific sexual orientations are persecuted, purchasing certain sex toys or porn could be damning. If, for some reason, this purchase becomes evident through the transactions that are publicly visible on the blockchain, it could be used as a tool to surveil and oppress people.
* Criminals could also exploit the transparent nature of blockchain. For example, if there is a leak where delivery data is linked to cryptocurrency addresses (on an e-commerce site for example), criminals could see which of the leaked addresses owns the most cryptocurrencies. This information, in combination with delivery data, would make it easier to plan targeted theft.

All of these problems are exacerbated by the immutable nature of blockchain. Not only is every transaction viewable, but fundamentally, blockchain is immutable, meaning that once the data about a transaction is on the blockchain, it can never be deleted or changed. As a result, if at any time your identity is linked to your address and you realize that compromising transactions are coming to light, you have absolutely no way to remove them from the blockchain.

## Conclusion

There are multiple UX issues that arise from the transparency of most blockchains. If you are not aware of these problems, it is easy to unintentionally link your identity to your address. This can have potentially devastating consequences. There are, of course, some technical solutions for this. For example, there are blockchains like Monero which are completely private. On Monero, neither the sender nor recipient nor the transaction amount can be determined. For "transparent" blockchains like Bitcoin or Ethereum, mixer services like Tornado.cash can be used to execute private transactions. Some of these more transparent blockchains are considering implementing so-called zk-SNARKs into their technology stacks to increase privacy. You can see that there are various technical approaches to solving the privacy problem. Now, the question is **how design can contribute to solving this problem**. In my opinion, design can contribute via education (as already discussed in the Trust article). Good design would include a general education about the transparent nature of most blockchains and inform users that, if they care about the privacy of their transactions, they should take care never to link their identity to their addresses. Additionally, good design should inform users what information they are revealing about themselves when they make a transaction—similar to how social media platforms inform you about the level of privacy on your posts.

***

#### Sources
1: <a name="1" href="https://www.irishtimes.com/business/economy/eu-to-ban-cryptocurrency-anonymity-in-anti-money-laundering-plan-1.4626129">EU to ban cryptocurrency anonymity in anti-money laundering plan, Naomi O’Leary, 2021</a>

2:  <a name="2" href="https://www.hilarispublisher.com/open-access/bitcoin-investigations-evolving-methodologies-and-case-studies-2157-7145-1000420.pdf">Bitcoin Investigations: Evolving Methodologies and Case Studies, Andrew LR and Douglas Orr, 2018</a>

3:  <a name="3" href="https://ieeexplore.ieee.org/document/8888155">Privacy-Preserving Solutions for Blockchain: Review and Challenges, Jorge Bernal Bernabe, Jose Luis Canovas, Jose L. Hernandez-Ramos, Rafael Torees Moreno, Antonio Skarmeta, 2016</a>

4:  <a name="4" href="https://www.bradley.com/insights/publications/2019/01/the-privacy-questions-raised-by-blockchain">The Privacy Questions Raised by Blockchain, Bradley.com, 2018</a>

5:  <a name="5" href="https://blog.ethereum.org/2016/01/15/privacy-on-the-blockchain/">Privacy on the Blockchain, Vitalik Buterin, 2016</a>


