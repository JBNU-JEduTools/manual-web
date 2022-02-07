---
id: how-to-use-nlu-threshold-to-enhance-customer-experience
title: How to Use NLU Threshold to Enhance Customer Experience
prev: how-to-improve-your-chatbot-intelligence-by-training-your-nlu
next: how-to-use-super-model-to-improve-your-bot-intelligence
section: How To
---

## Introduction

In general, the incoming message flow is:

1. An incoming message is caught by intent.
2. Next, the intent will check in NLUs previously added using Add classifier and Add attribute features. You can add more than 1 NLUs. Then it enables the intent to check all NLUs.
3. Then, NLUs will check the threshold. The threshold can act as a confidence level, and these values range from 0.0 (completely uncertain) to 1.0 (completely confident). This confidence level is usually set between 0.7 to 0.8. Finally, NLUs will check whether the confidence score from the incoming message is lower or higher than the threshold?
    - If an incoming message is **lower** than the threshold, NLUs will send bot information that the incoming message is incorrect with what NLU had recognized. Then, the intent will be checked by other NLUs.
    - If an incoming message is **equal to or higher** than the threshold, NLUs will send information that the condition is correct.
4. If NLUs condition has matched, then intent will send information to a bot that incoming message from the end-user is recognized as intent `“yesNL”` (for example).
5. Then, the bot will check the following action if an intent condition has been fulfilled. For example, if the transition has condition `intent==‘yesNL’`, then the bot will execute the next state connected between the transition. Check the image below for more detail.

![Image 1 alt](/assets/images/products/kata-platform/how-to/how-to-use-nlu-threshold-to-enhance-customer-experience/image1.png)

> **Figure 1**: Transition example which condition has intent using NLU.

## How to Use

To integrate NLU can be implemented in chatbot, these are the steps:

1. First, in the Kata Platform, go to the **Flow** menu. Then, click the **NLUs** menu in the sidebar.

![Image 2 alt](/assets/images/products/kata-platform/how-to/how-to-use-nlu-threshold-to-enhance-customer-experience/image2.png)

> **Figure 2**: NLUs position in sidebar.

2. Click on the **Create NLU** button. Then it will show a form on the right screen.
3. Fill in NLUs name and choose an NLU Type. For this guide, you will select **NL**.
4. On the **NLU ID** search and dropdown, you will search your NLU to integrate it into your chatbot. NLU ID consists of username and project with format `[username]:[project name]`. For example, in the [getting started chatbot section](/kata-platform/documentation-content/start-your-first-chatbot), your NLU ID format is `muhfadhiilkata:test_simple_bot`. You can use NLU ID from another project as long as the project is set as public.
5. **Threshold** can act as a confidence level, and these values range from 0.0 (completely uncertain) to 1.0 (completely confident). This confidence level is usually set between 0.7 to 0.8. So the data that falls under 0.7/0.8 will not be detected by the bot. The field only allows numbers and decimals to separate using the “.” character.
6. **As Intent** is a feature to collect available labels in the NLU. The field only allows alphanumerics.
7. **Output** has several output types, depending on the entity type you used.

| Output Types | Functionals                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------- |
| Raw          | Use this output type if your entity type is “trait”. It will result in raw sentences.                               |
| Dictionary   | Use this output type if your entity type is “dictionary”. It will result in an array consisting of keys and labels. |
| Phrase       | Using supermodel “kata entity”, you must use this output type.                                                      |

8. **Path** is a feature to support integration with Supermodel.
9. Click **Create** to finish your NLUs.

For example, you must integrate an NLU ID `muhfadhiilkata:test_simple_bot`, which has 1 entity name “topic” and entity type is “trait”, to an intent named “topic”. The entity “topic” has 2 labels: `FAQ`, `order`, and `buy`.

The first step is you will fill in the NLUs form as follows:

```
NLU Name: topic-nl
NLU Type: NL
NLU ID: muhfadhiilkata:test_simple_bot
Threshold: 0.8
As Intent: topic
Output: Raw
```

Next, you will define this NLU inside an intent. So, you will create an intent named “topic”.

1. Go to the **Conversation Flows** menu, then click on the **Intent** tab.

![Image 3 alt](/assets/images/products/kata-platform/how-to/how-to-use-nlu-threshold-to-enhance-customer-experience/image3.png)

> **Figure 3**: Intent tab position.

2. Click the **Create Intent** button. Then a form will show on the right screen.
3. In Intent **Type**, choose **Text** to start setup.
4. Next, click the button **Add classifier**. This feature enables you to insert your NLUs inside the intent, so intent can match whether end-user input is understandable by the NLU or not. First, there is a dropdown to choose available NLUs, then select “topic-nl”.

![Image 4 alt](/assets/images/products/kata-platform/how-to/how-to-use-nlu-threshold-to-enhance-customer-experience/image4.png)

> **Figure 4**: Add classifier feature.

5. Then, click the button **Add attribute**. This feature enables you to insert your NLUs inside the intent, similar to the Add Classifier feature, with differentiation that bot developers can create a condition in the state or transition by using the entity’s label. It is because an attribute is a variable that has an array form.

![Image 5 alt](/assets/images/products/kata-platform/how-to/how-to-use-nlu-threshold-to-enhance-customer-experience/image5.png)

> **Figure 5**: Add classifier feature.

6. Click **Create** to create an intent.

## Test Your Chatbot

1. To test your chatbot, you can see it in the bottom right corner of your screen.

![Image 6 alt](/assets/images/products/kata-platform/how-to/how-to-use-nlu-threshold-to-enhance-customer-experience/image6.png)

> **Figure 6**: Emulator location.

2. Click the **Test Chatbot** to start.
3. Type a sentence or word.
4. You can see incoming messages that you typed (blue color) and bot response (white color) by clicking the eye icon under the message bubble.

![Image 7 alt](/assets/images/products/kata-platform/how-to/how-to-use-nlu-threshold-to-enhance-customer-experience/image7.png)

> **Figure 7**: View detail in incoming message and outgoing message.

Here is how to read the incoming message:

![Image 8 alt](/assets/images/products/kata-platform/how-to/how-to-use-nlu-threshold-to-enhance-customer-experience/image8.png)

> **Figure 8**: Incoming message example.

-   “type” means message source which is from the emulator
-   “owner” means the account that typed the message.

For outgoing messages or bot responses, here is how to read them.

![Image 9 alt](/assets/images/products/kata-platform/how-to/how-to-use-nlu-threshold-to-enhance-customer-experience/image9.png)

> **Figure 9**: Incoming message example.

-   **“type”** means executed action type. For this example, it uses a text action type.
-   **“content”** means your message to test the bot.
-   **“action”** means executed action name.
-   **“flow”** means executed flow name.
-   **“intent”** means which intent recognized your message.

This is the end of the guidance. You can contact <a href="mailto:support@kata.ai">support@kata.ai</a> if you have any difficulties when implementing this.
