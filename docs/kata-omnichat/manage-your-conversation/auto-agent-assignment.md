---
id: auto-agent-assignment
title: Auto agent assignment
prev: manual-agent-assignment
next: resolve-conversation
---

Omnichat provides a round-robin auto-assignment system for conversations. The assignment follows the logic mentioned below.

_Note_: Round robin assignment is enabled by default.

1. If there are agents online who have access to the inbox in which a conversation is created, the system would distribute the conversations equally among the online agents
2. If all the agents are offline, the system would distribute the conversations equally to all agents

    ![Figure 44](/assets/images/products/kata-omnichat/image44.png)

    > **Figure 44.** Auto Agent Assignment

To enable round-robin assignment in your inbox, follow the steps below.

1. Go to **Settings > Inboxes**
2. Click on the inbox settings link of the inbox you want to enable round-robin assignment
3. Scroll down to see the setting for Round-robin, as shown below
