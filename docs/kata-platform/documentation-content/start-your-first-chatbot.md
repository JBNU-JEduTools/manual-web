---
id: start-your-first-chatbot
title: Start Your First Chatbot
next: introduction
prev: what-is-conversation-design
---

A chatbot is an application that allows humans to have online conversations with a computer via text or voice. This tutorial will create a simple chatbot using the Kata Platform. So, let’s get started.

## Video tutorial:

You can watch the tutorial to start your first chatbot or follow the steps in this documentation

<iframe width="600" height="300" src="https://www.youtube.com/embed/OYkUylw2x_o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Registration and Login

<iframe width="600" height="300" src="https://www.youtube.com/embed/H83sXg3Wvas" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

1. Open your browser and enter the URL <a href="htpps://platform.kata.ai" target="_blank">https://platform.kata.ai/</a>.
2. Register your data in the Kata Platform by filling in the required fields.

![Image 1 alt](/assets/images/products/kata-platform/image1.png)

> **Figure 1**: Registration page in Kata Platform

3. After filling in all the data, click **Sign Up**. We will send a verification email to your registered email.
4. Continue to verify your account by entering the password to continue the registration step.
5. Login with your account

In this step, you will create a simple chatbot as in the image below. Let’s start.

![Image 2 alt](/assets/images/products/kata-platform/image2.png)

> **Figure 2**: Simple chatbot example.

## Create a Project

<iframe width="600" height="300" src="https://www.youtube.com/embed/s92bMsSC5gM?list=UUrud2GevnuhBNM7C7RjakVg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

You will see all projects in the project dashboard. A project consists of bot design, NLU, and CMS.

1. Click **Create Project** to create a new project.

![Image 3 alt](/assets/images/products/kata-platform/image3.png)

> **Figure 3**: Dashboard project

2. Fill in project detail, then click **Create Project**.
3. After the project has been created, you will be redirected to the **Conversation Flow** page to create flow, state, and action.
4. Congratulations, you successfully created a new project.

## Create a Flow

<iframe width="600" height="300" src="https://www.youtube.com/embed/jA5oP13_cGY?list=UUrud2GevnuhBNM7C7RjakVg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

Flow is a conversation chatbot flow. In this simple tutorial, you will create 1 flow and use 1 default flow. Default flow is a fallback flow or a flow to answer if questions are not understandable by a chatbot.

1. In the Conversation Flow, click the **Create Flow**.
2. Fill in the flow name hello, then click **Create**. If a flow is successfully created, it will show in the Conversation Flows sidebar.

![Image 4 alt](/assets/images/products/kata-platform/image4.png)

> **Figure 4**: New flow name “hello”

## Create a State

<iframe width="600" height="300" src="https://www.youtube.com/embed/Yf6cOQ7jYTw?list=UUrud2GevnuhBNM7C7RjakVg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

The state is a step in a conversation. A flow must have 1 state called the initial state, and 1 state called the end state.

In this tutorial, you will create 2 states in the flow “hello”, which are “init” state and “hello” state. “Init” state will become the initial state, and the “hello” state becomes the end state.

1. Click the icon "+" in the **Conversation Flow** menu.

![Image 5 alt](/assets/images/products/kata-platform/image5.png)

> **Figure 5**: Button “+” to create a new state

2. In this step, you will create an initial state. Fill in the “init” state, then turn on the toggle Initial State to set it as the initial state.

![Image 6 alt](/assets/images/products/kata-platform/image6.png)

> **Figure 6**: Create a state name “init”

3. Next, create a “hello” state. This state will be an end state, so you must turn on the End State toggle. Do a similar step with the second step.

In this step, you will get an error that an end state must have at least 1 action. So, the next step is to create an action in the “hello” state.

## Create an Action

<iframe width="600" height="300" src="https://www.youtube.com/embed/3XkZlqukvzU?list=UUrud2GevnuhBNM7C7RjakVg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

Action is a bot response in text, images, buttons, interactive messages such as a carousel in LINE, a generic template in FB Messenger, and others. A state must have at least 1 action, except in the initial state. This tutorial will create a text action in the “hello” state.

1. Click in the “hello” state, then it will show a form on the right screen.
2. To create a new action, click on the **Add action** button.

![Image 7 alt](/assets/images/products/kata-platform/image7.png)

> **Figure 7**: Add new action

3. Click on the “+” icon. Next, it will show various available actions. Choose action **Text**.

