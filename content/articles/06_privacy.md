---
id: ltq15cz4l
title: 6/ Privacy
author: Maximilian Blazek
slug: 06_privacy
category: Blockchain UX
featured_image: >-
  https://res.cloudinary.com/ape-unit/image/upload/v1629205296/neueux/media/articles/header_intro.jpg
summary: >-
  As seductive as a Blockchain’s other advantages are, neither companies nor individuals are particularly keen on publishing all of their information onto a public database that can be arbitrarily read without any restrictions by one’s own government, foreign governments, family members, coworkers and business competitors.
date: 'August 16th, 2021'
---
# Transparency in Blockchain

Many users who start discovering blockchain often mistakenly assume that blockchain is completely anonymous and transactions are not trackable at all. This misconception probably stems from the current state of news coverage about blockchains and cryptocurrencies. It is often reported in the context of terrorism and money laundering and presented as if it were completely anonymous and untraceable.

But, of course, this does not correspond to the truth. With most blockchains and cryptocurrencies, the data on all transactions is freely accessible and every transaction can be traced back to the genesis block, i.e. the first block of the blockchain.

Most blockchains are actually just pseudonymous. Pseudonym in this context means that your identity is not linked to your cryptocurrency address. But for a specific address, anyone can see all the transactions that address has ever been involved in using tools like block explorers (such as [etherscan.io](http://etherscan.io/) for Ethereum).
So if you want all your (financial) transactions to remain private, you have to be very careful that your identity never connects to your cryptocurrency address. If this were to happen, anyone could see every transaction you have ever made and how many cryptocurrencies you currently own.

## Unintentionally linking your identity to your address

Now you might think that the solution to this problem is to make sure that your address is simply never associated with your identity. But this is actually more tricky than one might think.
Even a harmless transaction like paying back a colleague for lunch would make all your transactions visible to him. This means that on most blockchains and with most cryptocurrencies it would not be possible to send tokens to friends, family and acquaintances to whom you do not want to reveal your entire transaction history at the same time.
It doesn't stop there, though. If you order something from a webshop and pay for it with cryptocurrencies, it may well be that this webshop stores your delivery details as well as your cryptocurrency address. If the data of this webshop is leaked, for whatever reason, anyone who has access to this leaked data could establish the connection between your identity and the address and thus see your entire transaction history.
There is also a paper in the Journal of Forensic Research that describes how an identity can be inferred from data freely available on the blockchain. The method described in this paper has led to the arrest of Ross Ulbricht, a former operator of the dark web site "Silk Road".

It is obvious that there are many ways in which one can unintentionally link one's identity to one's address. In fact, there are many more ways in which this connection can be (forensically) established, but to describe them all here is beyond the scope of this article. If you want to dive deeper into this topic check out the sources below!

## The issue with that

There are problems with varying degrees of severity that can arise from the pseudonymous but transparent nature of blockchain if the identity is inadvertently linked to an address.
It can just be annoying.  The colleague you paid back for lunch could see all your transactions and might find some of your financial decisions questionable and challenge them.

Of course, the same situation could be very embarrassing. For example, if you bought sex toys with this address and this is evident from the transactions, the colleague could also see such an "embarrassing" purchase.

But much more serious situations could also arise. For example, if you live in a regime where certain sexual orientations are persecuted, the purchase of certain sex toys or porn could be damning. So if for some reason this purchase becomes obvious through the transactions that are publicly visible on the blockchain, it could be used as a tool to oppress minorities.

Criminals could also exploit the transparent nature of blockchain. For example, if there is a leak where address data is linked to cryptocurrency addresses, criminals could see which of the leaked addresses owns the most cryptocurrencies. This information in combination with address data would make it easier to make more targeted theft attempts.

All of these problems are exacerbated by the immutable nature of blockchain. Not only is every transaction viewable, but one of the most important building blocks of blockchain is that it is immutable, meaning that once the data about a transaction is on the blockchain, it can never be deleted or changed. So if at any time your identity is linked to your address and you realize that compromising transactions are coming to light, you have absolutely no way to remove them from the blockchain.

# Conclusio

So there are some UX issues that arise from the transparency of most blockchains. If you are not aware of the problem, it is relatively easy to unintentionally link your identity to your address. This can have potentially devastating consequences.
There are of course some technical solutions for this. For example, there are blockchains like Monero, which are completely private. On Monero, neither the sender nor the recipient nor the amount of the transaction can be determined. For "transparent" blockchains like Bitcoin or Ethereum, mixer services like Tornado.cash can be used to make private transactions.
Some of these more transparent blockchains are also considering implementing so-called zk-SNARKs to increase privacy.
So there are some technical approaches how the privacy problem could be solved. The question now is what design can contribute to solving this problem. In my opinion it is (as already discussed in the Trust article) education. On the one hand, a general education about the transparent nature of most blockchains and informing the users, that if they care about the privacy of their transactions, they should take care to never link their identity to their address.
And lastly to inform users when they make a transaction what information they are revealing about themselves with that transaction. Possibly similar to how you are informed about the level of privacy for posts on some social media platforms.