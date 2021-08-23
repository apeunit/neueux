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
The very first thing I want to state is that I am not an accessibility expert. With this article I only want to draw attention to a problem that is currently hardly discussed in Blockchain, namely the accessibility of Blockchain applications.
There are some aspects of blockchain that make it less accessible and in this article I would like to point out the ones that stood out to me.

## Designing for Accessibility

### Intro

In general, the goal when designing for accessibility is to increase the accessibility of the application for all people, but of course especially for those with disabilities.
Which in the end means that all people can perceive, understand, navigate and interact with the application.

Designing for accessibility includes all disabilities that may limit the interaction with the application:

- Visual
- Motor/mobility
- Auditory
- Seizures
- Learning/cognitive

There are also many situational limitations where accessible applications provide a better user experience not only to people with physical or mental disabilities, but also to those without.
Strong sunlight, lost optical glasses, or even a too small screen can lead to visual limitations.
Temporary conditions like a broken arm, or a broken touchscreen lead to tactile restrictions.
Finally, even something as common as sleep deprivation can lead to minor mental impairments.

This means that designing for accessibility not only benefits people with disabilities, but also leads to significantly better user experience for people without any limitations.

### How to Design for Accessibility?

There are many resources which can help you get started with designing (and developing) for accessibility. One which I can highly recommend is the accessibility section of the Material Guidelines from Google. It is a thorough list of the most important things to have in mind when designing for accessibility.

Right at the beginning this guide lists 3 pillars according to which one should design for accessibility, namely:

**Clear**
Help users navigate by designing clear layouts with distinct calls to action.

**Robust**
Design your app to accommodate a variety of users.

**Specific**
Support assistive technologies specific to your platform, just as you support the input methods of touch, keyboard and mouse.

This might still be a bit abstract for many people therefore I will summarize the most important points of the accessibility guidelines of Google here:

- Make content appear and operate in predictable ways.
- Help users avoid and correct mistakes.
- Have a clear hierarchy of importance.
- Make key information discernable at a glance.
- Make elements clearly visible.
- Have sufficient contrast and intentional color selection for accessibility (red-green visual impairment etc.).
- Support assistive technology for the platform you are developing for.
    - Alternative text (description of images / illustrations, text for textless buttons etc.)
        - So a screen reader can read out all elements of the interface.
    - Scalable text and a spacious layout to accommodate users who may have
    large text, color correction, magnification, or other assistive settings turned on.
    - Keyboard and mouse interfaces can have every task and all hover information available through keyboard-only input.
    - Allow screen readers and other assistive technology devices to read all parts of your interface.

## Issues

Finally, I would like to focus on the accessibility issues of the blockchain ecosystem in particular. As I am not an accessibility expert I will of course not catch all the things people with various disabilities might struggle with, but I will try to give examples of the things I imagine might be problems.

### Long strings of numbers and letters

The first challenge that could arise is the long letter and number combinations that are often prevalent in blockchain, things like transaction hashes and addresses.
These could become a problem especially for people with visual impairments who rely on screen readers.
At the moment, the complex addresses still play a big role in the daily use of cryptocurrencies and other blockchain applications. Verifying the correctness of the recipient's address in a transaction is vital and could be even more difficult with a screen reader than it already is visually. As an example, here is Google's Wavenet, one of the most advanced text-to-speech programs, trying to read out a cryptocurrency address.

 <audio class="w-full" controls>
  <source src="address.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio> 

Listening to this audio file it is obvious that checking the address could be problematic.

Since many wallets forward to third party block-explorers to check the status and validity of a transaction, users also often come in contact with other long number/letter strings such as transaction hashes.

### Prioritization of QR codes

In an effort to minimize the UX issue of addresses many wallets seem to prioritize QR codes in their interface. This prioritization is obviously a disadvantage for people with visual impairments as they cannot use them.

### Accessible Hardware wallet

At the moment there doesn't seem to be a hardware wallet which is accessible to visually impaired people. Which prevents people with visual impairments from accessing this more secure option of managing cryptocurrencies.

### Designing for accessibility not a priority

For many flagship wallets and dApps it doesn't seem to be a priority to design for accessibility. From my research it seems like many Blockchain applications don't follow the most basic accessibility rules like contrast, fully supporting assistive technology, etc.

### Security Issues

Assistive technology such as screen readers could prove to be a security problem. On the one hand, these could of course be compromised by nefarious parties and secrets such as the mnemonic phrases could be stolen. On the other hand, it could also happen that secrets are shared accidentally. 

For example, it is conceivable that the mnemonic phrase is unintentionally read aloud by a screen reader (for example, because navigating the app with assistive technologies works poorly). If this happens in a public context, secrets would be shared unintentionally.

## Conclusio

I have a feeling that for many people (financial) inclusion is an important value of Blockchain. We need to extend this inclusion further and try to make blockchain applications more accessible to people with physical and mental disabilities by designing them to be barrier-free. The problems mentioned are far from being unsolvable, on the contrary, some of them seem relatively easy to solve and are even partly in line with other UX efforts.
For example, the use of e.g. ENS names instead of addresses would be a big step in the right direction for visually impaired people, since an ENS name is much easier to read out by a screen reader than an address.

[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/65bbcf49-8abe-4a21-ad12-9508b4cdfb63/wavenet_neueux.mp3](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/65bbcf49-8abe-4a21-ad12-9508b4cdfb63/wavenet_neueux.mp3)

If these become widespread, QR codes would not have to be prioritized as much.
There have already been efforts to create a hardware wallet for visually impaired people, namely the icywallet. However, this seems to have never gone beyond the MVP stage and at the time of publishing this article, the icywallet website and github repository are offline.

Ultimately, what is most important is that software and hardware wallet developers in particular are aware of the accessibility issues (and the security issues that could come with it). As I have mentioned in previous articles, wallets are one of the primary ways people will interact with blockchain, the same is of course true for people with disabilities.
It is therefore important that both software and hardware wallets are designed to be accessible.