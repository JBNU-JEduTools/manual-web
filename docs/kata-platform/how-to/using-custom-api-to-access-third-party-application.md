---
id: using-custom-api-to-access-third-party-application
title: Using Custom API to Access Third-Party Application
prev: how-to-use-bulk-training-for-faster-training-process
next: how-to-change-error-messages-in-your-chatbot
section: How To
---

In this guidance, you will be able to implement a bot that uses an action type API.

## Introduction

For using an API to access third-party applications from your chatbot, you will need to create an action API. Also, a state must be created before creating an action

<div className="info">
    <img className="borderless" src="/assets/images/icon-info.svg" />
    <p>
        <b>Important</b>:
        Platform has a timeout API in 10 seconds. If your API result is shows more than 10 second to chatbot, it will show a automatic message from your chatbot: <code>Maaf pesan anda sedang diproses, tunggu beberapa saat lagi yaa</code>
    </p>
</div>

## How to Use

1. Go to your **project**, then click **Flow**.
2. Create a state, for example a `apiExample` state. Click **+** icon in bottom right to create new state
3. Click **+** in the action box to create a new action.
4. When all actions available are shown, then choose **API**
5. Click tab **Custom API**

Each field explanation:

| Field Name  | Description                                                |
| ----------- | ---------------------------------------------------------- |
| Action name | Name of your action. Max. 30 characters with alphanumeric. |
| Condition   | Which condition can trigger this action                    |
| URI         | Your API URL                                               |
| Method      | Choose POST or GET                                         |
| Body        | Input API body by creating key and value.                  |
| Headers     | Input API headers by creating key and value.               |
| Query       | -                                                          |
| Form Data   | -                                                          |
| Result Path | -                                                          |

6. Click the **Create Action** button to create action.
7. Click the **Create** to finalize state creation.

## How to Collect API Result

If you want to collect API results, you just need to write `$(result)` in a variable you want to put it. For example, this is a case if the API result wants to implement an action type Command.

![Image 1 Alt](/assets/images/products/kata-platform/how-to/using-custom-api-to-access-third-party-application/image1.webp)

> **Figure 1**: API result in action type Command.

To access the value, the API result can be stored in payload, then you can access it by writing `payload.result`. For example, this is a case if you want to access the first data from API result in action type Command.

![Image 2 Alt](/assets/images/products/kata-platform/how-to/using-custom-api-to-access-third-party-application/image2.webp)

> **Figure 2**: Access value from API result.

This is the end of the guidance. You can contact <a href="mailto:support@kata.ai">support@kata.ai</a> if you have any difficulties when implementing this.
