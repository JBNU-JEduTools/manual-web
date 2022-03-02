---
layout: tutorial
id: bot-studio
title: Bot Studio Tutorial
imgSpot: /assets/images/tutorials/spot-cms.webp
product: kata-platform
prev: hello-world-tutorial
next: nl-studio-tutorial
date: '2018-07-07T07:00:00+07:00'
---

## Introduction

Building a chatbot on Kata | Platform is quick and easy, even with a lack of programming knowledge. In this tutorial, we will learn how to create a simple bot on LINE Messenger to order a pizza. We will also learn how to train your bot with NL Studio.

Let's start by looking at this bot diagram, or commonly called “conversation tree.” Conversation tree is an overview of chatbot functionalities. In this conversation tree, we break down the process of ordering pizza and the types of bot action we want to use on each state.

![bse-1](/assets/images/tutorials/bot-studio/bse-1.jpg)

## Sign up to Kata | Platform

Create an account on Kata | Platform to start building chatbot.

On your browser, open <a href="https://platform.kata.ai/login" target="_blank">https://platform.kata.ai/login</a> and click “Sign Up”

![bse-2](/assets/images/tutorials/bot-studio/bse-2.webp)

Then fill the form with a username, an email, and an account type. Continue by clicking "Sign Up."

![bse-3](/assets/images/tutorials/bot-studio/bse-3.webp)

You will get a confirmation email once our team has verified your account.

You may follow the instructions provided in the confirmation email to activate and start using your account.

## Create a Project

### Login to Kata | Platform

On your browser, open <a href="https://platform.kata.ai/login" target="_blank">platform.kata.ai/login</a> and enter your username & password.

![bse-4](/assets/images/tutorials/bot-studio/bse-4.webp)

Click "Login" to continue.

### Create a project

After you logged in, you will be taken to the Project Page.

![bse-5](/assets/images/tutorials/bot-studio/bse-5.webp)

Click on “Create Project” and fill in the form. Each project contains one bot design, one NL, and one CMS.

![bse-6](/assets/images/tutorials/bot-studio/bse-6.webp)

NLU language is used to determine which language model you want to use. Currently, we support Bahasa Indonesia and English.

You can also choose NLU Visibility to be public or private. If you choose public, **all Kata | Platform users** can utilize your NLU using root and inherit function.

## Create Fallback Flow

### Create fallback flow

Once you create a project, you will be redirected to the Bot Studio menu.

Now we are going to learn how to create a flow. Flow is a container of **intent, state, and action**. A flow typically represents a linear process.

The first flow that we will create is a Fallback Flow. Its purpose is to handle undefined users input, or commonly called “else condition” state. In this case, the “else condition” is everything that is not “Start Order”.

![bse-1](/assets/images/tutorials/bot-studio/bse-1.jpg)

You may find a flow that is created automatically by the system or default flow. We will delete that flow by pressing more button and then “Delete.”

![bse-8](/assets/images/tutorials/bot-studio/bse-8.webp)

Next, click “Create Flow” button to create `fallback` flow. Set flow to active, persistent, and default.

![bse-9](/assets/images/tutorials/bot-studio/bse-9.webp)

### Create fallback intent

After you have created `fallback` flow, we will create new intent by pressing the Intents tab on the sub-menu. Then, we will create a new intent for `fallback` flow. Click “Create Intent” button to create.

![bse-10](/assets/images/tutorials/bot-studio/bse-10.webp)

Then, fill in the form as follows

![bse-11](/assets/images/tutorials/bot-studio/bse-11.webp)

### Create State init

Next, we will create a state called `init`. Click the ”+” button at the bottom right of your screen.

![bse-12](/assets/images/tutorials/bot-studio/bse-12.webp)

Fill state with name `init` on Overview tab and set it to initial state and end state (as shown below).

Enabling Initial State and End State will make `init` the first and the last flow to be checked by the bot when there isn't any flow that matches a user's input.

![bse-13](/assets/images/tutorials/bot-studio/bse-13.webp)

Now we will create a bot response to display an apology message. Click “Add actions” button to create a response.

