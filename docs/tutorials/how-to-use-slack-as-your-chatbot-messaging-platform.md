---
title: How to use Slack as your chatbot messaging platform
id: how-to-use-slack-as-your-chatbot-messaging-platform
imgSpot: /assets/images/tutorial/spot-ig-handover.png
date: '2021-08-26T07:00:00+07:00'
---

Slack is a messaging platform that is commonly used for office and community. In this tutorial, you will learn how to deploy your chatbot to the Slack channel. So, let’s get started.

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

> **Figure 2**: Set up environment, then set up Slack channel

2. Click the **Create Environment** button in any environment. You will see a drawer to create a new environment.
3. Choose the **development version** you want (in this tutorial, we use the 1.0.0 version)
4. Fill in the **environment URL**. This environment URL is used for CMS. Learn more about CMS.
5. Click **Create** to create the environment.
6. Created environment now has a **Create Channel** button.

Continue to choose Slack as a chatbot channel.

1. Click the **Create Channel** button to start adding channels to the environment. It will open up the Channel menu within the environment.
2. Click the ”**+ Create Channel**” button in the channel table list. A menu to set up the channel will be shown.
3. Choose **Slack** in Channel Type.

![Alt Image 3](https://lh6.googleusercontent.com/z42cdweupNpQZMC-XPd-h1nTnldKR6aqXiHyns0CLwKM6fJOWL_KETXxjnqR8JGQniuzgSTuk_6n6NWJ25DwJlsAFdSaLD-wEFMB8TyJEG32h4buUPbgnHslNGTilzpi_sIRQCsl)

> **Figure 3**: Create Slack channel

| Field Name | Functionality     | Limitation                                                                                  |
| ---------- | ----------------- | ------------------------------------------------------------------------------------------- |
| Name       | Your channel name | Max. 30 characters must contain only alphanumeric characters (A-Z, a-z, 0-9), `-`, and `_`. |
| Bot Token  | Slack token       | -                                                                                           |

## Create Slack app

1. First thing first, you need to sign in into your Slack Team to create a new app and get its token. After logging in, open this URL <a href="https://api.slack.com/slack-apps" target="_blank"><span>http</span>s://api.slack.com/slack-apps</a>.
2. Click “**Start here**” button, then click on “**Create a Slack app**” button.
3. Fill in the required fields. Next, choose your “**Development Slack Team**”.
4. Click the “**Create App**” button.

![Alt Image 4](https://lh5.googleusercontent.com/fU8j2fKw-F614Lw6RF6TrdplgKYn5Df4x_xjZxBSdYxDfQL55ONoXV-DeZ6x1vJA_zIuxAQYybHJFPqlufykCEMb93bAq6Jb1CTWk8Vt1_2Wk_J8Y_pPICtuq1FxUbH3uTlnFAlV)

> **Figure 4**: Create a Slack app

5. From “**Basic Information**” in the App Credentials section, you can see the Verification Token. You will use it later to deploy our bot.

![Alt Image 5](https://lh5.googleusercontent.com/-GUXRR6JucSe8NT06Fnk2nEYwdaueZvO5e0ulm97uWMEiK_wfsO3mR3EOoYeS7Bmd-9ZhYaFEGirwRGA3tN5_eAoc3ddHxzaarje3fNlk-esD8ctJHHkBAYQqeQAd81NOivhJLVC)

> **Figure 5**: Verification Token

6. Open “**OAuth & Permissions**” in the “**Scopes**” section. You should fill in the scope permission by adding below scopes.

![Alt Image 6](https://lh4.googleusercontent.com/kRrL0lMntvMUoeKHVoiT8nJHXd6XORHEIIde0y4Me7wjw_I5-0TazRcCtV3caRif-X09sltZHyn1OA2D96pETq1ukIQBR0sxpikQOkrl_1mubBw4OyDFiswwlZYBSBESdVHLAHY4)

> **Figure 6**: Filling Scopes

7. Open “**Bot User**” in Features from the sidebar menu. Fill the “**Display name**” and “**Default username**” of your bot. Also, turn on the “**Always Show My Bot as Online**” toggle.

![Alt Image 7](https://lh4.googleusercontent.com/kRrL0lMntvMUoeKHVoiT8nJHXd6XORHEIIde0y4Me7wjw_I5-0TazRcCtV3caRif-X09sltZHyn1OA2D96pETq1ukIQBR0sxpikQOkrl_1mubBw4OyDFiswwlZYBSBESdVHLAHY4)

> **Figure 7**: Bot User

8. Click the “**Add Bot User**” button to finish.
9. Go back to “**OAuth & Permissions**”, then select “**Install App to Workspace**”

![Alt Image 8](https://lh4.googleusercontent.com/YRx_xwpQ5w5qbQsVVBk5NHP6TRB0V5gM-CyDL_E0rc_CSSSVgrSsg2lfL5JlVCQvoiy5rfAO0hlf0e0UJWlx9bVXbIxl6XEwKuFcdqNz4hGkcCM4swIFrg0K3qRfOMwcNhACPujH)

> **Figure 8**: Install App to Workspace.

10. Click the “**Allow**” button.
11. Still in the “Oauth & Permissions”, you will get “OAuth Access Token” and “Bot User OAuth Access Token”. Copy this “Bot User OAuth Access Token” to deploy our bot using the Kata Platform.

Next step is to paste the access token from Slack to the Kata Platform.

1. Go back to Kata Platform (<a href="https://platform.kata.ai" target="_blank"><span>http</span>s://platform.kata.ai</a>)
2. Paste the App Secret there. Here is the example:

![Alt Image 9](https://lh3.googleusercontent.com/58FSMuw7dIekqFd2-fWXzIy8VFYh8gNzCroSzXUNPHqN7lfSfJGwGIoFYHH77nS89CAWa4cP1gG2jEO24zHniczhSa6f6-Pe_zDPs8hwU0NXjXzJvHBnLOzrsf-QTR6N20ADjfEh)

> **Figure 9**: Paste App Secret from Slack here.

3. Click **Create** to generate the webhook. You can see a webhook URL from the generated channel.
4. Click the copy icon to copy the webhook URL.

![Alt Image 10](https://lh5.googleusercontent.com/LjuSizrX-Bri5iwPnXU5zsVXyAMkfon9WlZI0UzrjIcOyZw32oTTlNK9XI8FoefAGPQKGKMvJyUBJaPCemNTKqg3isHxGwRbMoR8HRKt5UScJmgZyOjygdhieaTlrwkvmiQv39A-)

> **Figure 10**: Copy webhook URL.

## Finalize Slack set up

1. Go back to Slack <a href="https://api.slack.com/slack-apps" target="_blank"><span>http</span>s://api.slack.com/slack-apps</a>
2. Then, click on the “**Event Subscriptions**” tab.

![Alt Image 11](https://lh3.googleusercontent.com/8JKGdQSy6WShmem13i7ePHcY0jKmicQ6eWFFVyAyGhX2tG5WoJXPOxBhRUb5BKlLa4qGGX4pRZuXaPmBAltLddT2uqXF36SklENSvoMy2_rVZZwxoolCePS85FM22DXCeBIqKZ0p)

> **Figure 11**: Event Subscription menu.

3. Next, turn on the “**Enable Events**” toggle.

![Alt Image 12](https://lh5.googleusercontent.com/Lw33b72gIysW0BF6ow-GZq7jod9VMtdBrd1FGen5Ni0UXJckW4O1LblhGmV2JXBURGVHqZUGCi86wYEpYv0vAf5rVOMR3dW-gK3j319rsSnqA-Ic0cx_Oga4qjJZMUxULromKCxR)

> **Figure 12**: Turn on Enable Events toggle.

4. You will see the “**Request URL**” field. Then, paste the webhook URL.

![ALt Iamge 13](https://lh5.googleusercontent.com/FORhM2xupEMXcOu_F0F2I-1xEbLRQv-ETFKHq1SihMu8X5Oobq9Cb04pDNef2eVHP9UxFgP4THe1KofM85Yld12lZHvWtAIIfxkWeqVRQfyiXQgLMqnqISuWpeCTXIMxLEPxepSi)

> **Figure 13**: Request URL

5. Expand the “**Subscribe to bot events**” then add the selected User Event like in the below image.

![Alt Image 14](https://lh5.googleusercontent.com/FORhM2xupEMXcOu_F0F2I-1xEbLRQv-ETFKHq1SihMu8X5Oobq9Cb04pDNef2eVHP9UxFgP4THe1KofM85Yld12lZHvWtAIIfxkWeqVRQfyiXQgLMqnqISuWpeCTXIMxLEPxepSi)

> **Figure 14**: Subscribe bot events

6. Now you can search for your bot in your slack Workspace.

![Alt Image 15](https://lh5.googleusercontent.com/FORhM2xupEMXcOu_F0F2I-1xEbLRQv-ETFKHq1SihMu8X5Oobq9Cb04pDNef2eVHP9UxFgP4THe1KofM85Yld12lZHvWtAIIfxkWeqVRQfyiXQgLMqnqISuWpeCTXIMxLEPxepSi)

> **Figure 15**: Workspace Search

7. Finally, you can now share your newly created chatbot with your friends.

![Alt Image 16](https://lh5.googleusercontent.com/nSm61wJbh3swnFC1cc80yOn7JhqeSLvlwojzISltdOWhh-CvvlXHgbDBV4k_vjAQWfk_-F72geHBSOhmahBmJETQujSSM05rBkObTEKm169z9lt6QDZyMjItdoQ69eJcDG3yg-pd)

> **Figure 16**: Successfully deployed Slack bot

This is the end of the guidance, you can contact support@kata.ai if you have any difficulties when implementing this.
