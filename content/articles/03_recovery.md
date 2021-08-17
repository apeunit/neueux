---
id: ltq15cz4a
title: 2/ Recovery
author: Maximilian Blazek
slug: 03_recovery
category: Blockchain UX
featured_image: >-
  https://res.cloudinary.com/ape-unit/image/upload/v1629202903/neueux/media/articles/recovery.png
summary: >-
  With the need to do their own backups, users have a high level of
  responsibility, which is uncommon among other popular apps. The backup process
  and the responsibility that comes with it are, therefore, a significant
  inconvenience to users.
date: 'August 9, 2021'
---
## Background

Cryptocurrencies greatly differ from traditional payment services. With crypto, your funds exist in a decentralized system rather than being held by a company.
A user can interact with this decentralized system using two different (numerical) keys, a public and a private key. The public key allows you to receive transactions (your address is generated from this public key), while the private key is necessary to send transactions. This system is called asymmetric cryptography and is a vital aspect of all blockchains.
The private key is used to authorize a transaction. It is the proof that you are the owner of the account. As the name suggests, this private key is supposed to be private; only the user themself should have access to it, so only they can control the funds.
Consequently, the user has full responsibility for their funds. If a user loses their private key, they cannot call anyone to help them recover it. The seed,  an initial random input from which the keys are created, needs to be backed up in order to be recovered. Otherwise, someone who loses their seed won't be able to recover their private key and will lose their funds forever.

This responsibility, the need for backups, and the backup methods themselves are the UX problems I will discuss in this article.

## The Problem

The self-sovereignty of cryptocurrencies is what attracts many people, so there is no changing the fact that users must take full responsibility for their keys and, consequently, their funds.

Even though people value the self-sovereignty of cryptocurrencies, many underestimate what kind of responsibility it entails. As a result, many people back up their wallet poorly or don't back it up at all. There are many accounts of people losing huge amounts of money because they haven’t properly backed up their wallet. There are studies which suggest that about 20% of bitcoin has been lost forever (irretrievably stuck in wallets). [₁](#1), [₂](#2)

I think that backing up ones wallet is underestimated because such a high level of self-responsibility is uncommon amongst most services and products. How many web2 products do you know where you can't recover your account through their customer support?

In addition, many wallets provide terrible UX during the backup process:

* They don't educate their users well enough about their responsibilities when using cryptocurrencies and how important it is for them to  backup their wallet properly!
* Many wallets don't force their users to backup.
  * Even though backing up might be inconvenient at first, there is no worse user experience than losing all your funds!
* Many new users might even need tips on how and where to store their backup. Telling users just to "write these words on a piece of paper and store them in a safe place" wont be enough for many users. What is a safe place?
  * When I created my first wallet, I had to go out of my way and research best practices on where to store a backup.

A good portion of the lost Bitcoin is likely a result of users not being actively aware of the high level of self-responsibility. This is mostly a problem of wallet providers failing to properly guide and inform their users of this responsibility.  As a result, people underestimate the problem and are at risk of losing access to their funds.

## Backup Methods

Let’s say that our users have learned about their responsibility and are aware that they need to backup. Now the inconvenient part begins, the backup process.
A seed (from which the private and public key are generated) usually looks something like this:

```770cf2cc7e97cd6174d3cdd02d346e43ddaa1df00f5b42d4b71bb4dcc806426077665777da53d5f022f76607e72c7361463bc21522444d9512a0d24ebd51b0ab```

You could, of course, back up this seed directly, but it would provide the same issues current crypto addresses have, as discussed in the Address article:

* Due to the length and complexity, it would be easy to make mistakes when writing  down your seed manually.
* It has no clear structure to it, so it would be hard to spot a mistake.
* Making a mistake in the backup process would, of course, be detrimental, since you would be lulling yourself into a false sense of security.

Other backup methods have been devised to improve the backup process’s user experience. In the following section, I will present the most popular method as well as one promising alternative.

### Mnemonic Phrase

Currently, the most common way of generating and, consequently, backing up a wallet is a so-called "seed phrase" or "mnemonic phrase". The "seed phrase" is usually a group of 12 to 24 words. A mnemonic phrase usually looks something like this:

```stem foam found piano cricket gorilla main you vacant cruel antique rifle```