![bse-14](/assets/images/tutorials/bot-studio/bse-14.webp)

Container for creating action will appear

![bse-15](/assets/images/tutorials/bot-studio/bse-15.webp)

### Create Action Text in State init

Click on “+” button to create a new action.

![bse-16](/assets/images/tutorials/bot-studio/bse-16.webp)

Choose action type “Text”

![bse-17](/assets/images/tutorials/bot-studio/bse-17.webp)

Then, fill in the form

![bse-18](/assets/images/tutorials/bot-studio/bse-18.webp)

Click on “Create Action” button.

![bse-19](/assets/images/tutorials/bot-studio/bse-19.webp)

### Create Self Transition in State Init

The last step to finalize `fallback` flow is to create self-transition for `init` state. Self transition is required to avoid error when the next state is not available. Click on “Transitions” and enable Self Transition.

![bse-20](/assets/images/tutorials/bot-studio/bse-20.webp)

Click “Create” button. Your screen should look like this

![bse-21](/assets/images/tutorials/bot-studio/bse-21.webp)

## Create Order Flow

Next, we will create `Start Order` flow to handle pizza order.

![bse-1](/assets/images/tutorials/bot-studio/bse-1.jpg)

### Create Flow Order

First step is to create another flow called `order` .

![bse-22](/assets/images/tutorials/bot-studio/bse-22.webp)

Created flow will be shown like this

![bse-23](/assets/images/tutorials/bot-studio/bse-23.webp)

### Create Keyword NLUs for 'Order'

In this step, we will define the NLU (Natural Language Understanding) to trigger `order` flow. NLU is used to translate user inputs into data that machine can understand. There are many types of NLU, but the type that we will use in this particular flow is called `keyword`. To define the NLU, go to NLUs menu.

![bse-24](/assets/images/tutorials/bot-studio/bse-24.webp)

Next, click on “Create NLU”

![bse-25](/assets/images/tutorials/bot-studio/bse-25.webp)

Choose Keyword type and enter keywords that represents `order`, such as “order”, “pls order”, “order pza”.

![bse-26](/assets/images/tutorials/bot-studio/bse-26.webp)

Successfully created NLU looks like this

![bse-27](/assets/images/tutorials/bot-studio/bse-27.webp)

### Create Intent for Order

Each flow requires an `intent` to classify user's inquiry and trigger matching flow. So our next step is to set initial intent for `order` flow.

Go back to Conversation Flow menu and click on `order` flow, then click on “Intents” tab.

![bse-28](/assets/images/tutorials/bot-studio/bse-28.webp)

Previously, you already created keyword NLUs called `order`. We will set that keyword as intent in `order` flow. Map the NLU on classifier section.

![bse-29](/assets/images/tutorials/bot-studio/bse-29.webp)

Click “Create” to create the intent. Your screen should look like this

![bse-30](/assets/images/tutorials/bot-studio/bse-30.webp)

### Create a State Named init

Every flow must have at least one state. Because we haven't created any state in `order` flow, we have to create one. Let's create a state called `init`.

![bse-31](/assets/images/tutorials/bot-studio/bse-31.webp)

Click “Create” button to create initial state.

Next, we will define how the bot will respond to user who entered `order` flow.

## Create Action for Pizza Menu

As seen on the conversation tree below, the first message in `order` flow is “Show Pizza Type”

![bse-1](/assets/images/tutorials/bot-studio/bse-1.jpg)

### Create a State to Show Pizza type in Text Action Type

To get started, we need to create a state named `showPizza` on `order` flow. Click on “+” button in Conversation Flow menu.

![bse-33](/assets/images/tutorials/bot-studio/bse-33.webp)

Let's begin by creating an action called `pizzaOptions`. This action will inform users in **text about our available pizza menu**.

Click on “+” button to create an action and choose Text as action type.

![bse-34](/assets/images/tutorials/bot-studio/bse-34.webp)

Fill in Text action type to inform our pizza menu

![bse-35](/assets/images/tutorials/bot-studio/bse-35.webp)

