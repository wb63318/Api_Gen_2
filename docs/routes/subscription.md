<!-- # GraphQl -->

# Subscription
In order to generate a subscription with CAI, we need to use the `[Subscription]` attribute. CAI supports both static and dynamic subscriptions. We are going to take a look at the two kinds of subscriptions in the examples below.

```c#
[Subscription<T>(name = "subscriptionName", topic = "topicName")]
```

| Fields | Datatype | Required |
| :---: | :---: | :----: |
|T| Generic | Yes |
|name | String |No|
|topic | String |No|

**NB**: When the subscription name is not provided, CAI generates a subscription name.



## Dynamic Subscription 
A subscription definition without topic is known as a `Dynamic Subscription`. When a subscription is not assigned a topic, it needs to be handled.

**NB**: When handling a dynamic subscription we need to create a subscription topic using the `GetSubscriptionTopic` from CAI.
```c#
GetSubscriptionTopic<T>
```

Where T is the subscription(name of the record)

Let us take a look at a few examples.

### Example 1
For this example the subscription name and topic are not provided
```c#
[Subscription<SampleEntry>]
public record SampleCreated(long sampleId);
```

In order to handle it we need to create a `Handle` function like this:

```c#

public static string Handle(GetSubscriptionTopic<SampleCreated> input) => $"sampleCreated_{input.input.sampleId}";

```



<br/>



### Example 2
For this example the name of the subscription is provided but no topic is provided.
```c#
//The subscription
[Subscription<SampleEntry>(name = "onDeleted")]
public record SampledDeleted(long sampleId);

//The handler
public static string Handle(GetSubscriptionTopic<SampledDeleted> input) => $"sampleDeleted_{input.input.sampleId}";
```

## Static Subscription
A subscription definition with a topic is known as a `static subscription`.

### Example
In this example we use name = `onUpdated` and topic = `sampleUpdated`
```c#
[Subscription<SampleEntry>(name = "onUpdated", topic = "sampleUpdated")]
public record SampleUpdated(long sampleId);
```

Let us take a look at how to use the topic. We would like to subscribe to:
```c#
[Query<SampleEntry>()]
public record GetSample(long id, string text);
```

In the handler:
```c#
public static async Task<SampleEntry> Handle(GetSample input, [Service] ITopicEventSender topicEventSender)
{
    var sample = new SampleEntry($"{input.text} {Random.Shared.Next()} {DateTime.UtcNow}", Random.Shared.Next());
    await topicEventSender.SendAsync("sampleUpdated", sample);
    return sample;
}
```