![Image 8 alt](/assets/images/products/kata-platform/image8.png)

> **Figure 8**: Input new action

![Image 9 alt](/assets/images/products/kata-platform/image9.png)

> **Figure 9**: Input Text action

4. After choosing a Text action, it will show an interface like in the image below. Input action name, then click Add Variant button to input text response.

![Image 10 alt](/assets/images/products/kata-platform/image10.png)

> **Figure 10**: Input text response in bot

5. Finishing your action by clicking the **Create Action** button.
6. Then, finalize the state by clicking the **Create** button.

## Create an Intent

<iframe width="600" height="300" src="https://www.youtube.com/embed/Xd-jH20VMRs?list=UUrud2GevnuhBNM7C7RjakVg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

A chatbot needs to understand end-users input to show correct action or bot response. The intent will recognize input in the Kata Platform by checking keywords, NL, or regex. End-user is a term for chatbot users.

This step will create an intent to catch when end-users greet the chatbot.

1. In the “hello” flow, choose the **Intent** menu. Next, click **Create Intent**.

![Image 11 alt](/assets/images/products/kata-platform/image11.png)

> **Figure 11**: The page to create a new intent

2. Input intent detail with name “helloIntent”. Then, turn on toggle **As Initial** to create a trigger in the chatbot and execute the “hello” flow.
3. Next, continue to choose the **Text** type. Input a condition to make the chatbot execute the intent when the end-user sends the message “Hello” or “/start”:

```
content == ‘Hello’ || content == “/start”
```

4. Click the Create button to finish creating intent.

![Image 12 alt](/assets/images/products/kata-platform/image12.png)

> **Figure 12**: Create helloIntent to recognize greetings from end-users.

## Create a Transition

<iframe width="600" height="300" src="https://www.youtube.com/embed/hx-zs1EUqSg?list=UUrud2GevnuhBNM7C7RjakVg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

Transition is a procedure to move from one state to another state if a condition is fulfilled. Create transition by pulling a line from the source state to the destination state, like the image below.

![Image 13 alt](/assets/images/products/kata-platform/image13.png)

> **Figure 13**: Transition between states.

1. In this step, you will create a transition between the “init” state and the “hello” state by pulling a line. If you succeed to create a transition, it will show a form on the right screen.
2. Then, input condition detail to create transition can be executed if an end-user input is caught by “helloIntent” intent:

```
intent == ‘helloIntent’
```

3. Click the **Save** button to finish creating the transition.

## Publish Bot

<iframe width="600" height="300" src="https://www.youtube.com/embed/xsOc9NPNBSg?list=UUrud2GevnuhBNM7C7RjakVg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

This publish feature is useful to save changes in the form of revision numbers. The Publish button can be found on all Flow pages.

1. In this step, you will save the created bot design. Click the **Publish** button which is placed in the top right corner.

![Image 14 alt](/assets/images/products/kata-platform/image14.png)

> **Figure 14**: Publish button.

2. To ensure your bot is stored correctly, enter the Revision List menu. The revision list will show every new revision at the top.

![Image 15 alt](/assets/images/products/kata-platform/image15.png)

> **Figure 15**: Revision List interface.

## Testing Your Bot

<iframe width="600" height="300" src="https://www.youtube.com/embed/htbCHo9vwTc?list=UUrud2GevnuhBNM7C7RjakVg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

In this step, you will try a simple chatbot using the emulator feature.

1. On the lower right of your screen, click on the **Test Chatbot** button. You will see a small window with a chat conversation interface if you succeed.

![Image 16 alt](/assets/images/products/kata-platform/image16.png)

> **Figure 16**: Chatbot emulator position.

2. Type “Hello” word. If your chatbot works well, then it will show the chatbot reply witn created action. This image is the correct example.

![Image 2 alt](/assets/images/products/kata-platform/image2.png)

> **Figure 17**: Correct chatbot conversation.

3. Congratulations, your first chatbot is done. Next, continue to deploy your chatbot in messaging platform Telegram.

## Create a Deployment

<iframe width="600" height="300" src="https://www.youtube.com/embed/QtvgTJiDjwM?list=UUrud2GevnuhBNM7C7RjakVg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

Deployment is a step to merge all Revisions in Flow, NLU, and CMS so that bots can be integrated into the channel. Before starting channel integration, chatbots must at least have 1 deployment.

1. In the sidebar, choose the **Deploy** menu. Then, choose **Overview**.

