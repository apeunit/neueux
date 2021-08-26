---
id: ltq15cz4l
title: 5/ Accessibility
author: Maximilian Blazek
slug: 05_accesibility
category: Blockchain UX
featured_image: >-
  https://res.cloudinary.com/ape-unit/image/upload/v1629470770/neueux/media/articles/Frame%202036.png
summary: >-
  For many people financial inclusion is an important value of Blockchain. We need to extend this inclusion further and try to make Blockchain applications more accessible to people with physical and mental disabilities by designing them to be barrier-free.
date: 'August 16th, 2021'
---
Right off the bat, I want to state that I am not an accessibility expert. With this article, I simply want to draw attention to a problem that has been hardly discussed in Blockchain — the accessibility of Blockchain applications. Some aspects of blockchain are rather inaccessible, and in this article, I would like to point out the ones that stood out to me.

## Designing for Accessibility

### Intro

In general, the goal when designing for accessibility is to increase the usability of the application for all people, but especially for those with disabilities. In the end, all people should be able to perceive, understand, navigate, and interact with the application.

Designing for accessibility includes considering all disabilities that may limit ease of interaction with an application:

- Visual
- Motor/mobility
- Auditory
- Seizures
- Learning/cognitive

There are also many situational limitations where accessible applications provide a better user experience to both people with physical or mental disabilities and those without. Strong sunlight, lost optical glasses, or even a too-small screen can lead to visual limitations. Temporary conditions like a broken arm or a broken touchscreen lead to tactile restrictions. Finally, even something as common as sleep deprivation can lead to minor mental impairments.

This means that designing for accessibility not only benefits people with disabilities but also leads to significantly better user experiences for everyone.

### How to Design for Accessibility?

There are many resources that can help you get started with designing (and developing) for accessibility. One which I can highly recommend is the accessibility section of the Material Guidelines from Google. It is a thorough list of the most important things to consider when designing for accessibility.

Right at the beginning, this guide lists 3 pillars according to which one should design for accessibility, namely:

<div class="article-grid"> 
  <div>
    **Clear** 
    Help users navigate by designing clear layouts with distinct calls to action.
  </div>
  
  <div>
    **Robust**
    Design your app to accommodate a variety of users.
  </div>
  
  <div>
    **Specific**
    Support assistive technologies specific to your platform, just as you support the input methods of touch, keyboard, and mouse.
  </div>
</div>

These pillars might still be a bit abstract for many people; therefore I will summarize the most important points of the accessibility guidelines of Google here:

- Make content appear and operate in predictable ways.
- Help users avoid and correct mistakes.
- Have a clear hierarchy of importance.
- Make essential information discernable at a glance.
- Make elements clearly visible.
- Have sufficient contrast and intentional color selection for accessibility (red-green visual impairment etc.).
- Support assistive technology on the platform you are developing on.
    - Alternative text (description of images/illustrations, text for textless buttons etc.)
        - This allows screen readers to read out all elements of the interface.
    - Scalable text and a spacious layout to accommodate users who may have large text, color correction, magnification, or other assistive settings turned on.
    - Keyboard and mouse interfaces can have every task and all hover information available through keyboard-only input.
    - Allow screen readers and other assistive technology devices to read all parts of your interface.

## Issues

Finally, I would like to focus on the accessibility issues of the blockchain ecosystem in particular. As I am not an accessibility expert, I will not catch all of the pain points that people with various disabilities might struggle with. However, I will provide examples of the things I imagine to be essential problems to address.

### Long strings of numbers and letters

The first challenge that could arise is the long letter and number combinations prevalent in blockchain — frequently found in things like transaction hashes and wallet addresses. These could become a problem, especially for people with visual impairments who rely on screen readers. At the moment, the complex addresses still play a significant role in the daily use of cryptocurrencies and other blockchain applications. Using a screen reader turns to verify a transaction recipient’s already complex wallet address into a near-impossible task. As an example, here is Google's Wavenet, one of the most advanced text-to-speech programs, trying to read out a cryptocurrency address.

<audio class="w-full" controls>
  <source src="article_extra_content/address.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio> 

Listening to this audio file, it is obvious that checking a wallet address could be problematic.

Since many wallets forward to third-party block-explorers to check the status and validity of a transaction, users also often come across other long number/letter strings such as transaction hashes.

### Prioritization of QR codes

In an effort to minimize the UX issue of addresses, many wallets seem to prioritize QR codes in their interface. However, this prioritization puts people with visual impairments, who cannot use them, at a clear disadvantage.

### Accessible Hardware wallet

At the moment, there doesn't seem to be a hardware wallet that is accessible to visually impaired people. As a result, people with visual impairments have been prevented from utilizing this more secure option of managing their cryptocurrencies.

### Designing for accessibility has not been a priority

For many flagship wallets and dApps, designing for accessibility doesn't seem to be a priority. From my research, many Blockchain applications don't seem to follow the most basic accessibility rules like contrast, fully supporting assistive technology, etc.

### Security Issues

Assistive technologies such as screen readers could prove to be a security problem. On the one hand, these could be compromised by nefarious parties, and personal information such as the mnemonic phrases (secret access code to crypto wallets) could be stolen. On the other hand, these technologies could share these secrets accidentally.

For example, it is conceivable that the mnemonic phrase is unintentionally read aloud by a screen reader (navigating blockchain apps with assistive technologies often works poorly). If this happens in a public context, users would unintentionally share their secrets with everyone in their vicinity.

## Conclusion

I have a feeling that for many people in blockchain, (financial) inclusion is an important value that drew them to the space. However, we need to extend this inclusion further and make blockchain applications more accessible to people with physical and mental disabilities by designing them to be barrier-free. The aforementioned problems are far from being unsolvable. On the contrary, some of them seem relatively easy to solve and are even aligned with other UX efforts. For example, the use of ENS names instead of addresses would be a big step in the right direction for visually impaired people since an ENS name is much easier for a screen reader to read and less complex for a person to understand than an address.

<audio class="w-full" controls>
  <source src="article_extra_content/ens.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio> 

If these become widespread, QR codes would not have to be prioritized as much. There have already been efforts to create a hardware wallet for visually impaired people, namely the IcyWallet. However, IcyWallet’s development never seemed to pass the MVP stage and at the time of publishing this article, the IcyWallet website and GitHub repository are offline.

Ultimately, what is most important is that software and hardware wallet developers are aware of the accessibility issues (and the security issues that could come with it) and are actively working to address them. As I have mentioned in previous articles, wallets are one of the primary ways people will interact with blockchain, and it’s no different for people with disabilities. Therefore, it is important that both software and hardware wallets are designed to be accessible for everyone.