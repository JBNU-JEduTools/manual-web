---
layout: tutorial
id: integration-chatbot-with-nl-studio
title: Integration Chatbot with NL Studio Tutorial
imgSpot: /assets/images/tutorial/spot-nl-studio-integration.webp
product: kata-platform
prev: nl-studio-tutorial
next: integration-chatbot-with-cms-studio
date: '2018-09-09T07:00:00+07:00'
---

## Introduction

In this tutorial, we will create a simple conversation bot and integrated to NL studio. For pre-condition, you must create a bot by follow this tutorial in here [Bot studio tutorial](/tutorials/bot-studio). You will create a NLModel which able to process pizza ordering orders. Further explanation for NLStudio, you may see in here [NL Studio Guideline](/tutorials/nl-studio)

Let's start !

## Create Entity

Assumed you already logged in and visit your project. Go to NL Studio menu by click NL menu

![bnl-1](/assets/images/tutorial/bot-nl/bnl-1.webp)

Then, click on Create Entity to start.

![bnl-2](/assets/images/tutorial/bot-nl/bnl-2.webp)

Click on Create. Here is a view after you create intent `entity`

![bnl-3](/assets/images/tutorial/bot-nl/bnl-3.webp)

## Conduct Data Training

After you created the entity, the next step is data training. You have to enter a sentence to train `intent` trait. Click on Training menu

![bnl-4](/assets/images/tutorial/bot-nl/bnl-4.webp)

Then, you are able to enter sentence to train data. Put a sentence “I want to order pizza” and press enter in your keyboard

![bnl-5](/assets/images/tutorial/bot-nl/bnl-5.webp)

Afterward, click on Add Trait and select `intent:order`.

![bnl-6](/assets/images/tutorial/bot-nl/bnl-6.webp)

Next, click “Train” button to train entity you has created. The final display will look like this

![bnl-7](/assets/images/tutorial/bot-nl/bnl-7.webp)

Entity shall train a lot for precisely understanding user's input, if you're doing training data in several sentences.

![bnl-8](/assets/images/tutorial/bot-nl/bnl-8.webp)

If you've done enough training, you are able to try testing by click "Test NLU" button. This feature will support you to predict more data.

![bnl-9](/assets/images/tutorial/bot-nl/bnl-9.webp)

## Publish Your NL

Then, publish your NL for save training data and NL model.

![bnl-10](/assets/images/tutorial/bot-nl/bnl-10.webp)

## Integration with NLUs

Next step is start integration with your bot using created entity. To get started, go to Bot menu and click NLUs sub-menu.

![bnl-11](/assets/images/tutorial/bot-nl/bnl-11.webp)

Click on Create NLU and fill in as follow

![bnl-12](/assets/images/tutorial/bot-nl/bnl-12.webp)

NLUid is found in NL menu in Setting. Click on NL menu, then click Settings

![bnl-13](/assets/images/tutorial/bot-nl/bnl-13.webp)

Afterward, copy NLUid into NLUid field in Create NLU drawer as follow

![bnl-14](/assets/images/tutorial/bot-nl/bnl-14.webp)

Click Create to continue. Successfully created NLUs will be appeared as follow

![bnl-15](/assets/images/tutorial/bot-nl/bnl-15.webp)

## Integration with Bot

Next, go to Conversation Flows and click on tab Intents. Select `orderTxt` that you've created earlier to handle user input (you may see this tutorial [Bot studio tutorial](/tutorials/bot-studio/)), then add a new classifier as below

![bnl-16](/assets/images/tutorial/bot-nl/bnl-16.webp)

Click Update to save updated Intent.

## Testing Your Bot

Click on Publish bot to save your bot.

![bnl-17](/assets/images/tutorial/bot-nl/bnl-17.webp)

Voila, your bot is successfully integrated. Let's start in bot emulator.

![bnl-18](/assets/images/tutorial/bot-nl/bnl-18.webp)
