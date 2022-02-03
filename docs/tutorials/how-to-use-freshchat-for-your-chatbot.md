---
title: How to use Freshchat for your chatbot
id: how-to-use-freshchat-for-your-chatbot
imgSpot: /assets/images/tutorial/spot-ig-handover.png
product: kata-platform
date: '2021-08-26T07:00:00+07:00'
---

Freshchat’s live chat software is the fastest way for you to engage with your website visitors, provide assistance, and convert leads to happy customers. In this section, we will learn to connect our bot with Freshchat. Let’s get started.

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

> **Figure 2**: Set up environment, then set up Freshchat channel

2. Click the **Create Environment** button in any environment. You will see a drawer to create a new environment.
3. Choose the **development version** you want (in this tutorial, we use the 1.0.0 version)
4. Fill in the **environment URL**. This environment URL is used for CMS. Learn more about CMS.
5. Click **Create** to create the environment.
6. Created environment now has a **Create Channel** button.

Continue to choose Freshchat as a chatbot channel.

1. Click the **Create Channel** button to start adding channels to the environment. It will open up the Channel menu within the environment.
2. Click the ”**+ Create Channel**” button in the channel table list. A menu to set up the channel will be shown.
3. Choose **Freshchat** in Channel Type.

![Alt Image 3](https://lh3.googleusercontent.com/FWt0V77RL43HAH3RIBvDyMi3E2zauWpFyYTpJ2gjJt19HpimjGuQqGmCFZd39n6rwD5HSJhkld3V6q09rhXh8s-NPxVNO5dslgddG35XHsU6NG5Kv9BObgrdEmiRJ_x3gX03I6AU)

> **Figure 3**: Create Freshchat channel

| Field Name | Functionality                          | Limitation                                                                                  |
| ---------- | -------------------------------------- | ------------------------------------------------------------------------------------------- |
| Name       | Your channel name                      | Max. 30 characters must contain only alphanumeric characters (A-Z, a-z, 0-9), `-`, and `_`. |
| API Token  | Token credential from Freshchat        | -                                                                                           |
| Actor ID   | Actor ID that collected from Freshchat | -                                                                                           |

## How to generate API Token

1. First of all, you need to sign in to your **Freshworks** account to do the integration.
2. After you’re logged in, go to the **Settings** page to configure the API Token and Webhook.

![Alt Image 4](https://lh6.googleusercontent.com/Eyqt32M_FitAwHsc3K7f8R4L0yv4Ac5Q6eN59NF1ZdIxrifc5v3hYJ7RSZ5_wviBjixCdQvKT1hi4Xxb0IoERAj6ulonY5svAgyLanTI4PaWbWyhu095trMdEdEIRDeE4ALIMZtR)

> **Figure 4**: Settings page in Freshwork.

3. In order to generate the API Token in Freshchat, go to **Settings → API** Tokens.
4. Then, click on the **Generate Token** button.

![Alt Image 5](https://lh4.googleusercontent.com/qq7eetwnsdpkuyLJyuFgtuVVeSIexttruNlYZKjdRaAALgUpIW_fyiKX3WuT4IgAtvtN8HUEoy2LGEwZFdiYdZElToq7ugo5v6QtqWegtR_CDSmDLxNXr6hOPN0UMV7ek3oqgr-n)

> **Figure 5**: Generate a token in Freshchat.

Next step is to paste the API token from Freshchat to the Kata Platform.

1. Go back to Kata Platform (<a href="https://platform.kata.ai" target="_blank"><span>http</span>s://platform.kata.ai</a>)
2. Paste the API Token there. Here is the example:

![Alt Image 6](https://lh5.googleusercontent.com/TqM-vuHTq1HILZl2v1hX-apndSvXK8oTK-jmVB9iRolICO6D-Cj4dqZFBP8eC7ZmTPxhi_zHALo4KecaspQGObLV_k-zuPGdTahoqOkr9gdmXpFT7G6GVFJI9ODLAb5_fjor7zqN)

> **Figure 6**: Paste the API token to the API token field.

Let’s continue to get an Actor ID.

## How to generate Actor ID

1. Go to **Settings → Team** Members.
2. Then, click on the **Add a team member** button. In the “Roles” field, choose “Agent”.

![Alt Image 7](https://lh4.googleusercontent.com/BLQgfZ_BTU746AMyNQasEQcCn1GfPK_yYaGwPJXzpPPR5Pn3XhXO_c6xwQhtaj74W_ZapR6-MB5NhMx_WxvFSVgKlIzympdNLTeJFhwmXgQjLZls8eNeIT3Ezx3mnd-CX-9t6rkC)

> **Figure 7**: Add a team member page.

3. With the API Token we got from the previous step, get the Actor ID using <a href="https://www.postman.com/" target="_blank">Postman</a> or cURL. Actor ID is the agent `id`.

```
curl --request GET 'https://api.freshchat.com/v2/agents' \
--header 'Authorization: Bearer <token>'
```

![Alt Image 8](https://lh5.googleusercontent.com/0t0vKrQw4h2oGcfCB7wBQ3-MS0TUB2tscZ6hpNvbjvYdkcO-Ec06ce_0SSyhHlzvNdvqRjNvurgaLno7GVB8n4xV18QVkQc8QMZ3mEZutVJJZNGuLPAOwla2rSUjCynvGG_ZI0Tv)

> **Figure 8**: Showing results from API.

4. Copy one of the Agent IDs, then paste it to the Kata Platform.

Next step is to paste the API token from Freshchat to the Kata Platform.

1. Go back to Kata Platform (<a href="https://platform.kata.ai" target="_blank"><span>http</span>s://platform.kata.ai</a>)
2. Paste the Actor ID there. Here is the example:

![Alt Image 9](https://lh4.googleusercontent.com/eRnudZWnEAg-b2pS2lBwCr_voiTty-iLdS-aQDPH6PxF7JrB6A0Cxj710Lm3vMKQPbGEgIF9Nm-QecvawTckyXAtEY91aYr6-gQyURNI7Wub0vcxgJbT_ylSkN48wtM0MJvZe7ra)

> **Figure 9**: Paste Actor ID into channel configuration.

3. Click **Create** to generate the webhook. You can see a webhook URL from the generated channel.
4. Click the copy icon to copy the webhook URL.

![Alt Image 10](https://lh4.googleusercontent.com/UyvOd2i7lI6yW8MjTNFpol65olWj6u0lxB1OdTxzU6x6m_piJFCR3PpJHX4hUdbDt87Fg3R3jvh9NP6Nkdkztd9aOJi6D7WrJ7Twody-plu2KMlELQfauc1SeJDvseatgpUVPN3o)

> **Figure 10**: Copy webhook URL.

## Finalize Freshchat set up

1. Go back to Freshchat, then go to **Settings → Webhooks**.
2. Turn on the webhook toggle which is placed in the top right.
3. Then, paste the webhook URL in the **Webhook** field.
4. Next, fill in a valid email address in the **Failure Notifications** field. It will enable you to receive the notification whenever there is a failure in the integration. Here is the example:

![Alt Image 11](https://lh5.googleusercontent.com/J1zcFFXMA7Q7XSr6T7y0JQm35lf1qRP3BQdLcLLYiMAITd7C6FTn3wswh1iejXimeq4dCjZIWGmAy8jnF3zgybysyM8tobiiFZSdlTb--6FOD1tDMT_qE3mnLS5VFnnwNGflYISV)

> **Figure 11**: Set up webhook URL

5. Finally, click on the **Save** button.

It works! You can now share your newly created chatbot with your friends.

Freshchat also has an agent handover feature. It is useful for creating a seamless engagement experience for your customer to interact with your agent to meet their needs. The agent handover flow is:

1. End-users start a conversation with a chatbot.
2. In the beginning or middle of a conversation, the end-user may request to be connected with any human-agents.
3. Chatbot function will be paused if there’s an available agent. If there are none, chatbot will notify the user to make another request after a few minutes.

This is the end of the guidance, you can contact support@kata.ai if you have any difficulties when implementing this.
