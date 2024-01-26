---
prev:
  text: 'Handler'
  link: '/routes/subscription'

next: 
  text: 'Rest'
  link: '/routes/rest'
---

# GraphQl

### Subscription

After generating the queries, mutations , it is best to have a service that notifies the user of any set action taken on the system.
This is where the subscription service comes in.

In CAI ,**Subscription** uses the `[Subscription]` attribute to be able to generate a subscription

```c#
[Subscription<T>(subscriptionName)]

```

### TYPES

**Static Subscriptions**

In this type of subscription, a topic needs to be provided likewise the name in the attribute declaration

#### Example1
```c#
[Subscription<SampleEntry>(name = "onUpdated", topic = "sampleUpdated")]
```
#### NB 


#### Dynamic Subscriptions

In this type of subscription, the dev doesn't necessariy need to specify a name and topic.

#### Example2

```c#
[Subscription<SampleEntry>()]
```
#### NB

