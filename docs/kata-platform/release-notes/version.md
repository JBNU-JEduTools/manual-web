---
id: version
title: Version
---

## 3.23.1

<img className="borderless" alt="Kata Platform Illustration" src="/assets/images/products/kata-platform/release-notes/kata-platform-illustration.png" />

### What's New ⭐️

We develop a lot of improvements for the Kata Platform in user experience and the newest action type for your bot, here is the list:

-   New action type: Instagram Sticker. Learn more about [Instagram Sticker](https://docs.kata.ai/channels/instagram-messaging/#instagram-sticker-like-heart).
-   Updating copy for better user experience.
-   Enhance error messages when users publish bot and testing channels.

### What's been fixed 🛠

-   Fixed users cannot download transcripts from Firefox and Chrome.
-   Fixed issue when using dynamic carousel action type.
-   Fixed issue in scheduler that sending repetitive messages to end-users.

## 3.23.0

<img className="borderless" alt="Kata Platform Illustration" src="/assets/images/products/kata-platform/release-notes/kata-platform-illustration.png" />

### What's New ⭐️

We develop a lot of improvements for the Kata Platform in user experience and the newest action types for your bot, here is the list:

-   We’ve changed the **captcha validation** into the most powerful and secure captcha: hCaptcha. Please upgrade your KataCLI version to the 2.7.1 version too.
-   The wait is over 🎉 You can **remove team admin or remove team members** if they are no longer involved in the project. You may **add more admin** in 1 project. These abilities are for team admin only.
-   Yes, we heard you. We launched 2 newest action types for the WhatsApp bot: **List Messages** and **Reply Button**. You can create a less-typing experience through your end-users and get more engagement with it. Learn more about [List Messages](https://docs.kata.ai/channels/whatsapp/#-new--list-message) and [Reply Button](https://docs.kata.ai/channels/whatsapp/#-new--reply-button).
-   Now, you can add an image with a caption for your WhatsApp bot. Learn more about [the caption](https://docs.kata.ai/channels/whatsapp/#image-and-image-with-caption).

### What's been fixed 🛠

-   Fixed users cannot access the Team feature.
-   Fixed users got an error when requesting a reset password but the email is sent.
-   Fixed users cannot scroll down when adding transition mapping more than 5 mappings.
-   Fixed several users who cannot log in after signing up.

## 3.22.0

<img className="borderless" alt="Kata Platform Illustration" src="/assets/images/products/kata-platform/release-notes/kata-platform-illustration.png" />

### What's New ⭐️

The wait is over 🎉 A whole new integration chatbot channel to Omnichat, includes Instagram Direct Message automation. Learn more about Omnichat.

Here are the new features:

-   As agents, you can receive message context from conversations between chatbot and end-users. Also, takeover conversations from chatbots to handle complaints effectively. Learn more about [Agent Bot](/kata-omnichat/setup-agent-bot).
-   A new Instagram automation that provides your end-users chatbot responses such as text, image, quick replies, ice breaker, and generic template (“carousel”). Learn more about [the Instagram channel](/channels/instagram-messaging/) and create a [chatbot Instagram handover to human agents](/tutorial/create-igdm-bot-handover-from-chatbot-to-agent).
-   Handover API template for easier handover API to Kata Omnichat. Learn more about creating a [chatbot handover to agents](/tutorial/create-simple-bot-handover-from-chatbot-to-agent).

### What's been fixed 🛠

-   Fixed users cannot log in or sign up using a captcha
-   Fixed users cannot download bot code (.yml) in the Revision List

## 3.21.0

<img className="borderless" alt="Kata Platform Illustration" src="/assets/images/products/kata-platform/release-notes/kata-platform-illustration.png" />

### What's New

If you're a user who trains natural language models with large amount of data on KataCLI, but don't know where you can see the results of the data training, this feature is suitable for you!

**We're adding NL bulk training on the GUI,** so you can easily upload your training data (up to 200 sentences/lines) and directly see the results on the same GUI. Learn more about [NL bulk training in GUI](https://docs.kata.ai/nl-studio/nl-bulk-training).

### What's been fixed

Improved training speed for shorter retraining time

#### Wait, what is retraining?

When doing training for the NL models, you may incorrectly put a tag and prompt an automatic training for the tag. In that case, you can delete the incorrect sentence and the system will perform the _retraining_ process to all your NL models using the updated training data.

## 3.19.0

<img className="borderless" alt="Kata Platform Illustration" src="/assets/images/products/kata-platform/release-notes/kata-platform-illustration.png" />

We always listen to our customers for their pain points, bug findings, required fast improvements and so on. So that, were doing improvements and several bugfix in January until March 2021, here is the list:

### Improvements

-   Login improvement on add captcha login
-   User sign-up improvement on input validation
-   Image validation improvement when user do uploading image in Kata Dashboard
-   Deployment version can be shown up to 100 latest version

### Bug fixes

-   Unable to connect Kata Platform webhook in LINE channel.
-   Unable to continue to publish bot because input validation error in NLU training label, project name and state name
-   Cannot delete CMS page element in Kata CMS
-   Cannot choose action list due to available actions are hidden
-   User cannot save bot and create new bot draft
-   Unable to create environment in selected projects
-   Some environments are not listed in Deployment feature
-   New line character “\n” is not shown in action text
-   Some projects unable to load chatbot flow in Kata Flow
-   Repeatedly shown character “\” in action type which is not expected by user
-   Some frontend elements in user interface in emulator and prediction log were missing

## 3.15.0

<img className="borderless" alt="Kata Platform Illustration" src="/assets/images/products/kata-platform/release-notes/kata-platform-illustration.png" />

We are proud to announce a whole new experience with our analytics platform.

You can see more detailed user data, namely: New and Returning Users. Here you can see the number of new and returning user, also the total of both of them, based on filtering environment, channels, and dates. You also be able to see the total number of Active Users, Sessions, New Users, and Messages.

![analytics-1](/assets/images/products/kata-platform/release-notes/platform-3.15.0/analytics-1.png)

You can get daily user activity data based on the selected date range, showing in a line chart. Get daily data for sessions, messages, active users and the newest is the number of new users. The data is also available offline by downloading it first.

![analytics-2](/assets/images/products/kata-platform/release-notes/platform-3.15.0/analytics-2.png)

Get insights to blast messages in peak hours by looking at the total messages in the 7 days and 24 hours. You can do a hover in each block to see the number of incoming messages you get every hour on the selected date range.

![analytics-3](/assets/images/products/kata-platform/release-notes/platform-3.15.0/analytics-3.png)

Did you know that it's important to pay attention to how many users come back to chatting with the chatbot? Now we have a Cohort table to display this data. You can view user retention data from daily, weekly, and monthly.

![analytics-4](/assets/images/products/kata-platform/release-notes/platform-3.15.0/analytics-4.png)

In the Topics menu, you can see the most topic that users are looking for. You can see the Top Flows, Top Intents, Top States, and Top Messages. Now, we also be able to download those insights into csv files.

![analytics-5](/assets/images/products/kata-platform/release-notes/platform-3.15.0/analytics-5.png)

In addition, we also have a Word Cloud so we see the most common words used by user at a glance.

![analytics-6](/assets/images/products/kata-platform/release-notes/platform-3.15.0/analytics-6.png)

In the Transcript menu, we can see the conversation history between user and chat bot. Now, we can sort the start date, end date, incoming, outgoing, and duration into ascending and descending sequence. We also be able to search transcript by user ID.

![analytics-7](/assets/images/products/kata-platform/release-notes/platform-3.15.0/analytics-7.png)

## 3.9.0

### Features

Added **Transcript List** which provides User ID, Start Date, End Date, Duration, Incoming, and Outgoing information.

![Transcript List](/assets/images/products/kata-platform/release-notes/platform-3.9.0/transcript-1.png)

By clicking one of the Transcript List row, project owner can see **Transcript Detail** which provide the chat history of user and bot. Also, there is **eye icon** on the bottom of each bubble which shows message detail.

![Transcript Detail](/assets/images/products/kata-platform/release-notes/platform-3.9.0/transcript-2.png)

Furthermore, project owner can **filter** the Transcript List by Environment, Channel, and Date. In the date picker, when project owner choose a date more than 2 months ago, there will be a **pop-up message** which inform them to contact us.

![Transcript Data Limit](/assets/images/products/kata-platform/release-notes/platform-3.9.0/transcript-3.png)

## 3.8.0

### What's New

Basic analytics, which was previously available on Kata Platform 2.5, is now making a comeback on Kata Platform 3.0.

You can now see the total active users, total sessions, and total incoming messages of your bot (also available in line graph). Find it on **Analytics > Users** menu.

![Analytics](/assets/images/products/kata-platform/release-notes/platform-3.8.0/analytics-1.png)

Gain high-level insights of your conversations by seeing top flows, top intents, top states, and top messages of your bot. You’ll see those stats on **Analytics > Conversation** menu.

![Analytics](/assets/images/products/kata-platform/release-notes/platform-3.8.0/analytics-2.png)

See the details of your conversations on **Analytics > Transcript** menu. Here, you’ll find the chat history between the user and your bot, from the duration of the conversation to the message details

![Analytics](/assets/images/products/kata-platform/release-notes/platform-3.8.0/analytics-3.png)

![Analytics](/assets/images/products/kata-platform/release-notes/platform-3.8.0/analytics-4.png)

## 3.7.0

### What's New

Version 3.7.0 is all about adding new channel for you to talk to your customers. Introducing, _new channel_ for Kata Platform channel integration: Freshchat.

Freshchat provides live chat software that helps you to engage with your website visitors, provide assistance, and convert leads to happy customers. [Read more about the integration here](https://docs.kata.ai/channels/freshchat/).

![Freshchat](/assets/images/products/kata-platform/release-notes/platform-3.7.0/freshchat.png)

## 3.6.3

### What's New

You can now **delete trained data** on Kata NL. Some important notes:

-   You can’t undo this action. Deleted data can’t be restored.
-   Once you delete trained data, your model will be retrained. You won’t be able to add, edit, or delete other data during the process.
-   The retraining duration depends on the quantity of data you deleted. Deleting more data will take a longer time.

![Delete Training](/assets/images/products/kata-platform/release-notes/platform-3.6.3/delete-training-1.png)

![Delete Training](/assets/images/products/kata-platform/release-notes/platform-3.6.3/delete-training-2.png)

# 3.5.6

### What's New

Version 3.5.6 is about download feature on Prediction Logs, Platform Analytics and Kata Omnichat. Here’s what’s new:

#### Kata Omnichat

Now Kata Omnichat is available as a module. We can create Qiscus Account and activate the module once we’ve already add Kata Omnichat Module to Project.

![Omnichat](/assets/images/products/kata-platform/release-notes/platform-3.5.6/omnichat-1.png)

![Omnichat](/assets/images/products/kata-platform/release-notes/platform-3.5.6/omnichat-2.png)

![Omnichat](/assets/images/products/kata-platform/release-notes/platform-3.5.6/omnichat-3.png)

Automatically adding `handover` to Kata Flow

![Omnichat](/assets/images/products/kata-platform/release-notes/platform-3.5.6/omnichat-4.png)

Managing agents in Dashboard if we’re an admin or supervisor

![Omnichat](/assets/images/products/kata-platform/release-notes/platform-3.5.6/omnichat-5.png)

Showing list of messages in Inbox menu. Also, do chatting with customer.

![Omnichat](/assets/images/products/kata-platform/release-notes/platform-3.5.6/omnichat-6.png)

Send subscription email to customer

![Omnichat](/assets/images/products/kata-platform/release-notes/platform-3.5.6/omnichat-7.png)

![Omnichat](/assets/images/products/kata-platform/release-notes/platform-3.5.6/omnichat-8.png)

![Omnichat](/assets/images/products/kata-platform/release-notes/platform-3.5.6/omnichat-9.png)

#### Download Prediction Log

We can download the prediction log as CSV or JSON, within the time range or all of them

![prediction-log](/assets/images/products/kata-platform/release-notes/platform-3.5.6/prediction-log.png)

#### Analytics

Brings back Analytics menu in project with new user interface

![Analytics](/assets/images/products/kata-platform/release-notes/platform-3.5.6/analytics-1.png)

Showing statistics in users and conversation under Analytics menu.

![Analytics](/assets/images/products/kata-platform/release-notes/platform-3.5.6/analytics-2.png)

Analytics can show conversation log for each session

![Analytics](/assets/images/products/kata-platform/release-notes/platform-3.5.6/analytics-3.png)

## 3.5.5

### What's New

Version 3.5.5 is dedicated for Kata CMS. Here’s what’s new:

-   Added CMS Image Single and Table (Carousel) Elements in Kata CMS and Kata Dashboard.
-   You can now use our CMS with new image management feature straight from Kata Dashboard.

![CMS Images in Kata Dashboard](/assets/images/products/kata-platform/release-notes/platform-3.5.5/cms-images-dashboard.png)

-   Update image directly using Single Image & Image Table (Carousel) Elements in Kata Dashboard.
-   Edit the button label and URL on CMS Image Table (Carousel) in Kata Dashboard.
-   Set the carousel action with three types of action: URL, Postback, and Message on Kata CMS.

![CMS Images in Kata CMS](/assets/images/products/kata-platform/release-notes/platform-3.5.5/cms-images-studio.png)

## 3.4.0

### What's New

Version 3.4.0 is all about Prediction Logs. Here’s what’s new:

-   Prediction Logs data now shows predicted labels, prediction score, plus the date and time it was predicted.
-   You can now search and filter your Prediction Logs data by entities, training status, prediction score, and date.
-   We added a new **Ignore** feature, so you can train your NL model to, _well_, ignore sentences that don’t belong to any label. This allows your NL model to learn and improve its algorithm, ultimately improving the accuracy of your NL model.

![NL Insight](/assets/images/products/kata-platform/release-notes/platform-3.4.0/nl-insight.png)

### Bug Fixes

-   Fixed FAQ table cannot show more than 10 labels
-   Fixed error when adding/deleting questions in FAQ table
-   Fixed bot revision history only show last 10 snapshots
-   Fixed error when accessing NL Studio

## 3.3.0

In this release, we're highlighting our newest feature and some recent updates to Kata Platform.

![Module Screenshot](/assets/images/products/kata-platform/release-notes/platform-3.3.0/module.png)

### Modules

Modules are prebuilt bot features, ready to be integrated into your project in just a few clicks. This way, you can create amazing conversational experiences even faster. In this beta-release, we're introducing modules for two of the most common chatbot features: FAQ and Location.

#### FAQ Module

FAQ Module lets your chatbot answer questions your customers often ask. It's excellent for anyone who wants to reduce the workload of their customer service department. With this module, you can build the knowledge-base to handle the repetitive questions, so your live agents can focus on more complex problems.

#### Location Module

Location Module lets your users find the nearest location of your business. This module is ideal for any industries offering face-to-face customer experiences, such as banking and retail. Your users can share their location, and you can point them to your nearest establishments along with the Google Maps directions.

All of our modules are already integrated with CMS Studio. It means anyone on your team can collaborate on managing the content without the need for programming or technical skills. Further details and documentation about Modules can be found [here](https://docs.kata.ai/modules/introduction/).

### Misc

-   Fixed \n causing errors in Method.
-   Emulator now lets you test each environment separately.
-   Emulator now lets you test CMS content.
-   Added emulator on client dashboard. Now your client can test changes they made directly on the dashboard.

As always, we're happy to chat with you to learn more about your use cases and feedback on Kata Platform. You can send us your thoughts via email to [support@kata.ai](mailto:support@kata.ai) or join our community on [Slack](http://bit.ly/JoinTemanKata).

## 3.2.2

### Bot Studio improvements

-   We've added the Quickreply and Confirm Template action templates, compatible for LINE Messenger.
-   Buttons can now be used to trigger a date/time picker.
-   Added the option to add Phrase NLU output for NLU entities with type Phrase.

### Deprecated NLU Types

On the Bot Studio NLU selector, we have deprecated NLU types `Verstand classifier`, `Verstand tagger` and `Verstand retrieval`. New NLUs created can no longer have these types.

### Bug fixes

-   **Bot Studio:** Fixed incorrect KataML generated when creating CMS action.
-   **Bot Studio:** Fixed issue where onEnter mapping is stringified.
-   **NL Studio:** Fixed unable to inherit NLU.
-   **NL Studio:** Fixed searching inherit and root NLU.
-   **NL Studio:** Fixed various display issues with training + prediction log.

## 3.2.0

### Super Model

Super Model is a highly maintained pre-built entity for Users to use without training. New projects would automatically have a Kata Entity, named `kata`, for tagging common task like person name, location, datetime, email, number, etc. For more details, [click here](/nl-studio/super-model/).

### Channel improvements

Added support for WhatsApp channel. You can now enter your WhatsApp channel details in the platform.

### Bug fixes

-   **Bot Studio:** Fixed unable to update state in end state.
-   **NL Studio:** Fixed missing field dictionary for entity type.
-   **NL Studio:** NL settings now show the correct defined NLU language.
-   **Bot Studio:** Fixed bug where some form errors were not shown correctly.
-   **Bot Studio:** Fixed bug where the flows editor does not reflect the updates made in self-transition state.

## 3.1.0

### Bot Studio Improvements

-   Added "CMS" action. Now you can search/select CMS elements when creating action on Bot Studio.
-   Bot Studio now auto-saves your work as a draft.
-   CMS Studio now allows you to invite non-Kata Platform users to use Kata Dashboard.

### kata-cli

Kata-CLI now shows bulk training status:

-   Information if there is any active training job.
-   Error on specific training data.

### Bug fixes

-   Fixed an issue that caused "Add Mapping" button to disappear after users click Single Mapping when creating method.
-   Fixed an issue that caused users unable to search public NL when creating entity.
-   Fixed an issue that caused display on keywords field to not expand when users add more than 1 lines.
-   Fixed some display bugs.
-   Fixed crash when creating transition & intent.
-   **kata-cli:** Fixed a bug showing incorrect bot latest revision on Bot Studio after users push bot on Kata-CLI.
-   **kata-cli:** Fixed data training order when users use bulk training feature. Now use last-in-first-out method.

## 3.0.0

**Kata Platform 3.0** is our biggest update yet. In this version, we are introducing several new features to help you build a more comprehensive solution for your needs.

### What's New

#### Projects

Manage your chatbot project under one roof. A project consists of one bot design, one NL, and one CMS. Each of them will have different versions you can maintain.

![Projects Image](/assets/images/products/kata-platform/release-notes/platform-3.0/kata-platform-3-0.jpg)

#### CMS Studio

Build your own CMS for your chatbot. Your client will have a full access to maintain the knowledge or content of your chatbot. Now you can build your own CMS based on your needs.

![CMS Studio](/assets/images/products/kata-platform/release-notes/platform-3.0/cms-studio.png)

Once you've done building your own dashboard, you can invite users or clients to contribute to the dashboard and update your bot's knowledge easily. All in all, your dashboard will look like this:

![Dashboard](/assets/images/products/kata-platform/release-notes/platform-3.0/dashboard.jpg)

#### NL Prediction API

Build your own Natural Language using our NL Studio, and use it everywhere.
Now it supports:

-   Entity Recognition
-   Intent Classification
-   Sentiment Analysis

#### Kata Design Language System

##### Aksara

Aksara is our very own design language system. It contains foundations, voice and tone guidelines, component standards, and other guidelines that systematically improve quality, timeliness, and consistency to our product.

##### Wicara

Previously known as kata-kit, Wicara is the implementation of Aksara Design Language using React framework. It is designed to be flexible and reusable react components.

Go to http://aksara.kata.ai to see our Design Language System.

We hope Kata Platform 3.0 will help you build smarter chatbots in shorter development time. It is our mission to democratize AI and help the community to build chatbot solution. For any inquiries, contact us at [support@kata.ai](mailto:support@kata.ai).

## 2.5.0

Same powerful Kata Platform, only look and feel better. Should you have any questions, feel free to email [support@kata.ai](mailto:support@kata.ai).

### What's New

#### Error logs

The new Error Log lists any errors that appeared during bot development. What went wrong and when it went wrong.

#### Bot Templates

Get a head start creating your bot with our starter-pack templates:

-   **API Bot:** Learn how your Bot can integrate to third-party API.
-   **Button Bot:** Not only through conversation, your bot can also interact with users through buttons.
-   **Shopping Bot:** Our famous Pizza Bot is now available for anyone. Build your own Shopping Bot using our recipe.

#### Documentation

Getting complicated with our new Platform? Keep calm and check our documentation menu. Easiness to access our sub-menu in simple and subtle view.
