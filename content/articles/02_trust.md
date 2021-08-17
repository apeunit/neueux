---
id: ltq15cz4k
title: 3/ Trust
author: Maximilian Blazek
slug: 02_trust
category: Blockchain UX
featured_image: >-
  https://res.cloudinary.com/ape-unit/image/upload/v1629203984/neueux/media/articles/header_trust.png
summary: >-
  To avoid alienating users, blockchain applications need to explain why
  interactions are different compared to 'traditional' applications, and which
  information users need to pay special attention to.
date: 'August 9th, 2021'
---
## The Problem
Most people would agree that you have to be able to trust the system that holds a significant amount of your (financial) wealth. Therefore, it’s crucial for the mass adoption of blockchain and cryptocurrencies, that users coming into the blockchain ecosystem learn to trust it.
Trust often appears to involve the belief in an explanation of the person or thing we do or do not trust. In this sense, trust and explanation seem to be inherently linked to one another. [1](#1)
In previous articles in this series, we established that cryptocurrency wallets would be one of the first and primary interactions with blockchain technology for many people.
Considering that trust will be crucial to the adoption of blockchain, and that wallets are one of the first interactions with the technology, it seems that the burden of educating new users and creating trust falls on wallets.
In my research, I found that many wallets don't provide enough explanation to cultivate trust. When I think back to my first experience with cryptocurrencies and when I created my first wallet, I had to go out of my way to inform myself about the peculiarities of blockchain. **Why is the transaction fee different every time I make a transaction?**
The absence of such explanations might not prevent users from being able to operate a wallet, or other blockchain applications. However, it may make them refrain from actually using these applications if they mistrust the technology. **Why is the transaction fee suddenly so high? Am I being scammed?**

>*1.) Do users of intelligent systems want explanations? Why are explanations needed?*
>It appears that explanations should be provided in intelligent systems, despite the low use observed in some situations. This low use may be, at least in part, occasioned by the desire to avoid expending cognitive effort and the Production Paradox. The occasions on which users want explanations are likely to be highly context-specific. These occasions include the need to resolve perceived anomalies, the desire to learn on the user’s part, and a lack of knowledge of the terms or procedures used by the intelligent system. [...]*
>
>*2.) Do benefits arise from the use of explanations? What kinds of benefits?*
>Explanation use has been shown to have positive outcomes, better performance, higher user perceptions of the system and in some cases, improved learning.
[2](#2)

As this paper suggests, it’s especially the peculiarities, the *perceived anomalies*, that users seek explanations for. Blockchain has many of these peculiarities. Most of the perceived anomalies in the context of blockchain are the differences in interactions on decentralized applications when compared to web applications we know today.
Users will generally expect most interactions to be the same on blockchain as they are in "traditional" web products and services. If an interaction is perceived as different in blockchain, they will seek an explanation for the cause of this anomaly.
In the case of transaction fees, users will quickly notice that the fees seem to change every time they make a transaction; they will want to know why that's the case. If no sufficient explanation is provided, they might become skeptical and develop distrust for the technology.

## Peculiarities
In the following section of the article, I will use cryptocurrency transactions as an example to show the type of blockchain-specific interactions new users might perceive as abnormal and therefore need an explanation. Of course, this is not an exhaustive list of all interactions that should be explained. Instead, this should serve as an example of the type of interactions I think need an explanation.

### Transaction fees
One of the biggest "anomalies" of cryptocurrency transactions is the fees. Each transaction fee is determined by how busy the network is and how much the user is willing to pay for the transaction to go through more quickly. People already fully accustomed to cryptocurrencies might think nothing of it, but being able to set your own transaction fee is quite an unusual interaction. Basically, miners can choose which transactions they want to include in the block they will mine — obviously they want the ones where they earn the most, so the transactions which pay the highest transaction fee are given priority.

People who are used to transactions from traditional payment services may be confused by the fluctuating transaction fees because they are only used to no fees, fixed fees ($0.99 per transaction), and percentage fees (10% of transaction). Additionally in many of the biggest blockchains, fees can be so high (at times) that many transactions are impracticable and not cost-efficient.

### Transaction time
Again, the time a transaction takes to go through depends on the amount of transaction fees the user paid and how busy the network is. So, if a user decides they want to cheap out on the transaction fee while the network is receiving high traffic, it might take (very) long for the transaction to go through. If a user doesn't know that the transaction time is based on both the fee they paid and the current status of the network, they might get confused and frustrated that their simple transaction is taking so long.

### Transactions are public
Many newspapers report on cryptocurrencies as if they are completely anonymous and untraceable, so it might be surprising to users unfamiliar with blockchain that this is not the case. In fact, most blockchains are only pseudonymous and transactions are public for anyone to see. [3](#3)
If someone knows your cryptocurrency address, they can see how much "money" is in your account, as well as every transaction your account has ever been involved in. This might lead to uncomfortable situations if a user thinks that their transactions are private (as they are in traditional payment services) because anyone who knows their address could see all of their potentially compromising transactions.

### Transactions are final
Essentially, transactions on blockchains are not reversible. When people unintentionally make a transaction to the wrong address using traditional banking services, they can easily contact customer service to reverse the transaction. This is not possible in Blockchain and could be extremely frustrating for users who were not aware that their transactions are irreversible. The only possible way that a transaction could be reversed is if more than 50% of the entire blockchain network agrees to do so, which would be an extremely rare occurrence.

## Explanations
The following four examples explain situations where inexperienced users could become suspicious of cryptocurrency transactions — suspicion which could easily be fixed by providing explanations. I will show how different wallets incorporate explanations for some of these interactions into their user flow.

### Onboarding
During the MEW app’s onboarding process, users are provided with a rundown of the most important things to be aware of when dealing with cryptocurrencies. In point 2 they warn their users about the finality of cryptocurrency transactions.

### Part of the process
Zengo informs their users about the finality of cryptocurrency transactions as part of the sending process. Instead of overloading users with information right when they download the app, they make the information available at the time it is most relevant to the user — in the transaction process.

### Tooltips
Coinbase provides information about miner fees in the form of a tooltip.
Tooltips are a way of making information available when it is most relevant to a user. However, in this case, the information is only shown once the user seeks out help and clicks on the tooltip.

### Knowledge base
Lastly, information can also be given in the form of a knowledge base; the MEW app uses their education center as a knowledge base.
The goal of a knowledge base seems to be to fulfill the users' desire to learn rather than to clarify inconsistencies when they come up.

## Conclusion
If blockchain is to hold a significant part of many people's wealth in the future, then all its users will have to learn to trust this technology. This trust can be achieved through well crafted explanations. Users trust products and services which they believe to understand (to some degree). Since wallets will be one of the first touch points for many new users, they should contain adequate explanation. These explanations need to focus primarily on the idiosyncrasies of blockchain, i.e. the interactions that are different from what most people are used to. The interactions that are perceived as different from the norm will be distinct causes of skepticism, and it is precisely this skepticism that must be overcome in order to foster trust.
In this article, I have given examples of the types of interactions that should be explained and how some flagship wallets are currently trying to integrate explanations into their platforms.
However, the question might arise: How can we raise the overall level of explanations (and their quality) industrywide?

In my opinion, a collection of open source explanations and illustrations focusing on the peculiarities of blockchain is the answer. It would empower the designers and developers of wallets and other blockchain applications to take these explanations and integrate them into their apps. Also, it would remove their need to invest personal resources into creating high quality explanations and illustrations.

At some point, we would like to offer these resources on neueux. By allowing open source contributors to work out which explanations and illustrations would be most useful and are of high quality, we want to make a valuable contribution to the improvement of UX in blockchain.

- - -

#### Sources
1: <a name="1" href="https://doi.org/10.1007/s10676-010-9253-3">Pieters 2011</a>

2: <a name="2" href="https://doi.org/10.2307/249487">Gregor, Benbasat, 1999</a>

3: <a name="3" href="https://www.irishtimes.com/business/economy/eu-to-ban-cryptocurrency-anonymity-in-anti-money-laundering-plan-1.4626129">Irishtimes 2021</a>