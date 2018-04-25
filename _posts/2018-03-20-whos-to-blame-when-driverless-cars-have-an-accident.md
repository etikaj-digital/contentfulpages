---
authors:
- 3BBFRBODjOkSsSyg0ScAQC
- 5jmfm0kcTYYSWE6mWu8oAe
category: technology
datePublished: '2018-03-20T04:19:08Z'
disclosureStatement: 'Raja Jurdak receives funding from from QLD Government, Federal
  Department of Environment, Gordon Moore and Betty Foundation. Raja Jurdak is a Senior
  Member of the IEEE


  Salil Kanhere receives funding from Australian Research Council, NSW Department
  of Industry, and the Department of Industry, Innovation and Science. Salil Kanhere
  is a Senior Member of the IEEE and ACM.'
featureImage: 1gvEe7haACqsquQ0MAa6Y4
guid: http://theconversation.com/whos-to-blame-when-driverless-cars-have-an-accident-93132
id: 2TRV1k52tqYcokwuiGkaAe
lead: "Sensors that monitor everything a self-driving vehicle does can help determine\
  \ who is responsible in the case of an accident \u2013 the manufacturer, the service\
  \ centre or the vehicle owner."
slug: who-s-to-blame-when-driverless-cars-have-an-accident-
tags:
- autonomous vehicles
- ' blockchain'
- ' self-driving buses'
- ' sensors'
- ' uber'
title: "Who\u2019s to blame when driverless cars have an accident?"
---
The [news](http://www.bbc.com/news/business-43459156) that an Uber self-driving vehicle has killed a pedestrian in the US has made headlines around the world. 

It’s a reminder that the era of self-driving cars is fast approaching. Decades of research into advanced sensors, mapping, navigation and control methods have now come to fruition and autonomous cars are starting to hit the roads in [pilot trials](https://www.cio.com.au/article/625560/driverless-vehicle-trial-start-sydney-olympic-park/). 

But partial or full autonomy raises the question of who is to blame in the case of an accident involving a self-driving car? In conventional (human-driven) cars, the answer is simple: the driver is responsible because they are in control. When it comes to autonomous vehicles, it isn’t so clear cut. 

We propose [a blockchain-based framework](https://arxiv.org/pdf/1802.05050.pdf) that uses sensor data to ascertain liability in accidents involving self-driving cars. 


## The parties to an accident

Uber has [suspended self-driving car tests](http://www.abc.net.au/news/2018-03-20/uber-suspends-self-driving-car-tests-after-fatal-crash/9565586) as US authorities gather data about the circumstances surrounding the accident, which involved a car moving in autonomous mode with an operator behind the wheel.

> [](https://twitter.com/Uber_Comms/status/975776694857474048)

For partially autonomous vehicles, which still involve human control, assigning liability depends on what action led to the collision and whether it was based on decisions by the driver or the vehicle. For fully autonomous vehicles, the blame can be assigned to, or shared by, one of many parties – including the manufacturer, the service centre and the vehicle owner. 

Manufacturers could be liable in the case of a design fault, the software provider for buggy system software, or the service centre for inadequate service to the vehicle. On the other hand, negligence liability might fall to the owner for failing to implement a software update from the manufacturer, or with the manufacturer if the accident could have been prevented by a human driver. 

In this complex web of potentially responsible parties, how can the circumstances surrounding an accident be determined?

## Sensor data can inform liability decisions

Fortunately, autonomous vehicles are information-rich platforms thanks to the range of sensors on board that track, monitor and measure everything. Navigation sensors determine routes. Situational awareness sensors detect obstacles, follow lane marks and read traffic signs. And performance measurement monitors track critical functions like tyre pressure and oil levels.


It seems an obvious solution to consider data from the vehicle sensors for liability decisions. In the event of an accident, we can readily retrieve all the sensor data to reconstruct the scene. 

However, the reality is more complicated. The challenge in this new ecosystem is that some of the potentially liable parties may also have disproportionate control over the sensor data. There is a risk that one of these parties may alter the data to steer the liability decision in its favour, using the wireless and USB interfaces that current vehicles already support. 

That means we must not only record tamper-free sensor data, but also any interactions with the vehicle.

## A blockchain-based solution can prevent tampering

Blockchain technology can ensure there is untampered evidence of the conditions of an accident to inform decisions about liability. The solution we propose uses permissioned blockchain so that only the relevant parties can record and access information from sensors. 

These parties are split into two groups. 

The first group is the “operational partition”. It includes autonomous vehicles, manufacturers, software providers, service centres and insurance companies. It records and shares a ledger with all relevant sensor data from right before and after an accident among all the participants. 

The blockchain framework ensures that the sensor data and records of interactions stored in the ledger cannot be changed without detection. This provides a reliable audit trail of circumstances surrounding the incident, as well as any communication between the vehicle and the participating parties immediately prior to or following the accident. 


The second group is the “decision partition”. It involves the government transport authority, legal authority and the insurance company. This group is responsible for making liability decisions based on information from the operational group. 

The framework ensures individual vehicle owners remain anonymous to parties in the operational group. Only the decision partition has access to vehicle owner identities for final liability decisions. This contributes to maintaining user privacy while providing transparent and reliable liability decisions. 

## Sensors are everywhere

Using blockchain for trust in sensor data goes beyond driverless cars, extending to smart homes, supply chains and smart grids. In [smart homes](http://ieeexplore.ieee.org/document/7917634/), sensor data can be stored in a secure blockchain to be used for evidence in insurance liability claims such as break-ins or fires. 

Blockchain can also be used for storing auditable sensor data in [supply chains](http://ieeexplore.ieee.org/document/7987376/) so that consumers can trace the origin and condition of their products reliably. Finally, [smart grids](https://powerledger.io) can benefit from peer-to-peer transactions in blockchain involving their smart meters for trusted and distributed energy trading.

The “internet of things” is growing exponentially, and has introduced billions of sensors into our lives, generating unprecedented volumes of data. Blockchain will deliver sensed data we can trust.

This technology is still under development, but with lives at stake when autonomous vehicles hit the road in increasing numbers, we must ensure that the liable party is held to account when things go wrong.