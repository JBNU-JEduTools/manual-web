---
layout: tutorial
id: how-to-use-facebook-messenger-for-your-chatbot
imgSpot: /assets/images/tutorial/spot-telegram.png
product: kata-platform
title: How to use Telegram as your chatbot messaging platform
date: '2021-08-26T07:00:00+07:00'
---

Telegram is a free messaging platform that is commonly used for chatbot deployment. This tutorial will learn how to deploy your chatbot in Telegram. So, let’s get started.

## Create a deployment

Deployment is a step to merge all Revisions in Flow, NLU, and CMS so that you can integrate bots into the channel. Before starting channel integration, chatbots must at least have 1 deployment.

1.  In the sidebar, choose the **Deploy** menu. Then, select **Overview**.

    ![](https://lh3.googleusercontent.com/X9ozLBwqlS0wd328Z8SaOVshbP5ChTdvFfxlvHDiz11Jfy8HQ5dblvX7-82XXX7tFGNoLf1cNuEQf4yzDXVXijCVRliSAtv5OfSplLK_qADAW4tjlpPIhUrDGzhpLNjq0fmEjpot)

    > **Figure 1:** Deploy menu interface.

2.  Click the **New Deployment** button. Then it will show a form on the right screen.
3.  Choose the deployment version. In the Kata Platform, there are 3 deployment versions which are:

    -   Major to deploy significant changes, such as change chatbot use-case.
    -   Minor to deploy medium changes, such as adding new features in your chatbot.
    -   Patch to deploy small changes, such as change copy in action.

    ## ![](https://lh6.googleusercontent.com/RqD2SzTdKBGSNMadqHufkUqiTsiw7XC-rUVcZtYc_nvy_mexuKa9R8L7lBkrUs-JkCUhXCZeqjHKyL47kfrJJrOu86YoCa8srTo0mNHVdu_d3uIONi7lEGtH43hJHy4hoohxtHG9)

    > **Figure 2:** Create a new deployment

4.  Then, click the **Submit** button. If deployment is successful, then the interface will be shown like this.

    ![](https://lh5.googleusercontent.com/2cDEriJ68_pc_A8t2o_D23uQxxog93MbCbnzln8rIvGr39-wLDEpr6xg2Sjsr0MDFnLbRe3kDFcA4u5Mgdo-NRuDBtssEDRAsrxuoxEWDCVj8x7QOqqywtck31gTyeMW8H5WNSKR)

    > **Figure 3:** Deployment has been created.

The step after creating a deployment is to create an environment. An environment is a zone in computer science that provides a place to run integrated applications. For example, Kata Platform has 3 environments: development, staging, and production.

1. Choose the menu **Deploy**, then choose **Environment**.

    ![](https://lh4.googleusercontent.com/jVbMvnS2xyjgpH9Apo5bLpPzBuauhQ2L5ApfbUuosdDc-ebK7hOA-yoX1ewo3daEfVC7oxhVe5laUBX9SA2uDhGbEQHaQ9Wo_2tFKJha_mkNth-fSAxnLjz3WTwuGNJwNoH7Dd_B)

    > **Figure 4:** Environment interface.

2. In this step, you will create a Development environment. Click the button **Create Environment** in the **Development** card.
3. Fill in the environment, then click **Create**.

    ![](https://lh3.googleusercontent.com/CWX4zolKmj8c7SEaIjK5xGxJCVjcCHs2I_G_kXZEq8NY_8WyyXIINijBC4RAr6mocFSltUTi-uOSy7pr6miBwCsRV44Nn4ze8ArPUawRIR4Qs_MfxaNA-_hvqk8SCeiZEcmDidTe)

    > **Figure 5:** Create an environment interface.

## Integration to a channel

This step will create a chatbot integration with the Telegram messaging platform. Telegram is a free messaging platform to deploy chatbots with a simple setup.

1. In the **Deploy > Environment**, click the **Create Channel** button.

    ![](https://lh4.googleusercontent.com/ezfc46LuzaXJnF9VKEhSKqY5zodilbzvy_2Q7rCFvRzPVIidshrDGEQKs8Rie-lBp0oIRtOtt-tzqDTu0Nrdjfipobp3yPYcRzSu1cSjM0MhQYm9YqrIQnKYc_K0Uu3XyqEGvJVv)

    > **Figure 6:** Button deploys channel in a Development environment.

2. You will redirect to the **Create Channel** page. Click the **“+ Create Channel”** button to create a new channel.
3. Fill in the channel name and choose type as Telegram. To fill in the Bot User OAuth Access Token field, we must set up a chatbot in Telegram first. The next step is to open your Telegram application and log in.

Before you start, you need a Telegram account already registered and logged in to your application.

## Connect chatbot to Telegram

1.  The first step is to register your bot to the BotFather account.

    ![](https://lh3.googleusercontent.com/YUTPEWYP7DZtrbYunLTLjgP4lHZQRoP2xmmWcKOOvG6IWOL1s_u3qIvG6QwNxTxbjY0MMReJXdfrEq3RQXQz7PtcSAvvfEvakVlosgSr1Y0hv6qV2Zookr_VX96eZAIclXpG_ZIE)

    > **Figure 7:** Search BotFather account.

2.  Type `/newbot` and BotFather will ask for your chatbot name. Feel free to use any name you like.
3.  After that, you will be asked to enter your chatbot username. Remember that your bot username has to either start or end with `bot`.
4.  Once finished, BotFather will respond with a bot token to access the Telegram Bot API.

    ![](https://lh4.googleusercontent.com/sbcbsZbqbZbyyuJ1euujSA_QinUVezu8xkxYtBMy5Wza9KiPSTqvNDejGwUWITCPrHNmq9D2q1MzfpVfbrKzRS76le6maTEVCwIKFBWB70hKRP_ULUvvLWWRQFs0aLJtZSX8S9aJ)

    > **Figure 8:** Telegram shows bot token.

5.  Go back to Platform, then copy the bot access token into the channel drawer.

    ![](https://lh5.googleusercontent.com/VtgDI37yuKNJk1jgvg3eLY7FLSX1yhteGWsk4IMEAXkTS_HqdpLrm1Xiwry_06BdA3OHXfQwxNNSuCRIK1FsDrmlN4wIsgslUUX7d4d8cJa-p0twL7-skg9pfQfK4P8U57Md_LyA)

    > **Figure 9:** Input bot access token.

6.  Click **Create** to get a webhook from the Kata Platform. Then, click the copy button to copy the webhook URL.
7.  Click on the webhook link to **View** **Channel** detail. It will show a drawer to copy the access token and webhook URL.

![](https://lh5.googleusercontent.com/7E3dcEqMdAztnC5yC1yn6Ale-asPsGBdafV_lYgPH3HtWLsNIrX1OLHEZ7MXSmQqfVJJF67-JZivfbsmBw_xYZfA7cpHpREzlFOmM_sjkqpquFFrUM5Esw-fhCC-wZZdzAvNHzB6)

> Figure 10: View Channel detail

8.  Next, open a new tab on your browser and enter this URL. Change `{my_bot_token}` into your own bot token. Also, paste `{kata_platform_webhook_url} `with the copied webhook URL.

```
https://api.telegram.org/bot{my_bot_token}/setWebhook?url={kata_platform_webhook_url}
```

9.  Click “Go” or press Enter on the keyboard.

    ![](https://lh5.googleusercontent.com/U2G3zkuhNSvRV6jRNHj9K37fH1R_5Tujv9uG3s0KWsCWqPOasDZvoGxinOnWqbOi0khiyxtNVL_ObfBQMWdlf15Bi0U7FQ67V3Tyavg_wQTfA-xQ4bzRxzjg04JJ8D7mwQ4-33cN)

    > **Figure 11:** Telegram bot has successfully connected.

10. If you see the message “Webhook was set,” you’re all set! Let’s try our chatbot. Open Telegram on the desktop or mobile, and start chatting with your bot.

    ![](https://lh3.googleusercontent.com/Byu9CQWZ8PEFCth-eH5bikeueYDvb0z8wSTvsL2SG1NMqEcN9VeO95UQdf1z-xZRPFmiLxQeCsy6d0YiigfJiNkpkMEdzgvOxeBAEizAwlq2OnXv0hbJK6Z_i2fpeduHdTtuw96g)

    > **Figure 12:** Testing “Hello” in Telegram chatbot

It is the end of this guidance. You can contact [support@kata.ai](mailto:support@kata.ai) if you have any difficulties when implementing this.
