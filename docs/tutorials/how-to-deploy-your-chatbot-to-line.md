---
layout: tutorial
id: how-to-deploy-your-chatbot-to-line
imgSpot: /assets/images/tutorial/spot-line.png
product: kata-platform
title: How to deploy your chatbot to LINE
date: '2022-01-17T07:00:00+07:00'
---

LINE is a free messaging platform and is famous in Indonesia. This messaging platform supports various interactive action types such as carousel, button, Image Map, and many more.

This tutorial will learn how to deploy your chatbot to LINE. Let’s start.

## Create a deployment

Deployment is a step to merge all Revisions in Flow, NLU, and CMS so that you can integrate bots into the channel. Before starting channel integration, chatbots must at least have 1 deployment.

1. In the sidebar, choose the **Deploy** menu. Then, select **Overview**.

    ![](https://lh6.googleusercontent.com/jWZ50Wh_tm65KKeUExFScsNX8jwWBZ4z0qAWbhTzNYN76bwcTPpCwEYmsFS8fep_Q68c9P0qbWLcZ_5a1kjqTWdgfxrDZPAHz2i8id8osU_ejTsviSdcqN0MQsyz5vbii5BgpBM4)

    > **Figure 1:** Deploy menu interface.

2. Click the **New Deployment** button. Then it will show a form on the right screen.

3. Choose the deployment version. In the Kata Platform, there are 3 deployment versions which are:

-   Major to deploy significant changes, such as change chatbot use-case.

-   Minor to deploy medium changes, such as adding new features in your chatbot.

-   Patch to deploy small changes, such as change copy in action.

    ![](https://lh5.googleusercontent.com/vaIyr4Guve13jLLKL-Fv0C2lCtrFj8ckZUs4sWPyqHQ8BAjU63bvQefjtOhE7Sc4gxA5jcIjVRngH1hVUbwiyHZqhL4hVmsbI_o2U_V91YgfY2bA80hOIDd6oUoKAqGa2HYOnqsL)

    > **Figure 2:** Create a new deployment

4. Then, click the **Submit** button. If deployment is successful, then the interface will be shown like this.

    ![](https://lh3.googleusercontent.com/MCuF58LzD7Cm7QUKyoiSdBhle2165BLVjfXBlqe-ORGc-U3_lYf44ikWvV5SYWzYH4o3sgzLT1uNpBf2Z0XD_vaqZK3LVROcblPopyYR4S_7fuVSo9OyKaMZ3YS9XiVxRcljYhYZ)

    > **Figure 3:** Deployment has been created.

The step after creating a deployment is to create an environment. An environment is a zone in computer science that provides a place to run integrated applications. For example, Kata Platform has 3 environments: development, staging, and production.

1. Choose the menu **Deploy**, then choose **Environment**.

    ![](https://lh3.googleusercontent.com/DX_9nBKZ_TLscSM-F_BX5nNLIVr9khIrBa0zaF0CVUFDt5RrlweiOfWYpipOnDz1ytuyZL9U_zx3QrAVypJiM-3oH_5BqUXN2ExNRNwPJurkFMULEuSGxm-qgGYOuWCpt1SB4IyD)

    > **Figure 4:** Environment interface.

2. In this step, you will create a Development environment. Click the button **Create Environment** in the **Development** card.

3. Fill in the environment, then click **Create**.

    ![](https://lh5.googleusercontent.com/Vm3V29J6uptGGtXH_ceakbscsf3Y_WYdFNVQ0tfBdRO62Wnk92nONhLoc5ZtZIzEEBkDv-5xmPJmaG2laqtOzwcdxh9eIfU3MXnBkGZzPn_N5Mgb6odoKP8Ou-3uWoeFFaX2lip3)

    > **Figure 5:** Create an environment interface.

## Integration to a channel

This step will create a chatbot integration with the Telegram messaging platform. Telegram is a free messaging platform to deploy chatbots with a simple setup.

1. In the **Deploy > Environment**, click the **Create Channel** button.

    ![](https://lh6.googleusercontent.com/P2Z0ycmOz5NgziL1WDVK_ie5T3n6oazcwRkoO92uON9Rj0AwXuU6fYQxfSIf-U2YTsShNaBFnHnRttRe_eZlOiyZTUCf7M-dNMzFPpB2bHBvTG-DTkUxsEn1e2CavzNQWLGznqHL)

    > **Figure 6:** Button deploys channel in a Development environment.

2. You will redirect to the **Create Channel** page. Click the **“+ Create Channel”** button to create a new channel.

3. Fill in the channel name and choose type as LINE.

4. To fill in the Bot User OAuth Access Token field, we must set up a chatbot in Telegram first. The next step is to open your Telegram application and log in.

Before you start, you need a LINE account already registered and logged in to your application.

### Registration to LINE Developer console and setup

1. Create a LINE account. To sign up for a LINE developer account, you have to have a LINE account by [installing a LINE application, either desktop or mobile app](https://line.me/en/download).

2. After you successfully registered, sign in to [https://developers.line.biz/en/](https://developers.line.biz/en/)

3. In the LINE Developer Console, click **Log In**.

    ![bse-90](https://lh5.googleusercontent.com/6CGmnt5eMx6ftwtWmHAF1UWLru0GJiNP--pIs1aQT4gGyLjY7NeT6sC28XK6nFD7WXx-ovHifqCKhPAow_zzkvTl1zziUkEc0GBJScnrF5_FlidmAGOK1PlfIpFggba07hy1R5sY)

    > **Figure 7:** LINE developer dashboard.

4. Next, click on **Login with LINE**.

    ![bse-91](https://lh3.googleusercontent.com/PJXb27IKNPjbU1Jsr8SNKqqSir46_A_cqEOJtVSCnellKwe5gDVU0TXoForonHqjCy7VZRrCClGMU7B8iddFw39MCmu1dwlZa_F78zj1voNKEYwjXeSZDIe1mgPYqJA92JqXFQu-)

    > **Figure 8:** Log in with LINE

5. Enter your email and password. After you successfully log in, you will be redirected to the provider list dashboard.

    ![bse-93](https://lh4.googleusercontent.com/010ENg7kijp2_WSgLAQkP9qeeATN3-TTfBjHH5fguK1w8tafddGzb5sI2ubd2daOAm6pe8cMilbz3V1rJ6BM5A8KsYe7N4VU-OsQX4YIBlhn3-O9xzvPBxojxOHWjr4TfpSWhigB)

    > **Figure 9:** Provider list.

6. Next, click **“Create New Provider”**. Fill in the provider name.

7. Click **Confirm** to continue.

8. Your new provider has been created.

    ![bse-96](https://lh5.googleusercontent.com/zghcVVYNwzQMAhV8cycCCS47artJPaGgLXRLAB4CiJqbVGG1EBdAGVMZalvdHe1nnpfn-zCUgKykM3n0bjjyrwZJy4WyVwlHkpp9ZYPb0px7_IuEqKn7wW_83R6BWRJg5e-I61De)

    > **Figure 10:** New provider.

9. Next, set up the channel in the Messaging API by clicking **Create Channel** on Messaging API.

    ![bse-97](https://lh3.googleusercontent.com/_lZigIlUmsV1SZJVzLblCZrmJBsGQ3nDdG4RsWi65I0xEislbiil1gmky55VHGNMtnJQ8ABR1OBqh2Ws1pZnIjKMBwaXxO1vSbAil3Mnvszm3IYbc28GMTGNRcuixiqNCscpsHGV)

    > Figure 11: Create channel.

10. Fill in your LINE bot detail.

11. Next, you have to choose the **Developer Trial as Plan**.

    ![bse-100](https://lh5.googleusercontent.com/ZnulkWi3QzhxMN40jN_48c7mmpJ2Cw7Yi3fhkwruDyYymwyEShdKLfev84ZWlwgo_o3XKi4V-6lQEZZaMcVMwqxUEYqqi0EyngPR6QFmPh0hHNSpDQEZupZa5qH0vCSa9AiEzv18)

    > **Figure 12:** Choose developer trial option.

12. Finally, click **Create**. The successfully created channel will look like this.

    ![bse-102](https://lh4.googleusercontent.com/TaB_gKcSPFs1Ei0nvSqDBG4AzECkVdA41XPaFJc4nHzv5EyiADydWp5e8nUQ6kcnXABHXGN86gmEDtHbYqoGDf14JJcJYAP9D3ES-tXCBxdyq2wZBhsnC7ME7FT0D9uly3KJBxmJ)

    > **Figure 13:** New channel.

### Integrate LINE to your chatbot

1. Click on the created channel to fill in the Channel Access Token

2. Click **“Issue”** in the Messaging Settings section.

    ![bse-103](https://lh6.googleusercontent.com/JejyqTncO-B2A1AraujwVCQVgfDhAP02OBk4-MmhEdtN3RzSgFTC2c45y2BRYNzEF3kU29bLQf3NFMs0dB49LqFCvoPXlUAWvlHMJuyhZa-DwqgAANSj7UwacTLXGHuodgeZehDT)

    > **Figure 14:** Issue access token.

3. Then, a dialog will show. Click on **Issue** to continue.

4. Finally, copy the **Channel Access Token** below and paste it on the Create Channel form in the Kata Platform.

    ![bse-105](https://lh5.googleusercontent.com/uhQ7LT2knR4S2AJ6fqcPBKLXD4hwwNHX--eWSr-anZT3ViQKlgPgozemprLQtR38n457TuQ9CUMDGdlp77Kf1mrrOZoRTwtFUfv035HJuY1UG3AW5kaqTCkiKALOTHCgKtzMkJZ1)

    > **Figure 15:** Show Channel Access Token.

5. Go back to Kata Platform, then paste the Channel Access Token.

    ![bse-106](https://lh6.googleusercontent.com/OWwMEqWx-7ChUTTWQOywA8iUM3uztA_F62srIVDZ5auM3KK9N4ubxGSrHDM2NMXGc7eA1QSj1FmzJxOa-xy6S071SdSuU3W05NL2G0wu6ticIxPv1nzMX_blJtedBCL2o46XEqkR)

    > **Figure 16:** Paste Channel Access Token.

6. Next, you will fill in the Channel Secret field. Then, in Basic Information, copy Channel Secret from LINE to the Kata Platform.

    ![bse-107](https://lh5.googleusercontent.com/uekbS2J-6MhVyI5-vy_AJJSZH9HPvPktts8mYoC7tu2W-kk14_tcGsHwXfHR0xxOqFIcRzknY6ImeuUlaY31InZlOUZI1LpRbnXg7zoQdRViF7NLkYc0BGJK_3EKsEUYqAaAJc-6)

    > **Figure 17:** Copy Channel Secret.

7. Go back to the Kata Platform, then paste the Channel Secret.

    ![bse-108](https://lh6.googleusercontent.com/W2rmrwQlRBiPLh2iRoyQOJhU0Zl9V5CWaIdbABJLaNOtAJ4ew3GI6u7PSN3yQkEXcSgOdjpBSGgoofpJurOsHgJvfLwoDfoSVVxPWjzO5XnpDaja60rqaKHAlA63ZI2rREZhQle4)

    > **Figure 18:** All fields are filled in.

8. Click **“Create”** to generate a webhook URL from the Kata Platform.

After the webhook URL is generated, go to Messaging Settings in the LINE developer console to enable webhook.

9. Enable the webhook by clicking on **Enable** in the **“Use Webhooks”** section, placed above the Webhook URL field.

    ![bse-111](https://lh6.googleusercontent.com/fRxssRnVbglQ_VTSQXCWRcFi-Qdh5UHGxWRe9ZCcuPEzLmAbPCBZRYZdA6jo-1YOzKhhCsgJyb4DCtzKFzCAfA1wxqyhhXywJkBDep7kg4anF8DpaLb7DEstzqYpVWZHUjPzWLVL)

    > **Figure 19:** Enable webhook.

10. Click **“Update,”** then paste the webhook URL to the LINE developer console.

    ![bse-112](https://lh4.googleusercontent.com/F4kHJXYs2MtKVjtnQSjrr5YdrkeBEgySvLLK3rd3QwI426qRHIXqTh0ost9z6MHZiEO0Z1NyPRAlk8qyy4z9rx6qvopjUyC1WCAgtvgzqLkxGyZMl4UZ4_9ITNeYCPCTh6IAsp-G)

    > Figure 20: Paste webhook from Kata Platform.

11. Click **“Update”**, then click **“Verify”**.

12. Next, disable auto-reply messages and greeting messages by following figure 21.

    ![bse-114](https://lh6.googleusercontent.com/mmYevVpQFQPF8bJeN7qpv97Kipt4me12sF786crYKjnsiaKR1d2xWZvlpxBf86RZAiBeasP0msCE5EOs4XtK-U_8kLbenn3656RxnTPh3ujObT2CqKy-laCfWpLW-ZGj8YDTMrT_)

    > **Figure 21:** Disable auto-reply and greeting messages.

13. Congratulations, you have successfully deployed your bot to LINE Messenger.

14. Next, test your bot by scanning the QR code.

It is the end of the guidance. If you find it difficult to follow, you can contact [support@kata.ai](mailto:support@kata.ai). Thank you.
