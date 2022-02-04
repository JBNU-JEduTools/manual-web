---
layout: tutorial
id: how-to-use-instagram-messaging-automation-in-your-project
imgSpot: /assets/images/tutorial/spot-ig-handover.png
product: kata-platform
title: How to use Instagram Messaging automation in your project
date: '2021-08-26T07:00:00+07:00'
---

Automate your Instagram DM conversation using our flow builder in the Kata Platform. Create bots to reply to customers with text, images, quick replies, generic template, ice breaker, and (coming soon) sticker.

## Instagram Messaging Features

### Instagram Story Reply

#### About

You can send an automated reply to their DM whenever your customers engage you via Instagram Story.

#### How to use

1. Go to the Kata Platform and select your project.
2. Click to **Flow > Conversation Flow > Intent > Create Intent.**
3. Choose **Data** for the **Intent Type** dropdown
4. Click **Add Condition** and fill in

    ```
    payload.type == "story_reply"
    ```

5. Click Save

### Instagram Story Mention

#### About

Whenever your customers mention your account in their Instagram Story, you can send automated replies to their DM.

<div className="info">
    <img className="borderless" src="/assets/images/icon-info.svg" />
    <p>
Important note:
    <ul>
        <li>Because Instagram Story will be deleted every 24 hours, it is expected that the story attachments will disappear too.</li>
        <li>Chatbots cannot “read” the Instagram Story Mention content, but human agents can see the attachment. Tips: If your customers mention your account in the complaint context and your chatbot cannot satisfy them with the solutions, the agent can take over the conversation.</li>
    </ul>
</p>
</div>

#### How to Use

1. Go to the Kata Platform and select your project.
2. Click to **Flow > Conversation Flow > Intent > Create Intent.**
3. Choose **Data** for the intent type dropdown
4. Click **Add Condition** and fill in

    ```
    payload.type == "story_mention"
    ```

5. Click Save

### Response Type

#### Sending Texts Reply

Primary chatbot responses that show text to end-users.

##### How to Use

1. Go to the Kata Platform and select your project.
2. Click to **Flow > Conversation Flow > State > Action List**.
3. Choose **Text.** FYI, the Text limitation for Instagram automation is **1,000 characters** and allows for **emoji**.
4. Click **Create Action** to finalize your action

#### Sending Images Reply

Primary chatbot response to send an image to end-users

##### How to Use

1. Go to the Kata Platform and select your project.
2. Click to **Flow > Conversation Flow > State > Action List**.
3. Choose **Text.** FYI, the Text limitation for Instagram automation is **1,000 characters** and allows for **emoji**.
4. Click **Create Action** to finalize your action

#### Sending Quick Replies Reply

You can use this feature to show menu options to end-users and a good user experience to present to end-users your brand’s bot features. In Platform, this feature is named “Quick Reply,” which is placed in Flow > Conversation Flow > State > Action List. Here is the screenshot of quick replies