Click on “Create Action” to finalize. Next step is to create an action called `askOptions`

![bse-36](/assets/images/tutorials/bot-studio/bse-36.webp)

Click on “Create Action” button. Your form should look like this

![bse-37](/assets/images/tutorials/bot-studio/bse-37.webp)

Then you have to make self-transition in Transition tab as follow

![bse-37-1](/assets/images/tutorials/bot-studio/bse-37-1.webp)

Click “Create” to create the state. Successfully created state will look like this

![bse-38](/assets/images/tutorials/bot-studio/bse-38.webp)

### Update showPizza state Into Show Pizza Menu in Carousel Action Type

Previous step is an example to create action to **show pizza menu in text.** Let's try to update the state into Carousel action type.

To update the state, click on `showPizza` state and an update state form will appear

![bse-39](/assets/images/tutorials/bot-studio/bse-39.webp)

Then, remove all actions in the state by clicking “x” on each action.

![bse-40](/assets/images/tutorials/bot-studio/bse-40.webp)

After removing available actions, we will create an action called `pizzaMenu` as Carousel action type.

Click on “Add” actions button then click on “+” button to create a new action. Choose Carousel action type to continue.

![bse-41](/assets/images/tutorials/bot-studio/bse-41.webp)

Enter `pizzaMenu` as name

![bse-42](/assets/images/tutorials/bot-studio/bse-42.webp)

Fill in the carousel content by clicking “Add carousel” button, then click on “Add action” button to define the **label and type**. Next, click on Add Payload button to enter **key and value**.

Fill in first carousel with this data

```
Title: Pepperoni
Text: This is the favorite of Peps
Thumbnail Image Url: https://www.wikihow.com/images/thumb/a/a7/Make-Pepperoni-Pizza-Step-19-Version-2.jpg/aid1074004-v4-728px-Make-Pepperoni-Pizza-Step-19-Version-2.jpg.webp
Actions:
  Label: Pepperoni
  Type: Postback
  Payload:
    - key: type
      value: pizza
    - key: pizza
      value: Pepperoni
```

Fill in second carousel with this data

```
Title: Veggie Lovers
Text: Vegie vegie stay healthy
Thumbnail Image Url: https://www.calcuttaweb.com/store/image/data/calcutta/pizza/veggie-lovers-pizza-pihu-7.jpg
Actions:
  Label: Veggie Lovers
  Type: Postback
  Payload:
    - key: type
      value: pizza
    - key: pizza
      value: Veggie Lovers
```

Your first form should look like this

![bse-43](/assets/images/tutorials/bot-studio/bse-43.webp)

Your second form should look like this

![bse-44](/assets/images/tutorials/bot-studio/bse-44.webp)

Finalize this step by clicking “Create Action.”

It should look like this

![bse-45](/assets/images/tutorials/bot-studio/bse-45.webp)

Once the bot displays a carousel containing the type for pizza menu, its next step is to ask user to select the pizza. Click “Add actions” button to trigger drop-down list, then choose `askOptions`

![bse-46](/assets/images/tutorials/bot-studio/bse-46.webp)

After you select `askOptions` action click “Create Action” button to finalize this step.

![bse-47](/assets/images/tutorials/bot-studio/bse-47.webp)

Your form should look like this

![bse-48](/assets/images/tutorials/bot-studio/bse-48.webp)

Click “Update” to update the state.

### Create Intent to Choose A Pizza

Now we have to create an intent called `pizzaChosen` to handle user's input after they have selected a pizza type. Click on Intent menu in `order` flow.

![bse-49](/assets/images/tutorials/bot-studio/bse-49.webp)

Click on Create Intent and create intent as follow

![bse-50](/assets/images/tutorials/bot-studio/bse-50.webp)

Successfully created intent looks like this

![bse-51](/assets/images/tutorials/bot-studio/bse-51.webp)

### Create Transition between init and showPizza

Now, we will create a transition between two states that we have created before.

Click the green dot on `init` state, and a connector line will appear. Connect that line to `showPizza` state. If you do it right, a Create Transition form will appear.

