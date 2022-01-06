---
layout: tutorial
id: hello-world
title: Creating a simple Hello World chatbot
imgSpot: /assets/images/tutorial/spot-hello-world.png
description: This is a quick start how to build a 'Hello World' chatbot
next: bot-studio-tutorial
date: '2018-06-06T07:00:00+07:00'
---

[[toc]]

## Create a Project

First login/sign up to <a href="https://platform.kata.ai/login" target="_blank">https://platform.kata.ai/login</a>

And click on “Create Project” and fill in the form. Each project contains one bot design, one NL, and one CMS.
You will be directed to this page.

![bhw-1](/assets/images/tutorial/bot-hw/bot-hw1.png)

### Noted

You can try bot in Menu Test Chatbot (in the bottom right corner).

![bhw-1test](/assets/images/tutorial/bot-hw/bot-hw1test.png)

## Create a Hello Flow

### Create Flow

You may find a flow that is created automatically by the system or default flow. We will add a new flow called `helloFlow`. Set flow to active, and persistent.

![bhw-2](/assets/images/tutorial/bot-hw/bot-hw2.png)

It will be shown like this.

![bhw-3](/assets/images/tutorial/bot-hw/bot-hw3.png)

### Create keyword NLU for helloFlow

In this step, we will define the NLU (Natural Language Understanding) to trigger order flow. NLU is used to translate user inputs into data that machine can understand. There are many types of NLU, but the type that we will use in this particular flow is called keyword. To define the NLU, go to NLUs menu and create.

We will name it hello_NLU

![bhw-4](/assets/images/tutorial/bot-hw/bot-hw4.png)

It will be shown like this.

![bhw-5](/assets/images/tutorial/bot-hw/bot-hw5.png)

### Create Intent

Go back to Conversation flow menu and choose intent. Click on “+” button in Conversation Flow menu. Set the Intent name to `helloIntent` and choose option as initial.
Add a classifier and choose NLU that we create. We are gonna match it with `helloWorld` (keyword in NLU).

![bhw-6](/assets/images/tutorial/bot-hw/bot-hw6.png)
![bhw-7](/assets/images/tutorial/bot-hw/bot-hw7.png)

## Create action for showing Hello World

### Create State

Choose a states and click on "+" button. We will create a initial state. Set name to `init` and choose Initial State, and click create.

![bhw-8](/assets/images/tutorial/bot-hw/bot-hw8.png)

We will create another state for showing the response in our bot. Choose action to text.

![bhw-9](/assets/images/tutorial/bot-hw/bot-hw9.png)

Add text response to Hello World!.

![bhw-10](/assets/images/tutorial/bot-hw/bot-hw10.png)

Action should be shown like this.

![bhw-11](/assets/images/tutorial/bot-hw/bot-hw11.png)

### Create Transation

Now, we will create a transition between two states that we have created before.

Click the green dot on `init` state, and a connector line will appear. Connect that line to `hello` state. If you do it right, a Create Transition form will appear.

![bhw-12](/assets/images/tutorial/bot-hw/bot-hw12.png)

Set the condition to `intent=='helloIntent'` and click Create.

![bhw-13](/assets/images/tutorial/bot-hw/bot-hw13.png)

## Testing

Before this step don't forget to **Publish** your change. And then try your bot in Test Chatbot menu. Try to enter keyword that you define in NLU.

Viola! You have succeed build your first bot!

![bhw-14](/assets/images/tutorial/bot-hw/bot-hw14.png)