![](https://lh3.googleusercontent.com/FDB-nKyk2yaNrbERm8-81PX7YXhbILHkStasPZupcPqTtMatKYnBDoXdDCnwCYhWMXkbtHa3pKblpf69wIfIjeTM4ntWHv07IFocTAvEVO780wsP02-bEeZzojM3pGzYCH8v2BRj)

> **Figure 1:** Quick replies in Instagram app.

##### How to Use

1. Go to the Kata Platform and select your project.
2. Click to **Flow > Conversation Flow > State > Action List**.
3. Choose **Quick Reply. **The Quick Reply limitations are (1) Max. 13 quick replies, (2) Each quick reply only allowed 20 char before being truncated.
4. Mapping for Quick Reply with an accurate view to end-user can be seen as follows.

    ![](https://lh5.googleusercontent.com/Lb3BrI0k8186fHdCu_38TfV5ndNmPqNIZJXt5F2gHxlZH5I0r3Rge0kljj-i-EhtFIDQ_iKuJFzJp5qlY7Yy7b765DKOJ4QD8sAVd-tHzNozkrRkhtfGh1bXMN3UZiUkBUa-WWGG)

    > **Figure 2:** Quick replies components.

5. Click **Create Action** to finalize your action

#### Sending Generic Template (“Carousel”) Type

This feature has an interactive way to show menus or options by adding images and buttons in one bubble. Even more, 1 bubble message can show multiple Generic Templates. Here is the screenshot

![](https://lh6.googleusercontent.com/K9W-9FuH-m8w68gOWNhYrBw9uOlORlHXzACQndnhLeGEImiMpOCmGZgQWH875HmYmJFfqsChVEiJxEY7W4RpdCm6XJboat_UMC9Zr9yTsIKZ_ud2FIrjIUwKi8gEvqeUyLct8Nsw)

> **Figure 3:** Generic template in Instagram app.

##### How to Use

1. Go to the Kata Platform and select your project.
2. Click to **Flow > Conversation Flow > State > Action List**.
3. Choose **Carousel.** FYI for generic template limitations are (1) Maximum 10 elements, (2) Maximum of 3 buttons per element, (3) Each element consists of The title to display in the template which has 80 character limit, the subtitle to display in the template has 80 character limit.
4. Click **Create Action** to finalize your action

#### Sending Ice Breaker Reply

We probably felt confused the first time using a chatbot as end-users, especially if the bot hasn’t given apparent bot features. “Ice Breaker” solves this problem by showing a _getting started_ on a few topics after the end-user adds the brand’s account.

<div className="info">
    <img className="borderless" src="/assets/images/icon-info.svg" />
    <p>
Important: Ice Breaker is only shown for a first-time chat.
</p>
</div>

Here is the screenshot of the feature

![](https://lh5.googleusercontent.com/Ry1ZHq04kAwWutScBU4jOH5zkPKo5eMwCpCNTvd4TifEg4Q0N9ENcDt8kSkGptVXx9U02xHedzdc78zlUeh6SMekkYCcOnB_bLCHprMSupYf9my3a7CDkSKuQ5wehxOs5gtkWFr2)

Figure 4: Ice breaker in Instagram app.

##### How to Use

Ice Breaker setup must be done in [Omnichat](/kata-omnichat/introduction/what-is-kata-omnichat). Hence, we need to create an Inbox and connect it to Instagram DM. Follow this tutorial on [how to create an Inbox](/kata-omnichat/getting-started/connect-your-instagram-messaging-inbox).

Finally, you’ve successfully created the Inbox. Let's jump to [creating the Ice Breaker tutorial](/kata-omnichat/manage-inbox-settings/set-up-ice-breaker).

#### Instagram Sticker (“like heart”)

This feature allows your bot to send a sticker heart ❤️ and it is different from inline-like.

```
Tips: To develop this feature, you should know that your bot will reply with a “heart” whatever the customers ask. It’s somehow uncomfortable if your customer complains to your bot, then it shows a heart sticker.
```

##### How to Use

1. Go to the Kata Platform and select your project.
2. Click to **Flow > Conversation Flow > State > Action List**.
3. Choose **Instagram Sticker.**
4. Click **Create**.

### Available Soon

#### Private Replies

##### About

Your customers can receive automatic replies in their Instagram DMs (considered “private”) whenever they comment on your brand Instagram post. It is a powerful tool to reach your customer faster and privately whenever they complain or praise your brand.

##### How to Use

You will apply it in the **intent** feature to trigger automatic replies from Instagram Posts. We will update further announcements in this documentation or newsletter.

![](https://lh5.googleusercontent.com/KQ7PDb-wX0SnD8Od2gZ1LrDyvtk7NIg2a4I5l4KKT2hRxbVtRAu0fG5P-L2hl5qFzAKOGp7Zu5YXaHtnStwX__vdlkcPzjpMJcYlTdlSBxygRgM7tjXdiCSvM0hnV-6A1dVBCS_i)

> **Figure 3:** Generic template in Instagram app.

## Deploy your chatbot

Go to the tutorial for [creating a simple Instagram DM chatbot](/tutorial/create-igdm-bot-handover-from-chatbot-to-agent).

## FAQ

### I have 2 IGDM bot actions: image type and text type. The first response will show an image, then a text. However, after I deploy the IG channel, it offers a text, then an image. Why did it happen?

A: Because the API calls limit in Instagram (Facebook policy link) has a maximum of 5 outgoing messages in 1 second. Hence, loading the image and showing it to the end-user took a delay in between, and the impacted image action type didn’t show in the correct order. You cannot avoid it. We suggest you put a good UX conversation to display the image between text since the image will have an incorrect order than the Platform emulator.

It is the end of the guidance. You can contact [support@kata.ai](mailto:support@kata.ai) if you have any difficulties when implementing this.