![bse-52](/assets/images/tutorials/bot-studio/bse-52.webp)

Fill in the form with these data, and click “Create”

![bse-52-1](/assets/images/tutorials/bot-studio/bse-52-1.webp)

### Create 'reenter' intent

Next, we will add `reenter` intent so the bot can return to its previous state after triggering fallback state. Create the intent in `order` flow.

![bse-53](/assets/images/tutorials/bot-studio/bse-53.webp)

## Create Action for Asking Pizza Quantity

In this step we will learn how to create “Ask quantity” state.

![bse-1](/assets/images/tutorials/bot-studio/bse-1.jpg)

### Create pizzaQuantity state

In this step we will create `pizzaQuantity` state to handle order quantity. The type of action we will use is in this state is Text. Click on “+” button on `order` flow and fill the form as follows

![bse-54](/assets/images/tutorials/bot-studio/bse-54.webp)

Then you have to make self-transition in Transition tab as follow

![bse-54_1](/assets/images/tutorials/bot-studio/bse-54_1.webp)

Result:

![bse-55](/assets/images/tutorials/bot-studio/bse-55.webp)

### Create NLUs quantity

Afterwards, we have to handle user's input with NLUs. Because we only allowed number from 1 to 9, we will create a limitation in regex format. Click on Create NLUs and follow this screenshot

![bse-56](/assets/images/tutorials/bot-studio/bse-56.webp)

Successfully created NLU will be shown like this

![bse-57](/assets/images/tutorials/bot-studio/bse-57.webp)

### Create Intent quantity

After we created the NLU, we will add an intent to respond user's input. In `order` flow, click on Create Intent and fill in the form

![bse-58](/assets/images/tutorials/bot-studio/bse-58.webp)

Successfully created intent will look like this

![bse-59](/assets/images/tutorials/bot-studio/bse-59.webp)

### Create Transition between showPizza and pizzaQuantity

Now we have to create a transition between `showPizza`and `pizzaQuantity`. We will also store `payload.pizza` value into `context.pizza`. Click on the blue dot on `showPizza` and drag the line to `pizzaQuantity` state to create the transition. Create Transition form will appear after you have successfully connected the states.

![bse-60](/assets/images/tutorials/bot-studio/bse-60.webp)

Created transition will look like this

![bse-61](/assets/images/tutorials/bot-studio/bse-61.webp)

## Create Confirmation Action

Our next step is creating `Ask confirmation` state.

![bse-1](/assets/images/tutorials/bot-studio/bse-1.jpg)

### Create “YESNO” keyword NLUs

First, we will create a keyword NLU to handle `yes` and `no`. Click on Create NLUs and fill in as follows

![bse-62](/assets/images/tutorials/bot-studio/bse-62.webp)

Successfully created NLU will look like this
![bse-63](/assets/images/tutorials/bot-studio/bse-63.webp)

### Create confirmPizza state

Now we will create `confirmPizza` state to handle order confirmation. We will also store chosen pizza & quantity information in this state. Select `order` flow and click on “+” button to create `confirmPizza` state.
![bse-64](/assets/images/tutorials/bot-studio/bse-64.webp)

## Add mapping in onTransit tab

![bse-67](/assets/images/tutorials/bot-studio/bse-67.webp)

Don't forget to add self-transition in a state. Click Create Action. Your screen should look like this

![bse-65](/assets/images/tutorials/bot-studio/bse-65.webp)

### Create a transition from pizzaQuantity to confirmPizza

We will make a transition by storing value (mapping) from pizza quantity **and** chosen pizza type. Click the blue dot on `pizzaQuantity` and drag the line to `confirmPizza` state to create a transition. Create Transition form will appear after you successfully connected the states.

![bse-66](/assets/images/tutorials/bot-studio/bse-66.webp)

Result will be shown as follows

![bse-68](/assets/images/tutorials/bot-studio/bse-68.webp)

### Create intent yesno

Previously, we already made an NLU containing `yes` and `no` keywords. We will use that NLU as a classifier on an intent.

First of all, we will create an intent in `order` flow for the keyword `yes`

