---
layout: tutorial
id: how-to-use-whatsapp-business-api-in-my-chatbot
imgSpot: /assets/images/tutorial/spot-ig-handover.png
title: How to use WhatsApp Business API in my chatbot
product: kata-platform
date: '2021-10-25T07:00:00+07:00'
---

Automate your WhatsApp conversation by using our flow builder in the Kata Platform. Create bots to reply to end-users with several bot action types:

-   Text
-   Image and Image with Caption
-   🎉 NEW 🎉 List Message
-   🎉 NEW 🎉 Reply Button

## Bot response types

### Text

#### About

Reply to your chatbot users (“end-users”) by sending them text as a primary response.

Here is an example of a text response to end-users.

![](https://lh5.googleusercontent.com/DYwYgnnaIw2U_ECFHxVrEfezYRutiHycQdKMjeg7Ywr4CrhB4fjqfnnuENz7sJ6fgn0tXTbwiOCWQOFNB1p789s4W4AcAWkRxpoW6abD3Q7fplZ-SOg05lz8m7W75cG2m1RXuW6p)

> **Figure 1:** Action type text in WhatsApp.

#### How to Use

1. Go to the Kata Platform and select your project.
2. Click to **Flow > Conversation Flow > State > Action List**.
3. Choose **Text**and enter the text you want to send.
4. Click **Create Action** to finalize your action.

### Image and Image with Caption

#### About

Send images to your users on WhatsApp. You can also add a caption for the image.

Here is an example of image response and using caption to end-users.

![](https://lh4.googleusercontent.com/156Ws2BK3YI8JdZK24qHbeKBr1V8kokQG0jH_wIWMSm92VmAY3thqzHSDgJEkuNRezcDuXuZ7Dba2iL5GAsQ8hkZuOFppLnyXnfXkl67t3J0BNMQG15kHzkxWsFiLj-juWJrEUIv)

> **Figure 2:** Image with Caption Example

#### How to Use

1. Go to the Kata Platform and select your project.
2. Click to **Flow > Conversation Flow > State > Action List**.
3. Choose **Image** and enter the Image and Thumbnail URL.
4. The image caption is optional.
5. Click **Create Action** to finalize your action.

### 🎉 NEW 🎉 List Message

#### About

Send a list of options your users can choose. You can provide up to 10 options (“rows”) from a List Message.

Here is an example of a List Message response to end-users.

![](https://lh3.googleusercontent.com/9HUWTebnkFfvgkwgl622xkv2pqN2lwCoIixtVU56J0Qne3Ek4W5fXHgv_mj60FVBoLLsytDNK7sUD64MlWVYNSrgfGPRVFxtRXC-muAqKWnvWt64uJNulePGHM-S6CXlXmavBMGC)

> **Figure 3:** The tapping button will show the options

![](https://lh4.googleusercontent.com/1KgR3dQcrihTZhgmdHjuBGqA1QfwXi9uMaGdklRGLsuwrrrWFtwxuwEbNg3QuayVKtIZHQhQs8RSy4W01Kcs2TsJLq3x506kVu68s7NCAblegqKpLBnL0JXqvub7tBK9c9qnzX5z)

> **Figure 4:** Show pop-up dialog menu

#### Composition

1. Header type

    ![](https://lh6.googleusercontent.com/ktThNKp49yWJ3AVT1AbNjVqVmAXZQvmgzo5TxI67qsdPJYSd1NlODWdSLQGilXLNVwSn7AmJct5KtPj-ekf8cebTc9Ubake3O4ufgNES8L7P5N5-rOLjJQ60xBWD7ZDJgiVcs9Os)

    > **Figure 5:** List Message with header type “Text” and “None” in Platform

    ![](https://lh6.googleusercontent.com/SWRAXF7vQMYgNWVUcdepTIBShE1PGrVa8JY4q-jSUwM7-QZI0O4Z8wi1bsBN6EBZEP8Wau4Wn4Qdmw9-NTRL2LLu3bcq2QD46H9xNfFuHwXvoY5mtxWMaSd2cyEa0CujjaGpIPKi)

    > **Figure 6:** List Message with header type “Text” and “None” in WhatsApp

2. Header composition

    ![](https://lh4.googleusercontent.com/oYM9IQdYQDrqiDDs_CXOX00tosRqXSH0-ZFp7-V6Zs0ZvaPwtanmQz5Zh5U-DqAJfRdrNjO9B0LXV8B8v_Qpn7thO-I9D1HQnjMJE8MDbGEpNBjjasTdokjaz-on0-1BV_Yyw4_w)

    > **Figure 7:** List Message button composition (before showing menu list) in Platform

    ![](https://lh4.googleusercontent.com/vly_ewYjHNEHAhOnGhXCHYlvDdIM7gNEJ511eNMwuG-XiSadj66UkeYE6R-YGJpNv6g7oW498dbujOWEuyyNknrUhcyMAeRg4myXFKDl41dqaKvntNFfa5fqmCLr4v_T0fO6rKvt)

    > **Figure 8:** List Message button composition (before showing menu list) in WhatsApp

3. Section and Row

    ![](https://lh4.googleusercontent.com/Mi9lpTKwUEX8_46dRS_el77FkpSKSzJNyTLw20n_XXanta8IbWQe2dQFtnG9JnFrBgygRlkW85jvSPP9xemSvrb2dzVGj36gn2k04_aUyqgqjFvUZaJrwDPlzLXSdYZfaAhJ-Xax)

    > **Figure 9:** List Message composition (showing menu list) in Platform

    ![](https://lh5.googleusercontent.com/jUMDjYGOHAwmRkjxeGyAi2DKqIrlwl2JUMjnVF4t5ox5ZCArpVQX80kpiJ7pBvxvcY3It4d9FkjfC19yBDfynJnUZTkGSb7B72kA4jkCqK3E2lwlgXskg8-5sDvsVq4NXCFXUdaE)

    > **Figure 10:** List Message composition (showing menu list) in WhatsApp

#### How to Use

Follow these steps to create a new List Message

1. Go to the Kata Platform and select your project.
2. Click to **Flow > Conversation Flow > State > Action List**.
3. Choose**List Message.**This action type only works on WhatsApp. Adding this on other channels will result in an error.
4. Fill in the fields.
5. You should know some critical notes on List Message: (1) “Section” has no limit. You can add as many sections as you want; (2)You can create up to 10 rows; (3) “Row ID” in the same section must be unique. For example:

    1. You make a section called “FAQ Topics.”
    2. Inside FAQ Topics, you have 3 rows.
    3. Those 3 rows inside FAQ Topics can’t use the same ID.

    ![](https://lh4.googleusercontent.com/yeG4VH5iGbhuoZt1wXFMug2961eFIT3ch9yJBZB6r-Ue1L1DQ-HV5iEvRt0zKU5IBnEIDk_Y2eaYXAS8mYx2lmWYoPbptQNc9MWeBTeFkZDme41gukBSOH21fQUVziIqDWUxo9WN)

    > **Figure 11:** Using similar Row ID under 1 section is not allowed

6.  Click **Create Action** to finalize your action

After end-users click any options, the bot must execute a response based on the clicked option. You can map the selected option by end-users using row title or row id.

-   Using row `title`. For example:

    ```
    context.chosen == payload.postback.title
    ```

-   Using row `id`. For example:

    ```
    context.chosen == payload.postback.id
    ```

### 🎉 NEW 🎉 Reply Button

#### About

The reply button allows users to send a reply to the chatbot quickly. In addition, you can create up to 3 buttons.

Here are examples of Reply Button responses to end-users.

![](https://lh3.googleusercontent.com/I79PvbM_RUvOVnXu7PyAXTQWlBM7EXv0vOt_u93tN67mUBw-wMhpDwuoWDh4UPNr-6nWY30DPzWnHueIPsrNbr9bS-efRYKBGeaNF3SOmbCnuGgCViYaTJ6ORyczgUNv6qlnmoBC)

> **Figure 12:** Reply button with **Text** as header

![](https://lh6.googleusercontent.com/5xgUxs65M8XURjBcXZWuMksor5BL-UnVPBiJx6kpriG0J1PpmHQ52SnggVkNLEPcGTaK5M6ovxHACpoRTPEhkDhY6H5co25viKWRPrmie4khIPAYu9xcW1RZyPGQhFd4ZvWyZZ4G)

> **Figure 13:** Reply button with **Image** as header

![](https://lh3.googleusercontent.com/98deRuedgda_B63m_mecshmO5f2EHybyIzkDUTqKePR5jWo_JiAQHjAEqDBPIz29S0F3z2n6NViMV5MuXW5cGZ5J8-BwhhUCiXDcD0S47Lb-9OPpy_iMcArsAQ_soB3ONpJkETCk)

> **Figure 14:** Reply button with **Document** as header

![](https://lh3.googleusercontent.com/924zwMRgN7c7UJ9Za3t2x0ZBFvZgNJVn-cCDq8sbtbx-NdGctwKVzoReTHKRUefT8-o0Pu-qELo_jiHzrV1aiVms4Dpc09WUxHXd_09mB9KRRkM60AMSbJBppKVEvmCjJqyLQlN1)

> **Figure 15:** Reply button with **Video** as header

#### How to Use

Follow these steps to create a new Reply Button.

1. Go to the Kata Platform and select your project.
2. Click to **Flow > Conversation Flow > State > Action List**.
3. Choose**Reply Button.**This action type only works on WhatsApp. Adding this on other channels will result in an error.
4. Fill in the fields. Some critical notes on the Reply button that you should know:

    1. “Button ID” must be unique when creating action.
    2. The maximum number of buttons is 3 buttons.
    3. Header type video only allows .mp4 extension, and we recommend the size is < 5 MB because end-users may experience slow connection when loading the video.
    4. Header types image, video, and document must use HTTP/HTTPS link.

    ![](https://lh5.googleusercontent.com/IZNHP_6jHo9bMid2uMy2r00x_12FJ0c7Wfqke01fKrksGyv6IYbOaO5ffyQkgUz7K8YX1l-gWoC_uyqW-FH7GhVFBmCqg1ZVVPWySKYK76PiIwx_xT5wdY4WpRcbXv2pxo4Amo44)

    > **Figure 16:** Reply Button composition

5. Click **Create Action** to finalize your action.

After end-users click any button, the bot must execute a response based on the clicked button. You can map the selected button by end-users using button `title` or button `id`.

-   Using button `title`. For example:

    ```
    context.chosen == payload.postback.title
    ```

-   Using button `id`. For example:

    ```
    context.chosen == payload.postback.id
    ```

## How to deploy

You can create a simple bot using text by following this bot tutorial: [Start your first chatbot](/kata-platform/documentation-content/start-your-first-chatbot).

You can deploy your bot by following these steps.

### Create a deployment

1. Click the **Deploy** menu in the left sidebar.
2. On the Deploy page, click on the **New Deployment** button in the top right corner. It will open up the Create Deployment menu.
3. Choose any deployment version you want to deploy and fill in the changelog.

    ![](https://lh4.googleusercontent.com/PGpitsLKOJuhPDA5JPL2CRCu_vUqe-3qFEECl-zpkzC6-wz9980U8Xzj4eUQ1CqPaBsQVCynTKBgfhY1_qUhZhFcd8ISwXAElg54uj-hEu9JjgfQymGKqYIh_nv91gfKgwOSy2Ga)

    > **Figure 17:** Create a new deployment

4. Click **Submit** to finish the deployment.

### Create a new environment

If you already have an environment created, skip these steps.

1. Go to the **Deployments > Environment** menu.

    ![](https://lh4.googleusercontent.com/WRsJW8Lk4FoLS5jy4f3AX_z30iJuhVkKi80wZ7e6WSV0hX4FutatiZzZ54-TjCnIHh7PsxykkTavvx4pAAjSRfQuFNtNEamxV6PbDRy9-188i1rH26nkSVqZ8aY6mLENIfQEu_ba)

    > **Figure 18:** Set up the environment, then set up WhatsApp channel.

2. Click the **Create Environment** button in any environment. You will see a drawer to create a new environment.
3. Choose the **development version** you want (in this tutorial, we use the 1.0.0 version)
4. Fill in the **environment URL**. This environment URL is used for CMS.[Learn more about CMS](https://docs.kata.ai/cms-studio/about/').
5. Click **Create** to create the environment.
6. Created environment now has a **Create Channel** button.

### Create WhatsApp business account

You can only deploy bots to a verified WhatsApp Business number. To get the number, you have to:

1. Go to [https://business.kata.ai](https://business.kata.ai)
2. [Create a business dashboard account](/business-dashboard/get-started)
3. [Register your new WhatsApp number](/business-dashboard/how-to-register)

Then, you’re ready to get the access token from your WhatsApp business account.

1. In Business Dashboard, go to the Whatsapp Numbers menu.

    ![](https://lh6.googleusercontent.com/DLOgeJYML2occH4Jc8rakW50F5ZKEY__jnN6FaVQTaCJjsoRY7mpV8Wyfcjyi67fhh6atGQ-d0yYuQK6Pqs0uplhNN6MsV8TP2gWf_fZA5KyKwdIUYJ-OqSrta4X2GqvB5xfL5M9)

    > **Figure 19:** WhatsApp numbers list

2. Then, click the WhatsApp number you want to deploy. You will redirect to the **Manage WhatsApp Number** page.
3. In the Manage WhatsApp Number page, scroll down to **API Credential.**

    ![](https://lh4.googleusercontent.com/ZHZHBBbvKENy3cQ-0lQsDFbVHk2HKPWl7bJu7zobjC_oFTA2lCOiv9jnbRqzcPbi1NELWtX0k-SFfgVfAXRqFdRr8OkOZYePkc1WHTwusGXrqg9rX9LWmsKtmiuWQkaS46EjMgTn)

    > **Figure 20:** API Credential

4. Next, you will need to download[Postman](https://www.postman.com/downloads/) to hit the WhatsApp API.
5. Copy the **username** and **password** from the API Credential section in the Business Dashboard into Postman.
6. Open Postman and fill in the **URL** as follows::

    ```
    URL: POST [https://api-whatsapp.kata.ai/v1/users/login](https://api-whatsapp.kata.ai/v1/users/login)
    ```

7. Enter the username and password from Business Dashboard to the Body. Examples:

    ```
    Body::

    {
    “username”: “amanda123”
    “password”: “Q1w2e3r4#kata”
    }
    ```

8. Click **Send** in Postman. You will get the access token as shown.

    ![](https://lh4.googleusercontent.com/H1rMF2QFPvSO2MDgnR2yOAWu5goXCi_PkLmCuNUE0qtTXsO5G_gEAveI54xSJErM71_vz9UEuzjEa49wxntmb0W6rlsiqGrnhw29NElNnOBYRLHSxuh7WW5xJqY2Z9kLeumPSbTM)

    > **Figure 21:** Access token shows after hitting login API.

9. Copy the **access token** in the API result and save it next.

### Finalize deployment WhatsApp channel

1. Log in to Kata Platform ([https://platform.kata.ai](https://platform.kata.ai))
2. Click your project that already had a chatbot and deployed
3. Then, go to the menu: **Deploy > Environment**.
4. Click the **Create Channel** button to start adding channels to the environment. It will open up the Channel menu within the environment.
5. Click the ”**+ Create Channel**” button in the channel table list. It will show a menu to set up the channel.
6. Choose WhatsApp in Channel Type
7. Paste the access token into the field, and enter[https://api-whatsapp.kata.ai](https://api-whatsapp.kata.ai) in the URL field.

    ![](https://lh4.googleusercontent.com/dxleBhfH7IfcpGUT5NonHdls9d9mX2IkMycYLnIhFuztfVr2d0nNsPBX5uzHTOX73dFXqBmTjQ4WdWxQ9OquJSKu1L_WRpGbROdQYr9UK42gvrQLWfA5ItVZI0-Omt01viPtIZaZ)

    > **Figure 22:** Fill in the access token and URL

8. Click Save to deploy your bot.

You’re all set! Now you can start chatting with your WhatsApp bot.

![](https://lh4.googleusercontent.com/JJMFOw4_fnSjJYufFR8UNMrzCKgrqrIYicUA3ufIVbvgQHCLdTgEmCYcxN2f-20H5LiMZCpHPqgEXOoD4kL8yhkFjAM87mP-28e342_zRw56sjiEqVIiCmeP2w5nRh9a4eOaAwEQ)

> **Figure 23:** Successfully deployed chatbot in WhatsApp

It is the end of the guidance. You can contact support@kata.ai if you have any difficulties when implementing this.
