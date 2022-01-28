---
id: analyze-your-bot-conversations
title: Analyze Your Bot Conversations
prev: start-your-first-chatbot
next: error-log
---

## Introduction

In the Kata Platform, you can view various reports and analytics regarding your chatbots. Whether it’s to analyze the end-user (read: chatbot’s user) behavior, chatbot’s most popular topic and keyword, or even chat log between your chatbot and its end-user, we got you covered.

There are 3 main features you can choose:

-   **Users** feature provides you the end-user information such as the number of new users, active users, and many more.
-   **Topics** feature is a feature that relates to what topics, flows, or states that the end-user is asking the most.
-   **Transcripts** is a feature to see end-user conversations with a chatbot.

Let’s elaborate on each feature definition and functionalities.

## Users

The Users feature contains the data of your end-user. First is the filter option on top of the feature screen.

### User Filter

![Image 1 alt](/assets/images/products/kata-platform/analyze-your-bot-conversations/image1.png)

> **Figure 1**: Filter option in Users feature.

You can filter the analytics based on:

-   **Environment** is a container your chatbot is deployed to. In Kata Platform, we have 3 environments: Development, Staging, or Production. Environment is a part when creating channels.
-   **Channel** is a deployed messaging platform where your bot lives.
-   **Date** is a feature to choose the date range for your analytics data. Note that you can only view maximum 2 months data at a time. For a broader date range, please contact us at <a href="mailto:support@kata.ai">support@kata.ai</a>.

### Various User Analytics

![Image 2 alt](/assets/images/products/kata-platform/analyze-your-bot-conversations/image2.png)

> **Figure 2**: Various user analytics data.

After selecting the filter, we can view specific data for your chatbot:

-   **New and Returning Users**: an analytics graphic to show the number of end-users who used the chatbot first-time and repeatedly.
-   **Active Users**: number of end-users who repeatedly used the chatbot in total.
-   **Sessions**: a session count when the end-user engages in conversation with the bot until the conversation ends. A session counts as “ended” when your end-user does not reply to the bot until 5 minutes after.
-   **New Users**: number of end-users that used the chatbot for the first time. If your end-user chats “Hi” for the first time to your bot, then it will be counted as 1. This metric cannot be applied to Whatsapp.
-   **Messages**: number of total messages received (incoming messages) and sent (outgoing messages) through the chatbot.

### User Activities

![Image 3 alt](/assets/images/products/kata-platform/analyze-your-bot-conversations/image3.png)

> **Figure 3**: User Activities analytics.

In User Activities, you can see how many sessions, active users, messages, and new users your chatbot has throughout the date range. You can also hover at any date to view the stats for that day. The data can be downloaded in CSV format.

### Peak Hours

![Image 4 alt](/assets/images/products/kata-platform/analyze-your-bot-conversations/image4.png)

> **Figure 4**: Peak Hours analytics.

In Peak Hour's analytics, you can analyze at what day and time the end-users are more engaged with your chatbot. The blue color indicates engagement. The darker the blue, the more engagement the end-user has with your chatbot on that specific day & time.

Notice on Monday at 12PM, when you hover the block, there are 28 incoming messages with dark blue color, indicating on that day and time the end-user is more active. You can use this analysis to make a better decision as to when is the best time to engage with your user.

### Cohort

![Image 5 alt](/assets/images/products/kata-platform/analyze-your-bot-conversations/image5.png)
![Image 6 alt](/assets/images/products/kata-platform/analyze-your-bot-conversations/image6.png)

> **Figure 5**: Cohort (simple & expanded) analytics - Daily.

<div className="info">
    <img className="borderless" src="/assets/images/icon-info.svg" />
    <p>Important note: The cohort data is standalone analytics, which means the data is shown not filtered by date range.</p>
</div>

Cohort analysis allows us to see end-user retention which shows the engagement level of end-users to the bot. For example, it counts **active users** who interact with our bot on month 0 and return on the following month (month 1), and return after the next following month (month 2), the higher the percentage of users that returned on month 1, 2, and 3 showing that our bot has a high **retention level**.

It has a **cohort size** to choose a range which are **monthly, weekly, daily** (default daily):

