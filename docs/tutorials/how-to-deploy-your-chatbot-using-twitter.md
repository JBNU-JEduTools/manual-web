---
title: How to deploy your chatbot using Twitter
id: how-to-deploy-your-chatbot-using-twitter
product: kata-platform
imgSpot: /assets/images/tutorial/spot-ig-handover.png
date: '2021-08-26T07:00:00+07:00'
---

Twitter is a trending social media for most countries, so Twitter chatbots will be a great opportunity to join the trend ✨ In this tutorial, you will learn how to deploy the bot to the Twitter direct message channel. So, let’s get started.

## Deploy your chatbot

1. Click **Deploy** menu in the left sidebar
2. On the Deploy page, click on the **New Deployment** button in the top right corner. It will open up the Create Deployment menu.
3. Choose any deployment version you want to deploy and fill in the changelog.

![Alt Image 1](https://lh3.googleusercontent.com/7qQL-bT11-PszbC2Y92kcZ_Avayic4bKR4k82jquDTH2_iRs6a6ZL0b7gN8-1cqfvLEtUYZl_l20Tq885jwkx4lU8lI_Gs6lpKD42MCJoP7OQqIttgLTk4O_i6hQiRj1hlE6aPwH)

> **Figure 1**: Create a new deployment

4. Click **Submit** to finish the deployment

If you already have an environment created, skip these steps.

1. Go to the **Deployments > Environment** menu.

![Alt Image 2](https://lh3.googleusercontent.com/wRHYa5fPbW012q3q7JqosoR9qq5R72aafskrbpILMMs2akEXy50LRF5uTJ2XjYBou26sv8s3K6p0K-Zy1oySuvP5k1F6wGwJrXJGjRuZmHvrJFIny_jjED9ZxrVvBZU06yHbaF2A)

> **Figure 2**: Set up environment, then set up Twitter channel

2. Click the **Create Environment** button in any environment. You will see a drawer to create a new environment.
3. Choose the **development version** you want (in this tutorial, we use the 1.0.0 version)
4. Fill in the **environment URL**. This environment URL is used for CMS. Learn more about CMS.
5. Click **Create** to create the environment.
6. Created environment now has a **Create Channel** button.

Continue to choose Twitter as a chatbot channel.

1. Click the **Create Channel** button to start adding channels to the environment. It will open up the Channel menu within the environment.
2. Click the ”**+ Create Channel**” button in the channel table list. A menu to set up the channel will be shown.
3. Choose **Twitter** in Channel Type.

![Alt Image 3](https://lh6.googleusercontent.com/1e60t2rOsNQc8QysllKO4gxIGwEvSVapL7El-Ju2VlcCIOTxWnXSGpAXlMgo4VPSAGuhXcImhbyVTHrDO8ZB1VESeV7HcOuUpQnHN8JWxispwE6xCTaFL7ade6q078byGAiDrTNY)

> **Figure 3**: Create Twitter channel

| Field Name                   | Functionality     | Limitation                                                                                  |
| ---------------------------- | ----------------- | ------------------------------------------------------------------------------------------- |
| Name                         | Your channel name | Max. 30 characters must contain only alphanumeric characters (A-Z, a-z, 0-9), `-`, and `_`. |
| Access Token                 | -                 | -                                                                                           |
| Access Token Secret          | -                 | -                                                                                           |
| Consumer Key (API Key)       | -                 | -                                                                                           |
| Consumer Secret (API Secret) | -                 | -                                                                                           |

## How to collect API secret key, access token, and access token secret

1. To deploy your bot on Twitter, you need to register for a developer account. Go to <a href="https://developer.twitter.com" target="_blank"><span>http</span>s://developer.twitter.com</a>.
2. Continue to sign up by following the instructions.
3. Then, log in to the Twitter Developer Page. You will see the homepage.
4. Click on **Create An App** tab, then your page will be shown like this:

![Alt Image 4](https://lh3.googleusercontent.com/OdoqY_qeP64uzlsZr24JrRhbepoqrtymPXC86F0UaqBZW06e0VVObF7AEVWanBSfZ4KqUf4O6F_W9CUKJe1d8lv8HDaUKk4DW8xJ48Hb43toCvGUbUoElNMn91GUndJiiCaZL5SM)

> **Figure 4**: Create an app page.

5. Fill the form then click on **Create** button
6. Then, go to the **Keys and tokens** tab. Click the **Regenerate** button to generate an API key, API secret key, access token, and access token secret. Here is an example.

![Alt Image 5](https://lh3.googleusercontent.com/J3bW4olVVvCgmk6gWQSarPoilsfpbBug3eTpt2TIX1JiZ8b1Io6rWnvy4yeneEfOGqxv1wFZ4MNS4R1oijEAy8uSJeV8Hd6ZGjIuZ6t4C5PY-Sd6yd_gxwOA0vtpEG4R_iNl15HS)

> **Figure 5**: Generate access token and access token secret

7. Then, go to the **Permissions** tab. In this tab, change access permissions to **Read, write, and Direct Message**.

![Alt Image 6](https://lh4.googleusercontent.com/Ngs3Mz1H6fqS-Ahzg_U3lryRdolxVmHJhe0l0BsnQz7CqCaX86UQrpRrSnmuwdL01nSCc4izMjfF6hbotLrgCT9Se0bWWX5fTqGV6Z3l5vQC1IimlqXGanzOHJDL4XU4yg5AItdS)

> **Figure 6**: Access permissions changed to Read, write and Direct Messages

8. Go to the **Dev environments**(<a href="https://developer.twitter.com/en/account/environments" target="_blank"><span>http</span>s://developer.twitter.com/en/account/environments</a>), then click the button **Set up dev environment** to begin.

![Alt Image 7](https://lh5.googleusercontent.com/c8SvPV8iNJ9XguqhDTmpkoW818z6RwCWJCJHwIm2bN9JEe8zpJvr3PVqKiJYnajFLqg81ElyWMovUXDaJPc55GAxFfz1usWVhzgXcEUZ8dTe4u1UN22OaTJqnBmXYyOlr5M3Jgq_)

> **Figure 7**: Set up dev environment

Next step is to paste the API key, API secret key, access token, and access token secret from Twitter to the Kata Platform.

1. Go back to the Key and Tokens tab, copy all fields.
2. After copied, go back to Kata Platform (<a href="https://platform.kata.ai" target="_blank"><span>http</span>s://platform.kata.ai</a>)
3. Paste the API key, API secret key, access token, and access token secret there. Here is the example:

![Alt Image 8](https://lh3.googleusercontent.com/V95HDF2NSwY1aGlOR5YeLFWUK_zps9qY_YF_F_bRR4RHtAzDUBmFTiDndTzg4pbXfO-Ln6UBIs-bze3erosAnFcsQt7r8s8TsgKaMEMDZ3u4ZTG0nqPvl0UnIBcMsXpxWMIUwk3A)

> **Figure 8**: Paste API key, API secret key, access token, and access token secret

4. Click **Create** to generate the webhook. You can see a webhook URL from the generated channel.
5. Click the **copy** icon to copy the webhook URL.

![Alt Image 9](https://lh5.googleusercontent.com/n7IGyBPqnBHf10rJlb_M9l0x-xWobhxutiRor9wP0r259gsxGPxHvQS7IipXIqpcLk7FAXoC-edU9X2aPh_8tThKrgwslWgAsDiZhUdOJLZb9MMcA96l8syZL3FINaPbN1i-dXDb)

> **Figure 9**: Copy webhook URL

## Finalize Twitter Direct Message Set Up

1. Clone this repository: <a href="https://github.com/twitterdev/account-activity-dashboard" target="_blank"><span>http</span>s://github.com/twitterdev/account-activity-dashboard</a>
2. Install Node.js dependencies using **npm install** command.
3. Create a new **config.json** file based on **config.sample.json** & **.env** file based on **env.template** and fill in your Twitter keys, tokens and webhook environment name. Twitter keys and access tokens are found on your app page on Apps Dashboard (<a href="https://developer.twitter.com/apps" target="_blank"><span>http</span>s://developer.twitter.com/apps</a>). The basic auth properties can be anything you want, and are used for simple password protection to access the configuration UI. Environment name is found on the Dev Environment (<a href="https://developer.twitter.com/en/account/environments" target="_blank"><span>http</span>s://developer.twitter.com/en/account/environments</a>) page. Make sure you have access to the Account Activity API.
4. Revisit your developer.twitter.com Apps Settings page, and add the following URL values as whitelisted Callback URLs:

```
http://your.app.domain/callbacks/addsub
http://your.app.domain/callbacks/removesub
```

5. Run locally using **npm start** command
6. Open <a href="http://your.app.domain/webhook" target="_blank"><span>htt</span>p://your.app.domain/webhook</a>. If it succeeds, username and password are inserted with basic auth properties that you have defined before.
7. Paste webhook from Kata Platform to Create or Update Webhook. Click **Create/Update** to continue.

![Alt Image 10](https://lh6.googleusercontent.com/s5aMas6GBzvQLEj8svcnhx-XSbvFvC1mLD9aLi81-PJtABsPXZpPzSO3MLzdAdH_Y7lQ_4ZfOly5WA8_8JQq-EPyZUsoOZyM20F39D9HaYmmvgA1oa1Na5Dqq7jdZjDPsjq3EHvQ)

> **Figure 10**: Paste webhook URL from Kata Platform

8. Next, open <a href="http://your.app.domain/subscriptions" target="_blank"><span>htt</span>p://your.app.domain/subscriptions</a>.
9. Then, click **Add** to add a user subscription. Login with the same account that you set to become the bot.

![Alt Image 11](https://lh3.googleusercontent.com/3QZFpJZPNLFUrSARVYQTxDFTMWKzv1yfKBXhKn7-bEsuMnWCsHJuoggMR-gn4mmnLd2jJ7eyKG-OlgOC2fo7XgpJ0jAbyO-4QJax-YJsezFk4Pq7clcrs7UWOdrBkOyUDGVAcEbT)

> **Figure 11**: Manage subscription page

10. Finally, create a direct message to the bot account.

![Alt Image 12](https://lh3.googleusercontent.com/8eja7sV-2GkYVeLQOT-WtVKvgJVXJyuTxKdb1HBOEawPE2aq_KWEWJ9BgPVdHgR3LxYDvaMxUL1xynFc1jW3Hn7-WiDiQHhggcteVo44qbU0qE5wA5gEgQldHW0pp2s12veEv85p)

> **Figure 12**: Chatbot successfully deployed

This is the end of the guidance, you can contact support@kata.ai if you have any difficulties when implementing this.