![Image 17 alt](/assets/images/products/kata-platform/image17.png)

> **Figure 18**: Deploy menu interface.

2. Click the **New Deployment** button, then it will show a form on the right screen.
3. Choose the deployment version. In Kata Platform, there are 3 deployment versions:
    - Major to deploy big changes, such as change chatbot use-case.
    - Minor to deploy medium changes, such as adding new features in your chatbot.
    - Patch to deploy small changes, such as change copy in action.

![Image 18 alt](/assets/images/products/kata-platform/image18.png)

> **Figure 19**: Create a new deployment.

4. Then, click the **Submit** button. If deployment is successful, then the interface will be shown like this.

![Image 19 alt](/assets/images/products/kata-platform/image19.png)

> **Figure 20**: Deployment has been created.

## Create an Environment

<iframe width="600" height="300" src="https://www.youtube.com/embed/6taC7GJgq0I?list=UUrud2GevnuhBNM7C7RjakVg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

Step after creating a deployment is to create an environment. An environment is a zone in computer science that provides a place to run integrated applications. Kata Platform has 3 environments: development, staging, and production.

1. Choose the menu **Deploy**, then choose **Environment**.

![Image 20 alt](/assets/images/products/kata-platform/image20.png)

> **Figure 21**: Environment interface.

2. In this step, you will create a Development environment. Click the button **Create Environment** in the **Development** card.
3. Fill in the environment, then click **Create**.

![Image 21 alt](/assets/images/products/kata-platform/image21.png)

> **Figure 22**: Create an environment interface.

## Integration to a Channel

<iframe width="600" height="300" src="https://www.youtube.com/embed/B_a5-MV9nk8?list=UUrud2GevnuhBNM7C7RjakVg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

### Create a Channel

In this step, you will create a chatbot integration with the Telegram messaging platform. Telegram is a free messaging platform to deploy chatbots with a simple setup.

1. In the **Deploy > Environment**, click the **Create Channel** button.

![Image 22 alt](/assets/images/products/kata-platform/image22.png)

> **Figure 23**: Create an environment interface.

2. You will be redirected to the Create Channel page. Click the **“+ Create Channel”** button to create a new channel.
3. Fill in the channel name and choose type as Telegram. To fill in the Bot User OAuth Access Token field, we must set up a chatbot in Telegram first. The next step is to open your Telegram application and log in.

Before you start, you need a Telegram account already registered and logged in to your application.

### Connect chatbot to Telegram

1. The first step is to register your bot to the BotFather account.

![Image 23 alt](/assets/images/products/kata-platform/image23.png)

> **Figure 24**: Search BotFather account.

2. Type `/newbot` and BotFather will ask for your chatbot name. Feel free to use any name you like.
3. After that, you will be asked to enter your chatbot username. Remember that your bot username has to either start or end with `bot`.
4. Once finished, BotFather will respond with a bot token to access the Telegram Bot API.

![Image 24 alt](/assets/images/products/kata-platform/image24.png)

> **Figure 25**: Telegram shows bot token.

5. Go back to Platform, then copy the bot access token into the channel drawer.

![Image 25 alt](/assets/images/products/kata-platform/image25.png)

> **Figure 26**: Input bot access token.

6. Click **Create** to get a webhook from the Kata Platform. Then, click the copy button to copy the webhook URL.
7. Click on the webhook link to **View Channel** detail. It will show a drawer to copy the access token and webhook URL.

![Image 26 alt](/assets/images/products/kata-platform/image26.png)

> **Figure 27**: Input bot access token.

8. Next, open a new tab on your browser and enter this URL. Change {my_bot_token} into your own bot token. Also, paste `{kata_platform_webhook_url}` with the copied webhook URL.

```
https://api.telegram.org/bot{my_bot_token}/setWebhook?url={kata_platform_webhook_url}
```

9. Click “Go” or press Enter on the keyboard.

![Image 27 alt](/assets/images/products/kata-platform/image27.png)

> **Figure 28**: Telegram bot has successfully connected.

10. If you see the message “Webhook was set,” you’re all set! Let’s try our chatbot. Open Telegram on the desktop or mobile, and start chatting with your bot.

![Image 28 alt](/assets/images/products/kata-platform/image28.png)

> **Figure 29**: Testing “Hello” in Telegram chatbot.

This is the end of getting started with a chatbot. You can contact <a href="mailto:support@kata.ai">support@kata.ai</a> if you have any difficulties implementing this.