![bse-69](/assets/images/tutorials/bot-studio/bse-69.webp)

Then, we will create an intent for keyword `no`

![bse-70](/assets/images/tutorials/bot-studio/bse-70.webp)

Both intent will appear as follows

![bse-71](/assets/images/tutorials/bot-studio/bse-71.webp)

### Create done state

In `done` state, we will complete the order by saying thank you and end the conversation. We will also set a condition when a user wants to cancel the order. So in this state we will create two actions: `sayThanks` and `sayCancel`.

![bse-72](/assets/images/tutorials/bot-studio/bse-72.webp)

![bse-73](/assets/images/tutorials/bot-studio/bse-73.webp)

Also, don't forget to add self transition in the state. Result:
![bse-74](/assets/images/tutorials/bot-studio/bse-74.webp)

### Create a transition from confirmPizza to done

Next, we will connect `confirmPizza` state to `done` state. Because `done` is the last state, we will set it as default transition. Connect `confirmPizza` to `done` by clicking the blue dot and drag the line to connect the states. Create Transition form will appear after you have successfully connected the states.

![bse-75](/assets/images/tutorials/bot-studio/bse-75.webp)

Final flow:

![bse-76](/assets/images/tutorials/bot-studio/bse-76.webp)

## Publish Your Bot

To save your work, click on Publish button located at the top right of your screen. Fill in the changelog as “initial version of pizza bot” for future reference. Click “Publish” to continue.

![bse-77](/assets/images/tutorials/bot-studio/bse-77.webp)

![bse-78](/assets/images/tutorials/bot-studio/bse-78.webp)