-   Monthly will show **2 previous months** from today.
-   Weekly will show **11 previous weeks** from today.
-   Daily will show **14 previous days** from today.

It has a download **button** to export data to a CSV file. We define **5 colors** as follows:

-   **A dark** color for the **100%** active users.
-   **A medium-dark** color for **75% to 100%** active users .
-   **Medium-light** color for **50% to 76%** active users.
-   **Light** color for **25% to 51%** active users.
-   **White** for **0% to 26%** active users.

## Topics

The **Topics** option within the analytics dashboard contains information regarding mostly used features in your platform. The first thing you will find is a box with 3 filters, which allows you to obtain customized information based on your chosen filters.

### Topics Filter

![Image 7 alt](/assets/images/products/kata-platform/analyze-your-bot-conversations/image7.png)

> **Figure 6**: Filter option in Topics feature.

You may adjust the filters based on the following parameters:

-   **Environment** is a container your chatbot is deployed to. In Kata Platform, we have 3 environments: Development, Staging, or Production. Environment is a part when creating channels.
-   **Channel** is a deployed messaging platform where your bot lives.
-   **Date** is a feature to choose the date range for your analytics data. Note that you can only view maximum 2 months data at a time. For a broader date range, please contact us at <a href="mailto:support@kata.ai">support@kata.ai</a>.

### Top Topics Analytics

![Image 8 alt](/assets/images/products/kata-platform/analyze-your-bot-conversations/image8.png)

> **Figure 7**: Top Topics analytics.

Once you apply the filters, you can view specific information regarding Top topics for a given feature. For example, shown above are the top 5 topics that appear the most for the flows, intents, states, and messages feature.

-   **Top 5 flows** will show you an insight about which flows are visited by end-users.
-   **Top 10 intents** featured the intents that the end-user repeatedly asked.
-   **Top 10 states** provide which response that chatbot repeatedly replied to the end-user.
-   **Top 10 messages** show what words were repeatedly talked about by your end-users.

All those pie charts are downloadable. The output files will be CSV.

### Word Cloud

![Image 9 alt](/assets/images/products/kata-platform/analyze-your-bot-conversations/image9.png)

> **Figure 8**: Word Cloud analytics.

When you scroll to the end of the page, you will find the **Word Cloud** box which is a collection of most commonly used words by your end-user. The bigger the size of the font indicates how often the word is being used. You can hover over the words to see total messages for each word.

## Transcripts

Transcripts feature provides the complete log of conversations between your users & chatbot, complete with date range, total incoming and outgoing messages, duration, and user ID. Also, you can download each transcript log in CSV format.

### Transcript Filter

![Image 10 alt](/assets/images/products/kata-platform/analyze-your-bot-conversations/image10.png)

> **Figure 9**: Filter option in Transcripts feature.

You may adjust the filters based on the following parameters:

-   **Environment** is a container your chatbot is deployed to. In Kata Platform, we have 3 environments: Development, Staging, or Production. Environment is a part when creating channels.
-   **Channel** is a deployed messaging platform where your bot lives.
-   **Date** is a feature to choose the date range for your analytics data. Note that you can only view maximum 2 months data at a time. For a broader date range, please contact us at <a href="mailto:support@kata.ai">support@kata.ai</a>.

### Transcript Log

![Image 11 alt](/assets/images/products/kata-platform/analyze-your-bot-conversations/image11.png)

> **Figure 10**: Transcript Log.

After choosing the filter, you can view the transcript log, you can also search for a specific User ID in the search bar on the upper left corner. Here is the explanation for each column:

-   **Start Date** means start date and time of the conversation.
-   **End Date** means end date and time of the conversation.
-   **Incoming** means the total number of messages from the end-user.
-   **Outgoing** means the total number of messages from the chatbot.
-   **Duration** means the total time of each conversation.
-   **User ID** means the user ID of the user in the conversation.
-   **Download** means a feature to download a transcript log in CSV format.

You can also click on the transcript row to view the log of each row, for example:

![Image 12 alt](/assets/images/products/kata-platform/analyze-your-bot-conversations/image12.png)

> **Figure 11**: Transcript Detail.

Here, you can view the log of conversations between your user & chatbot. We also include the state flow your user is in after each chat.

```

```
