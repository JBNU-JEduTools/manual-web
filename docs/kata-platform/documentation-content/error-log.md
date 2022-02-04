---
id: error-log
title: Error Log
prev: analyze-your-bot-conversations
next: how-to-deploy-your-chatbot-using-generic-channel
---

## Introduction

To build a great conversational experience for end-users, you must create a bot with nearly zero bugs. To achieve this, debugging during development is necessarily needed. You will receive any errors in the Kata Platform when publishing a bot. Also, we provide a feature named Error Logs to show any errors that happened in bot activity after release. Hence, it is an end-to-end error monitoring tool.

Kata Platform will show these error messages in 3 ways:

1. When you publish a chatbot in Kata Platform (<a href="https://platform.kata.ai" target="_blank"><span>http</span>s://platform.kata.ai</a>).
2. When you execute a command `kata push` in Kata CLI.
3. When end-users receive the error message **“Maaf terjadi kesalahan pada sistem”**. FYI, you can change the error copy by following this guide. Kata Platform will log it into the Error Log feature. This feature is available in the menu: **Flow > Error Log**.

![Image 1 alt](/assets/images/products/kata-platform/error-log/image1.png)

> **Figure 1**: Error Log feature is located.

## Available Error Messages

| Error code                                                                  | Explanation                                                                                                                                                               |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Error Code 1002-Message shall be either of type 'command', 'text' or 'data' | This error message commonly happens if you push your bot using Kata CLI. It means your defined intent is not included in the 3 available options: command, text, or data. |

**Solution**

Define one of the intent types correctly:

```
intents:
  myIntent:
    type: text | data | command

```

| Error code                                              | Explanation                                                                                                                                                             |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Error Code 1003-Cannot find action type: `${desc.type}` | This error message commonly happens if you push your bot via Kata CLI. It means the action type is not supported or has a typo on the action type description on KataML |

For example, you have the following case.

![Image 2 alt](/assets/images/products/kata-platform/error-log/image2.png)

> **Figure 2**: Error message example.

It means your bot cannot find the action type `txt`.

**Solution**

If your case is choosing not supported action type, then you must define one of correct action types:

-   `text` - returns one or multiple text bubble
-   `image` - returns image
-   `template` - returns rich action
-   `command` - trigger command
-   `api` - trigger an API call.

Here is the example:

```
myAction:
  type: text
  options:
    text: hello $(data.name)!

```

If the above solution still has issues, then compare the defined actions you have with action inside a state.

| Error code                          | Explanation                                                                                                                                                                |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Error Code 1004-Invalid method head | This error message commonly happens if you push your bot via Kata CLI or publish via Platform. The bot has an invalid method in the header or a typo in method definition. |

For example you have a case as follows.

![Image 3 alt](/assets/images/products/kata-platform/error-log/image3.png)

> **Figure 3**: Error message example.

It means your method named `mappingAksBrand` head is not found.

**Solution**

You must check your available bot method name, then it should be in these formats for the header:

```
methodName(methodParam)
```

or

```
method(methodParam, methodParam2, ...)
```

| Error code                                                    | Explanation                                                                                                                                                                                   |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Error Code 1005-Cannot create methe thod `${head}: {message}` | This error message will show if you push-ing your bot via Kata CLI. It means there is an error when creating the method. In this error message, you will find a specific error in the method. |

For example you have a case as follows.

![Image 4 alt](/assets/images/products/kata-platform/error-log/image4.png)

> **Figure 4**: Error message example.

It means your method named mappingTitle has an error or incomplete method where `)` symbol is located.

**Solution**

Check the method name function syntax if there are any typos.

| Error code                                                        | Explanation                                                                                                                      |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Error Code 1006-Error executing method `${method}: ${e.message} ` | This error message will show if your bot already deployed to any channels. It means there is a failure when executing method(s). |

For example you have a case as follows.

![Image 5 alt](/assets/images/products/kata-platform/error-log/image5.png)

> **Figure 5**: Error message example.

It means there is an error when executing `deleteSoon` method.

**Solution**

Check the method function syntax if there are any typos.

| Error code                                      | Explanation                                                                                                                                  |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Error Code 1007-Method `${name}` is not defined | This error message will show if you push your bot via Kata CLI. It means you create an action using a method, but not yet defined in KataML. |

**Solution**

You must check the method name from the error message and write code for the method.

| Error code                                               | Explanation                                                                                                                               |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Error Code 1010-Failed creating mapping `${i}:${map[i]}` | This error message will show if you push your bot via Kata CLI or publish via Platform. It means an error in doing mapping in transition. |

For example you have a case as Figure 6. It means your key mapping named `tryTransit` has an typo or incorrectly mapped with `tryValue` value.

![Image 6 alt](/assets/images/products/kata-platform/error-log/image6.png)

> **Figure 6**: Error message example.

**Solution**

You must check the mapping inside the transition, then fix any possible typos in expression syntax.

| Error code                                                                           | Explanation                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Error Code 1016-Error in flow `${this.id}` while updating state: `${e && e.message}` | This error message will show if you are push-ing your bot via Kata CLI or publishing via Platform. It means there is a state error inside a flow. There are several error messages inside this error code: |

1. If the error message shows, for example `Error in flow greetingFlow while updating state: null, details: No next state found from state init`. It means in `greetingFlow` flow is no next state found.
2. If the error message shows, for example: `Error in flow greetingFlow while updating state: null, details: Next state ‘greeting’ from ‘init’ doesn’t exist`. It means in `greetingFlow` flow, there is a state name `greeting` that is not defined yet. |

**Solution**

Check the flow name, then check inside the state if any possible typos.

| Error code                        | Explanation                                                                                                                                     |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Error Code 1019-No flow selected. | This error message will show if you push-ing your bot via Kata CLI or publish via Platform. It means conversation does not match with any flow. |

**Solution**

Check whether you have any flow definition or fallback flow, also checking possible typos in flow name.

| Error code                                                                      | Explanation                                                                                                                                                  |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Error Code 1020-Cannot create Nlu from method: no method `${desc.method}` found | This error message will show if you push-ing your bot via Kata CLI. It means bot can not create NLU from a method, because method definition does not exist. |

**Solution**

Check definition in the method name.

| Error code                                                                                            | Explanation                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Error Code 1022-Cannot find nlu: `${desc.nlu}` on [creating classifier or creating intent attributes] | This error message will show if you push-ing your bot via Kata CLI. It means bot can not find NLU with specific name on creating intent **or** on creating intent attributes. |

Here is the error example.

![Image 7 alt](/assets/images/products/kata-platform/error-log/image7.png)

> **Figure 7**: Cannot find NLU named `misccc` in NLUs mapping.

**Solution**

Check the NLU definitions in labels.

| Error code                                                                             | Explanation                                                                                                                  |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Error Code 1023-Error during post-processing Nlu `${this.id}`, details: `${e.message}` | This error message will show if you push-ing your bot via Kata CLI. It means it has a failure when executing NLU processors. |

Here is the error example:

![Image 8 alt](/assets/images/products/kata-platform/error-log/image8.png)

> **Figure 8**: Cannot execute similar NLU with different expressions and processor.

**Solution**

Check method definition on your bot code.

| Error code                               | Explanation                                                                                                                                |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Error Code 1028-No Initial State defined | This error message will show if you push-ing your bot via Kata CLI and publish in Kata Platform.. It means the initial state is not found. |

Here is the error example:

![Image 9 alt](/assets/images/products/kata-platform/error-log/image9.png)

> **Figure 9**: Cannot publish because no state is found.

**Solution**

Add the initial state at least in a flow.

| Error code                                  | Explanation                                                                                                                                      |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Error Code 1029-Cannot get state '${state}' | This error message will show if you push-ing your bot via Kata CLI. It means there is no state with a certain name, or no initial state defined. |

**Solution**

Check if any possible typos or incorrect definition inside the state name.

| Error code                                     | Explanation                                                                                                                                     |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Error Code 1030-Invalid action in state `${i}` | This error message will show if you push-ing your bot via Kata CLI. It means there is no action defined with a certain name in a certain state. |

**Solution**

Checking action definition or possible typos in action name, inside the state name.

| Error code                                                              | Explanation                                                                                                  |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Error Code 1031-Next state '${state}' from '${prevState}' doesn't exist | This error message will show if you push-ing your bot via Kata CLI. It means there is no next state defined. |

**Solution**

Check to the next state name whether it has typos or undefined yet.

| Error code                                                     | Explanation                                                                                                              |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Error Code 1032-No next state found from state `${meta.state}` | This error message will show if you push-ing your bot via Kata CLI. It means there is no next state from the state name. |

**Solution**

Check to the next state name whether it has typos or undefined yet.

| Error code                                                                      | Explanation                                                                                                                   |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Error Code 1033-Cannot execute enter mapper in state `${this.id}: ${e.message}` | This error message will show if you push-ing your bot via Kata CLI. It means in `onEnter` mapping, there is incorrect syntax. |

**Solution**

Check the mapping expression in `onEnter`.

| Error code                                             | Explanation                                                                                                                 |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| Error Code 1036-Cannot find method ${name} for process | This error message will show if you push-ing your bot via Kata CLI. It means you cannot find methods defined as processors. |

**Solution**

Check method definition on your bot code.

| Error code                                        | Explanation                                                                                                                        |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Error Code 1037-Cannot parse condition: `${cond}` | This error message will show if you push-ing your bot via Kata CLI. It means there is an error on parsing conditional expressions. |

**Solution**

Check for typos in actions, intents, and NLUs definitions.

| Error code                                                                                | Explanation                                                                                                         |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Error Code 1038-Cannot recognize condition with type:${ast.type} and `op:${ast.operator}` | This error message will show if you push-ing your bot via Kata CLI. It means the condition expression is not found. |

**Solution**

Check your condition expression if there is any typos or incorrect syntax. Furthermore, you can check this operator list <a href="https://www.w3schools.com/js/js_comparisons.asp">here</a>.

| Error code                                                                            | Explanation                                                                                                             |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Error Code 1040-Error in flow ${this.id} while classifying, details ${e && e.message} | This error message will show if you push-ing your bot via Kata CLI. It means there is an error when classifying intent. |

**Solution**

See the message details for more info.

| Error code                                                                 | Explanation                                                                                                             |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Error Code 1041-Error classifying intent `${this.id}` with classifier `${` | This error message will show if you push-ing your bot via Kata CLI. It means there is an error when classifying intent. |

**Solution**

Check the message details for more info.

| Error code                  | Explanation                                                                                                      |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Error Code 1047-Invalid nlu | This error message will show if you push-ing your bot via Kata CLI. It means nluID is not recognized by the bot. |

**Solution**

Check again with `nluID` if any possible typos.

## Coming Soon

We try our best to provide detailed error messages and solutions. So, we will provide these error messages details with the solution soon.

-   `Error Code 1001: Error processing action ${this.id}, details ${e && e.message}`
-   `Error Code 1008: Cannot handle expression, because no expr is defined`
-   `Error Code 1009: No handler found for type:${ast.type} and op:${ast.operator}`
-   `Error Code 1011: Max Recursion of ${maxRecursion} is reached.\n\n ${JSON.stringify({`
-   `Error Code 1012: No command handler for '${message.content}'`
-   `Error Code 1014: Error in flow ${this.id} while executing action, details: ${e.message}`
-   `Error Code 1015: Error in flow ${this.id} while processing attributes, details: ${e && e.message}`
-   `Error Code 1017: Error in flow ${this.id}: Cannot update state from '${state}' data: ${{ context, data, message: pMessage, }}`
-   `Error Code 1018: Flow is not defined: '${flowName}'`
-   `Error Code 1021: Cannot find nlu type: ${desc.type}`
-   `Error Code 1024: Error parsing attribute ${i}, details: ${e && e.message}`
-   `Error Code 1026: Session greater than limit (" + this.limitSessionSize / 1000 + "kB)`
-   `Error Code 1027: No session`
-   `Error Code 1034: Cannot execute exit mapper in state ${this.id}: ${e.message}`
-   `Error Code 1035: Cannot execute transit mapper in state ${this.id}: ${e.message}`
-   `Error Code 1039: Method ${desc.stateMapper} doesn't exists`
-   `Error Code 1046: Converse Error, code: ${this.code}, message: ${this.message}, arguments: ${this.printOptions()}`

Please don’t hesitate to contact <a href="mailto:support@kata.ai">support@kata.ai</a> if you found any errors above and need an ASAP solution. Thank you