Every time you publish a bot, it will record a hash number (similar to Git's hash number) in Revision List.

![bse-79](/assets/images/tutorials/bot-studio/bse-79.webp)

## Testing Your Chatbot

Click on Test Chatbot on Bot Studio then type “order” to initialize `order` flow.

![bse-80](/assets/images/tutorials/bot-studio/bse-80.webp)

Check on the rest of the flow and make sure everything you've made works.

## Deploy Your Chatbot

Now we will try to deploy our chatbot to LINE Messenger.

### Create deployment

First of all, we have to create a deployment first. Find the “Deployment” menu on the left sidebar.

![bse-81](/assets/images/tutorials/bot-studio/bse-81.webp)

Click on Create Deployment button on top right

![bse-82](/assets/images/tutorials/bot-studio/bse-82.webp)

Choose Patch on Deployment Version.

![bse-83](/assets/images/tutorials/bot-studio/bse-83.webp)

Succesfully created deployment looks like this.

![bse-84](/assets/images/tutorials/bot-studio/bse-84.webp)

### Create Environment

Kata | Platform 3.0 allows you to set up 3 separate environments in your project: Development, Staging, and Production. Inside each environment, you can add as many messaging channel as you like. You have to setup environment first before integrating to messaging channel.

In this tutorial, we will try to setup Production environment. Click on Environment menu under Deploy and you will be shown 3 available environments.

![bse-85](/assets/images/tutorials/bot-studio/bse-85.webp)

Click “Create Environment” button in Production.

The first field we have to fill in is deployment version. Choose 0.0.1 (shown on the previous step) as deployment version in Production.

Another field we have to fill in is environment URL. This URL is used to access CMS Client later.

![bse-86](/assets/images/tutorials/bot-studio/bse-86.webp)

Successfully created environment will look like this

![bse-87](/assets/images/tutorials/bot-studio/bse-87.webp)

Next, we need to create channel inside the environment. Click on Create Channel on Production environment and you will be redirected to Create Channel page

![bse-88](/assets/images/tutorials/bot-studio/bse-88.webp)

Next, click “Create Channel” and fill in as follows

![bse-89](/assets/images/tutorials/bot-studio/bse-89.webp)

Let's setup LINE developer console so you can fill in fields highlighted with red box.

### Registration to LINE Developer console

**Create LINE account**

To sign up for a LINE developer account, you have to have a LINE account by <a href="https://line.me/en/download" target="_blank"> installing LINE application, either desktop or mobile app.</a> After you successfully registered, sign in to <a href="https://developers.line.biz/en/" target="_blank">https://developers.line.biz/en/</a>

In LINE Developer Console click Log In.

![bse-90](/assets/images/tutorials/bot-studio/bse-90.webp)

Click on Log in with LINE

![bse-91](/assets/images/tutorials/bot-studio/bse-91.webp)

Enter your email and password

![bse-92](/assets/images/tutorials/bot-studio/bse-92.webp)

After you successfully logged in, you will be redirected to provider list dashboard

![bse-93](/assets/images/tutorials/bot-studio/bse-93.webp)

**Create a Provider**

Click “Create New Provider”

![bse-94](/assets/images/tutorials/bot-studio/bse-94.webp)

Fill in provider name

![bse-95](/assets/images/tutorials/bot-studio/bse-95.webp)

Click Confirm to continue. You will have to re-confirm the provider name since it cannot be changed later. Click “Create” to confirm.

![bse-96](/assets/images/tutorials/bot-studio/bse-96.webp)

### Setup Channel for LINE Integration

Setup channel in Messaging API by clicking Create Channel on Messaging API.

![bse-97](/assets/images/tutorials/bot-studio/bse-97.webp)

Fill in the form as follows

![bse-98](/assets/images/tutorials/bot-studio/bse-98.webp)

![bse-99](/assets/images/tutorials/bot-studio/bse-99.webp)

Next, you have to choose **Developer Trial as Plan**

![bse-100](/assets/images/tutorials/bot-studio/bse-100.webp)Continue to click Confirm.

Accept Terms of Use from LINE then click Create

![bse-101](/assets/images/tutorials/bot-studio/bse-101.webp)

Successfuly created channel will look like this

![bse-102](/assets/images/tutorials/bot-studio/bse-102.webp)

### Integration LINE and Your Chatbot

Click on created channel to fill in Channel Access Token and Channel Secret. Here is the guideline to fill in those fields

#### Fill in Channel Access Token field

Click “Issue” in Messaging Settings section

![bse-103](/assets/images/tutorials/bot-studio/bse-103.webp)

Then, issue dialog will pop up. Click on Issue to continue

![bse-104](/assets/images/tutorials/bot-studio/bse-104.webp)

Then, copy Channel Access Token below and paste it on Create Channel form in Kata | Platform

![bse-105](/assets/images/tutorials/bot-studio/bse-105.webp)

![bse-106](/assets/images/tutorials/bot-studio/bse-106.webp)

**Fill in Channel Secret field**

In Basic Information, copy Channel Secret from LINE to Kata | Platform

![bse-107](/assets/images/tutorials/bot-studio/bse-107.webp)

![bse-108](/assets/images/tutorials/bot-studio/bse-108.webp)

Final result in Kata | Platform will look like this

![bse-109](/assets/images/tutorials/bot-studio/bse-109.webp)

Click “Create” to generate webhook URL from Kata | Platform.

![bse-110](/assets/images/tutorials/bot-studio/bse-110.webp)

After webhook URL is generated, go to Messaging Settings in LINE developer console to enable webhook. **Please check that you already enable the webhook by click on Enable in "Use Webhoooks" section which placed above Webhook URL field**

![bse-111](/assets/images/tutorials/bot-studio/bse-111.webp)
Click “Update” then paste the webhook URL to LINE developer console.

![bse-112](/assets/images/tutorials/bot-studio/bse-112.webp)

Click “Update” then click “Verify.”

![bse-113](/assets/images/tutorials/bot-studio/bse-113.webp)

Next, disable auto-reply messages and greeting messages

![bse-114](/assets/images/tutorials/bot-studio/bse-114.webp)

Voila! You have successfully deployed your bot to LINE Messenger.

Scan the QR Code in LINE Developer Console to add the bot.

![bse-115](/assets/images/tutorials/bot-studio/bse-115.webp)

Then, test to scan QR Code

![bse-116](/assets/images/tutorials/bot-studio/bse-116.webp)
