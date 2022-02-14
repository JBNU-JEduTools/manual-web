---
id: how-to-use-qiscus-omnichannel-to-your-chatbot
title: How to use Qiscus omnichannel to your chatbot
imgSpot: /assets/images/tutorial/spot-qiscus.webp
product: kata-platform
date: '2021-08-26T07:00:00+07:00'
---

Qiscus is an AI compliant, secure and flexible chat SDK for apps and websites. They also provide a multichannel customer service chat solution that is now popular. This section will learn how to connect our bot with Qiscus through the following steps.

## Deploy your chatbot

1. Click the **Deploy** menu in the left sidebar.
2. On the Deploy page, click on the **New Deployment** button in the top right corner. It will open up the Create Deployment menu.
3. Choose any deployment version you want to deploy and fill in the changelog.

![Alt Image 1](https://lh5.googleusercontent.com/dvpyUOaDxzu0wbCpVdUwDWFrXAuphte-hnudP4Z7jPMZCle7hSIe3RVnQoH2O-NSxfPt6VZAyTfgqvS6ZnZabNfL447X4-UtEZJwpsxETPukgkIx0S--uQxMhhfW05P8OuGfm-m7)

> **Figure 1**: Create a new deployment

4. Click **Submit** to finish the deployment.

If you already have an environment created, skip these steps.

1. Go to the **Deployments > Environment** menu.

![Alt Image 2](https://lh3.googleusercontent.com/88Pxs5L8JuAmTCQNe8dxJwgPOFZVY72AJ3Vk_rdZqz7xKMnuMGT4En5cMB5kuNEl15BewuIbI54BwOcvpoIvx2f4rf1PfYba_XWGxxglpUGdGwvoWjwGEVmiFlZbrP8lwqUkp3v1)

> **Figure 2**: Set up the environment, then set up the Qiscus channel.

2. Click the **Create Environment** button in any environment. You will see a drawer to create a new environment.
3. Choose the **development version** you want (in this tutorial, we use the 1.0.0 version)
4. Fill in the **environment URL**. This environment URL is used for CMS. Learn more about CMS.
5. Click **Create** to create the environment.
6. Created environment now has a **Create Channel** button.

Continue to choose Freshchat as a chatbot channel.

1. Click the **Create Channel** button to start adding channels to the environment. It will open up the Channel menu within the environment.
2. Click the ”**+ Create Channel**” button in the channel table list. It will show a menu to set up the channel.
3. Choose **Qiscus** in Channel Type.

![Alt Image 3](https://lh4.googleusercontent.com/ls0ZhBnaEqJbd0EzEF33lttilhDqJwqauIK-FNc8Qrqzdl1J7I0KyMlODc9YoIhi8cdTlWdVLynndKfSJSQyOFxJJK3rFXiNPqVdHvxNDBNrmzH62U4Eh3hms8puCFVqT8AOTrm9)

> **Figure 3**: Create Qiscus channel

| Field Name | Functionality                                      | Limitation                                                                                  |
| ---------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Name       | Your channel name                                  | Max. 30 characters must contain only alphanumeric characters (A-Z, a-z, 0-9), `-`, and `_`. |
| Secret Key | Key credential from Qiscus                         | -                                                                                           |
| Bot Email  | Registered email that has Qiscus inbox for chatbot | Email only                                                                                  |
| URL        | Registered email that has Qiscus inbox for chatbot | HTTPS website only                                                                          |

To fill in the secret key, bot email, and URL, you need to set up a Qiscus inbox. So, let’s start.

## Register and login to Qiscus

1. Register to Qiscus Multichannel Chat Website (<a href="https://multichannel.qiscus.com/" target="_blank"><span>http</span>s://multichannel.qiscus.com/</a>) to create a new app. You will be asked to fill in the information regarding your account.
2. As soon as you sign up, you will get an email verification from Qiscus Multichannel Chat that you need to verify before using it. So check your email and verify it.
3. After verifying your account, you can log into the Qiscus Multichannel Chat dashboard via the login page. Please fill in your credentials to get into the dashboard.
4. Then, go to the **Integration** page.

## Set up Qiscus integration

1. Enable the “**Qiscus Widget**” tab like shown in the picture below.

![Alt Image 4](https://lh5.googleusercontent.com/1GJjJ9_KiU0o347aPuyETeMSGKtikUywh6L0K1eZrawVDwdyLtJV7oy4cOMa7x-yIY1aobagL1X77AcAUzBp6mZa4WiYOislTVZZC2WgJ11ZkK2sZZzAA_ZegADSYsUcDHmTi8O6)

> **Figure 4**: Enable Qiscus widget.

2. Copy the snippet code shown on the page and paste it into your website HTML. You can open your HTML later after you integrate the bot.
3. Next, you need to integrate the bot by enabling the “**Bot Integration**” in the **Integration Page**.
4. On this page, you will see Agent ID, App ID, Qiscus Secret Key, and URL required in Kata Platform to deploy the Qiscus bot. Copy all fields.

![Alt Image 5](https://lh5.googleusercontent.com/HX8bgSOSiOHHrm2pVT-5K-RLchYTq_3AFEAPN2GLs3sX3NjdSNGiYrU4gwbsM_MfL0oBfG2nrbI_AHMYC6rRz8Ml-6D7d306dbEydUsyHEIysfa8JrZp2XvCen0dEzapgdT-_qhE)

> **Figure 5**: Bot integration

The next step is to paste the Agent ID, App ID, Qiscus Secret Key, and URL from Qiscus to the Kata Platform.

1. Go back to Kata Platform (<a href="https://platform.kata.ai" target="_blank"><span>http</span>s://platform.kata.ai</a>)
2. Paste the Agent ID, App ID, Qiscus Secret Key, and URL there. Here is the example:

![Alt Image 6](https://lh5.googleusercontent.com/C8qEgXagNmauJuTZXU2R3X3RMfKRo7Kd4Y_R-At1d6Ad9oTqmU-KhDBZeVPwo_3fyjVNUL5ydxIUQudLPX3gZh3YrtjpzMZHDTBwuwNwy-hRNK9OAO5fbg7buZ2jgGJdn5WaD00R)

> **Figure 6**: Paste the Agent ID, App ID, Qiscus Secret Key, and URL into channel configuration.

3. Click **Create** to generate the webhook. You can see a webhook URL from the generated channel.
4. Click the copy icon to copy the webhook URL.

![Alt Image 7](https://lh3.googleusercontent.com/-bm2p8jYZsLQLLE4ZeHgXsJQtaQe09fBDtM2gNjuLhPFw4XVUzrudQPxCk8Ek8V3R8vduYAY_1cwsJpAnWDzRzHj1ABeqbst7Cq2J321Gx7RXtkhrAz3TvwCeAfL37B9L5i8JzxD)

> **Figure 7**: Copy webhook URL.

## Finalize Qiscus set up

1. Go back to Qiscus dashboard <a href="https://multichannel.qiscus.com/web/welcome" target="_blank"><span>http</span>s://multichannel.qiscus.com/web/welcome</a>
2. Then, go to the “**Bot Integration**” tab. Make sure you’ve enabled it.
3. Next, paste the webhook URL in “Bot Webhook URL.”

![Alt Image 8](https://lh5.googleusercontent.com/4prVthdWJHkoQZE5GnIi8BmgPzTleXHdCE5XOqd69NmU0ieECWMQc63_jAk71eg-_JfeSskuRt9-Q7knbZT_9ASphpKsfp0eRNbOzcH0j1kyvDLT9Hqsucg0dR7IwJ0iUNKwvX66)

> **Figure 8**: Paste webhook URL

4. Finally, click “**Connect**”.

This is the end of the guidance. You can contact support@kata.ai if you have any difficulties when implementing this.