These words can be used to create the seed and accordingly the private and public keys.
If the device on which your wallet is stored is broken or lost, you can use your seed phrase to restore it on another device. These words are usually written down on a piece of paper (or similar) and stored in a "safe place" (or multiple safe places).
A mnemonic phrase is already better than the raw seed because it solves the previously mentioned issues, but it also comes with some drawbacks. Writing down the potentially 24-word-long phrase manually multiple times, storing it in numerous safe places, and maintaining those (making sure they are not lost or destroyed) is a non-trivial mental effort.
Looking at the statistic that at least 20% of all bitcoins are already lost suggests that many people fail at this stage in the backup process.

Additionally, mnemonic phrases don't prevent theft. Quite the contrary actually, because there are now two attack vectors: the wallet and the papers with the seed phrase written on it.
There are methods to partially circumvent this problem. However, there are still security issues, and increasing security would increase the mental overhead and worsen the UX of backing up even more.

### Social Recovery

In an effort to provide a better user experience during the backup process and higher security overall, some wallets have adopted a "social recovery" process. With social recovery, users won't have to write down a seed phrase. Instead, users appoint guardians to their wallets.

These guardians can be:

* Another device of the user, a laptop, for example.
* Friends and family.
* A third-party provider.

If the wallet is lost, the user can ask the guardians to reinstate the wallet on another device. To do that, guardians just have to sign a transaction, similar to a normal cryptocurrency transfer.

Social recovery already protects against loss very well. However, another step must be taken to prevent theft because the wallet could still be hijacked or stolen, and the thief could easily transfer out all the funds.
Argent, the first and still most popular social recovery wallet, uses spending limits to prevent major losses from theft. With Argent, the user can set a spending limit. Users can freely spend their funds up to the limit, but after reaching the limit, further transactions have to be approved by the guardians.
The UX of social recovery is definitely much better than that of seed phrases. Social recovery provides better protection against loss and theft and it also decreases the mental overhead for users.

But there are still points that users might find inconvenient:

* You still have the mental effort of thinking about backing up  your wallet.
  * You have to think about potential candidates for guardians. Who can you trust to take that role? Might they potentially conspire to take control of your funds? etc.
* Many people don't have anyone else in their social circle who uses cryptocurrencies. Finding guardians might be difficult for them since having a wallet is a requirement to being a guardian.
* It might take a considerable amount of time to recover your wallet. You will have to contact the majority of your guardians and ask them to approve the reinstatement of your wallet or a transaction that exceeds your spending limit.
  * This might be incredibly frustrating if you have to make an important payment, and now you have to wait for your guardians to approve your transaction or reinstatement.
* Due to the transparent nature of blockchain, if someone knows your address, they can see how many cryptocurrencies you own and your entire transaction history. When you add someone (friends or family) as a guardian, they will know your address.
  * A big part of what makes social recovery wallets so appealing is that friends and family (instead of corporations and other devices) are your "guardians" and can potentially help you recover your wallet. However, many people might be uncomfortable with their social circle knowing about their personal wealth and  transactions.
    * Imagine you would like to buy something that you are embarrassed about and that is over your spending limit. You would have to ask your Guardians if they could approve this embarrassing transaction.

## Conclusion

According to some reports, many people live paycheck to paycheck ex. 54% of people in the USA. [₃](#3)
If Blockchain is going to hold a significant portion of the wealth of a large portion of the population in the future, then recovery methods will have to improve. Most of the world's population could not afford to lose a significant portion of their savings. Statistics show that over 20% of bitcoin's supply has already been lost and about 4% of the current supply is lost annually. Statistics like these suggest that it is relatively easy to lose one's cryptocurrencies.

The backup and recovery processes should definitely not be an afterthought in the design process of a wallet. While the backup process might be cumbersome for users I think there is no worse wallet user experience than losing access to all of your funds.

The first step for preventing potential loss is for wallet providers to properly educate their users about their self-responsibility and the importance of backing up.
Mnemonic phrases are obviously better than backing up the raw seed, but they come with several UX and security drawbacks. While social recovery is a big step forward in terms of UX and security, the UX still isn't perfect.
UX designers and developers will have to continue working together to either improve current recovery methods or develop new and better ones. Recovery UX will play a critical role in preparing blockchain technology to hold the wealth of a majority of  people in the future.

- - -

#### Sources

1: <a name="1" href="https://static1.squarespace.com/static/5d580747908cdc0001e6792d/t/5e98dde5558a587a09fac0cc/1587076583519/research+note+4.17.pdf">Cane Island Digital Research 2020</a>
2: <a name="2" href="https://blog.chainalysis.com/reports/bitcoin-market-data-exchanges-trading">Chainalysis Insights 2020</a>
3: <a name="3" href="https://www.pymnts.com/study/paycheck-to-paycheck-consumer-finances-american-households/">PYMNTS Reality Check 2021</a>
