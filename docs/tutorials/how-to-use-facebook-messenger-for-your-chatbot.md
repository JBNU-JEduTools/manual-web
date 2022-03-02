---
layout: tutorial
id: how-to-use-facebook-messenger-for-your-chatbot
imgSpot: /assets/images/tutorials/spot-facebook-messenger.webp
product: kata-platform
title: How to use Facebook Messenger for your chatbot
date: '2021-08-26T07:00:00+07:00'
---

Facebook Messenger (commonly known as Messenger) is a messaging app and platform developed by Facebook. In this section, we will learn to connect our bot with Messenger. Then, you can use this [simple bot tutorial](/kata-platform/documentation-content/start-your-first-chatbot) to integrate your bot with Messenger.

## Deploy your chatbot

1. Click the **Deploy** menu in the left sidebar.
2. On the Deploy page, click on the **New Deployment** button in the top right corner. It will open up the Create Deployment menu.
3. Choose any deployment version you want to deploy and fill in the changelog.

    ![](https://lh6.googleusercontent.com/pirqaBIBV5pgDCwlh0meA62oISQC-fpKylZtwIswegWd_H0WafUzhYAULwFgativywXNyx9Qyg-JcvqePHjl7Od-PJDrT5p1yDPD5O4jLIHD1ju7GGWFwbs6PuuEqnqyrCXgYsPc)

    > **Figure 1:** Create a new deployment

4. Click **Submit** to finish the deployment.

If you already have an environment created, skip these steps.

1.  Go to the **Deployments > Environment** menu.

    ![](https://lh6.googleusercontent.com/JRstpsCUtzt-fUbkVMmq84_XssMVqirY0B6b3ibh5oUdlHRkKsm5PFDp_-33unRrJhAbqi3_tQXXlSVo_Y9odjh5i2_xc51paF2qjVD3A7bUMxSIHXGPyfqNtmPHw2NeEY7GBR62)

    > **Figure 2:** Set up the environment, then set up the WhatsApp channel.

2.  Click the **Create Environment** button in any environment. You will see a drawer to create a new environment.
3.  Choose the **development version** you want (in this tutorial, we use the 1.0.0 version)
4.  Fill in the **environment URL**. This environment URL is used for CMS.[ Learn more about CMS](https://docs.kata.ai/cms-studio/about/').
5.  Click **Create** to create the environment.
6.  Created environment now has a **Create Channel** button.

Continue to choose FB Messenger as a chatbot channel.

1. Click the **Create Channel **button to start adding channels to the environment. It will open up the Channel menu within the environment.
2. Click the ”**+ Create Channel**” button in the channel table list. It will show a menu to set up the channel.
3. Choose **FB Messenger** in Channel Type.

    ![](https://lh3.googleusercontent.com/td1ymVbCSIVL4SgD8jWViUQ9tACf_e93zqR047EbaHhOjxu29w473bZ1C9CVtvbdxfGrlAQQY7xOVh63EwX3KMTPLnpcHjeYALpFwB2baBEh09g-N-RMbaUvb-l4qJxSaRlmHkP9)

    > **Figure 3:** Create FB Messenger channel

<table>
  <tr>
   <td>
    <strong>Field Name</strong>
   </td>
   <td>
    <strong>Functionality</strong>
   </td>
   <td>
    <strong>Limitation</strong>
   </td>
  </tr>
  <tr>
   <td>
    Name
   </td>
   <td>
    Your channel name
   </td>
   <td>
    Max. 30 characters must contain only alphanumeric characters (A-Z, a-z, 0-9), `-`, and `_`.
   </td>
  </tr>
  <tr>
   <td>
    Page Access Token
   </td>
   <td rowspan="2" >
    These are required fields from Facebook to ensure security with third-party applications. In addition, you can find the Page Access Token and App Secret in Facebook Developer.
   </td>
   <td>
    -
   </td>
  </tr>
  <tr>
   <td>
    App Secret
   </td>
   <td>
    -
   </td>
  </tr>
</table>

## How to get Page Access Token

1.  First, you have to sign in (register first, if you don’t have a Facebook account) to [https://developers.facebook.com/](https://developers.facebook.com/)
2.  Then, create a new app for your bot.

    ![](https://lh5.googleusercontent.com/BGmz6EAY4qfVL7UVC3eno0bzkKceAn1K4gXLJReovNL78LFyVK3a6lDj39m4kSmFhE97NkqrpZa3bNvCU3ohsfRC7RkpbRUCNnNFWu5F_DOyFa9eeMSDoQYu7rRvEIExF2j0R6x2)

    > **Figure 4:** Create a new app for your bot.

3.  Go to **Messenger > Settings**. You will see the Access Tokens field.

    ![](https://lh5.googleusercontent.com/1VcPoy4NknoTEERYPFP9x71gSO_Y7HNYCkzrFhME2WD03f278-NKQzTJK0bBiSXHZqM0Mkl06s5c_6yPRu8AxMaCNX7Xbi6cWhTZZuFEqgaUfWKsVn4l6hpE57LhjHkntRYtWqdf)

    > **Figure 5:** Access Tokens section inside Messenger > Settings menu.

4.  To get the access token, you need to add a Facebook Page. First, click **Create New Page** to create a new page. Then, continue to create a page by following the instructions.
5.  Click **Generate Token** to generate your access token, then copy it to your channel in the Platform.

    ![](https://lh5.googleusercontent.com/lNW3CBq_NqxTGs_4CJeOlis_ODDp7is5IO0UWBeFz7tUegk4RERynBmJh8pGuDd4E06mIiZhK0ISXyuMN0rKMB0on9s73r93JkFaYRNUzASkrQRA7GVpTLSmQTkM0LTKSVIhIt23)

    > **Figure 6:** Generate Token button

The next step is to paste the access token from Facebook to the Kata Platform.

1.  Go back to Kata Platform ([https://platform.kata.ai](https://platform.kata.ai))
2.  Paste the Page Access Token there. Here is the example:

    ![](https://lh3.googleusercontent.com/o-6x8m6t0J0p_4MJeJtl7B_ezDVtZ6CU55DZFuLTDrFUCIAdb0k2qNH0uoD0x-mgcWI2n0lXEwzuMGSnmsxKKm2KfsOSHilkcZA8XUF63nfn_yCgsKnDx3-JXedrxBXUj4pEXzlb)

    > **Figure 7:** Paste access token to the Page Access Token field.

Let’s continue to get App Secret.

## How to get App Secret

1. Go to **“Settings” → “Basic”** to find the App Secret.
2. Click **“Show,”** then copy the App Secret.
   ![](https://lh5.googleusercontent.com/wt10fIEZUBmFLKRsg5tGnDJaN8ssn3qKLNHElSZnLUFCIBiEBm9cVJdncdR3XuJ0ndnI8yKZZPWPblMaIMiRWUo0LNdHnqMvZxinVNFkjlowQ5vEEIkkLC0zzuRBE-L5BvL_zpWy)

    > **Figure 8:** Showing App Secret.

The next step is to paste the access token from Facebook to the Kata Platform.

1.  Go back to Kata Platform ([https://platform.kata.ai](https://platform.kata.ai))
2.  Paste the App Secret there. Here is the example:

    ![](https://lh5.googleusercontent.com/71FJSORECUYLLiVG2U0xD1JIT_OUfNfQfRdI971uSIsWQbK2RbdMWTRylPtRsLJxBUluvCUqbuNHKHgCSqk26ENDy2TWaVx8FxcHf9TX3VGZCK_CVMNAnOqcs5Vc2gOrFHefzGit)

    > **Figure 9:** Paste App Secret from Facebook here.

3.  Click **Create** to generate the webhook. You can see a webhook URL from the generated channel.
4.  Click the copy icon to copy the webhook URL.

    ![](https://lh6.googleusercontent.com/FKeuK2vrCDJKPFmz9G-tWSYMB9oBO66FC4sTj_-o7VRxmzG5yKjHIGKYc_6i08Dqrt-R5JloTVOh8EqALIP3VV6CJdDSsCPHud4JUiDaCSHEZANVGpJ-3QyKADQZpaeAzkzxshfx)

    > **Figure 10:** Copy webhook URL.

## Finalize Set up in Facebook

### Paste webhook URL to Facebook

1. Go to the Webhooks field in the **“Messenger” → “Settings.”**
2. Fill the **“Callback URL”** with a webhook URL from a channel you’ve made in the Kata Platform.

### Paste Challenge Token to Facebook

1. To get Challenge Token from your channel, you need to click on the top of the column to trigger the **View Channel** drawer.

    ![](https://lh5.googleusercontent.com/KLqklBmww0wUto-TFDOqliGafescDeaH5-k_vVW9rvlDOgdQGpzuZi-suSUP5bMU7_5hAiwghJrU6IuLxrCs12eAa0tVz11_UR6FoXnQ-G2kPhwQN6F2ePYFhi_u1axtLd9_WVgs)

    > **Figure 11:** Challenge Token located in View Channel drawer.

2. Block content inside the Challenge Token field, then copy it.
3. Go back to the [https://developers.facebook.com/](https://developers.facebook.com/)

4. Next, paste the challenge token in **“Verify Token”** from the Kata Platform.

    ![](https://lh4.googleusercontent.com/_jGjTFmSis0d-3EaRt1tlujc497JPNhsnZ1u0TH1arYNYH_de-NcmrhRNOXD0VUY9J-RQxMy23bgOhPfjR1KdDpCpY8m0DPwGnr4sPaUoKdgNBJgiwD1phrFXD42YOMpbv8OyZtc)

    > **Figure 12:** Fill in challenge token in Verify Token field.

5. Finally, click **“Add Subscription”** and check the **“messages”** and **“messaging_postbacks”** checklist.

    ![](https://lh3.googleusercontent.com/gnofrwknfi19LW7QUtlQte5PYRd641Us6dbT2JzaxFK94kAV6brBDIBbV3uGR52T8sTFBW3hyDlUuvfqcCmZmHifNQ8cKXe-yEgLU4KB5VSyh-5EoNNmz8Yw9oidaoIYl2jcL8sq)

    > **Figure 13:** Fill in the checklist in messages and messaging_postbacks.

It is the end of the guidance. You can contact [support@kata.ai](mailto:support@kata.ai) if you have any difficulties when implementing this.
